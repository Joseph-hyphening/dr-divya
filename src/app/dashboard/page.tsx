'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Layers, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  User,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Plus
} from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'OVERVIEW', active: true },
    { icon: BarChart3, label: 'ANALYTICS', active: false },
    { icon: Layers, label: 'PROJECTS', active: false },
    { icon: Settings, label: 'SETTINGS', active: false },
  ];

  const stats = [
    { label: 'TOTAL REACH', value: '124.5K', change: '+12.5%', icon: TrendingUp },
    { label: 'ENGAGEMENT', value: '8.2%', change: '+2.1%', icon: ArrowUpRight },
    { label: 'ACTIVE PROJECTS', value: '12', change: '0', icon: Layers },
  ];

  const recentActivity = [
    { title: 'Project "Zenith" updated', time: '2 hours ago', type: 'update' },
    { title: 'New analytics report ready', time: '5 hours ago', type: 'report' },
    { title: 'Meeting with design team', time: 'Yesterday', type: 'meeting' },
  ];

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
              href="#" 
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
        {/* Header */}
        <header className="h-20 border-b border-[#763c26]/10 flex items-center justify-between px-12 z-10 sticky top-0 bg-[#faf7f3]/80 backdrop-blur-md">
          <div className="flex items-center bg-[#1a1a1a]/5 px-4 py-2 rounded-full w-96">
            <Search className="h-4 w-4 text-[#1a1a1a]/40 mr-2" />
            <input 
              type="text" 
              placeholder="SEARCH..." 
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

        {/* Dashboard Content */}
        <div className="p-12 space-y-12">
          {/* Welcome Section */}
          <div className="flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl font-extrabold tracking-tight mb-2">overview.</h1>
              <p className="text-sm font-medium tracking-widest text-[#1a1a1a]/40 uppercase">Wednesday, March 03</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#763c26] text-white px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] flex items-center space-x-2 shadow-lg shadow-[#763c26]/20"
            >
              <Plus className="h-4 w-4" />
              <span>NEW PROJECT</span>
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 border border-[#763c26]/5 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:shadow-[#763c26]/5 transition-all cursor-default"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#faf7f3] rounded-2xl group-hover:bg-[#763c26]/10 transition-colors">
                    <stat.icon className="h-5 w-5 text-[#763c26]" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a]/40 mb-1">{stat.label}</p>
                <p className="text-3xl font-extrabold">{stat.value}</p>
                
                {/* Visual Flair */}
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-[#763c26]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-10 border border-[#763c26]/5 rounded-3xl"
            >
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-sm font-bold tracking-[0.2em]">RECENT ACTIVITY</h3>
                <button className="text-[10px] font-bold tracking-widest text-[#763c26] hover:opacity-70 transition-opacity">VIEW ALL</button>
              </div>
              <div className="space-y-8">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-[#763c26]/5 pb-6 last:border-0 last:pb-0 group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-[#faf7f3] flex items-center justify-center group-hover:bg-[#763c26]/10 transition-colors">
                        <Clock className="h-4 w-4 text-[#763c26]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold tracking-widest group-hover:text-[#763c26] transition-colors">{activity.title.toUpperCase()}</p>
                        <p className="text-[9px] font-medium tracking-widest text-[#1a1a1a]/30">{activity.time.toUpperCase()}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#1a1a1a]/10 group-hover:text-[#763c26] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#763c26] p-10 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <h3 className="text-sm font-bold tracking-[0.2em] mb-10 text-white/60">PERFORMANCE PREVIEW</h3>
                <p className="text-4xl font-extrabold mb-4 leading-tight">Your growth has <br />surpassed expectations.</p>
                <p className="text-xs font-medium tracking-widest text-white/40 max-w-xs leading-relaxed">
                  Based on our latest minimalist analysis, your active projects are performing 15% better than the industry average.
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#763c26] px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] w-fit relative z-10 mt-12"
              >
                GENERATE REPORT
              </motion.button>

              {/* Bauhaus Style Decorative Elements */}
              <div className="absolute top-0 right-0 h-48 w-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-10 right-10 h-20 w-20 border border-white/10 rotate-45"></div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
