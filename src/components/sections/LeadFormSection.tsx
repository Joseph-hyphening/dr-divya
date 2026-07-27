'use client';

import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle2, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadFormSectionProps {
  treatmentName?: string;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  treatmentName = "General Consultation"
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation-form" className="py-16 lg:py-24 bg-gradient-to-b from-background via-accent/30 to-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Easy Online Appointment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Book Your Private Consultation for <span className="text-primary">{treatmentName}</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Get personalized medical diagnosis and advanced treatment recommendations directly from Dr. Divya Sharma, Gold Medalist Dermatologist.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">100% Confidential & Professional</h4>
                  <p className="text-xs text-muted-foreground">Your personal data and health concerns are treated with utmost privacy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-primary/10 text-primary rounded-lg mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Minimal Wait Times</h4>
                  <p className="text-xs text-muted-foreground">Scheduled priority appointments at Whitefield, Bangalore clinic.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-card border border-border/60 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Clinic Address:</p>
              <p>AECS Layout, Whitefield, Bengaluru, Karnataka 560037</p>
              <p className="text-primary font-medium">Direct Line: +91 96206 38388</p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Appointment Request Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Our clinic care coordinator will call you back shortly to confirm your slot for <span className="font-semibold text-primary">{treatmentName}</span>.
                  </p>
                  <Button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', preferredDate: '', notes: '' }); }}
                    variant="outline"
                    className="mt-4 rounded-full text-xs"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-border/60 pb-3">
                    <h3 className="text-xl font-bold text-foreground">Schedule Consultation</h3>
                    <p className="text-xs text-muted-foreground">Fill in your details below and we will contact you within 2 business hours.</p>
                  </div>

                  {/* Selected Treatment Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Selected Treatment / Concern</label>
                    <input
                      type="text"
                      readOnly
                      value={treatmentName}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-accent/30 text-foreground font-medium text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Email Address (Optional)</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3" />
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Preferred Consultation Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Brief Note on your skin/hair concern</label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-muted-foreground absolute left-3.5 top-3" />
                      <textarea
                        rows={2}
                        placeholder="Mention symptoms, duration, or previous treatments..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl py-6 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? "Submitting..." : `Confirm Booking Request for ${treatmentName}`}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
