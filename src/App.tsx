import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ServiceDetailPage from './app/services/[service]/page';
import PortfolioPage from './app/portfolio/page';
import ProjectDetailPage from './app/portfolio/[project]/page';
import ContactPage from './app/contact/page';
import TeamMemberDetailPage from './app/team/[member]/page';
import ContactMemberPage from './app/contact/[member]/page';
import FAQPage from './app/faq/page';
import NotFoundPage from './app/not-found';

function ServiceDetailPageRoute() {
  const params = useParams();
  return <ServiceDetailPage params={Promise.resolve(params as { service: string })} />;
}

function ProjectDetailPageRoute() {
  const params = useParams();
  return <ProjectDetailPage params={Promise.resolve(params as { project: string })} />;
}

function TeamMemberPageRoute() {
  const params = useParams();
  return <TeamMemberDetailPage params={Promise.resolve(params as { member: string })} />;
}

function ContactMemberPageRoute() {
  const params = useParams();
  return <ContactMemberPage params={Promise.resolve(params as { member: string })} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:service" element={<ServiceDetailPageRoute />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:project" element={<ProjectDetailPageRoute />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="contact/:member" element={<ContactMemberPageRoute />} />
        <Route path="team/:member" element={<TeamMemberPageRoute />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
