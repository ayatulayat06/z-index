import React from 'react';
import { Mail, Clock, Shield } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-[#0B0E14] border border-[#1A2230] p-6 sm:p-8 space-y-8 shadow-depth-1">
      <div>
        <h3 className="tech-mono text-xs font-bold text-[#00E5FF] tracking-widest uppercase mb-2">
          COMPANY CONTACT CHANNELS
        </h3>
        <h2 className="text-2xl font-bold text-[#F8FAFC]">
          Direct Division Access
        </h2>
        <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
          Z-INDEX communicates through structured digital channels. No call centers, no sales intermediaries.
        </p>
        <a
          href={`mailto:${SITE_CONFIG.contact.inquiries}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-[#00E5FF] hover:text-[#F8FAFC] transition-colors"
        >
          <Mail size={16} />
          {SITE_CONFIG.contact.inquiries}
        </a>
      </div>

      {/* Division Inboxes */}
      <div className="space-y-3">
        <span className="tech-mono text-[11px] text-[#64748B] uppercase block">
          DIVISIONAL INQUIRIES:
        </span>
        {SITE_CONFIG.contact.divisions.map((d) => (
          <div
            key={d.id}
            className="p-3 bg-[#0E121A] border border-[#1E2634] flex items-center justify-between text-xs"
          >
            <div>
              <span className="text-[#F8FAFC] font-semibold block">{d.label}</span>
              <span className="text-[#94A3B8] tech-mono text-[11px]">{d.email}</span>
            </div>
            <Mail size={14} className="text-[#00E5FF]" />
          </div>
        ))}
      </div>

      {/* Operational Hours */}
      <div className="pt-4 border-t border-[#1A2230]">
        <div className="flex items-center gap-2 mb-1">
          <Clock size={16} className="text-[#00E5FF]" />
          <h4 className="tech-mono text-xs font-bold text-[#F8FAFC] uppercase">
            OPERATIONAL CADENCE
          </h4>
        </div>
        <p className="text-sm text-[#94A3B8]">
          {SITE_CONFIG.contact.operationalHours}
        </p>
        <span className="text-xs text-[#64748B] block mt-1">
          Asynchronous ticket response time: &lt; 24 hours
        </span>
      </div>

      {/* Communication Channels */}
      <div className="pt-4 border-t border-[#1A2230] space-y-2">
        <span className="tech-mono text-[11px] text-[#64748B] uppercase block">
          ACTIVE CODE &amp; PROTOCOL RELAYS:
        </span>
        {SITE_CONFIG.contact.channels.map((chan) => (
          <div
            key={chan.name}
            className="flex items-center justify-between text-xs tech-mono p-2 bg-[#121824] border border-[#1E2634]"
          >
            <span className="text-[#F8FAFC]">{chan.name}</span>
            <span className="text-[#00E5FF]">{chan.handle}</span>
          </div>
        ))}
      </div>

      {/* Privacy Notice */}
      <div className="p-4 bg-[#07080A] border border-[#1E2634] text-xs text-[#64748B] flex items-start gap-2.5">
        <Shield size={16} className="text-[#10B981] shrink-0 mt-0.5" />
        <p>
          Z-INDEX does not sell, track, or share client data. All correspondence is held under strict non-disclosure policies.
        </p>
      </div>
    </div>
  );
};
