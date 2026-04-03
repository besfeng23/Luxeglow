'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BRAND, NAVIGATION } from '@/content/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/5 py-4 shadow-sm" 
          : "bg-transparent py-10"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-headline text-3xl tracking-[0.1em] uppercase font-light text-foreground transition-all duration-700 group-hover:tracking-[0.15em]">
                {BRAND.name} <span className="italic font-normal">{BRAND.suffix}</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-muted-foreground/80 mt-1 font-bold">{BRAND.type}</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-foreground p-3 transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-7 w-7 stroke-[1.25]" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.35em] transition-all hover:text-primary relative py-2 group",
                pathname === item.href ? "text-primary" : "text-muted-foreground/80"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 h-px bg-primary transition-all duration-700",
                pathname === item.href ? "w-full opacity-30" : "w-0 group-hover:w-full opacity-50"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline" className="rounded-full border-black/10 text-foreground hover:bg-black hover:text-white uppercase tracking-[0.3em] text-[10px] px-10 h-11 transition-all duration-700 font-bold shadow-sm">
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Full Screen Editorial */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-[100] bg-background/98 backdrop-blur-3xl transition-all duration-1000 ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full px-8 py-12">
          <div className="flex items-center justify-between mb-24">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-headline text-2xl tracking-[0.1em] uppercase text-foreground">
                {BRAND.name} <span className="italic">{BRAND.suffix}</span>
              </span>
            </Link>
            <button
              type="button"
              className="text-foreground p-2 transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-8 w-8 stroke-[1.25]" />
            </button>
          </div>
          
          <div className="flex flex-col gap-10 flex-grow">
            {NAVIGATION.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-4xl md:text-5xl font-headline italic text-foreground hover:text-primary transition-all duration-700",
                  pathname === item.href && "text-primary translate-x-4"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 border-t border-black/5">
            <Button asChild className="w-full rounded-full bg-foreground text-white h-20 uppercase tracking-[0.4em] text-xs font-bold shadow-2xl">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Reserve Appointment</Link>
            </Button>
            <p className="text-center text-[10px] uppercase tracking-[0.5em] text-muted-foreground/60 mt-10 font-bold">
              Luxe Glow Premier • Capitol Commons
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
