'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) throw error;

        if (!session) {
          if (mounted) {
            // Include current path to redirect back later if needed, though simple redirect is fine
            router.replace('/login');
          }
        } else {
          if (mounted) {
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error('Error checking auth session:', err);
        if (mounted) {
          router.replace('/login');
        }
      }
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && mounted) {
        router.replace('/login');
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router]);

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

  return <>{children}</>;
}
