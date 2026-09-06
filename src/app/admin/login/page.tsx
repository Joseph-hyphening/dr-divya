'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Lock, User, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { setAdminAuthenticated } from '@/lib/cms-store';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Default admin credentials: admin / drdivya2026
    setTimeout(() => {
      if (
        (username.trim().toLowerCase() === 'admin' || username.trim().toLowerCase() === 'drdivya') &&
        password === 'drdivya2026'
      ) {
        setAdminAuthenticated(true);
        router.push('/admin');
      } else {
        setError('Invalid username or password. Please use admin / drdivya2026.');
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative selection:bg-brand-accent/20">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 hover:text-brand-accent transition-colors mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Website</span>
        </Link>

        <div className="flex justify-center mb-4">
          <Image
            src="/logo.svg"
            alt="Dr. Divya Sharma Skin & Hair Solutions"
            width={180}
            height={42}
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Doctor & Clinical Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic font-normal text-foreground">
            Clinic CMS Authentication
          </h2>
          <p className="text-xs text-foreground/60">
            Sign in to manage blogs, before/after media galleries, and condition pages.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-white py-8 px-6 shadow-xl shadow-brand-accent/5 rounded-3xl border border-border/80 sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3.5 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-start gap-2.5 text-xs text-destructive">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                Username / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-foreground/[0.02] text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-900/80 leading-relaxed">
              <strong>Demo Login Credentials:</strong><br />
              Username: <code className="font-mono text-xs text-amber-950 font-bold">admin</code><br />
              Password: <code className="font-mono text-xs text-amber-950 font-bold">drdivya2026</code>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-accent hover:bg-[#5E2F1E] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-brand-accent/15 cursor-pointer disabled:opacity-50"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In to Portal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
