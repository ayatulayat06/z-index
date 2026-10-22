import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ToastProvider } from '@/components/ui/Toast';

export function Layout() {
  return (
    <ToastProvider>
      <Navbar />
      <main id="main-content" className="flex-1 relative">
        <Outlet />
      </main>
      <Footer />
    </ToastProvider>
  );
}
