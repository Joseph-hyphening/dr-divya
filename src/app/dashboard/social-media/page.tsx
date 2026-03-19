'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  LayoutDashboard, Clock, Calendar, LogOut, Search, Bell, User,
  Share2, TrendingUp, Users, Eye, MessageSquare, ThumbsUp, Video, 
  MapPin, ArrowUpRight, ArrowDownRight, Activity, DollarSign, MousePointerClick, Star, Heart
} from 'lucide-react';
import Link from 'next/link';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Legend, LineChart, Line, PieChart, Pie, Cell, ComposedChart
} from 'recharts';
import { useRole } from '@/lib/RoleContext';
import { NotificationBell } from '@/components/ui/NotificationBell';

// Global Overview Data
const overviewPerformanceData = [
  { name: 'Jan', reach: 4000, engagement: 2400 },
  { name: 'Feb', reach: 3000, engagement: 1398 },
  { name: 'Mar', reach: 6000, engagement: 4800 },
  { name: 'Apr', reach: 8780, engagement: 3908 },
  { name: 'May', reach: 12900, engagement: 4800 },
  { name: 'Jun', reach: 18390, engagement: 7800 },
  { name: 'Jul', reach: 24490, engagement: 9300 },
];

const platformComparisonData = [
  { name: 'Mon', meta: 4000, youtube: 2400, gmb: 2400 },
  { name: 'Tue', meta: 3000, youtube: 1398, gmb: 2210 },
  { name: 'Wed', meta: 2000, youtube: 9800, gmb: 2290 },
  { name: 'Thu', meta: 2780, youtube: 3908, gmb: 2000 },
  { name: 'Fri', meta: 1890, youtube: 4800, gmb: 2181 },
  { name: 'Sat', meta: 2390, youtube: 3800, gmb: 2500 },
  { name: 'Sun', meta: 3490, youtube: 4300, gmb: 2100 },
];

// Meta Data
const metaMoMData = [
  { name: 'Jan', followers: 12500, engagement: 2400 },
  { name: 'Feb', followers: 13200, engagement: 3100 },
  { name: 'Mar', followers: 14800, engagement: 4200 },
  { name: 'Apr', followers: 16500, engagement: 5600 },
  { name: 'May', followers: 19200, engagement: 7100 },
  { name: 'Jun', followers: 22400, engagement: 8400 },
];

// YouTube Data
const youtubeAnalyticsData = [
  { name: 'Week 1', views: 12000, watchTime: 450 },
  { name: 'Week 2', views: 15000, watchTime: 520 },
  { name: 'Week 3', views: 18000, watchTime: 650 },
  { name: 'Week 4', views: 25000, watchTime: 980 },
];

// GMB Data
const gmbMoMData = [
  { name: 'Jan', searches: 4200, interactions: 850, calls: 320, website: 530 },
  { name: 'Feb', searches: 4800, interactions: 920, calls: 380, website: 540 },
  { name: 'Mar', searches: 5600, interactions: 1100, calls: 450, website: 650 },
  { name: 'Apr', searches: 6200, interactions: 1450, calls: 520, website: 930 },
  { name: 'May', searches: 7800, interactions: 1800, calls: 680, website: 1120 },
  { name: 'Jun', searches: 9400, interactions: 2200, calls: 842, website: 1358 },
  { name: 'Jul', searches: 10500, interactions: 2500, calls: 950, website: 1550 },
  { name: 'Aug', searches: 11200, interactions: 2750, calls: 1020, website: 1730 },
  { name: 'Sep', searches: 12100, interactions: 3100, calls: 1150, website: 1950 },
  { name: 'Oct', searches: 13400, interactions: 3450, calls: 1280, website: 2170 },
  { name: 'Nov', searches: 14800, interactions: 3900, calls: 1450, website: 2450 },
  { name: 'Dec', searches: 16500, interactions: 4400, calls: 1680, website: 2720 },
];

const SocialMediaPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const { email } = useRole();
  const allSidebarItems = [
    { icon: LayoutDashboard, label: 'OVERVIEW', href: '/dashboard', active: false },
    { icon: Clock, label: 'CALL LOGS', href: '/dashboard/logs', active: false },
    { icon: Calendar, label: 'WEBSITE BOOKINGS', href: '/dashboard/bookings', active: false },
    { icon: Share2, label: 'SOCIAL MEDIA', href: '/dashboard/social-media', active: true },
  ];

  const sidebarItems = allSidebarItems.filter(item => 
    email === 'reception@hypheningmedia.com' 
      ? ['CALL LOGS', 'WEBSITE BOOKINGS'].includes(item.label) 
      : true
  );

  const StatCard = ({ title, value, change, icon: Icon, trend, color = 'text-[#763c26]', bg = 'group-hover:bg-[#763c26]/10' }: any) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-6 rounded-3xl border border-[#763c26]/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 bg-[#faf7f3] rounded-2xl ${bg} transition-colors`}>
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
        <div className={`flex items-center space-x-1 text-[10px] font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
          {trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          <span>{change}</span>
        </div>
      </div>
      <p className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a]/40 mb-1">{title}</p>
      <p className="text-3xl font-extrabold text-[#1a1a1a]">{value}</p>
    </motion.div>
  );

  const renderOverviewTab = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="TOTAL REACH" value="2.4M" change="12.5%" icon={Users} trend="up" />
        <StatCard title="ENGAGEMENT RATE" value="8.4%" change="1.2%" icon={ThumbsUp} trend="up" />
        <StatCard title="TOTAL VIEWS" value="845K" change="5.4%" icon={Eye} trend="up" />
        <StatCard title="PROFILE CLICKS" value="12.4K" change="2.1%" icon={ArrowUpRight} trend="down" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Audience Growth</h3>
              <p className="text-[10px] text-[#1a1a1a]/40 font-medium tracking-widest uppercase mt-1">Cross-platform Reach</p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={overviewPerformanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorReachOverview" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#763c26" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#763c26" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                <Area type="monotone" dataKey="reach" stroke="#763c26" strokeWidth={3} fillOpacity={1} fill="url(#colorReachOverview)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1a1a1a] text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-white/80">Platform Distribution</h3>
            <div className="space-y-6">
              {[
                { platform: 'Meta (IG/FB)', value: '65%', color: 'text-blue-400', icon: MessageSquare },
                { platform: 'YouTube', value: '25%', color: 'text-red-400', icon: Video },
                { platform: 'Google My Business', value: '10%', color: 'text-yellow-400', icon: MapPin }
              ].map((item: any, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-[11px] font-bold tracking-wider">{item.platform}</span>
                  </div>
                  <span className="text-xl font-extrabold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Platform Comparison */}
      <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Daily Engagement by Platform</h3>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={platformComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
              <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontSize: '12px' }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px' }} />
              <Bar dataKey="meta" name="Meta" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="youtube" name="YouTube" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="gmb" name="GMB" fill="#eab308" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );

  const renderMetaTab = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex items-center space-x-4 mb-2">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
          <MessageSquare className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Meta Business Suite</h2>
          <p className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 uppercase">Facebook & Instagram Organic Growth</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="TOTAL FOLLOWERS" value="22.4K" change="+14.2% MoM" icon={Users} trend="up" color="text-blue-500" bg="group-hover:bg-blue-50" />
        <StatCard title="ENGAGEMENT RATE" value="6.8%" change="+1.2% MoM" icon={Heart} trend="up" color="text-blue-500" bg="group-hover:bg-blue-50" />
        <StatCard title="TOTAL COMMENTS" value="4,821" change="+24% MoM" icon={MessageSquare} trend="up" color="text-blue-500" bg="group-hover:bg-blue-50" />
        <StatCard title="PROFILE VISITS" value="18.5K" change="+8% MoM" icon={ArrowUpRight} trend="up" color="text-blue-500" bg="group-hover:bg-blue-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">MoM Growth: Followers vs Engagement</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={metaMoMData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '10px' }} />
                <Area yAxisId="left" type="monotone" dataKey="followers" name="Followers" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                <Bar yAxisId="right" dataKey="engagement" name="Engagement" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Top Performing Content</h3>
          <div className="space-y-4">
            {[
              { title: 'Summer Skincare Routine', type: 'Instagram Reel', reach: '45.2K', interactions: '2.4K' },
              { title: 'Patient Transformation Story', type: 'Facebook Post', reach: '28.1K', interactions: '1.8K' },
              { title: 'Clinic Tour', type: 'Instagram Post', reach: '19.4K', interactions: '945' },
              { title: 'Why Sunscreen is Important', type: 'Instagram Carousel', reach: '15.2K', interactions: '820' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-[#faf7f3] rounded-2xl hover:bg-blue-50/50 transition-colors">
                <div>
                  <p className="text-[11px] font-bold text-[#1a1a1a]">{item.title}</p>
                  <p className="text-[9px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest mt-1">{item.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-extrabold text-[#1a1a1a]">{item.reach} Reach</p>
                  <p className="text-[9px] font-bold text-blue-600 tracking-wider flex items-center justify-end"><Heart className="h-3 w-3 mr-1" /> {item.interactions}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 flex items-center justify-center space-x-2 text-[10px] font-bold tracking-widest text-[#3b82f6] hover:bg-blue-50 py-3 rounded-xl transition-colors w-full">
            <span>VIEW ALL CONTENT</span>
            <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderYouTubeTab = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex items-center space-x-4 mb-2">
        <div className="p-3 bg-red-50 text-red-600 rounded-xl">
          <Video className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-[#1a1a1a]">YouTube Studio</h2>
          <p className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 uppercase">Video Content Performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="TOTAL VIEWS" value="124.5K" change="+15.2% MoM" icon={Eye} trend="up" color="text-red-500" bg="group-hover:bg-red-50" />
        <StatCard title="WATCH TIME" value="1.2K Hrs" change="+8.4% MoM" icon={Clock} trend="up" color="text-red-500" bg="group-hover:bg-red-50" />
        <StatCard title="SUBSCRIBERS" value="+452" change="+12.1% MoM" icon={Users} trend="up" color="text-red-500" bg="group-hover:bg-red-50" />
        <StatCard title="IMPRESSION CTR" value="4.8%" change="+0.2% MoM" icon={MousePointerClick} trend="up" color="text-red-500" bg="group-hover:bg-red-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Views & Watch Time Trends</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={youtubeAnalyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
                <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                <Line type="monotone" dataKey="views" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Top Long-form Content</h3>
          <div className="space-y-4">
            {[
              { title: 'What to expect during your first consultation', views: '45.2K', duration: '8:45', awd: '4:20' },
              { title: 'Acne Scars Treatment Process Explained', views: '28.1K', duration: '12:30', awd: '6:15' },
              { title: 'The truth about chemical peels', views: '19.4K', duration: '10:15', awd: '5:40' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-[#faf7f3] rounded-2xl hover:bg-red-50/50 transition-colors">
                <div>
                  <p className="text-[11px] font-bold text-[#1a1a1a] line-clamp-1">{item.title}</p>
                  <p className="text-[9px] font-bold text-[#1a1a1a]/40 uppercase tracking-widest mt-1">Duration: {item.duration}</p>
                </div>
                <div className="text-right pl-4">
                  <p className="text-[11px] font-extrabold text-[#1a1a1a]">{item.views}</p>
                  <p className="text-[9px] font-bold text-red-500 tracking-wider">AWD: {item.awd}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderGMBTab = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex items-center space-x-4 mb-2">
        <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
          <MapPin className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-[#1a1a1a]">Google My Business</h2>
          <p className="text-[10px] font-bold tracking-widest text-[#1a1a1a]/40 uppercase">Local Search Growth</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="SEARCH VIEWS" value="45.8K" change="+22.4% MoM" icon={Search} trend="up" color="text-yellow-500" bg="group-hover:bg-yellow-50" />
        <StatCard title="MAP VIEWS" value="32.1K" change="+18.1% MoM" icon={MapPin} trend="up" color="text-yellow-500" bg="group-hover:bg-yellow-50" />
        <StatCard title="CUSTOMER CALLS" value="842" change="+5.4% MoM" icon={Activity} trend="up" color="text-yellow-500" bg="group-hover:bg-yellow-50" />
        <StatCard title="AVERAGE RATING" value="4.9" change="+0.1 MoM" icon={Star} trend="up" color="text-yellow-500" bg="group-hover:bg-yellow-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">MoM Growth: Searches vs Interactions</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gmbMoMData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                   <linearGradient id="colorSearches" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '10px' }} />
                <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                <Area type="monotone" dataKey="searches" name="Total Searches" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorSearches)" />
                <Area type="monotone" dataKey="interactions" name="Customer Actions" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorInteractions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Latest Reviews</h3>
            <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full flex items-center">
              4.9 <Star className="h-3 w-3 ml-1 fill-current" />
            </span>
          </div>
          <div className="space-y-4">
            {[
              { author: 'Jane Doe', rating: 5, date: '2 days ago', text: 'Amazing experience! Dr. Divya was incredibly patient and explained the entire procedure.' },
              { author: 'Mark Smith', rating: 5, date: '1 week ago', text: 'The clinic is beautiful and the staff is very professional. Highly recommended for skincare.' },
              { author: 'Sarah Connor', rating: 4, date: '2 weeks ago', text: 'Great results from my chemical peel, but I had to wait 15 mins past my appointment time.' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[#faf7f3] rounded-2xl hover:bg-yellow-50/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[11px] font-bold text-[#1a1a1a]">{item.author}</p>
                  <p className="text-[9px] font-bold text-[#1a1a1a]/40 uppercase">{item.date}</p>
                </div>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className={`h-3 w-3 ${idx < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-[11px] font-medium text-[#1a1a1a]/70 leading-relaxed line-clamp-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-[#763c26]/5 shadow-sm">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">MoM Growth: Calls vs Website Interactions</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gmbMoMData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }} dx={-10} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '10px' }} />
              <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
              <Bar dataKey="calls" name="Calls Done" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="website" name="Website Interactions" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex h-screen bg-[#faf7f3] text-[#1a1a1a] font-sans overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex w-64 border-r border-[#763c26]/10 flex flex-col p-8 z-20 shrink-0"
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
          <Image src="/logo.svg" alt="Logo" width={80} height={24} className="md:hidden w-auto h-6 mr-4" />
          <div className="flex flex-col md:pl-0">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">Social Media Analytics</h2>
            <p className="text-[10px] text-[#1a1a1a]/40 font-medium tracking-widest uppercase">Meta • YouTube • GMB</p>
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

        {/* Content */}
        <div className="p-4 md:p-12 pb-24 space-y-8">
          <div className="flex items-center justify-between mb-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">performance analytics.</h1>
              <p className="text-xs font-medium tracking-widest text-[#1a1a1a]/50 uppercase">Consolidated view of your digital presence</p>
            </motion.div>
            
            <div className="flex bg-white rounded-full p-1 border border-[#763c26]/10 shadow-sm shrink-0">
              {['Overview', 'Meta', 'YouTube', 'GMB'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                    activeTab === tab 
                      ? 'bg-[#763c26] text-white shadow-md' 
                      : 'text-[#1a1a1a]/50 hover:text-[#1a1a1a] hover:bg-[#faf7f3]'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'Overview' && <div key="overview">{renderOverviewTab()}</div>}
            {activeTab === 'Meta' && <div key="meta">{renderMetaTab()}</div>}
            {activeTab === 'YouTube' && <div key="youtube">{renderYouTubeTab()}</div>}
            {activeTab === 'GMB' && <div key="gmb">{renderGMBTab()}</div>}
          </AnimatePresence>
          
        </div>
      </main>
    </div>
  );
};

export default SocialMediaPage;
