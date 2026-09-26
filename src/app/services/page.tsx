import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SERVICES } from '@/data/services';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Services — What We Build',
  description:
    'Explore Z-INDEX engineering capabilities across programming, graphics and digital design, robotics and automation, and modern web and IT solutions.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageHeader
        badge="ENGINEERING MATRIX"
        title="WHAT WE BUILD"
        description="Four interconnected disciplines engineered with precision. Explore our end-to-end capabilities across software runtimes, digital interfaces, microcontroller hardware, and edge cloud systems."
        zIndexLayer={30}
      />

      <Container className="py-16 space-y-12">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </Container>
    </div>
  );
}
