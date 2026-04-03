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
        "fixed top-0 w-full z-[100] transition-all duration-[1500ms] ease-in-out",
        scrolled 
          ? "bg-white/85 backdrop-blur-3xl border-b border-black/5 py-6 shadow-sm" 
          : "bg-transparent py-12"
      )}
    >
      <nav className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-6 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-headline text-3xl md:text-4xl tracking-[0.18em] uppercase font-light text-foreground transition-all duration-[1500ms] group-hover:tracking-[0.22em]">
                {BRAND.name} <span className="italic font-normal text-primary/50">{BRAND.suffix}</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.8em] text-muted-foreground/40 mt-3 font-bold">{BRAND.type}</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-foreground p-4 transition-transform active:scale-90"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-10 w-10 stroke-[0.8]" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-14 xl:gap-x-20">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.6em] transition-all duration-[800ms] hover:text-primary relative py-4 group",
                pathname === item.href ? "text-primary" : "text-muted-foreground/40"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 h-[0.5px] bg-accent transition-all duration-1000 -translate-x-1/2",
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline" className="rounded-full border-black/5 bg-white/40 backdrop-blur-2xl text-foreground hover:bg-foreground hover:text-white uppercase tracking-[0.6em] text-[10px] px-12 xl:px-16 h-16 transition-all duration-[1200ms] font-bold shadow-sm">
            <Link href="/contact">Concierge</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Cinematic Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-[200] bg-background/99 backdrop-blur-3xl transition-all duration-[1200ms] ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full px-16 py-20">
          <div className="flex items-center justify-between mb-32">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-headline text-4xl tracking-[0.25em] uppercase text-foreground">
                {BRAND.name} <span className="italic">{BRAND.suffix}</span>
              </span>
            </Link>
            <button
              type="button"
              className="text-foreground p-4 transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-12 w-12 stroke-[0.8]" />
            </button>
          </div>
          
          <div className="flex flex-col gap-12 flex-grow overflow-y-auto pt-16">
            {NAVIGATION.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-5xl md:text-6xl font-headline italic text-foreground/30 hover:text-foreground transition-all duration-[1000ms] tracking-tight",
                  pathname === item.href && "text-foreground translate-x-6"
                )}
                style={{ transitionDelay: `${i * 120}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-16 border-t border-black/5">
            <Button asChild className="w-full rounded-full bg-foreground text-white h-24 uppercase tracking-[0.6em] text-[12px] font-bold shadow-2xl transition-all duration-1000">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Secure Your Ritual</Link>
            </Button>
            <p className="text-center text-[10px] uppercase tracking-[0.8em] text-muted-foreground/30 mt-12 font-bold">
              Luxe Glow Premier • Private Aesthetic Intelligence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
