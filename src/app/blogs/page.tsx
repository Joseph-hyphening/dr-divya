'use client';

import React, { useState, useEffect } from 'react';
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
  Layers, 
  ShieldCheck, 
  Tag 
} from 'lucide-react';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogArticle[]>(initialBlogs);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loaded = getBlogs();
    if (loaded && loaded.length > 0) {
      setBlogs(loaded);
    }
  }, []);

  const categories = ['all', ...Array.from(new Set(blogs.map((b) => b.category)))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCat = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesQuery =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col selection:bg-brand-accent/20">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Page Hero Banner */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evidence-Based Dermatology Articles</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground tracking-tight leading-tight">
            Dr. Divya’s Skin & Hair Health Blog
          </h1>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            Medical insights, laser science, and honest dermatologist advice for Indian skin types. Reviewed personally by MBBS Gold Medalist & MD Dermatologist Dr. Divya Sharma.
          </p>
        </header>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-border/60">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-accent text-white shadow-xs'
                    : 'bg-white border border-border/80 text-foreground/70 hover:text-foreground hover:bg-foreground/[0.03]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground/40">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-9 pr-4 py-2 rounded-full border border-border bg-white text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
            />
          </div>
        </div>

        {/* Blogs Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="rounded-3xl bg-white border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Media Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    {blog.imageMode === 'single' ? (
                      <Image
                        src={blog.singleImage || '/service-clinical-derm.png'}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold">
                            Before
                          </span>
                        </div>
                        <div className="relative h-full border-l border-white">
                          <Image
                            src={blog.beforeAfter?.afterImage || '/process/step-03-laser-suite.jpg'}
                            alt="After"
                            fill
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

                    <h2 className="text-lg font-bold text-foreground leading-snug group-hover:text-brand-accent transition-colors">
                      <Link href={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Internal link tags */}
                    {blog.internalLinks && blog.internalLinks.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1">
                        {blog.internalLinks.map((link) => (
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
                <div className="p-6 pt-0 border-t border-border/40 mt-4 flex items-center justify-between">
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
          <div className="p-12 text-center bg-white rounded-3xl border border-border space-y-3">
            <BookOpen className="w-8 h-8 text-brand-accent mx-auto" />
            <h3 className="text-base font-bold text-foreground">No articles matched your filter</h3>
            <p className="text-xs text-muted-foreground">Try selecting &quot;All&quot; categories or clearing your search term.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-brand-accent text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
