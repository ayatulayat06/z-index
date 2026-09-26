'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStartProject: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenStartProject,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-stack-overlay flex flex-col bg-[#07080A]/98 backdrop-blur-xl lg:hidden"
    >
      {/* Mobile Header Bar */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-[#1A2230]">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-[#0E1117] border border-[#273448] flex items-center justify-center text-[#00E5FF] font-black text-sm tech-mono">
            Z
          </div>
          <span className="text-xl font-extrabold tracking-widest text-[#F8FAFC]">
            Z-INDEX
          </span>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] border border-[#273448] rounded bg-[#0E1117] focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="space-y-3" aria-label="Mobile Navigation">
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`block py-3 px-4 text-lg font-bold tracking-wider transition-all duration-200 border-l-2 ${
                  isActive
                    ? 'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/5 tech-mono'
                    : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#273448]'
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA & Division Telemetry */}
        <div className="pt-6 border-t border-[#1A2230] space-y-4">
          <button
            onClick={() => {
              onClose();
              onOpenStartProject();
            }}
            className="w-full py-4 px-6 bg-[#00E5FF] text-[#07080A] font-bold text-sm tech-mono tracking-wider flex items-center justify-center gap-2 hover:bg-[#38BDF8] transition-colors"
          >
            <span>START A PROJECT</span>
            <ArrowRight size={18} />
          </button>

          <div className="text-center pt-2">
            <span className="tech-mono text-[10px] text-[#64748B] tracking-widest block">
              Z-INDEX PROTOCOL // MOBILE VIEWPORT
            </span>
            <span className="tech-mono text-[10px] text-[#94A3B8]">
              {SITE_CONFIG.philosophy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
