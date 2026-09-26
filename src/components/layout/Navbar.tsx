'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { MobileMenu } from './MobileMenu';
import { StartProjectModal } from '../ui/StartProjectModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [startProjectOpen, setStartProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-stack-navbar transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080A]/90 backdrop-blur-md border-b border-[#1A2230] py-3.5 shadow-depth-2'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              aria-label="Z-INDEX Homepage"
            >
              <img
                src="/images/brand/symbol.svg"
                alt="Z-INDEX"
                className="w-9 h-9 rounded object-cover border border-[#273448] group-hover:border-[#00E5FF] transition-colors"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-widest text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors leading-none">
                  Z-INDEX.
                </span>
                <span className="tech-mono text-[9px] text-[#64748B] tracking-wider mt-1 hidden sm:block">
                  PRIVATE TEACH TECHNOLOGY CO.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center space-x-1 border border-[#1A2230] bg-[#0B0E14]/80 px-3 py-1.5 rounded-full backdrop-blur-sm"
            >
              {SITE_CONFIG.navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-xs font-medium tracking-wider tech-mono transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      isActive
                        ? 'bg-[#00E5FF]/15 text-[#00E5FF] font-semibold border border-[#00E5FF]/40'
                        : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#121824]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setStartProjectOpen(true)}
                className="inline-flex items-center gap-2 bg-[#00E5FF] text-[#07080A] font-semibold text-xs tech-mono tracking-wider px-4 py-2.5 hover:bg-[#38BDF8] active:translate-y-0.5 transition-all duration-200 shadow-[0_0_18px_rgba(0,229,255,0.2)] hover:shadow-[0_0_24px_rgba(0,229,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="p-2.5 text-[#94A3B8] hover:text-[#F8FAFC] border border-[#273448] bg-[#0E1117] rounded focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenStartProject={() => setStartProjectOpen(true)}
      />

      {/* Universal Start Project Modal */}
      <StartProjectModal
        isOpen={startProjectOpen}
        onClose={() => setStartProjectOpen(false)}
      />
    </>
  );
};
