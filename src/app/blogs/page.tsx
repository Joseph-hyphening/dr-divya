'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { FooterSection } from '@/components/sections/Footer';
import { getBlogs, BlogArticle, initialBlogs } from '@/lib/cms-store';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck, 
  Tag 
} from 'lucide-react';

const PAGE_SIZE = 12;

function BlogThumbImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const fallback = '/service-clinical-derm.png';
  const initial = (src && typeof src === 'string' && src.trim().length > 0) ? src.trim() : fallback;
  const [imgSrc, setImgSrc] = useState(initial);
  const [error, setError] = useState(false);

  useEffect(() => {
    const valid = (src && typeof src === 'string' && src.trim().length > 0) ? src.trim() : fallback;
    setImgSrc(valid);
    setError(false);
  }, [src]);

  const activeSrc = error ? fallback : imgSrc;
  const isExternal = activeSrc.startsWith('http://') || activeSrc.startsWith('https://') || activeSrc.startsWith('//');

  if (isExternal) {
    return (
      <img
        src={activeSrc}
        alt={alt || 'Dr. Divya Sharma Dermatology'}
        onError={() => setError(true)}
        className={className || 'w-full h-full object-cover'}
        loading="lazy"
        style={{ position: 'absolute', height: '100%', width: '100%', inset: 0 }}
      />
    );
  }

  return (
    <Image
      src={activeSrc}
      alt={alt || 'Dr. Divya Sharma Dermatology'}
      fill
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogArticle[]>(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const loaded = getBlogs();
    if (loaded && loaded.length > 0) {
      setBlogs(loaded);
    }
  }, []);

  // Reset to page 1 on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const categories = useMemo(() => {
    return ['all', ...Array.from(new Set(blogs.map((b) => b.category)))];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCat = selectedCategory === 'all' || blog.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE) || 1;
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredBlogs.slice(start, start + PAGE_SIZE);
  }, [filteredBlogs, currentPage]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col selection:bg-brand-accent/20">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 w-full">
        {/* Page Hero Banner */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Clinical Knowledge Library</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            Dr. Divya’s Skin & Hair Health Archive
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            Over 330+ evidence-based dermatology articles, clinical guides, and laser science breakdowns authored by MBBS Gold Medalist & MD Dermatologist Dr. Divya Sharma.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="space-y-6 pb-2 border-b border-border/60">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map((cat) => {
                const count = cat === 'all' ? blogs.length : blogs.filter(b => b.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-brand-accent text-white shadow-xs'
                        : 'bg-white border border-border/80 text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat ? 'bg-white/25 text-white' : 'bg-foreground/5 text-foreground/50'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 330+ articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border bg-white text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all"
              />
            </div>
          </div>

          {/* Results Summary & Pagination Info */}
          <div className="flex items-center justify-between text-xs text-foreground/60 px-1">
            <span>
              Showing <strong>{filteredBlogs.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}</strong>–
              <strong>{Math.min(currentPage * PAGE_SIZE, filteredBlogs.length)}</strong> of <strong>{filteredBlogs.length}</strong> articles
              {selectedCategory !== 'all' ? ` in ${selectedCategory}` : ''}
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-brand-accent hover:underline font-semibold"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Blogs Grid */}
        {paginatedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedBlogs.map((blog) => (
              <article
                key={blog.id}
                className="rounded-3xl bg-white border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Media Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#F2EDE4]">
                    {blog.imageMode === 'single' ? (
                      <BlogThumbImage
                        src={blog.singleImage || '/service-clinical-derm.png'}
                        alt={blog.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="grid grid-cols-2 h-full w-full">
                        <div className="relative h-full">
                          <BlogThumbImage
                            src={blog.beforeAfter?.beforeImage || '/process/step-01-dermoscopy.jpg'}
                            alt="Before"
                            className="object-cover"
                          />
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold">
                            Before
                          </span>
                        </div>
                        <div className="relative h-full border-l border-white">
                          <BlogThumbImage
                            src={blog.beforeAfter?.afterImage || '/process/step-03-laser-suite.jpg'}
                            alt="After"
                            className="object-cover"
                          />
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold">
                            After
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-brand-accent shadow-xs">
                        {blog.category}
                      </span>
                      {blog.imageMode === 'before_after' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                          B/A Case
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-muted-foreground" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Internal link tags */}
                    {blog.internalLinks && blog.internalLinks.length > 0 && (
                      <div className="pt-1 flex flex-wrap gap-1">
                        {blog.internalLinks.slice(0, 2).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-brand-accent/5 hover:bg-brand-accent/15 text-brand-accent font-semibold transition-colors"
                          >
                            #{link.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-border/40 mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-medium truncate max-w-[170px]">
                    By {blog.author.split(',')[0]}
                  </span>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-3xl border border-border space-y-3">
            <BookOpen className="w-10 h-10 text-brand-accent mx-auto" />
            <h3 className="text-base font-bold text-foreground">No articles matched your filter</h3>
            <p className="text-xs text-muted-foreground">Try selecting &quot;All&quot; categories or clearing your search term.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-brand-accent text-white font-bold text-xs shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Numbered Pagination Bar */}
        {totalPages > 1 && (
          <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60">
            <div className="text-xs text-foreground/60">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> ({filteredBlogs.length} total articles)
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-border bg-white text-foreground/70 hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers().map((p, idx) => {
                if (p === '...') {
                  return (
                    <span key={`dots-${idx}`} className="px-2 text-xs text-foreground/40 select-none">
                      ...
                    </span>
                  );
                }
                const pageNum = p as number;
                return (
                  <button
                    key={`page-${pageNum}`}
                    onClick={() => handlePageChange(pageNum)}
                    className={`min-w-[36px] h-9 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-brand-accent text-white shadow-xs'
                        : 'bg-white border border-border text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-border bg-white text-foreground/70 hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
