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
      setScrolled(window.scrollY > 60);
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
        "fixed top-0 w-full z-[100] transition-all duration-1000 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-3xl border-b border-black/5 py-4 shadow-sm" 
          : "bg-transparent py-10"
      )}
    >
      <nav className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-4 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col">
              <span className="font-headline text-3xl md:text-4xl tracking-[0.15em] uppercase font-light text-foreground transition-all duration-1000 group-hover:tracking-[0.2em]">
                {BRAND.name} <span className="italic font-normal text-primary/60">{BRAND.suffix}</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground/60 mt-2 font-bold">{BRAND.type}</span>
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
            <Menu className="h-8 w-8 stroke-[1]" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 xl:gap-x-16">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.5em] transition-all hover:text-primary relative py-3 group",
                pathname === item.href ? "text-primary" : "text-muted-foreground/60"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 h-[0.5px] bg-accent transition-all duration-700 -translate-x-1/2",
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="outline" className="rounded-full border-black/5 bg-white/50 backdrop-blur-md text-foreground hover:bg-foreground hover:text-white uppercase tracking-[0.4em] text-[10px] px-10 xl:px-12 h-14 transition-all duration-1000 font-bold shadow-sm">
            <Link href="/contact">Concierge</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Cinematic Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-[200] bg-background/99 backdrop-blur-3xl transition-all duration-1000 ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full px-12 py-16">
          <div className="flex items-center justify-between mb-24">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-headline text-3xl tracking-[0.2em] uppercase text-foreground">
                {BRAND.name} <span className="italic">{BRAND.suffix}</span>
              </span>
            </Link>
            <button
              type="button"
              className="text-foreground p-3 transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-10 w-10 stroke-[1]" />
            </button>
          </div>
          
          <div className="flex flex-col gap-8 flex-grow overflow-y-auto pt-10">
            {NAVIGATION.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-4xl md:text-5xl font-headline italic text-foreground/40 hover:text-foreground transition-all duration-700",
                  pathname === item.href && "text-foreground translate-x-4"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 border-t border-black/5">
            <Button asChild className="w-full rounded-full bg-foreground text-white h-20 uppercase tracking-[0.5em] text-[11px] font-bold shadow-2xl">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Secure Your Ritual</Link>
            </Button>
            <p className="text-center text-[9px] uppercase tracking-[0.6em] text-muted-foreground/40 mt-10 font-bold">
              Luxe Glow Premier • Private Aesthetic Intelligence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
