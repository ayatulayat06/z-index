import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { FAQS } from '@/data/faq';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'FAQ — Questions & Architectural Insights',
  description:
    'Frequently asked questions about Z-INDEX company structure, custom software development, physical robotics lab capabilities, graphics design systems, and engagement models.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader
        badge="KNOWLEDGE REPOSITORY"
        title="QUESTIONS? WE HAVE ANSWERS."
        description="Comprehensive explanations of our operational model, technical domains, custom software engineering, physical hardware prototypes, and team contact protocols."
        zIndexLayer={50}
      />

      <Container className="py-16">
        <FAQAccordion items={FAQS} />
      </Container>
    </div>
  );
}
