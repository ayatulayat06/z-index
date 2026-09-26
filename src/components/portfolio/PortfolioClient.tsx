'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '../ui/Container';
import { PortfolioFilter } from './PortfolioFilter';
import { PortfolioCard } from './PortfolioCard';
import { Project, DivisionCategory } from '@/types/portfolio';

const FILTER_CATEGORIES: ('ALL' | DivisionCategory)[] = [
  'ALL',
  'Programming',
  'Graphics',
  'Robotics',
  'Web & IT',
];

interface PortfolioClientProps {
  initialProjects: Project[];
}

export const PortfolioClient: React.FC<PortfolioClientProps> = ({
  initialProjects,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | DivisionCategory>('ALL');

  const counts = useMemo(() => {
    const map: Record<string, number> = { ALL: initialProjects.length };
    initialProjects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1;
    });
    return map;
  }, [initialProjects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return initialProjects;
    return initialProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, initialProjects]);

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <PortfolioFilter
          categories={FILTER_CATEGORIES}
          activeCategory={selectedCategory}
          onSelect={setSelectedCategory}
          counts={counts}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-[#0B0E14] border border-[#1A2230]">
            <p className="text-base text-[#94A3B8] mb-2">No projects found for category &quot;{selectedCategory}&quot;.</p>
            <button
              onClick={() => setSelectedCategory('ALL')}
              className="tech-mono text-xs text-[#00E5FF] hover:underline"
            >
              Reset to ALL →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
