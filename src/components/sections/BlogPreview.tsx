'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Sparkles, Clock, Calendar } from 'lucide-react';
import { getBlogs, BlogArticle, initialBlogs } from '@/lib/cms-store';

export const BlogPreview = () => {
  const [blogs, setBlogs] = useState<BlogArticle[]>(initialBlogs);

  const loadBlogs = () => {
    const list = getBlogs();
    if (list && list.length > 0) {
      setBlogs(list.slice(0, 3));
    }
  };

  useEffect(() => {
    loadBlogs();

    const handleUpdate = () => loadBlogs();
    window.addEventListener('dr_divya_cms_update', handleUpdate);
    return () => window.removeEventListener('dr_divya_cms_update', handleUpdate);
  }, []);

  return (
    <section className="bg-white py-24 px-4 sm:px-8 md:px-12 border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <header className="mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dermatology Knowledge Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground tracking-tight leading-tight">
              Latest Clinical Insights
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              Medical deep-dives, laser technology breakthroughs, and zero-steroid dermatology guides.
            </p>
          </div>
          <Link 
            href="/blogs"
            className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1.5 transition-transform"
          >
            <span>VIEW ALL ARTICLES ({getBlogs().length})</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-border/80 hover:border-brand-accent/30 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Media Banner: Single vs Before/After Split */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-muted m-3 mb-5">
                  {article.imageMode === 'before_after' && article.beforeAfter ? (
                    <div className="grid grid-cols-2 h-full w-full">
                      <div className="relative h-full">
                        <Image 
                          src={article.beforeAfter.beforeImage} 
                          alt={`${article.title} Before`} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold">
                          Before
                        </span>
                      </div>
                      <div className="relative h-full border-l border-white">
                        <Image 
                          src={article.beforeAfter.afterImage} 
                          alt={`${article.title} After`} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[9px] font-bold">
                          After
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Image 
                      src={article.singleImage || '/service-clinical-derm.png'} 
                      alt={article.title} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  )}

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-brand-accent text-[10px] font-extrabold uppercase tracking-wider shadow-xs flex items-center gap-1">
                      <Tag className="h-2.5 w-2.5" />
                      {article.category}
                    </span>
                    {article.imageMode === 'before_after' && (
                      <span className="px-2.5 py-1 bg-black/65 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                        B/A Case
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-4 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug group-hover:text-brand-accent transition-colors">
                    <Link href={`/blogs/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-foreground/70 line-clamp-2 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-border/40 flex items-center justify-between">
                <span className="text-[11px] text-foreground/60 font-semibold truncate max-w-[170px]">
                  Dr. Divya Sharma
                </span>
                <Link
                  href={`/blogs/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent hover:underline"
                >
                  <span>Read Case</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
