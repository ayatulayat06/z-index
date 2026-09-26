import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs tech-mono">
        <li>
          <Link href="/" className="text-[#64748B] hover:text-[#00E5FF] transition-colors">
            INDEX
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight size={12} className="text-[#273448]" />
            {item.href ? (
              <Link href={item.href} className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#00E5FF] font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
