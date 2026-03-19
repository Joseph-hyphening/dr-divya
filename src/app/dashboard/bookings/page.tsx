'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  LogOut, 
  Bell, 
  Search, 
  User,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  Clock as ClockIcon,
  Phone,
  Edit,
  Timer,
  Share2,
  X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { useRole } from '@/lib/RoleContext';
import { NotificationBell } from '@/components/ui/NotificationBell';

interface Booking {
  id: string;
  patient_name: string;
  phone_number: string;
  preferred_date: string;
  preferred_time: string;
  preferred_procedure?: string;
  request_type: string;
  status: 'Pending' | 'Contacted' | 'Scheduled' | 'Cancelled';
  cancellation_reason?: string;
  created_at: string;
}

interface FilterState {
  patient_name: string;
  phone_number: string;
  preferred_date: string;
  preferred_time: string;
  preferred_procedure: string;
  request_type: string;
  created_at: string;
  status: string;
}

const BookingsPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    patient_name: '',
    phone_number: '',
    preferred_date: '',
    preferred_time: '',
    preferred_procedure: '',
    request_type: '',
    created_at: '',
    status: ''
  });

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [pendingCancelId, setPendingCancelId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState<string>('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const cancelReasons = [
    'Price',
    'Time slot not available',
    'Not interested anymore',
    'Found another clinic',
    'Other'
  ];  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const { email } = useRole();
  const allSidebarItems = [
    { icon: LayoutDashboard, label: 'OVERVIEW', href: '/dashboard', active: false },
    { icon: Clock, label: 'CALL LOGS', href: '/dashboard/logs', active: false },
    { icon: Calendar, label: 'WEBSITE BOOKINGS', href: '/dashboard/bookings', active: true },
    { icon: Share2, label: 'SOCIAL MEDIA', href: '/dashboard/social-media', active: false },
  ];

  const sidebarItems = allSidebarItems.filter(item => 
    email === 'reception@hypheningmedia.com' 
      ? ['CALL LOGS', 'WEBSITE BOOKINGS'].includes(item.label) 
      : true
  );

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('website_bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching website bookings:', error);
      setBookings([]);
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'N/A';
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'N/A';
    }
  };

  const updateStatus = async (id: string, newStatus: Booking['status'], reason?: string) => {
    // Optimistic update
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status: newStatus, cancellation_reason: newStatus === 'Cancelled' ? (reason || undefined) : undefined } : booking
    ));

    try {
      const res = await fetch('/api/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus, cancellation_reason: reason })
      });
      const result = await res.json();
      if (!result.success) {
        console.error('Failed to update status:', result.error);
        alert('Failed to update status on server.');
      }
    } catch (err) {
      console.error('API Error updating status:', err);
    }
  };

  const getStatusStyle = (status: Booking['status']) => {
    switch(status) {
      case 'Scheduled': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Contacted': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Cancelled': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-orange-50 text-orange-600 border-orange-200'; // Pending
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesGlobal = 
      booking.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.request_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone_number.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesName = booking.patient_name.toLowerCase().includes(filters.patient_name.toLowerCase());
    const matchesPhone = booking.phone_number.toLowerCase().includes(filters.phone_number.toLowerCase());
    const matchesDate = (booking.preferred_date || '').toLowerCase().includes(filters.preferred_date.toLowerCase());
    const matchesTime = (booking.preferred_time || '').toLowerCase().includes(filters.preferred_time.toLowerCase());
    const matchesProcedure = (booking.preferred_procedure || '').toLowerCase().includes(filters.preferred_procedure.toLowerCase());
    const matchesType = booking.request_type.toLowerCase().includes(filters.request_type.toLowerCase());
    const matchesCreatedAt = formatDate(booking.created_at).toLowerCase().includes(filters.created_at.toLowerCase());
    const currentStatus = booking.status || 'Pending';
    const matchesStatus = filters.status === '' || currentStatus === filters.status;

    return matchesGlobal && matchesName && matchesPhone && matchesDate && matchesTime && matchesProcedure && matchesType && matchesCreatedAt && matchesStatus;
  });

  const stats = [
    { label: 'TOTAL REQUESTS', value: bookings.length, icon: Calendar },
    { label: 'PENDING', value: bookings.filter(b => b.status === 'Pending').length, icon: ClockIcon },
    { label: 'SCHEDULED', value: bookings.filter(b => b.status === 'Scheduled').length, icon: CheckCircle2 },
  ];

  return (
    <div className="flex h-screen bg-[#faf7f3] text-[#1a1a1a] font-sans overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex w-64 border-r border-[#763c26]/10 flex flex-col p-8 z-20"
      >
        <div className="mb-12">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={120} 
            height={40} 
            className="w-auto h-8"
          />
        </div>
        
        <nav className="flex-grow space-y-8">
          {sidebarItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className={`flex items-center space-x-4 text-xs font-bold tracking-[0.2em] transition-all hover:opacity-70 ${
                item.active ? 'text-[#763c26]' : 'text-[#1a1a1a]/40'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <button 
          onClick={async () => {
            const { supabase } = await import('@/lib/supabase');
            await supabase.auth.signOut();
          }}
          className="w-full flex items-center space-x-4 text-xs font-bold tracking-[0.2em] text-[#1a1a1a]/40 hover:text-red-500 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>SIGN OUT</span>
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto pb-20 md:pb-0">
        {/* Header */}
        <header className="h-16 md:h-20 border-b border-[#763c26]/10 flex items-center justify-between px-4 md:px-12 z-10 sticky top-0 bg-[#faf7f3]/80 backdrop-blur-md">
          <Image src="/logo.svg" alt="Logo" width={80} height={24} className="md:hidden w-auto h-6" />
          <div className="hidden md:flex items-center bg-[#1a1a1a]/5 px-4 py-2 rounded-full w-96">
            <Search className="h-4 w-4 text-[#1a1a1a]/40 mr-2" />
            <input 
              type="text" 
              placeholder="SEARCH BOOKINGS..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-bold tracking-widest w-full placeholder-[#1a1a1a]/20"
            />
          </div>

          <div className="flex items-center space-x-6">
            <NotificationBell />
            <div className="flex items-center space-x-4 cursor-pointer group hover:bg-[#1a1a1a]/5 px-4 py-2 rounded-full transition-all">
              <div className="text-right">
                <p className="text-xs font-bold tracking-wider group-hover:text-[#763c26] transition-colors">Hi, Dr. Divya's Team</p>
                <p className="text-[9px] font-bold tracking-[0.2em] text-[#1a1a1a]/40 mt-0.5 uppercase">Admin Portal</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#763c26]/10 flex items-center justify-center border border-[#763c26]/20 group-hover:bg-[#763c26] group-hover:border-[#763c26] transition-all overflow-hidden shadow-sm">
                <User className="h-5 w-5 text-[#763c26] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-12 space-y-8 md:space-y-12">
          
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#763c26]/10 flex justify-around items-center p-2 z-50 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        {sidebarItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${item.active ? 'text-[#763c26]' : 'text-[#1a1a1a]/40'}`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-[8px] font-bold tracking-wider">{item.label.split(' ')[0]}</span>
          </Link>
        ))}
      </div>

          {/* Page Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">website bookings.</h1>
              <p className="text-sm font-medium tracking-widest text-[#1a1a1a]/40 uppercase">Manage consultation requests from patients</p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 border border-[#763c26]/5 rounded-3xl group hover:shadow-xl hover:shadow-[#763c26]/5 transition-all cursor-default"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#faf7f3] rounded-2xl group-hover:bg-[#763c26]/10 transition-colors">
                    <stat.icon className="h-5 w-5 text-[#763c26]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a]/40 mb-1">{stat.label}</p>
                    <p className="text-2xl font-extrabold">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl border border-[#763c26]/5 overflow-hidden shadow-sm"
          >
            <div className="p-6 border-b border-[#763c26]/5 flex justify-between items-center">
              <h3 className="text-xs font-bold tracking-[0.2em]">RECENT REQUESTS</h3>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-[#faf7f3] rounded-lg transition-colors">
                  <Filter className="h-4 w-4 text-[#1a1a1a]/40" />
                </button>
                <button className="p-2 hover:bg-[#faf7f3] rounded-lg transition-colors">
                  <ArrowUpDown className="h-4 w-4 text-[#1a1a1a]/40" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#faf7f3]/50 border-b border-[#763c26]/5">
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-48">PATIENT DETAILS</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-32">PREF DATE</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-32">PREF TIME</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-40">PROCEDURE</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-36">REQUEST TYPE</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-40">RECEIVED AT</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-32">STATUS</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 text-right w-24">ACTIONS</th>
                  </tr>
                  <tr className="bg-[#faf7f3]/30 border-b border-[#763c26]/5">
                    <th className="px-6 pb-4">
                      <div className="flex space-x-2">
                        <input type="text" placeholder="Filter name..." value={filters.patient_name} onChange={(e) => handleFilterChange('patient_name', e.target.value)} className="w-1/2 bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" />
                        <input type="text" placeholder="Filter phone..." value={filters.phone_number} onChange={(e) => handleFilterChange('phone_number', e.target.value)} className="w-1/2 bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" />
                      </div>
                    </th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter date..." value={filters.preferred_date} onChange={(e) => handleFilterChange('preferred_date', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter time..." value={filters.preferred_time} onChange={(e) => handleFilterChange('preferred_time', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter procedure..." value={filters.preferred_procedure} onChange={(e) => handleFilterChange('preferred_procedure', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter type..." value={filters.request_type} onChange={(e) => handleFilterChange('request_type', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter received..." value={filters.created_at} onChange={(e) => handleFilterChange('created_at', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4">
                      <select value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40 appearance-none">
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </th>
                    <th className="px-6 pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#763c26]/5">
                  {loading ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-[10px] font-bold tracking-widest text-[#1a1a1a]/20">
                        LOADING BOOKINGS...
                      </td>
                    </tr>
                  ) : filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-12 text-center text-[10px] font-bold tracking-widest text-[#1a1a1a]/20">
                        NO BOOKINGS FOUND.
                      </td>
                    </tr>
                  ) : filteredBookings.map((booking) => (
                    <tr key={booking.id} className="group hover:bg-[#faf7f3]/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col pl-12 md:pl-0">
                          <span className="text-[11px] font-bold tracking-tight text-[#1a1a1a]">{booking.patient_name}</span>
                          <span className="text-[10px] font-medium text-[#1a1a1a]/50 flex items-center mt-1">
                            <Phone className="h-3 w-3 mr-1" /> {booking.phone_number}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                         <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>{booking.preferred_date || '—'}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                         <div className="flex items-center space-x-2">
                            <Timer className="h-3 w-3" />
                            <span>{booking.preferred_time || '—'}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                        <span className="font-semibold text-[#1a1a1a]">
                          {booking.preferred_procedure || '—'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                        <span className="bg-[#1a1a1a]/5 px-2 py-1 rounded-md">
                          {booking.request_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                        {formatDate(booking.created_at)}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={booking.status} 
                          onChange={(e) => {
                            const newStatus = e.target.value as Booking['status'];
                            if (newStatus === 'Cancelled') {
                              setPendingCancelId(booking.id);
                              setCancelModalOpen(true);
                            } else {
                              updateStatus(booking.id, newStatus);
                            }
                          }}
                          className={`w-full outline-none px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border cursor-pointer appearance-none ${getStatusStyle(booking.status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            className="p-2 hover:bg-[#763c26]/10 rounded-lg transition-colors group/btn"
                            title="Edit Details"
                          >
                             <Edit className="h-3 w-3 text-[#763c26]" />
                          </button>
                          <div className="relative">
                            <button 
                              onClick={() => setOpenMenuId(openMenuId === booking.id ? null : booking.id)}
                              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                            >
                              <MoreHorizontal className="h-3 w-3 text-[#1a1a1a]/40" />
                            </button>
                            {openMenuId === booking.id && (
                              <div className="absolute right-0 top-8 z-30 w-52 bg-white rounded-2xl shadow-xl border border-[#763c26]/10 overflow-hidden text-left shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                                <div className="px-4 py-3">
                                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#1a1a1a]/30 uppercase mb-2">Details</p>
                                  <div className="flex flex-col space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-bold text-[#1a1a1a]/60 uppercase">Status</span>
                                      <span className={`text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${getStatusStyle(booking.status)}`}>{booking.status}</span>
                                    </div>
                                    {booking.status === 'Cancelled' && booking.cancellation_reason && (
                                      <div className="flex flex-col mt-2 pt-2 border-t border-[#763c26]/5">
                                        <span className="text-[9px] font-bold text-[#1a1a1a]/40 uppercase mb-1">Cancellation Reason</span>
                                        <span className="text-[11px] font-medium text-[#1a1a1a]">{booking.cancellation_reason}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Cancellation Modal */}
      <AnimatePresence>
        {cancelModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setCancelModalOpen(false);
                setPendingCancelId(null);
                setCancelReason('');
              }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-[#763c26]/5 flex justify-between items-center bg-[#faf7f3]">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Why was this cancelled?</h3>
                <button 
                  onClick={() => {
                    setCancelModalOpen(false);
                    setPendingCancelId(null);
                    setCancelReason('');
                  }}
                  className="p-2 hover:bg-[#763c26]/10 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-[#763c26]" />
                </button>
              </div>
              
              <div className="p-6 bg-white space-y-3">
                {cancelReasons.map((reason) => (
                  <button
                    key={reason}
                    onClick={() => setCancelReason(reason)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-bold tracking-wider uppercase transition-all ${
                      cancelReason === reason 
                        ? 'bg-[#763c26] text-white border-[#763c26]' 
                        : 'bg-white border-[#763c26]/10 text-[#1a1a1a]/60 hover:bg-[#faf7f3] hover:border-[#763c26]/30'
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-[#763c26]/5 flex justify-end space-x-4 bg-[#faf7f3]">
                <button 
                  onClick={() => {
                    setCancelModalOpen(false);
                    setPendingCancelId(null);
                    setCancelReason('');
                  }}
                  className="px-6 py-2 bg-transparent text-[#1a1a1a]/40 text-[10px] font-bold tracking-widest hover:text-[#1a1a1a] transition-colors uppercase"
                >
                  Cancel
                </button>
                <button 
                  disabled={!cancelReason}
                  onClick={() => {
                    if (pendingCancelId) {
                      updateStatus(pendingCancelId, 'Cancelled', cancelReason);
                    }
                    setCancelModalOpen(false);
                    setPendingCancelId(null);
                    setCancelReason('');
                  }}
                  className="px-6 py-2 bg-[#763c26] text-white text-[10px] font-bold tracking-widest rounded-full hover:bg-[#5d2f1d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingsPage;
