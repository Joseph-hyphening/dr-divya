'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      router.push('/dashboard');
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to sign in. Please check your credentials.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 font-sans">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-12 md:left-12"
      >
        <Link
          href="/"
          className="flex items-center space-x-2 text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK</span>
        </Link>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
          >
            welcome.
          </motion.h2>
          <p className="mt-2 text-sm text-foreground/60 tracking-wide">
            Please enter your details to sign in
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="flex items-center space-x-2 rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-100"
            >
              <AlertCircle className="h-4 w-4 shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-foreground/70">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="mt-1 block w-full border-b-2 border-foreground/10 bg-transparent py-3 text-foreground placeholder-foreground/30 focus:border-brand-accent focus:outline-none transition-colors disabled:opacity-50"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-foreground/70">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="block w-full border-b-2 border-foreground/10 bg-transparent py-3 pr-10 text-foreground placeholder-foreground/30 focus:border-brand-accent focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-foreground/40 hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs tracking-widest">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-foreground/20 text-brand-accent focus:ring-brand-accent bg-transparent"
              />
              <label htmlFor="remember-me" className="ml-2 block text-foreground/60">
                REMEMBER ME
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-brand-accent hover:opacity-70 transition-opacity">
                FORGOT?
              </a>
            </div>
          </div>

          <motion.button
            whileHover={!isLoading ? { scale: 1.02 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center bg-brand-accent py-4 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                />
                <span>SIGNING IN...</span>
              </span>
            ) : (
              'SIGN IN'
            )}
          </motion.button>
        </form>

        <div className="text-center text-xs tracking-widest text-foreground/60">
          <span>DON'T HAVE AN ACCOUNT? </span>
          <a href="#" className="font-bold text-foreground underline decoration-brand-accent decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
            JOIN US
          </a>
        </div>
      </motion.div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-accent"
      />
    </div>
  );
};

export default LoginPage;
