'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Rituals', href: '/services' },
  { name: 'Concierge', href: '/ai-recommendations' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm" 
          : "bg-transparent py-8"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-headline text-2xl tracking-[0.1em] uppercase font-light text-foreground">
                Luxe Glow <span className="italic font-normal">Premier</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/80 mt-1">Private Aesthetic Clinic</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 stroke-[1.5]" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.25em] transition-all hover:text-primary relative py-1",
                pathname === item.href ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary/30" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline" className="rounded-full border-black/10 text-foreground hover:bg-black hover:text-white uppercase tracking-[0.2em] text-[10px] px-8 h-10 transition-all duration-500">
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl animate-in fade-in duration-500">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-8 py-8 sm:max-w-sm">
            <div className="flex items-center justify-between mb-16">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-headline text-xl tracking-[0.1em] uppercase text-foreground">
                  Luxe Glow <span className="italic">Premier</span>
                </span>
              </Link>
              <button
                type="button"
                className="text-foreground p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-2xl font-headline italic text-foreground hover:text-primary transition-colors",
                    pathname === item.href && "text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-12">
                <Button asChild className="w-full rounded-full bg-foreground text-white py-8 uppercase tracking-[0.3em] text-xs">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Reserve Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
