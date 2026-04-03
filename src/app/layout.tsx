import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://luxeglowpremier.com'),
  title: {
    default: 'Luxe Glow Premier | Private Aesthetic Clinic in Pasig',
    template: '%s | Luxe Glow Premier'
  },
  description: 'Experience the pinnacle of skin refinement at Luxe Glow Premier. Private aesthetic rituals, Signature Facials, and advanced clinical care at Estancia Mall, Capitol Commons.',
  keywords: ['Aesthetic Clinic Pasig', 'Signature Facial Pasig', 'IPL Hair Removal Pasig', 'BB Glow Philippines', 'Capitol Commons Beauty', 'Estancia Mall Spa'],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://luxeglowpremier.com',
    siteName: 'Luxe Glow Premier',
    title: 'Luxe Glow Premier | Private Aesthetic Clinic',
    description: 'Elite skin intelligence and clinical artistry in the heart of Capitol Commons, Pasig.',
    images: [
      {
        url: 'https://picsum.photos/seed/lux1/1200/630',
        width: 1200,
        height: 630,
        alt: 'Luxe Glow Premier Sanctuary'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Glow Premier | Private Aesthetic Clinic',
    description: 'Elite skin refinement in Capitol Commons, Pasig.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
