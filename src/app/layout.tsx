
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://luxeglowpremier.com'), // Replace with actual domain when live
  title: {
    default: 'Luxe Glow Premier | Exclusive Aesthetic Clinic in Pasig',
    template: '%s | Luxe Glow Premier'
  },
  description: 'Experience elite skin perfection at Luxe Glow Premier. Premium beauty and aesthetic treatments in Estancia Mall, Capitol Commons, Pasig.',
  keywords: ['Aesthetic Clinic Pasig', 'Beauty Lounge Capitol Commons', 'Facial Pasig', 'IPL Hair Removal Pasig', 'BB Glow Pasig', 'Luxury Spa Pasig'],
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    url: 'https://luxeglowpremier.com',
    siteName: 'Luxe Glow Premier',
    title: 'Luxe Glow Premier | Exclusive Aesthetic Clinic',
    description: 'Redefining luxury aesthetics through medical-grade precision in Capitol Commons, Pasig.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxe Glow Premier Sanctuary'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Glow Premier | Exclusive Aesthetic Clinic',
    description: 'Elite skin perfection in Capitol Commons, Pasig.',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
