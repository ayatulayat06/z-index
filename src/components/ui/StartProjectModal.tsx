'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { useToast } from './Toast';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { openContactEmail } from '@/lib/contact';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDivision?: string;
  preselectedMember?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  preselectedDivision = 'Programming',
  preselectedMember,
}) => {
  const { toast } = useToast();
  const [division, setDivision] = useState(preselectedDivision);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: 'Validation Notice',
        message: 'Please complete all required fields.',
        type: 'error',
      });
      return;
    }

    if (website.trim()) return;
    openContactEmail({ name, email, projectType: division, scope, message, member: preselectedMember });
    setSubmitted(true);
    toast({
      title: 'Email Draft Ready',
      message: 'Review the inquiry in your email app and press Send to submit it.',
      type: 'success',
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setScope('');
    setMessage('');
    setWebsite('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="START A PROJECT"
      subtitle={
        preselectedMember
          ? `Direct inquiry routed to ${preselectedMember}`
          : 'Define your idea. Our engineering teams will analyze feasibility and scope.'
      }
    >
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">Email Draft Ready</h4>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
            Your email app should have opened with the project brief addressed to our {division} team. Review it and press Send to submit it.
          </p>
          <Button variant="primary" onClick={handleReset}>
            Close Dialogue
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Isaac Newton"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                Corporate / Professional Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="isaac@domain.com"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                Target Division *
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
              >
                <option value="Programming">01 — Programming</option>
                <option value="Graphics">02 — Graphics & Digital Design</option>
                <option value="Robotics">03 — Robotics & Automation</option>
                <option value="Web & IT">04 — Web & IT Solutions</option>
                <option value="Multi-disciplinary">05 — Multi-Disciplinary Stack</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
                Target Scope / Timeline
              </label>
              <input
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="e.g. 4-6 Weeks / MVP Prototype"
                className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5">
              Project Specification / Problem Statement *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your technical challenge, goals, key requirements and constraints..."
              className="w-full bg-[#121824] border border-[#273448] text-[#F8FAFC] p-3 text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
            />
          </div>

          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="project-website">Leave this field empty</label>
            <input
              id="project-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-[#1A2230]">
            <span className="text-xs text-[#64748B] tech-mono">
              OPENS YOUR EMAIL APP TO SEND
            </span>
            <Button
              type="submit"
              icon={<ArrowRight size={16} />}
            >
              Dispatch Brief →
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
