'use client';

import React, { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  getBlogBySlug, 
  BlogArticle, 
  initialBlogs 
} from '@/lib/cms-store';
import { Header } from '@/components/layout/Header';
import { FooterSection } from '@/components/sections/Footer';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Tag, 
  Award,
  Phone,
  Layers,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

function SafeBlogHeaderImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
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
        className="w-full h-full object-cover"
        style={{ position: 'absolute', height: '100%', width: '100%', inset: 0 }}
      />
    );
  }

  return (
    <Image
      src={activeSrc}
      alt={alt || 'Dr. Divya Sharma Dermatology'}
      fill
      priority
      onError={() => setError(true)}
      className="object-cover"
    />
  );
}

export default function BlogDetailPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;
  const slug = decodeURIComponent(rawSlug || '');
  const [blog, setBlog] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const found = getBlogBySlug(slug);
    if (found) {
      setBlog(found);
    } else {
      const initial = initialBlogs.find(
        (b) => b.slug.toLowerCase() === slug.toLowerCase()
      );
      setBlog(initial || null);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center">
        <div className="text-sm font-semibold text-foreground/60 animate-pulse flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-brand-accent animate-spin" />
          <span>Loading Clinical Article...</span>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-foreground">Article Not Found</h1>
        <p className="text-sm text-muted-foreground max-w-md">
          The requested dermatology article could not be found or has been relocated in our archive.
        </p>
        <Link href="/blogs" className="px-5 py-2.5 rounded-full bg-brand-accent text-white text-xs font-bold uppercase tracking-wider shadow-xs">
          Back to Blog Library
        </Link>
      </div>
    );
  }

  const isHtml = /<[a-z][\s\S]*>/i.test(blog.content);

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col selection:bg-brand-accent/20">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/60 hover:text-brand-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Dermatology Articles (330+)</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-foreground/40">•</span>
            <span className="text-xs text-foreground/60 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-foreground/40" />
              {blog.readTime}
            </span>
            <span className="text-xs text-foreground/40">•</span>
            <span className="text-xs text-foreground/60 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-foreground/40" />
              {blog.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground leading-[1.18] tracking-tight">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed font-normal">
            {blog.excerpt}
          </p>

          {/* Author Credentials Badge */}
          <div className="pt-3 flex items-center gap-3.5 border-t border-border/60">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-accent/20 bg-brand-accent/10 shrink-0">
              <Image src="/dr-divya.png" alt="Dr. Divya Sharma" fill className="object-cover object-top" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">{blog.author}</div>
              <div className="text-[11px] text-muted-foreground">MBBS (Gold Medalist) • Doctor of Medicine (MD) in Dermatology</div>
            </div>
          </div>
        </header>

        {/* FEATURED VISUAL MEDIA: Single Image vs Before/After Slider */}
        <section className="space-y-2">
          {blog.imageMode === 'before_after' && blog.beforeAfter ? (
            <div className="space-y-2">
              <div className="p-3 bg-white rounded-3xl border border-border/80 shadow-md">
                <BeforeAfterSlider
                  beforeImage={blog.beforeAfter.beforeImage}
                  afterImage={blog.beforeAfter.afterImage}
                  badge={blog.beforeAfter.label}
                  className="rounded-2xl"
                />
              </div>
              <p className="text-center text-xs text-muted-foreground italic">
                *Clinical photographic progression. Individual response may vary based on skin phototype and compliance.
              </p>
            </div>
          ) : (
            <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-border/80 shadow-md bg-[#F2EDE4]">
              <SafeBlogHeaderImage
                src={blog.singleImage || '/service-clinical-derm.png'}
                alt={blog.title || 'Dermatology Article'}
              />
            </div>
          )}
        </section>

        {/* INTERNAL CLINICAL LINKS MATRIX */}
        {blog.internalLinks && blog.internalLinks.length > 0 && (
          <aside className="p-5 sm:p-6 rounded-3xl bg-white border border-border/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-brand-accent">
              <Layers className="w-4 h-4" />
              <h3 className="text-xs font-bold uppercase tracking-wider">Related Clinical Treatment Suites</h3>
            </div>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Explore specialized diagnostic protocols and procedure suites related to this topic:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {blog.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-3 rounded-xl bg-foreground/[0.02] hover:bg-brand-accent hover:text-white text-foreground text-xs font-semibold border border-border/60 transition-all group"
                >
                  <span>{link.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-accent group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </aside>
        )}

        {/* ARTICLE BODY CONTENT */}
        <article className="prose prose-neutral max-w-none space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base font-normal">
          {isHtml ? (
            <div
              className="space-y-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-serif [&>h2]:text-foreground [&>h2]:pt-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:pt-3 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            blog.content.split('\n\n').map((block, idx) => {
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold font-serif italic text-foreground pt-4">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-bold font-serif italic text-foreground pt-6">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {block}
                </p>
              );
            })
          )}
        </article>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2 text-xs">
            <Tag className="w-3.5 h-3.5 text-foreground/40" />
            {blog.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-white border border-border text-foreground/70 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Doctor Consultation CTA Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-brand-accent/[0.08] via-white to-amber-500/[0.05] border border-brand-accent/20 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
              Expert Dermatological Consultation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Have questions about your skin or hair condition?
            </h3>
            <p className="text-xs text-foreground/70 max-w-md">
              Schedule a personalized diagnostic consultation with Dr. Divya Sharma at our Whitefield clinic or book an online video consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link href="/book-an-appointment" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full w-full shadow-md text-xs font-bold uppercase tracking-wider px-6">
                Book Consultation
              </Button>
            </Link>
            <a href="tel:+919620638388" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="rounded-full w-full text-xs font-bold px-5">
                <Phone className="w-3.5 h-3.5 text-brand-accent mr-1.5" />
                Call Clinic
              </Button>
            </a>
          </div>
        </div>

      </main>

      <FooterSection />
    </div>
  );
}
