'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useToast } from '../ui/Toast';
import { Button } from '../ui/Button';
import { openContactEmail } from '@/lib/contact';

interface ContactFormProps {
  preselectedDivision?: string;
  preselectedMember?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  preselectedDivision = 'Programming',
  preselectedMember,
}) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(preselectedDivision);
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      setStatus('error');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      setStatus('error');
      return;
    }

    if (website.trim()) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          scope,
          message,
          member: preselectedMember,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your message right now.');
      }

      setStatus('success');
      toast({
        title: 'Message Sent',
        message: data.message || 'Your message was sent successfully.',
        type: 'success',
      });
    } catch (error) {
      const errorText = error instanceof Error ? error.message : 'Unable to send your message right now.';
      setErrorMessage(errorText);
      setStatus('error');

      if (errorText.includes('Email delivery is not configured yet')) {
        openContactEmail({ name, email, projectType, scope, message, member: preselectedMember });
        toast({
          title: 'Email fallback',
          message: 'No delivery service is configured yet, so your mail app was opened instead.',
          type: 'info',
        });
      }
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setScope('');
    setMessage('');
    setWebsite('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-10 shadow-depth-2 relative">
      {/* Top telemetry status line */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A2230]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="tech-mono text-xs text-[#00E5FF] tracking-widest uppercase">
            EMAIL INQUIRY
          </span>
        </div>
        <span className="tech-mono text-[10px] text-[#64748B]">
          OPENS YOUR EMAIL APP
        </span>
      </div>

      {preselectedMember && (
        <div className="mb-6 p-3 bg-[#121824] border border-[#00E5FF]/30 text-xs tech-mono text-[#00E5FF] flex items-center justify-between">
          <span>Routing inquiry to: {preselectedMember}</span>
          <span className="text-[#94A3B8]">DIRECT CHANNEL</span>
        </div>
      )}

      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-bold text-[#F8FAFC]">
            Email Draft Opened
          </h3>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-[#F8FAFC] font-semibold">{name}</span>. Your email app should have opened with the inquiry addressed to our {projectType} team. Review it and press Send to submit it.
          </p>
          <div className="pt-4">
            <Button variant="secondary" onClick={handleReset} icon={<RefreshCw size={14} />}>
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === 'error' && errorMessage && (
            <div
              role="alert"
              className="p-3.5 bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#EF4444] flex items-center gap-2 tech-mono"
            >
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
              >
                Full Name <span className="text-[#00E5FF]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
              >
                Work / Professional Email <span className="text-[#00E5FF]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="contact-project-type"
                className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
              >
                Project Type <span className="text-[#00E5FF]">*</span>
              </label>
              <select
                id="contact-project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors disabled:opacity-50"
              >
                <option value="Programming">Programming</option>
                <option value="Graphics">Graphics Design</option>
                <option value="Robotics">Robotics & IOT</option>
                <option value="Web & IT">Web & IT Solutions</option>
                <option value="Other">Other / Multi-disciplinary</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-scope"
                className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
              >
                Optional Scope / Timeline
              </label>
              <input
                id="contact-scope"
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="EG. 1-3 Months / Production Phase"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2"
            >
              Message / Technical Requirements <span className="text-[#00E5FF]">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Outline your project scope, technical specifications, existing stack, and timeline constraints..."
              className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] p-4 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors disabled:opacity-50"
            />
          </div>

          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#1A2230]">
            <span className="text-xs text-[#64748B] tech-mono">
              DIRECT DISPATCH TO ENGINEERING DIVISION
            </span>

            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<ArrowRight size={16} />}
            >
              Send Message →
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
