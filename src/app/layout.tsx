import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/Toast';
import { constructMetadata, generateOrganizationJsonLd } from '@/lib/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = constructMetadata({
  title: 'Z-INDEX — Building Ideas. Engineering The Future.',
  description:
    'Z-INDEX is a private technology company combining programming, creative design, robotics, and modern web technologies to transform ideas into practical digital and physical solutions.',
});

metadata.icons = {
  icon: '/images/brand/symbol.svg',
  shortcut: '/images/brand/symbol.svg',
  apple: '/images/brand/symbol.svg',
};

export const viewport: Viewport = {
  themeColor: '#07080A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationJsonLd();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#07080A] text-[#F8FAFC]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-stack-toast bg-[#00E5FF] text-[#07080A] px-4 py-2 font-bold tech-mono text-xs rounded"
        >
          Skip to main content
        </a>

        <ToastProvider>
          <Navbar />
          <main id="main-content" className="flex-1 relative">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
