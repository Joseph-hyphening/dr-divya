'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Calendar, Info, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Step = 'init' | 'procedure' | 'name' | 'phone' | 'date' | 'time' | 'done';

type Message = {
  role: 'bot' | 'user';
  content: string;
  time: string;
  options?: string[];
};

const getNextDays = (count: number) => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= count; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    days.push(nextDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
  }
  return days;
};

export const ChatbotSection = ({ isFloating = false }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<Step>('init');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      content: "Hello! I'm your automated Clinic Assistant. Are you looking to book an appointment or inquire about a procedure?", 
      time: 'Now', 
      options: ['Book Appointment', 'Inquire Procedure'] 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [collectedData, setCollectedData] = useState({
    request_type: '',
    preferred_procedure: '',
    name: '',
    phone: '',
    preferred_date: '',
    preferred_time: ''
  });
  
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const lastMessage = messages[messages.length - 1];
  const hasOptions = lastMessage?.role === 'bot' && lastMessage?.options;
  const isDone = step === 'done';

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text, time: 'Now' }]);
    setInput('');
    setIsTyping(true);

    const userResponse = text.trim();

    setTimeout(async () => {
      let response = "";
      let nextStep = step;
      let newCollectedData = { ...collectedData };
      let newOptions: string[] | undefined;

      if (step === 'init') {
        newCollectedData.request_type = userResponse;
        if (userResponse === 'Book Appointment') {
          response = `Great! Could I please have your full name?`;
          nextStep = 'name';
        } else {
          response = `Got it. Which procedure are you interested in?`;
          nextStep = 'procedure';
        }
      } else if (step === 'procedure') {
        newCollectedData.preferred_procedure = userResponse;
        response = `Great! Could I please have your full name?`;
        nextStep = 'name';
      } else if (step === 'name') {
        newCollectedData.name = userResponse;
        response = `Thank you, ${userResponse}. What is your phone number?`;
        nextStep = 'phone';
      } else if (step === 'phone') {
        newCollectedData.phone = userResponse;
        response = `Got it. What date would you prefer? Please select an option from below:`;
        nextStep = 'date';
        newOptions = getNextDays(5);
      } else if (step === 'date') {
        newCollectedData.preferred_date = userResponse;
        response = `Thanks. And what time works best for you?`;
        nextStep = 'time';
      } else if (step === 'time') {
        newCollectedData.preferred_time = userResponse;
        response = `Thank you! Saving your request...`;
        
        try {
          const res = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              patient_name: newCollectedData.name,
              phone_number: newCollectedData.phone,
              preferred_date: newCollectedData.preferred_date,
              preferred_time: newCollectedData.preferred_time,
              preferred_procedure: newCollectedData.request_type === 'Book Appointment' ? null : newCollectedData.preferred_procedure,
              request_type: newCollectedData.request_type,
            })
          });
          const result = await res.json();
          if (result.success) {
            response = `Booking saved successfully! Our admin team will get back to you and contact you soon.`;
          } else {
            response = `Something went wrong saving your request, but our team has been notified offline.`;
          }
        } catch (e) {
          response = `Something went wrong saving your request, but our team has been notified offline.`;
        }

        nextStep = 'done';
      } else {
        response = `Our admin team will be in touch with you shortly.`;
      }
      
      setCollectedData(newCollectedData);
      setStep(nextStep);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', content: response, time: 'Just now', options: newOptions }]);
    }, 1000);
  };

  const ChatContent = (
    <div className={cn(
      "flex flex-col bg-white overflow-hidden shadow-2xl transition-all duration-500",
      isFloating 
        ? "fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] rounded-[2rem] z-50 border border-brand-accent/10" 
        : "relative z-10 w-full h-[600px] rounded-[3rem] border border-brand-accent/5"
    )}>
      {/* Header */}
      <div className="p-6 bg-brand-accent text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold">Clinic Assistant</h4>
            <div className="flex items-center gap-1.5 opacity-60 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Automated Response
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
      <div 
        ref={messagesContainerRef}
        className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide scroll-smooth"
      >
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex flex-col gap-2 max-w-[85%]",
              m.role === 'user' ? "ml-auto" : ""
            )}
          >
            <div className={cn(
               "flex gap-3",
               m.role === 'user' ? "flex-row-reverse" : ""
            )}>
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
            </div>
            
            {m.options && (
              <div className="flex flex-col gap-3 mt-4 ml-11">
                <span className="text-xs font-semibold text-brand-accent/60 uppercase tracking-wider mb-1">
                  Please select an option:
                </span>
                {m.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(opt)}
                    disabled={isTyping || messages.length - 1 !== i}
                    className="group relative w-full text-left px-5 py-4 bg-white border-2 border-brand-accent/20 rounded-2xl shadow-sm hover:border-brand-accent hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10"
                  >
                    <div className="flex items-center justify-between text-brand-accent group-disabled:text-brand-accent/60">
                      <span className="font-bold text-sm">{opt}</span>
                      <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-disabled:hidden" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex gap-2 p-4 bg-gray-50 rounded-2xl w-20 ml-11">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-100 bg-gray-50/30">
        {hasOptions ? (
          <div className="flex items-center justify-center h-12 text-sm font-medium text-brand-accent/50 bg-white border border-gray-200 border-dashed rounded-2xl">
            Please make a selection above to continue
          </div>
        ) : (
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl pl-5 pr-2 py-2 shadow-sm focus-within:border-brand-accent/40 focus-within:ring-4 focus-within:ring-brand-accent/10 transition-all"
          >
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isDone || isTyping}
              placeholder={isDone ? "Chat completed" : "Type your message..."} 
              className="flex-grow bg-transparent border-none outline-none text-sm placeholder:text-gray-400 disabled:opacity-50"
            />
            <button 
              type="submit" 
              disabled={isDone || isTyping || !input.trim()}
              className="w-10 h-10 rounded-xl bg-brand-accent text-white flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:shadow-none disabled:transform-none"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
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
    <section id="ai-assistant" className="bg-[#faf7f3] py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-4">Instant Assistance</h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-0 md:mb-8">Personalized <br /><span className="text-brand-accent italic font-serif">Skin Assistant</span></h3>
          <div className="hidden md:block">
            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              Got a concern? Our Automated Assistant provides you with instant guidance, procedure inquiries, and seamless appointment booking. 
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <p className="font-bold">Quick Appointment Booking</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Info className="h-5 w-5" />
                </div>
                <p className="font-bold">Procedure Inquiries</p>
              </div>
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

