'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { RoleContext } from '@/lib/RoleContext';
import { NotificationProvider } from '@/lib/NotificationContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Check local session cookie/localStorage
    const hasSessionCookie = document.cookie.includes('mock-session-token=dr-divya-authorized');
    const hasLocalStorageSession = typeof window !== 'undefined' && localStorage.getItem('mock-session-token') === 'dr-divya-authorized';

    if (!hasSessionCookie && !hasLocalStorageSession) {
      router.replace('/login');
      return;
    }

    const email = (typeof window !== 'undefined' && localStorage.getItem('admin-email')) || 'admin@drdivya.com';
    setUserEmail(email);

    if (email === 'reception@hypheningmedia.com' && (pathname === '/dashboard' || pathname === '/dashboard/social-media')) {
      router.replace('/dashboard/logs');
    } else {
      setIsLoading(false);
    }
  }, [router, pathname]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf7f3]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="h-10 w-10 rounded-full border-t-2 border-b-2 border-[#763c26]"
        />
        <p className="mt-4 text-xs font-bold tracking-[0.2em] text-[#763c26] uppercase">Authenticating</p>
      </div>
    );
  }

  return (
    <RoleContext.Provider value={{ email: userEmail }}>
      <NotificationProvider>
        {children}
      </NotificationProvider>
    </RoleContext.Provider>
  );
}
