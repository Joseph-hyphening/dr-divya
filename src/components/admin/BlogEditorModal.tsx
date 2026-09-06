'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Upload, Plus, Trash2, CheckCircle2, Link2, Sparkles, Layers } from 'lucide-react';
import { BlogArticle, saveBlog, getConditions } from '@/lib/cms-store';
import { convertToWebP } from '@/lib/image-utils';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

interface BlogEditorModalProps {
  blog: BlogArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const BlogEditorModal: React.FC<BlogEditorModalProps> = ({
  blog,
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(blog?.title || '');
  const [slug, setSlug] = useState(blog?.slug || '');
  const [category, setCategory] = useState(blog?.category || 'Clinical Dermatology');
  const [readTime, setReadTime] = useState(blog?.readTime || '5 min read');
  const [author, setAuthor] = useState(blog?.author || 'Dr. Divya Sharma, MBBS (Gold Medalist), MD');
  const [excerpt, setExcerpt] = useState(blog?.excerpt || '');
  const [content, setContent] = useState(blog?.content || '');
  const [tags, setTags] = useState(blog?.tags?.join(', ') || 'Dermatology, Skin Care');
  const [imageMode, setImageMode] = useState<'single' | 'before_after'>(blog?.imageMode || 'single');

  // Single Image State
  const [singleImage, setSingleImage] = useState(blog?.singleImage || '/service-clinical-derm.png');

  // Before / After State
  const [beforeImage, setBeforeImage] = useState(blog?.beforeAfter?.beforeImage || '/process/step-01-dermoscopy.jpg');
  const [afterImage, setAfterImage] = useState(blog?.beforeAfter?.afterImage || '/process/step-03-laser-suite.jpg');
  const [beforeAfterLabel, setBeforeAfterLabel] = useState(blog?.beforeAfter?.label || 'Clinical Progression');

  // Internal Links State
  const [internalLinks, setInternalLinks] = useState<{ title: string; href: string }[]>(
    blog?.internalLinks || [
      { title: 'Acne & Pimples Care', href: '/acne-pimples' },
      { title: 'Melasma & Pigmentation', href: '/melasma' }
    ]
  );
  const [selectedConditionHref, setSelectedConditionHref] = useState('/acne-pimples');

  const [converting, setConverting] = useState(false);
  const availableConditions = getConditions();

  if (!isOpen) return null;

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!blog) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .slice(0, 60)
      );
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: 'single' | 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setConverting(true);
      // Converts any image (PNG, JPG) to an optimized WebP Base64 string!
      const webpUrl = await convertToWebP(file, 1200, 1200, 0.85);
      if (target === 'single') setSingleImage(webpUrl);
      if (target === 'before') setBeforeImage(webpUrl);
      if (target === 'after') setAfterImage(webpUrl);
    } catch (err) {
      alert('Error converting image to WebP. Please try another image.');
    } finally {
      setConverting(false);
    }
  };

  const handleAddInternalLink = () => {
    const found = availableConditions.find((c) => `/${c.slug}` === selectedConditionHref || c.slug === selectedConditionHref);
    if (!found) return;

    if (!internalLinks.some((l) => l.href === `/${found.slug}`)) {
      setInternalLinks([...internalLinks, { title: found.title, href: `/${found.slug}` }]);
    }
  };

  const handleRemoveInternalLink = (href: string) => {
    setInternalLinks(internalLinks.filter((l) => l.href !== href));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBlog: BlogArticle = {
      id: blog?.id || `blog-${Date.now()}`,
      title: title.trim(),
      slug: slug.trim() || `article-${Date.now()}`,
      excerpt: excerpt.trim(),
      category: category.trim(),
      readTime: readTime.trim(),
      author: author.trim(),
      date: blog?.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      imageMode,
      singleImage: imageMode === 'single' ? singleImage : undefined,
      beforeAfter: imageMode === 'before_after' ? {
        beforeImage,
        afterImage,
        label: beforeAfterLabel
      } : undefined,
      internalLinks,
      content: content.trim(),
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      published: true,
    };

    saveBlog(updatedBlog);
    onSave();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl border border-border w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-[#FAF7F2]">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
              {blog ? 'Edit Blog Article' : 'Compose New Medical Blog'}
            </span>
            <h2 className="text-xl font-serif italic text-foreground">
              {blog ? blog.title : 'New Dermatology Article'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-border/80 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Row 1: Title & Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Article Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. Advanced Q-Switched Laser Toning for Melasma"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="advanced-q-switched-laser-toning"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground font-mono text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
          </div>

          {/* Row 2: Category, Read Time, Author */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Acne & Laser Science"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Estimated Read Time</label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="6 min read"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="space-y-1.5">
            <label className="font-semibold text-foreground/80">Short Excerpt / Meta Description</label>
            <textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief 1-2 sentence medical summary of the article..."
              className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
            />
          </div>

          {/* FEATURED MEDIA SELECTION (Single vs Before/After) with WebP */}
          <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-foreground text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                  <span>Featured Visual Media (WebP Optimized)</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Choose between a single hero photograph or an interactive Before/After comparison slider.
                </p>
              </div>

              {/* Mode Toggle Buttons */}
              <div className="inline-flex p-1 rounded-xl bg-white border border-border gap-1 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setImageMode('single')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    imageMode === 'single'
                      ? 'bg-brand-accent text-white shadow-xs'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Single Image
                </button>
                <button
                  type="button"
                  onClick={() => setImageMode('before_after')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    imageMode === 'before_after'
                      ? 'bg-brand-accent text-white shadow-xs'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  Before / After Slider
                </button>
              </div>
            </div>

            {/* SINGLE IMAGE MODE */}
            {imageMode === 'single' && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-border/80 text-xs font-bold text-foreground hover:bg-foreground/5 cursor-pointer shadow-xs">
                    <Upload className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Upload Image (Auto-WebP)</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, 'single')}
                    />
                  </label>
                  {converting && <span className="text-xs text-brand-accent font-semibold">Converting to WebP...</span>}
                </div>

                <div className="relative h-44 sm:h-56 w-full max-w-md rounded-2xl overflow-hidden border border-border bg-muted">
                  <Image src={singleImage} alt="Single Preview" fill className="object-cover" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider">
                    WebP Ready
                  </span>
                </div>
              </div>
            )}

            {/* BEFORE / AFTER SLIDER MODE */}
            {imageMode === 'before_after' && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Before Upload */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-semibold text-xs text-foreground/80">Before Photo (WebP)</label>
                      <label className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-border text-[11px] font-bold text-foreground hover:bg-foreground/5 cursor-pointer">
                        <Upload className="w-3 h-3 text-brand-accent" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, 'before')}
                        />
                      </label>
                    </div>
                    <div className="relative h-32 w-full rounded-xl overflow-hidden border border-border bg-muted">
                      <Image src={beforeImage} alt="Before Preview" fill className="object-cover" />
                    </div>
                  </div>

                  {/* After Upload */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="font-semibold text-xs text-foreground/80">After Photo (WebP)</label>
                      <label className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-border text-[11px] font-bold text-foreground hover:bg-foreground/5 cursor-pointer">
                        <Upload className="w-3 h-3 text-brand-accent" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, 'after')}
                        />
                      </label>
                    </div>
                    <div className="relative h-32 w-full rounded-xl overflow-hidden border border-border bg-muted">
                      <Image src={afterImage} alt="After Preview" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-xs text-foreground/80">Comparison Timeframe / Badge</label>
                  <input
                    type="text"
                    value={beforeAfterLabel}
                    onChange={(e) => setBeforeAfterLabel(e.target.value)}
                    placeholder="e.g. 4 Sessions Fractional CO2 • 12 Weeks Follow-up"
                    className="w-full p-2.5 rounded-xl border border-border bg-white text-xs text-foreground focus:outline-none"
                  />
                </div>

                {/* Interactive Slider Live Preview */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-foreground/70 block mb-1.5">Interactive Preview:</span>
                  <div className="max-w-md">
                    <BeforeAfterSlider
                      beforeImage={beforeImage}
                      afterImage={afterImage}
                      badge={beforeAfterLabel}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INTERNAL LINKING MATRIX */}
          <div className="p-5 rounded-2xl bg-foreground/[0.02] border border-border/80 space-y-3">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-brand-accent" />
              <h3 className="font-bold text-foreground text-sm">Internal Clinical Linking</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Connect this blog article to related condition landing pages for direct patient conversion & SEO authority.
            </p>

            <div className="flex items-center gap-2">
              <select
                value={selectedConditionHref}
                onChange={(e) => setSelectedConditionHref(e.target.value)}
                className="p-2.5 rounded-xl border border-border bg-white text-xs text-foreground flex-1 focus:outline-none"
              >
                {availableConditions.map((c) => (
                  <option key={c.id} value={`/${c.slug}`}>
                    {c.title} (/{c.slug})
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={handleAddInternalLink}
                className="px-4 py-2.5 rounded-xl bg-brand-accent text-white font-bold text-xs hover:bg-[#5E2F1E] flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Link</span>
              </button>
            </div>

            {/* Configured Links */}
            <div className="flex flex-wrap gap-2 pt-1">
              {internalLinks.map((link) => (
                <span
                  key={link.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold"
                >
                  <span>{link.title} ({link.href})</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveInternalLink(link.href)}
                    className="hover:text-destructive transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Article Full Body Content */}
          <div className="space-y-1.5">
            <label className="font-semibold text-foreground/80">Article Content (Markdown supported)</label>
            <textarea
              rows={8}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write the medical article body here. Markdown headers (###), bullet points, and clinical notes are supported..."
              className="w-full p-3 rounded-xl border border-border bg-foreground/[0.02] text-foreground font-sans text-xs sm:text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
            />
          </div>

          {/* Tags */}
          <div className="space-y-1.5">
            <label className="font-semibold text-foreground/80">Tags (Comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Acne Scars, Laser Resurfacing, Indian Skin Safety"
              className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-border flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-border text-foreground/70 font-semibold hover:bg-foreground/5 cursor-pointer text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-brand-accent hover:bg-[#5E2F1E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-accent/15 cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save & Publish Blog</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
