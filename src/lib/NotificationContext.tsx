'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

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
      id: crypto.randomUUID(),
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
    // Subscribe to website_bookings
    const bookingSubscription = supabase
      .channel('public:website_bookings')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'website_bookings' },
        (payload) => {
          console.log('New booking payload:', payload);
          const name = payload.new.patient_name || 'Someone';
          addNotification({
            type: 'booking',
            title: 'New Website Booking',
            message: `${name} requested a new consultation.`,
            link: '/dashboard/bookings'
          });
        }
      )
      .subscribe((status) => {
        console.log('Supabase Realtime status for website_bookings:', status);
      });

    // Subscribe to retell_ai_calls
    const callSubscription = supabase
      .channel('public:retell_ai_calls')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'retell_ai_calls' },
        (payload) => {
          console.log('New call payload:', payload);
          addNotification({
            type: 'call',
            title: 'New AI Call Received',
            message: `A new interaction has been logged by Retell AI.`,
            link: '/dashboard/logs'
          });
        }
      )
      .subscribe((status) => {
        console.log('Supabase Realtime status for retell_ai_calls:', status);
      });

    return () => {
      supabase.removeChannel(bookingSubscription);
      supabase.removeChannel(callSubscription);
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
