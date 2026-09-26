'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQItem, FAQCategory } from '@/types/faq';
import { Button } from '../ui/Button';

interface FAQAccordionProps {
  items: FAQItem[];
}

const CATEGORIES: ('ALL' | FAQCategory)[] = [
  'ALL',
  'General',
  'Services',
  'Projects',
  'Technical',
];

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | FAQCategory>('ALL');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'what-is-z-index': true, // Keep the first FAQ open by default for immediate context
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems =
    activeCategory === 'ALL'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-[#1A2230]">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat;
          const count =
            cat === 'ALL'
              ? items.length
              : items.filter((i) => i.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tech-mono uppercase tracking-wider flex items-center gap-2 border transition-all duration-200 ${
                isSelected
                  ? 'bg-[#00E5FF] text-[#07080A] font-bold border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                  : 'bg-[#0B0E14] text-[#94A3B8] border-[#1E2634] hover:text-[#F8FAFC] hover:border-[#273448]'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-[#07080A] text-[#00E5FF]' : 'bg-[#161D29] text-[#64748B]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accordion Items List */}
      <div className="space-y-4">
        {filteredItems.map((item, index) => {
          const isOpen = !!openItems[item.id];
          return (
            <div
              key={item.id}
              className={`bg-[#0B0E14] border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#00E5FF]/40 shadow-depth-1'
                  : 'border-[#1A2230] hover:border-[#273448]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                <div className="flex items-center gap-3">
                  <span className="tech-mono text-xs font-bold text-[#00E5FF] shrink-0">
                    Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                    {item.question}
                  </h3>
                </div>

                <div
                  className={`p-1.5 text-[#94A3B8] rounded transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#00E5FF]' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#161D29] pt-4"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inquiry prompt */}
      <div className="p-8 bg-[#0B0E14] border border-[#273448] text-center space-y-4">
        <h3 className="text-xl font-bold text-[#F8FAFC]">
          Have a specific technical question not covered here?
        </h3>
        <p className="text-sm text-[#94A3B8] max-w-xl mx-auto">
          Our engineering leads are available to discuss system parameters, architectural limits, and custom protocols.
        </p>
        <div className="pt-2">
          <Button variant="primary" href="/contact" icon={<MessageSquare size={16} />}>
            Open Engineering Inquiry →
          </Button>
        </div>
      </div>
    </div>
  );
};
