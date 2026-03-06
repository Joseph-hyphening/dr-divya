'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Layers, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  User,
  Clock,
  ArrowUpDown,
  Filter,
  MoreHorizontal,
  Phone,
  Calendar,
  Zap,
  CheckCircle2,
  XCircle,
  Play,
  RefreshCw,
  FileText,
  X
} from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface CallLog {
  id: string;
  call_id: string;
  user_name: string;
  phone_number: string;
  preferred_date_time: string;
  preferred_procedure: string;
  duration_ms: number;
  status: string;
  transcript?: string;
  start_time: string;
  action_status?: 'Pending' | 'Scheduled' | 'Cancelled' | 'Follow-up';
}

interface FilterState {
  user_name: string;
  phone_number: string;
  preferred_date_time: string;
  preferred_procedure: string;
  duration_ms: string;
  status: string;
  action_status: string;
}

const LogsPage = () => {
  const [logs, setLogs] = useState<CallLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTranscript, setSelectedTranscript] = useState<string | null>(null);

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'OVERVIEW', href: '/dashboard', active: false },
    { icon: BarChart3, label: 'ANALYTICS', href: '#', active: false },
    { icon: Layers, label: 'PROJECTS', href: '#', active: false },
    { icon: Clock, label: 'CALL LOGS', href: '/dashboard/logs', active: true },
    { icon: Settings, label: 'SETTINGS', href: '#', active: false },
  ];

  const fetchLogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('retell_ai_calls')
      .select('*')
      .order('start_time', { ascending: false });

    if (error) {
      console.error('Error fetching logs:', error);
    } else if (data && data.length > 0) {
      setLogs(data);
    } else {
      // Mock data for initial view if table is empty
      setLogs([
        {
          id: '1',
          call_id: 'call_mock_1',
          user_name: 'John Doe',
          phone_number: '+1234567890',
          preferred_date_time: new Date(Date.now() + 86400000).toISOString(),
          preferred_procedure: 'Consultation',
          duration_ms: 125000,
          status: 'completed',
          start_time: new Date().toISOString(),
          transcript: 'Agent: Hello, how can I help? User: I want to book a consultation.',
          action_status: 'Scheduled'
        },
        {
          id: '2',
          call_id: 'call_mock_2',
          user_name: 'Jane Smith',
          phone_number: '+1987654321',
          preferred_date_time: new Date(Date.now() + 172800000).toISOString(),
          preferred_procedure: 'Cleaning',
          duration_ms: 45000,
          status: 'completed',
          start_time: new Date().toISOString(),
          transcript: 'Agent: Hello? User: Hi, is this Dr. Divya\'s clinic?',
          action_status: 'Pending'
        }
      ]);
    }
    setLoading(false);
  };

  const [filters, setFilters] = useState<FilterState>({
    user_name: '',
    phone_number: '',
    preferred_date_time: '',
    preferred_procedure: '',
    duration_ms: '',
    status: '',
    action_status: ''
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const updateActionStatus = (logId: string, newStatus: CallLog['action_status']) => {
    // Optimistic UI update
    setLogs(prevLogs => prevLogs.map(log => 
      log.id === logId ? { ...log, action_status: newStatus } : log
    ));
    
    // Here you would also add the Supabase update call when the DB is ready:
    // await supabase.from('retell_ai_calls').update({ action_status: newStatus }).eq('id', logId);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSync = async () => {
    try {
      setSyncing(true);
      const response = await fetch('/api/retell/sync', {
        method: 'POST',
      });
      
      const result = await response.json();
      
      if (result.success) {
        await fetchLogs();
        alert(`Sync successful! Processed ${result.stats.added} calls.`);
      } else {
        alert(`Sync failed: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Sync error:', error);
      alert('An unexpected error occurred during sync.');
    } finally {
      setSyncing(false);
    }
  };

  const formatDuration = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'N/A';
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'N/A';
    }
  };

  const stats = [
    { label: 'TOTAL CALLS', value: logs.length, icon: Phone },
    { label: 'AVG DURATION', value: logs.length ? formatDuration(logs.reduce((acc, log) => acc + log.duration_ms, 0) / logs.length) : '0s', icon: Clock },
    { label: 'SUCCESS RATE', value: logs.length ? `${Math.round((logs.filter(l => l.status === 'completed').length / logs.length) * 100)}%` : '0%', icon: Zap },
  ];

  const filteredLogs = logs.filter(log => {
    // Global search term
    const matchesGlobal = 
      log.user_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.phone_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.preferred_procedure?.toLowerCase().includes(searchTerm.toLowerCase());
      
    // Column-specific filters
    const matchesUserName = log.user_name?.toLowerCase().includes(filters.user_name.toLowerCase());
    const matchesPhone = log.phone_number?.toLowerCase().includes(filters.phone_number.toLowerCase());
    const matchesDate = formatDate(log.preferred_date_time).toLowerCase().includes(filters.preferred_date_time.toLowerCase());
    const matchesProcedure = log.preferred_procedure?.toLowerCase().includes(filters.preferred_procedure.toLowerCase());
    const matchesDuration = formatDuration(log.duration_ms).toLowerCase().includes(filters.duration_ms.toLowerCase());
    const matchesStatus = log.status?.toLowerCase().includes(filters.status.toLowerCase());
    const currentActionStatus = log.action_status || 'Pending';
    const matchesActionStatus = filters.action_status === '' || currentActionStatus === filters.action_status;

    return matchesGlobal && matchesUserName && matchesPhone && matchesDate && matchesProcedure && matchesDuration && matchesStatus && matchesActionStatus;
  });

  const getActionColor = (status: CallLog['action_status'] | undefined) => {
    switch(status) {
      case 'Scheduled': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'Cancelled': return 'bg-red-50 text-red-600 border-red-200';
      case 'Follow-up': return 'bg-orange-50 text-orange-600 border-orange-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200'; // Pending
    }
  };

  return (
    <div className="flex h-screen bg-[#faf7f3] text-[#1a1a1a] font-sans overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-64 border-r border-[#763c26]/10 flex flex-col p-8 z-20"
      >
        <div className="text-xl font-bold tracking-wider mb-12">
          mnmlst.
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

        <Link 
          href="/" 
          className="flex items-center space-x-4 text-xs font-bold tracking-[0.2em] text-[#1a1a1a]/40 hover:text-red-500 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>SIGN OUT</span>
        </Link>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-y-auto">
        <header className="h-20 border-b border-[#763c26]/10 flex items-center justify-between px-12 z-10 sticky top-0 bg-[#faf7f3]/80 backdrop-blur-md">
          <div className="flex items-center bg-[#1a1a1a]/5 px-4 py-2 rounded-full w-96">
            <Search className="h-4 w-4 text-[#1a1a1a]/40 mr-2" />
            <input 
              type="text" 
              placeholder="SEARCH LOGS..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-bold tracking-widest w-full placeholder-[#1a1a1a]/20"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-[#1a1a1a]/60 hover:text-[#763c26] transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-[#763c26] rounded-full border-2 border-[#faf7f3]"></span>
            </button>
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-[10px] font-bold tracking-[0.2em] group-hover:text-[#763c26] transition-colors">ALEX RIVERA</p>
                <p className="text-[8px] font-medium tracking-widest text-[#1a1a1a]/40">CREATIVE DIRECTOR</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#763c26]/10 flex items-center justify-center border border-[#763c26]/20 group-hover:border-[#763c26] transition-all overflow-hidden">
                <User className="h-5 w-5 text-[#763c26]" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-12 space-y-12">
          {/* Header Section */}
          <div className="flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl font-extrabold tracking-tight mb-2">call logs.</h1>
              <p className="text-sm font-medium tracking-widest text-[#1a1a1a]/40 uppercase">Analyze your Retell AI interactions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={handleSync}
                disabled={syncing}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-[#763c26]/20 bg-[#763c26] text-white hover:bg-[#5d2f1d] active:scale-95 disabled:opacity-50 disabled:pointer-events-none`}
              >
                <RefreshCw className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
                <span>{syncing ? 'Syncing...' : 'Sync with Retell'}</span>
              </button>
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
              <h3 className="text-xs font-bold tracking-[0.2em]">ALL CALLS</h3>
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
                  <tr className="bg-[#faf7f3]/50">
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-48">USER NAME</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-40">PHONE NUMBER</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-48">PREFERRED DATE/TIME</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-40">PROCEDURE</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-32">DURATION</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-32">STAUS</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 w-40">NEXT STEPS</th>
                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 text-right w-24">ACTIONS</th>
                  </tr>
                  <tr className="bg-[#faf7f3]/30 border-b border-[#763c26]/5">
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter name..." value={filters.user_name} onChange={(e) => handleFilterChange('user_name', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter phone..." value={filters.phone_number} onChange={(e) => handleFilterChange('phone_number', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter date..." value={filters.preferred_date_time} onChange={(e) => handleFilterChange('preferred_date_time', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter procedure..." value={filters.preferred_procedure} onChange={(e) => handleFilterChange('preferred_procedure', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter duration..." value={filters.duration_ms} onChange={(e) => handleFilterChange('duration_ms', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4"><input type="text" placeholder="Filter status..." value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40" /></th>
                    <th className="px-6 pb-4">
                      <select value={filters.action_status} onChange={(e) => handleFilterChange('action_status', e.target.value)} className="w-full bg-white border border-[#763c26]/10 rounded px-2 py-1 text-[10px] font-medium outline-none focus:border-[#763c26]/40 appearance-none">
                        <option value="">All Steps</option>
                        <option value="Pending">Pending</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Follow-up">Follow-up</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </th>
                    <th className="px-6 pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#763c26]/5">
                  {loading ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-[10px] font-bold tracking-widest text-[#1a1a1a]/20">
                        LOADING LOGS...
                      </td>
                    </tr>
                  ) : filteredLogs.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-[10px] font-bold tracking-widest text-[#1a1a1a]/20">
                        NO LOGS FOUND.
                      </td>
                    </tr>
                  ) : filteredLogs.map((log) => (
                    <tr key={log.id} className="group hover:bg-[#faf7f3]/50 transition-colors">
                      <td className="px-6 py-4 text-[11px] font-bold tracking-tight">{log.user_name}</td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">{log.phone_number}</td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                         <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(log.preferred_date_time)}</span>
                         </div>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                        <span className="bg-[#1a1a1a]/5 px-2 py-1 rounded-md">
                          {log.preferred_procedure}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[11px] font-medium text-[#1a1a1a]/60">
                        {formatDuration(log.duration_ms)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase ${
                          log.status === 'completed' || log.status === 'ended' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {log.status === 'completed' || log.status === 'ended' ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
                          {log.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={log.action_status || 'Pending'} 
                          onChange={(e) => updateActionStatus(log.id, e.target.value as CallLog['action_status'])}
                          className={`w-full outline-none px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border cursor-pointer appearance-none ${getActionColor(log.action_status || 'Pending')}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Follow-up">Follow-up</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => setSelectedTranscript(log.transcript || 'No transcript available.')}
                            className="p-2 hover:bg-[#763c26]/10 rounded-lg transition-colors group/btn"
                            title="View Transcript"
                          >
                             <FileText className="h-3 w-3 text-[#763c26]" />
                          </button>
                          <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
                            <MoreHorizontal className="h-3 w-3 text-[#1a1a1a]/40" />
                          </button>
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

      {/* Transcript Modal */}
      <AnimatePresence>
        {selectedTranscript && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTranscript(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-[#763c26]/5 flex justify-between items-center bg-[#faf7f3]">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Call Transcript</h3>
                <button 
                  onClick={() => setSelectedTranscript(null)}
                  className="p-2 hover:bg-[#763c26]/10 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-[#763c26]" />
                </button>
              </div>
              <div className="p-8 max-h-[60vh] overflow-y-auto bg-white">
                <p className="text-sm leading-relaxed text-[#1a1a1a]/80 whitespace-pre-wrap font-mono">
                  {selectedTranscript}
                </p>
              </div>
              <div className="p-6 border-t border-[#763c26]/5 flex justify-end bg-[#faf7f3]">
                <button 
                  onClick={() => setSelectedTranscript(null)}
                  className="px-6 py-2 bg-[#763c26] text-white text-[10px] font-bold tracking-widest rounded-full hover:bg-[#5d2f1d] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogsPage;
