'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Upload, Plus, Trash2, CheckCircle2, Star, Sparkles, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { ConditionData, ConditionMediaItem, BeforeAfterPair, getConditionBeforeAfterPairs, saveCondition } from '@/lib/cms-store';
import { convertToWebP } from '@/lib/image-utils';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

interface ConditionEditorModalProps {
  condition: ConditionData | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const ConditionEditorModal: React.FC<ConditionEditorModalProps> = ({
  condition,
  isOpen,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(condition?.title || '');
  const [subtitle, setSubtitle] = useState(condition?.subtitle || '');
  const [hookSubtitle, setHookSubtitle] = useState(condition?.hookSubtitle || '');
  const [description, setDescription] = useState(condition?.description || '');
  const [keyBenefitsText, setKeyBenefitsText] = useState(condition?.keyBenefits?.join('\n') || '');
  
  // Hero Image (WebP)
  const [heroImage, setHeroImage] = useState(condition?.heroImage || '/service-clinical-derm.png');
  
  // Multiple Gallery Images (WebP)
  const [galleryImages, setGalleryImages] = useState<ConditionMediaItem[]>(condition?.galleryImages || []);
  const [newImageCaption, setNewImageCaption] = useState('');

  // Multiple Before / After Pairs
  const [beforeAfterPairs, setBeforeAfterPairs] = useState<BeforeAfterPair[]>(
    condition ? getConditionBeforeAfterPairs(condition) : []
  );
  const [hasBeforeAfter, setHasBeforeAfter] = useState(
    (condition ? getConditionBeforeAfterPairs(condition).length > 0 : false)
  );
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const [converting, setConverting] = useState(false);

  // Sync state whenever opened with a new condition
  useEffect(() => {
    if (condition) {
      setTitle(condition.title || '');
      setSubtitle(condition.subtitle || '');
      setHookSubtitle(condition.hookSubtitle || '');
      setDescription(condition.description || '');
      setKeyBenefitsText(condition.keyBenefits?.join('\n') || '');
      setHeroImage(condition.heroImage || '/service-clinical-derm.png');
      setGalleryImages(condition.galleryImages || []);
      const pairs = getConditionBeforeAfterPairs(condition);
      setBeforeAfterPairs(pairs);
      setHasBeforeAfter(pairs.length > 0);
      setSelectedCaseIdx(0);
    }
  }, [condition]);

  if (!isOpen || !condition) return null;

  const activeCase = beforeAfterPairs[selectedCaseIdx] || beforeAfterPairs[0];

  // Handle Hero Image Upload (Auto-WebP)
  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setConverting(true);
      const webp = await convertToWebP(file, 1200, 1200, 0.85);
      setHeroImage(webp);
    } catch {
      alert('Failed to process WebP image.');
    } finally {
      setConverting(false);
    }
  };

  // Handle Adding Additional Gallery Image (Auto-WebP)
  const handleAddGalleryImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setConverting(true);
      const webp = await convertToWebP(file, 1200, 1200, 0.85);
      const newItem: ConditionMediaItem = {
        id: `img-${Date.now()}`,
        url: webp,
        caption: newImageCaption.trim() || `${title} Clinical Case`,
        type: 'gallery'
      };
      setGalleryImages([...galleryImages, newItem]);
      setNewImageCaption('');
    } catch {
      alert('Failed to process WebP image.');
    } finally {
      setConverting(false);
    }
  };

  const handleRemoveGalleryImage = (id: string) => {
    setGalleryImages(galleryImages.filter((img) => img.id !== id));
  };

  const handleSetGalleryImageAsHero = (url: string) => {
    setHeroImage(url);
  };

  // Multiple Before/After Management
  const handleAddBeforeAfterCase = () => {
    const newCase: BeforeAfterPair = {
      id: `ba-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
      title: `Case ${beforeAfterPairs.length + 1}: Documented Transformation`,
      beforeImage: '/process/step-01-dermoscopy.jpg',
      afterImage: '/process/step-03-laser-suite.jpg',
      patientAge: '24 Years Old',
      treatmentDuration: '8 Weeks Protocol'
    };
    const nextPairs = [...beforeAfterPairs, newCase];
    setBeforeAfterPairs(nextPairs);
    setSelectedCaseIdx(nextPairs.length - 1);
    setHasBeforeAfter(true);
  };

  const handleRemoveBeforeAfterCase = (id: string) => {
    const filtered = beforeAfterPairs.filter((p) => p.id !== id);
    setBeforeAfterPairs(filtered);
    if (selectedCaseIdx >= filtered.length) {
      setSelectedCaseIdx(Math.max(0, filtered.length - 1));
    }
    if (filtered.length === 0) {
      setHasBeforeAfter(false);
    }
  };

  const handleUpdateActiveCase = (updates: Partial<BeforeAfterPair>) => {
    setBeforeAfterPairs((prev) => {
      const copy = [...prev];
      if (copy[selectedCaseIdx]) {
        copy[selectedCaseIdx] = { ...copy[selectedCaseIdx], ...updates };
      }
      return copy;
    });
  };

  const handleCaseImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setConverting(true);
      const webp = await convertToWebP(file, 1200, 1200, 0.85);
      if (type === 'before') handleUpdateActiveCase({ beforeImage: webp });
      if (type === 'after') handleUpdateActiveCase({ afterImage: webp });
    } catch {
      alert('Failed to process WebP image.');
    } finally {
      setConverting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const benefits = keyBenefitsText
      .split('\n')
      .map((b) => b.trim())
      .filter(Boolean);

    const validPairs = hasBeforeAfter ? beforeAfterPairs : [];

    const updatedCondition: ConditionData = {
      ...condition,
      title: title.trim(),
      subtitle: subtitle.trim(),
      hookSubtitle: hookSubtitle.trim(),
      description: description.trim(),
      keyBenefits: benefits.length > 0 ? benefits : condition.keyBenefits,
      heroImage,
      galleryImages,
      beforeAfterPairs: validPairs,
      beforeAfterPair: validPairs.length > 0 ? {
        beforeImage: validPairs[0].beforeImage,
        afterImage: validPairs[0].afterImage,
        title: validPairs[0].title
      } : undefined,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    saveCondition(updatedCondition);
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
              Condition & Treatment Media Manager
            </span>
            <h2 className="text-xl font-serif italic text-foreground">
              Editing: {condition.title} (/{condition.slug})
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
          
          {/* Clinical Copy Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>Core Clinical Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-semibold text-foreground/80">Condition Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-semibold text-foreground/80">Subtitle / Tagline</label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Hero Hook / Subheading</label>
              <input
                type="text"
                value={hookSubtitle}
                onChange={(e) => setHookSubtitle(e.target.value)}
                placeholder="e.g. Evidence-Based Clear Skin Protocols with Zero Steroid Rebound"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Clinical Description</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-foreground/80">Key Clinical Benefits (One per line)</label>
              <textarea
                rows={3}
                value={keyBenefitsText}
                onChange={(e) => setKeyBenefitsText(e.target.value)}
                placeholder="Polarized Dermoscopy Diagnosis&#10;Zero Steroid Dependency&#10;Indian Skin Safety"
                className="w-full p-2.5 rounded-xl border border-border bg-foreground/[0.02] text-foreground font-mono text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* PRIMARY HERO IMAGE SECTION */}
          <div className="p-5 rounded-2xl bg-brand-accent/[0.04] border border-brand-accent/20 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-foreground text-sm flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  <span>Landing Page & Condition Hero Image (WebP)</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  This image is displayed on the 3D rotating landing page carousel and at the top of the condition page.
                </p>
              </div>

              <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-brand-accent text-white font-bold text-xs hover:bg-[#5E2F1E] cursor-pointer shadow-xs">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Hero Image (WebP)</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleHeroImageUpload}
                />
              </label>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="relative h-32 w-48 rounded-xl overflow-hidden border border-border/80 bg-muted shrink-0">
                <Image src={heroImage} alt="Hero Preview" fill className="object-cover" />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-brand-accent text-white text-[9px] font-bold uppercase tracking-wider">
                  Active Hero
                </span>
              </div>
              <div className="text-xs space-y-1 text-foreground/70">
                <p><strong>Current Hero Source:</strong> <span className="font-mono text-[11px] truncate max-w-xs block">{heroImage.slice(0, 50)}...</span></p>
                <p className="text-muted-foreground">Any image uploaded here is automatically converted to WebP format.</p>
              </div>
            </div>
          </div>

          {/* MULTIPLE GALLERY IMAGES SECTION */}
          <div className="p-5 rounded-2xl bg-foreground/[0.02] border border-border space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-foreground text-sm flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-brand-accent" />
                  <span>Condition Multiple Images Gallery ({galleryImages.length} Images)</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Add multiple clinical procedure, treatment suites, and case photos for this condition.
                </p>
              </div>

              {/* Add New Gallery Image */}
              <label className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-border text-foreground font-bold text-xs hover:bg-foreground/5 cursor-pointer shadow-xs self-start sm:self-auto">
                <Plus className="w-3.5 h-3.5 text-brand-accent" />
                <span>Add WebP Image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAddGalleryImage}
                />
              </label>
            </div>

            {/* Gallery Grid */}
            {galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {galleryImages.map((img) => (
                  <div key={img.id} className="relative rounded-xl overflow-hidden border border-border bg-white p-2 space-y-2 shadow-2xs">
                    <div className="relative h-28 w-full rounded-lg overflow-hidden bg-muted">
                      <Image src={img.url} alt={img.caption} fill className="object-cover" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground truncate max-w-[140px] text-[11px]">
                        {img.caption}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleSetGalleryImageAsHero(img.url)}
                          title="Set as Hero Image"
                          className="px-2 py-0.5 rounded bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white font-bold text-[10px] transition-colors"
                        >
                          Make Hero
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(img.id)}
                          className="p-1 text-foreground/40 hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center border border-dashed border-border rounded-xl text-xs text-muted-foreground">
                No additional gallery images added yet. Click &quot;Add WebP Image&quot; above to add multiple photos for this condition.
              </div>
            )}
          </div>

          {/* MULTI-CASE BEFORE / AFTER COMPARISON SECTION */}
          <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-sm flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-accent" />
                    <span>Clinical Before / After Cases ({beforeAfterPairs.length})</span>
                  </h3>
                  {hasBeforeAfter && beforeAfterPairs.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold">
                      {beforeAfterPairs.length} {beforeAfterPairs.length === 1 ? 'Case' : 'Cases'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Support multiple documented cases with split interactive sliders on the condition page.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasBeforeAfter}
                    onChange={(e) => {
                      const val = e.target.checked;
                      setHasBeforeAfter(val);
                      if (val && beforeAfterPairs.length === 0) {
                        handleAddBeforeAfterCase();
                      }
                    }}
                    className="rounded text-brand-accent focus:ring-brand-accent"
                  />
                  <span>Enable Before/After</span>
                </label>

                {hasBeforeAfter && (
                  <button
                    type="button"
                    onClick={handleAddBeforeAfterCase}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand-accent text-white text-xs font-bold hover:bg-[#5E2F1E] transition-colors cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Case</span>
                  </button>
                )}
              </div>
            </div>

            {hasBeforeAfter && (
              <div className="space-y-4 pt-2">
                {/* Case Switcher Tabs */}
                {beforeAfterPairs.length > 0 ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-2">
                      {beforeAfterPairs.map((pair, idx) => (
                        <button
                          key={pair.id || idx}
                          type="button"
                          onClick={() => setSelectedCaseIdx(idx)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedCaseIdx === idx
                              ? 'bg-brand-accent text-white shadow-xs'
                              : 'bg-white border border-border text-foreground/70 hover:text-foreground'
                          }`}
                        >
                          <span>Case {idx + 1}</span>
                          <span className="text-[10px] opacity-75 font-normal truncate max-w-[120px]">
                            {pair.title}
                          </span>
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddBeforeAfterCase}
                        className="px-2.5 py-1.5 rounded-xl border border-dashed border-brand-accent/40 text-brand-accent text-xs font-bold hover:bg-brand-accent/5 transition-colors cursor-pointer"
                      >
                        + Add Case
                      </button>
                    </div>

                    {/* Active Case Editor */}
                    {activeCase && (
                      <div className="space-y-3.5 bg-white p-4 rounded-2xl border border-border shadow-xs">
                        <div className="flex items-center justify-between pb-1 border-b border-border/40">
                          <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                            Editing Case {selectedCaseIdx + 1} Details
                          </span>
                          {beforeAfterPairs.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveBeforeAfterCase(activeCase.id)}
                              className="text-xs text-destructive hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete this Case</span>
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2 space-y-1">
                            <label className="font-semibold text-xs text-foreground/80">Case Comparison Title</label>
                            <input
                              type="text"
                              value={activeCase.title || ''}
                              onChange={(e) => handleUpdateActiveCase({ title: e.target.value })}
                              placeholder="e.g. Active Cystic Acne Remission • 8 Weeks"
                              className="w-full p-2.5 rounded-xl border border-border bg-[#FAF7F2] text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="font-semibold text-xs text-foreground/80">Protocol / Duration</label>
                            <input
                              type="text"
                              value={activeCase.treatmentDuration || ''}
                              onChange={(e) => handleUpdateActiveCase({ treatmentDuration: e.target.value })}
                              placeholder="e.g. 4 Sessions • 12 Weeks"
                              className="w-full p-2.5 rounded-xl border border-border bg-[#FAF7F2] text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-foreground/70">Before Photo (Auto WebP)</span>
                              <label className="px-2.5 py-1 rounded-lg bg-white border border-border text-[11px] font-bold text-foreground hover:bg-foreground/5 cursor-pointer shadow-xs">
                                Upload Photo
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handleCaseImageUpload(e, 'before')}
                                />
                              </label>
                            </div>
                            <div className="relative h-32 w-full rounded-xl overflow-hidden border border-border bg-muted">
                              <Image src={activeCase.beforeImage || '/process/step-01-dermoscopy.jpg'} alt="Before" fill className="object-cover" />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-foreground/70">After Photo (Auto WebP)</span>
                              <label className="px-2.5 py-1 rounded-lg bg-white border border-border text-[11px] font-bold text-foreground hover:bg-foreground/5 cursor-pointer shadow-xs">
                                Upload Photo
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => handleCaseImageUpload(e, 'after')}
                                />
                              </label>
                            </div>
                            <div className="relative h-32 w-full rounded-xl overflow-hidden border border-border bg-muted">
                              <Image src={activeCase.afterImage || '/process/step-03-laser-suite.jpg'} alt="After" fill className="object-cover" />
                            </div>
                          </div>
                        </div>

                        {/* Live Preview for this active case */}
                        <div className="pt-2 max-w-md">
                          <span className="text-xs font-semibold text-foreground/70 block mb-1">
                            Live Slider Preview for Case {selectedCaseIdx + 1}:
                          </span>
                          <BeforeAfterSlider
                            key={`${activeCase.id}-${activeCase.beforeImage}-${activeCase.afterImage}`}
                            beforeImage={activeCase.beforeImage || '/process/step-01-dermoscopy.jpg'}
                            afterImage={activeCase.afterImage || '/process/step-03-laser-suite.jpg'}
                            badge={activeCase.title || 'Clinical Transformation'}
                          />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-6 text-center border border-dashed border-border rounded-xl text-xs text-muted-foreground">
                    No Before/After cases added. Click &quot;Add New Case&quot; to configure documented patient progression.
                  </div>
                )}
              </div>
            )}
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
              <span>Save Condition Media & Text</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
