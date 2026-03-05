'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronRight, Calendar, Info, MapPin, IndianRupee } from 'lucide-react';
import { cn } from '@/lib/utils';

const SUGGESTIONS = [
  { label: "Book Appointment", icon: Calendar },
  { label: "Symptom Checker", icon: Info },
  { label: "Clinic Location", icon: MapPin },
  { label: "Treatment Pricing", icon: IndianRupee },
];

export const ChatbotSection = ({ isFloating = false }) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hello! I'm your AI Skin Assistant. How can I help you today?", time: 'Now' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text, time: 'Now' }]);
    setInput('');
    setIsTyping(true);

    // Simulate Bot Response
    setTimeout(() => {
      setIsTyping(false);
      let response = "I've received your inquiry. A clinical coordinator will follow up, or you can use our instant booking system.";
      if (text.includes("Book")) response = "Great! I can help you schedule an appointment with Dr. Divya. Which date works best for you?";
      if (text.includes("Location")) response = "We are located at AECS Layout, Whitefield, Bangalore. Would you like the directions?";
      
      setMessages(prev => [...prev, { role: 'bot', content: response, time: 'Just now' }]);
    }, 1500);
  };

  const ChatContent = (
    <div className={cn(
      "flex flex-col bg-white overflow-hidden shadow-2xl transition-all duration-500",
      isFloating ? "fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] rounded-[2rem] z-50 border border-brand-accent/10" : "w-full h-[600px] rounded-[3rem] border border-brand-accent/5"
    )}>
      {/* Header */}
      <div className="p-6 bg-brand-accent text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold">AI Skin Assistant</h4>
            <div className="flex items-center gap-1.5 opacity-60 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Online & Ready
            </div>
          </div>
        </div>
        {isFloating && (
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex gap-3 max-w-[85%]",
              m.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
              m.role === 'bot' ? "bg-brand-accent/10 text-brand-accent" : "bg-gray-100 text-gray-400"
            )}>
              {m.role === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
            </div>
            <div className={cn(
              "p-4 rounded-2xl text-sm leading-relaxed",
              m.role === 'bot' ? "bg-brand-accent/5 text-foreground rounded-tl-none" : "bg-brand-accent text-white rounded-tr-none"
            )}>
              {m.content}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex gap-2 p-4 bg-gray-50 rounded-2xl w-20">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Suggested Chips */}
      <div className="px-6 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
        {SUGGESTIONS.map((s, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(s.label)}
            className="flex-shrink-0 px-4 py-2 border border-brand-accent/10 rounded-full text-xs font-bold text-brand-accent hover:bg-brand-accent/5 transition-colors flex items-center gap-2"
          >
            <s.icon className="h-3 w-3" />
            {s.label}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-100">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2 bg-gray-50 rounded-2xl px-4 py-2"
        >
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your concern..." 
            className="flex-grow bg-transparent border-none outline-none text-sm p-2"
          />
          <button type="submit" className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center hover:scale-105 transition-transform">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );

  if (isFloating) {
    return (
      <>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95 md:flex hidden"
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="z-50"
            >
              {ChatContent}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <section className="bg-[#faf7f3] py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Instant Assistance</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Personalized <br /><span className="text-brand-accent italic font-serif">Skin Assistant</span></h3>
          <p className="text-foreground/60 text-lg leading-relaxed mb-10">
            Got a concern? Our AI Assistant is trained on Dr. Divya&apos;s clinical protocols to provide you with instant guidance, symptom checking, and appointment scheduling. 
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Calendar className="h-5 w-5" />
              </div>
              <p className="font-bold">24/7 Appointment Booking</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Info className="h-5 w-5" />
              </div>
              <p className="font-bold">Clinical Grade Symptom Check</p>
            </div>
          </div>
        </div>
        <div className="relative group">
           <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform" />
           {ChatContent}
        </div>
      </div>
    </section>
  );
};
