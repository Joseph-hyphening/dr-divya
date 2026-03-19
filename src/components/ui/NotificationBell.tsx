'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, Trash2, Calendar, Phone } from 'lucide-react';
import { useNotifications, AppNotification } from '@/lib/NotificationContext';
import { useRouter } from 'next/navigation';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotifications } = useNotifications();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  const handleNotificationClick = (notification: AppNotification) => {
    markAsRead(notification.id);
    setIsOpen(false);
    router.push(notification.link);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-[#1a1a1a]/60 hover:text-[#763c26] transition-colors focus:outline-none"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-[#763c26] rounded-full border-2 border-[#faf7f3]"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-80 md:w-96 bg-white rounded-3xl shadow-xl border border-[#763c26]/10 overflow-hidden z-50 origin-top-right shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
          >
            <div className="p-4 border-b border-[#763c26]/5 flex justify-between items-center bg-[#faf7f3]">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Notifications</h3>
              <div className="flex space-x-2">
                {unreadCount > 0 && (
                  <button 
                    onClick={markAllAsRead}
                    className="p-1.5 hover:bg-[#763c26]/10 rounded-md transition-colors text-[#763c26] group relative"
                    title="Mark all as read"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                )}
                {notifications.length > 0 && (
                  <button 
                    onClick={clearNotifications}
                    className="p-1.5 hover:bg-red-50 rounded-md transition-colors text-red-500"
                    title="Clear all"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-[#1a1a1a]/40">
                  <Bell className="h-8 w-8 mx-auto mb-3 opacity-20" />
                  <p className="text-[10px] font-bold tracking-widest uppercase">No notifications yet</p>
                </div>
              ) : (
                <div className="divide-y divide-[#763c26]/5">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification)}
                      className={`p-4 cursor-pointer transition-colors hover:bg-[#faf7f3]/50 ${!notification.read ? 'bg-[#763c26]/[0.02]' : ''}`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`mt-0.5 p-2 rounded-xl shrink-0 ${!notification.read ? 'bg-[#763c26]/10 text-[#763c26]' : 'bg-[#1a1a1a]/5 text-[#1a1a1a]/40'}`}>
                          {notification.type === 'booking' ? <Calendar className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold tracking-tight truncate ${!notification.read ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70'}`}>
                            {notification.title}
                          </p>
                          <p className="text-[11px] text-[#1a1a1a]/60 mt-0.5 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-[9px] font-bold tracking-widest text-[#1a1a1a]/40 mt-2 uppercase">
                            {formatTimeAgo(notification.createdAt)}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="shrink-0 mt-1.5">
                            <span className="block h-2 w-2 bg-[#763c26] rounded-full"></span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
