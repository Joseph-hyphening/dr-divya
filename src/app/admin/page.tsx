'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  BookOpen, 
  Layers, 
  Image as ImageIcon, 
  Plus, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  LogOut, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Eye,
  SlidersHorizontal,
  Users,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  Download,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { 
  isAdminAuthenticated, 
  setAdminAuthenticated, 
  getBlogs, 
  deleteBlog, 
  getConditions, 
  getLeads,
  updateLeadStatus,
  deleteLead,
  clearAllLeads,
  BlogArticle, 
  ConditionData,
  PatientLead
} from '@/lib/cms-store';
import { BlogEditorModal } from '@/components/admin/BlogEditorModal';
import { ConditionEditorModal } from '@/components/admin/ConditionEditorModal';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<'leads' | 'blogs' | 'conditions'>('leads');

  // Blog State
  const [blogs, setBlogs] = useState<BlogArticle[]>([]);
  const [editingBlog, setEditingBlog] = useState<BlogArticle | null>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  // Condition State
  const [conditions, setConditions] = useState<ConditionData[]>([]);
  const [editingCondition, setEditingCondition] = useState<ConditionData | null>(null);
  const [isConditionModalOpen, setIsConditionModalOpen] = useState(false);
  const [conditionCategoryFilter, setConditionCategoryFilter] = useState<'all' | 'skin' | 'hair' | 'pediatrics'>('all');
  const [conditionSearch, setConditionSearch] = useState('');

  // Leads State
  const [leads, setLeads] = useState<PatientLead[]>([]);
  const [leadStatusFilter, setLeadStatusFilter] = useState<'all' | 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled'>('all');
  const [leadSearch, setLeadSearch] = useState('');

  // Check auth & register live updates
  useEffect(() => {
    const auth = isAdminAuthenticated();
    if (!auth) {
      router.push('/admin/login');
    } else {
      setAuthenticated(true);
      refreshData();
    }

    const handleUpdate = () => {
      setBlogs(getBlogs());
      setConditions(getConditions());
      setLeads(getLeads());
    };
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, [router]);

  const refreshData = () => {
    setBlogs(getBlogs());
    setConditions(getConditions());
    setLeads(getLeads());
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    router.push('/admin/login');
  };

  const handleDeleteBlog = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete the blog "${title}"?`)) {
      deleteBlog(id);
      refreshData();
    }
  };

  const handleDeleteLead = (id: string, name: string) => {
    if (confirm(`Delete inquiry from patient "${name}"?`)) {
      deleteLead(id);
      refreshData();
    }
  };

  const handleClearAllLeads = () => {
    if (confirm('Are you sure you want to clear all patient leads? This cannot be undone.')) {
      clearAllLeads();
      refreshData();
    }
  };

  const exportLeadsToCSV = () => {
    if (leads.length === 0) {
      alert('No patient inquiries to export.');
      return;
    }
    const headers = ['ID', 'Date', 'Time', 'Patient Name', 'Phone', 'Email', 'Preferred Date', 'Treatment', 'Status', 'Source', 'Notes'];
    const rows = leads.map((l) => {
      const dateObj = new Date(l.submittedAt);
      return [
        l.id,
        dateObj.toLocaleDateString(),
        dateObj.toLocaleTimeString(),
        `"${(l.name || '').replace(/"/g, '""')}"`,
        `"${(l.phone || '').replace(/"/g, '""')}"`,
        `"${(l.email || '').replace(/"/g, '""')}"`,
        `"${(l.preferredDate || '').replace(/"/g, '""')}"`,
        `"${(l.treatmentName || '').replace(/"/g, '""')}"`,
        l.status,
        `"${(l.source || '').replace(/"/g, '""')}"`,
        `"${(l.notes || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `dr_divya_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-sm font-semibold text-foreground/60 animate-pulse">
          Loading Clinical CMS...
        </div>
      </div>
    );
  }

  const filteredConditions = conditions.filter((c) => {
    const matchesCategory = conditionCategoryFilter === 'all' || c.category === conditionCategoryFilter;
    const matchesSearch = c.title.toLowerCase().includes(conditionSearch.toLowerCase()) || 
                          c.slug.toLowerCase().includes(conditionSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-foreground flex flex-col selection:bg-brand-accent/20">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-border/80 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="Dr. Divya Sharma"
                width={160}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Staff Portal & Content CMS</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs font-semibold">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              <span>View Live Site</span>
              <ExternalLink className="w-3 h-3 text-foreground/40" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full flex-1 space-y-8">
        {/* Page Title & Tab Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border/80">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-serif italic text-foreground">
              Clinical Content & Media Management
            </h1>
            <p className="text-xs sm:text-sm text-foreground/60">
              Manage SEO blog articles, WebP images, Before/After sliders, and condition landing page content.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-border shadow-xs gap-1 self-start md:self-auto flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setActiveTab('leads')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'leads'
                  ? 'bg-brand-accent text-white shadow-xs'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Patient Leads ({leads.length})</span>
              {leads.filter((l) => l.status === 'new').length > 0 && (
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'leads' ? 'bg-white text-brand-accent' : 'bg-brand-accent text-white'
                }`}>
                  {leads.filter((l) => l.status === 'new').length} New
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'blogs'
                  ? 'bg-brand-accent text-white shadow-xs'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blogs & Articles ({blogs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('conditions')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'conditions'
                  ? 'bg-brand-accent text-white shadow-xs'
                  : 'text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Condition Media & Text ({conditions.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 0: PATIENT CONSULTATION LEADS */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Header & Export Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <span>Patient Consultation Leads & Inquiries</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold">
                    Live Feed
                  </span>
                </h2>
                <p className="text-xs text-muted-foreground">
                  Inquiries submitted via consultation booking forms across the landing page and clinical condition hubs.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={exportLeadsToCSV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-border hover:bg-foreground/5 text-foreground font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  title="Export Leads to CSV spreadsheet"
                >
                  <Download className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Export CSV</span>
                </button>

                {leads.length > 0 && (
                  <button
                    onClick={handleClearAllLeads}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-destructive hover:bg-destructive/10 text-xs font-semibold transition-colors cursor-pointer"
                    title="Clear all leads"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Clear All</span>
                  </button>
                )}
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-border shadow-2xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  Total Inquiries
                </span>
                <div className="text-2xl font-bold text-foreground">
                  {leads.length}
                </div>
                <span className="text-[11px] text-muted-foreground">All time submissions</span>
              </div>

              <div className="p-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 shadow-2xs space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>New Inquiries</span>
                </span>
                <div className="text-2xl font-bold text-brand-accent">
                  {leads.filter((l) => l.status === 'new').length}
                </div>
                <span className="text-[11px] text-brand-accent/80 font-medium">Requires front desk follow-up</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 shadow-2xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 block">
                  Contacted
                </span>
                <div className="text-2xl font-bold text-amber-700">
                  {leads.filter((l) => l.status === 'contacted').length}
                </div>
                <span className="text-[11px] text-muted-foreground">In communication</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 shadow-2xs space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 block">
                  Scheduled
                </span>
                <div className="text-2xl font-bold text-emerald-700">
                  {leads.filter((l) => l.status === 'scheduled').length}
                </div>
                <span className="text-[11px] text-muted-foreground">Doctor consultation booked</span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-border shadow-2xs">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search patient name, phone, email, or concern..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-[#FAF7F2] text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent"
                />
              </div>

              {/* Status Filter Tabs */}
              <div className="inline-flex p-1 rounded-xl bg-[#FAF7F2] border border-border text-xs flex-wrap">
                {(['all', 'new', 'contacted', 'scheduled', 'completed', 'cancelled'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg font-semibold uppercase tracking-wider text-[10px] transition-colors cursor-pointer ${
                      leadStatusFilter === st
                        ? 'bg-brand-accent text-white shadow-2xs'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Leads Feed List */}
            {(() => {
              const query = leadSearch.toLowerCase().trim();
              const filtered = leads.filter((lead) => {
                const matchesStatus = leadStatusFilter === 'all' || lead.status === leadStatusFilter;
                const matchesSearch = !query ||
                  lead.name.toLowerCase().includes(query) ||
                  lead.phone.toLowerCase().includes(query) ||
                  lead.email.toLowerCase().includes(query) ||
                  lead.treatmentName.toLowerCase().includes(query) ||
                  (lead.notes && lead.notes.toLowerCase().includes(query));
                return matchesStatus && matchesSearch;
              });

              if (filtered.length === 0) {
                return (
                  <div className="p-12 text-center bg-white rounded-3xl border border-border/80 shadow-xs space-y-2">
                    <Users className="w-8 h-8 text-muted-foreground/50 mx-auto" />
                    <p className="text-sm font-semibold text-foreground">No patient inquiries found</p>
                    <p className="text-xs text-muted-foreground">
                      {leadSearch || leadStatusFilter !== 'all'
                        ? 'Try adjusting your search query or status filter.'
                        : 'New patient consultation requests will appear here in real time.'}
                    </p>
                  </div>
                );
              }

              return (
                <div className="space-y-3.5">
                  {filtered.map((lead) => {
                    const dateObj = new Date(lead.submittedAt);
                    const formattedDate = !isNaN(dateObj.getTime())
                      ? `${dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })} at ${dateObj.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}`
                      : lead.submittedAt;

                    const whatsappGreeting = encodeURIComponent(
                      `Hello ${lead.name}, this is Dr. Divya Sharma's Skin & Hair Clinic in Whitefield, Bangalore regarding your appointment request for "${lead.treatmentName}". We would be happy to confirm your preferred consultation slot on ${lead.preferredDate}. Please let us know if this time works for you.`
                    );
                    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');

                    return (
                      <div
                        key={lead.id}
                        className={`p-5 rounded-3xl bg-white border border-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
                          lead.status === 'new'
                            ? 'border-l-4 border-l-brand-accent'
                            : lead.status === 'contacted'
                            ? 'border-l-4 border-l-amber-500'
                            : lead.status === 'scheduled'
                            ? 'border-l-4 border-l-emerald-500'
                            : 'border-l-4 border-l-border'
                        }`}
                      >
                        {/* Top Row: Status, Date, Source, and Status Dropdown */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider ${
                                lead.status === 'new'
                                  ? 'bg-brand-accent/15 text-brand-accent'
                                  : lead.status === 'contacted'
                                  ? 'bg-amber-500/15 text-amber-700'
                                  : lead.status === 'scheduled'
                                  ? 'bg-emerald-500/15 text-emerald-700'
                                  : lead.status === 'completed'
                                  ? 'bg-blue-500/15 text-blue-700'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {lead.status}
                            </span>

                            <span className="text-muted-foreground flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3" />
                              <span>{formattedDate}</span>
                            </span>

                            {lead.source && (
                              <span className="px-2 py-0.5 rounded-md bg-foreground/[0.04] text-foreground/60 text-[10px] font-mono truncate max-w-[180px]">
                                {lead.source}
                              </span>
                            )}
                          </div>

                          {/* Status Changer Dropdown */}
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-muted-foreground">Status:</span>
                            <select
                              value={lead.status}
                              onChange={(e) => {
                                updateLeadStatus(lead.id, e.target.value as PatientLead['status']);
                                refreshData();
                              }}
                              className="px-2.5 py-1 rounded-xl border border-border bg-[#FAF7F2] text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent cursor-pointer"
                            >
                              <option value="new">New Inquiry</option>
                              <option value="contacted">Contacted</option>
                              <option value="scheduled">Scheduled</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          </div>
                        </div>

                        {/* Patient Core Details */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                          <div className="md:col-span-4 space-y-1.5">
                            <h3 className="text-base font-bold text-foreground">
                              {lead.name}
                            </h3>
                            <div className="space-y-1 text-xs text-foreground/80">
                              <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                                <span className="font-mono">{lead.phone}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                                <span className="truncate">{lead.email}</span>
                              </div>
                            </div>
                          </div>

                          <div className="md:col-span-4 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                              Requested Concern / Treatment
                            </span>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-accent/10 text-brand-accent text-xs font-bold">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>{lead.treatmentName}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-foreground/70 pt-1">
                              <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                              <span>Preferred: <strong>{lead.preferredDate}</strong></span>
                            </div>
                          </div>

                          <div className="md:col-span-4 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                              Patient Notes & Description
                            </span>
                            {lead.notes ? (
                              <p className="text-xs text-foreground/80 leading-relaxed bg-[#FAF7F2] p-2.5 rounded-xl border border-border/60 italic">
                                &ldquo;{lead.notes}&rdquo;
                              </p>
                            ) : (
                              <p className="text-xs text-muted-foreground italic">
                                No additional notes provided.
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons Toolbar */}
                        <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 flex-wrap">
                            {/* WhatsApp Direct Action */}
                            <a
                              href={`https://wa.me/${cleanPhone}?text=${whatsappGreeting}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs transition-colors"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp Patient</span>
                            </a>

                            {/* Direct Phone Call */}
                            <a
                              href={`tel:${lead.phone}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-border hover:bg-foreground/5 text-foreground font-semibold text-xs shadow-2xs transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 text-brand-accent" />
                              <span>Call</span>
                            </a>

                            {/* Direct Email */}
                            <a
                              href={`mailto:${lead.email}?subject=${encodeURIComponent(`Dr. Divya Sharma Clinic Consultation - ${lead.treatmentName}`)}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-border hover:bg-foreground/5 text-foreground font-semibold text-xs shadow-2xs transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-brand-accent" />
                              <span>Email</span>
                            </a>
                          </div>

                          <button
                            onClick={() => handleDeleteLead(lead.id, lead.name)}
                            className="p-1.5 rounded-lg text-foreground/40 hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 1: BLOGS & ARTICLES */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">Medical Knowledge Articles</h2>
                <p className="text-xs text-muted-foreground">
                  Articles are published to <code className="bg-foreground/5 px-1 py-0.5 rounded">/blogs</code> and individual URLs with WebP images and internal link anchors.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingBlog(null);
                  setIsBlogModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-accent hover:bg-[#5E2F1E] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-accent/15 transition-all cursor-pointer self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Compose New Blog</span>
              </button>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="p-5 rounded-3xl bg-white border border-border/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    {/* Media Thumbnail */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-muted border border-border">
                      {blog.imageMode === 'single' ? (
                        <Image
                          src={blog.singleImage || '/service-clinical-derm.png'}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="grid grid-cols-2 h-full w-full">
                          <div className="relative h-full">
                            <Image
                              src={blog.beforeAfter?.beforeImage || '/process/step-01-dermoscopy.jpg'}
                              alt="Before"
                              fill
                              className="object-cover"
                            />
                            <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[9px] font-bold">Before</span>
                          </div>
                          <div className="relative h-full border-l border-white">
                            <Image
                              src={blog.beforeAfter?.afterImage || '/process/step-03-laser-suite.jpg'}
                              alt="After"
                              fill
                              className="object-cover"
                            />
                            <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-white text-[9px] font-bold">After</span>
                          </div>
                        </div>
                      )}

                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-brand-accent shadow-xs">
                          {blog.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white uppercase">
                          {blog.imageMode === 'before_after' ? 'Before/After Slider' : 'Single WebP'}
                        </span>
                      </div>
                    </div>

                    {/* Blog Header Info */}
                    <div className="space-y-1">
                      <div className="text-[11px] text-muted-foreground flex items-center gap-2">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                        <span>•</span>
                        <span>{blog.internalLinks.length} internal links</span>
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    {/* Internal Links Preview */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {blog.internalLinks.map((link) => (
                        <span key={link.href} className="text-[10px] bg-foreground/[0.04] text-foreground/70 px-2 py-0.5 rounded font-medium">
                          {link.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 font-semibold text-brand-accent hover:underline"
                    >
                      <span>Preview Article</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingBlog(blog);
                          setIsBlogModalOpen(true);
                        }}
                        className="p-2 rounded-xl bg-foreground/[0.04] hover:bg-brand-accent hover:text-white transition-colors text-foreground/70 cursor-pointer"
                        title="Edit Blog"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id, blog.title)}
                        className="p-2 rounded-xl bg-destructive/10 hover:bg-destructive hover:text-white transition-colors text-destructive cursor-pointer"
                        title="Delete Blog"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CONDITION MEDIA & TEXT MANAGER */}
        {activeTab === 'conditions' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-foreground">Condition Media & Landing Page Connector</h2>
                <p className="text-xs text-muted-foreground">
                  Update hero images, upload multiple WebP photos, and configure Before/After sliders for any of the clinical condition pages.
                </p>
              </div>

              {/* Category Filter */}
              <div className="inline-flex p-1 rounded-xl bg-white border border-border text-xs">
                {(['all', 'skin', 'hair', 'pediatrics'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setConditionCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-wider text-[11px] transition-colors cursor-pointer ${
                      conditionCategoryFilter === cat
                        ? 'bg-brand-accent text-white shadow-xs'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={conditionSearch}
                onChange={(e) => setConditionSearch(e.target.value)}
                placeholder="Search condition by name or slug..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>

            {/* Conditions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredConditions.map((condition) => (
                <div
                  key={condition.id}
                  className="p-4 rounded-3xl bg-white border border-border/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    {/* Hero Image Thumbnail with Badge */}
                    <div className="relative h-36 w-full rounded-2xl overflow-hidden bg-muted border border-border">
                      <Image
                        src={condition.heroImage}
                        alt={condition.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                          {condition.category}
                        </span>
                        {condition.beforeAfterPair && (
                          <span className="px-2 py-0.5 rounded-full bg-brand-accent/90 backdrop-blur-md text-[10px] font-bold text-white">
                            B/A Slider
                          </span>
                        )}
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[10px] font-bold text-foreground">
                        {condition.galleryImages.length} Photos
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {condition.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        /{condition.slug}
                      </p>
                      <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed">
                        {condition.hookSubtitle || condition.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                    <Link
                      href={`/${condition.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground/60 hover:text-brand-accent"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View Page</span>
                    </Link>

                    <button
                      onClick={() => {
                        setEditingCondition(condition);
                        setIsConditionModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" />
                      <span>Edit Media & Text</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Blog Editor Modal */}
      <BlogEditorModal
        blog={editingBlog}
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onSave={refreshData}
      />

      {/* Condition Editor Modal */}
      <ConditionEditorModal
        condition={editingCondition}
        isOpen={isConditionModalOpen}
        onClose={() => setIsConditionModalOpen(false)}
        onSave={refreshData}
      />
    </div>
  );
}
