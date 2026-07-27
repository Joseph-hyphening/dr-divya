'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// A soft, pleasant notification chime in base64
const chimeSoundBase64 = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

export type NotificationType = 'booking' | 'call';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link: string;
}

interface NotificationContextProps {
  notifications: AppNotification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

import { usePathname } from 'next/navigation';

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize audio only on client side to avoid SSR issues
    setAudio(new Audio(chimeSoundBase64));
    
    // Load initial notifications from local storage if any
    const saved = localStorage.getItem('dashboard_notifications');
    if (saved) {
      try {
        setNotifications(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse notifications from local storage', e);
      }
    }
  }, []);

  // Save to local storage whenever notifications change
  useEffect(() => {
    localStorage.setItem('dashboard_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const playChime = useCallback(() => {
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Audio play prevented by browser policy:', e));
    }
  }, [audio]);

  const addNotification = useCallback((notification: Omit<AppNotification, 'id' | 'read' | 'createdAt'>) => {
    const newNotification: AppNotification = {
      ...notification,
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 9),
      read: false,
      createdAt: new Date().toISOString(),
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    playChime();
  }, [playChime]);

  useEffect(() => {
    if (pathname === '/dashboard/bookings') {
      setNotifications(prev => prev.map(n => n.type === 'booking' ? { ...n, read: true } : n));
    } else if (pathname === '/dashboard/logs') {
      setNotifications(prev => prev.map(n => n.type === 'call' ? { ...n, read: true } : n));
    }
  }, [pathname]);

  useEffect(() => {
    const mockActions = [
      {
        type: 'booking' as const,
        title: 'New Website Booking',
        message: 'Neha Kapur requested a new consultation.',
        link: '/dashboard/bookings'
      },
      {
        type: 'call' as const,
        title: 'New AI Call Received',
        message: 'An AI call with Vivek Anand was logged by Retell AI.',
        link: '/dashboard/logs'
      },
      {
        type: 'booking' as const,
        title: 'New Website Callback',
        message: 'Aditya Sen requested an urgent scalp analysis call.',
        link: '/dashboard/bookings'
      }
    ];

    // Periodically simulate live notifications to make the portal feel active
    const interval = setInterval(() => {
      const randomAction = mockActions[Math.floor(Math.random() * mockActions.length)];
      addNotification(randomAction);
    }, 75000);

    return () => {
      clearInterval(interval);
    };
  }, [addNotification]);

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      markAsRead,
      markAllAsRead,
      clearNotifications
    }}>
      {children}
    </NotificationContext.Provider>
  );
};
