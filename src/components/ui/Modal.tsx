'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 flex items-center justify-center p-4 z-stack-modal"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07080A]/85 backdrop-blur-md z-stack-overlay transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-2xl bg-[#0B0E14] border border-[#273448] shadow-depth-3 z-stack-modal overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2230] bg-[#121824]">
          <div>
            <span className="tech-mono text-[10px] text-[#00E5FF] tracking-widest uppercase block">
              Z-INDEX PROTOCOL // MODAL_Z:1000
            </span>
            <h3 id="modal-title" className="text-lg font-bold text-[#F8FAFC]">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-[#94A3B8] mt-0.5">{subtitle}</p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A2230] rounded transition-colors focus:outline-none focus:ring-1 focus:ring-[#00E5FF]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
