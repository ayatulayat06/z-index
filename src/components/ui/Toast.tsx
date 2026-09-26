'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface Toast {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'error' | 'info';
}

interface ToastContextType {
  toast: (options: Omit<Toast, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback(({ title, message, type = 'success' }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 flex flex-col gap-3 z-stack-toast pointer-events-none max-w-sm w-full"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-start gap-3 p-4 bg-[#0B0E14] border border-[#273448] shadow-depth-3 border-l-4 transition-all duration-300 animate-in slide-in-from-bottom-5"
            style={{
              borderLeftColor:
                t.type === 'error'
                  ? '#EF4444'
                  : t.type === 'info'
                  ? '#38BDF8'
                  : '#10B981',
            }}
          >
            <div className="shrink-0 mt-0.5">
              {t.type === 'error' ? (
                <AlertCircle size={18} className="text-[#EF4444]" />
              ) : t.type === 'info' ? (
                <Info size={18} className="text-[#38BDF8]" />
              ) : (
                <CheckCircle2 size={18} className="text-[#10B981]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#F8FAFC]">{t.title}</h4>
              {t.message && (
                <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  {t.message}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-[#64748B] hover:text-[#F8FAFC] transition-colors"
              aria-label="Dismiss alert"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
