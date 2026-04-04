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
        "fixed top-0 w-full z-[100] transition-all duration-1000 ease-in-out",
        scrolled 
          ? "bg-white/95 backdrop-blur-3xl border-b border-black/5 py-3 md:py-4 shadow-sm" 
          : "bg-transparent py-6 md:py-10"
      )}
    >
      <nav className="max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-4 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex flex-col">
              <span className={cn(
                "font-headline text-2xl md:text-3xl tracking-[0.15em] uppercase font-light transition-all duration-1000",
                scrolled ? "text-foreground" : "text-white md:text-foreground"
              )}>
                {BRAND.name} <span className="italic font-normal text-accent/80">{BRAND.suffix}</span>
              </span>
              <span className={cn(
                "text-[8px] uppercase tracking-[0.6em] font-bold mt-1 transition-all duration-1000",
                scrolled ? "text-muted-foreground" : "text-white/60 md:text-muted-foreground/60"
              )}>{BRAND.type}</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "p-2 transition-transform active:scale-90",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-8 w-8 stroke-[1]" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10 xl:gap-x-16">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-500 hover:text-primary relative py-2 group",
                pathname === item.href 
                  ? "text-primary" 
                  : scrolled ? "text-muted-foreground" : "text-white/80"
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
          <Button asChild variant={scrolled ? "default" : "outline"} className={cn(
            "rounded-full uppercase tracking-[0.5em] text-[10px] px-10 h-12 transition-all duration-700 font-bold",
            !scrolled && "border-white/20 bg-white/5 text-white hover:bg-white hover:text-foreground"
          )}>
            <Link href="/contact">Concierge</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu - Cinematic Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-[200] bg-background transition-all duration-700 ease-in-out",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full px-8 py-10">
          <div className="flex items-center justify-between mb-16">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-headline text-3xl tracking-[0.2em] uppercase text-foreground">
                {BRAND.name} <span className="italic">{BRAND.suffix}</span>
              </span>
            </Link>
            <button
              type="button"
              className="text-foreground p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-10 w-10 stroke-[1]" />
            </button>
          </div>
          
          <div className="flex flex-col gap-10 flex-grow pt-8">
            {NAVIGATION.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-4xl font-headline italic transition-all duration-500",
                  pathname === item.href ? "text-primary pl-4" : "text-foreground/40"
                )}
                style={{ transitionDelay: `${i * 75}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-black/5">
            <Button asChild className="w-full rounded-full h-16 uppercase tracking-[0.4em] text-[11px] font-bold shadow-xl">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Secure Your Ritual</Link>
            </Button>
            <p className="text-center text-[9px] uppercase tracking-[0.6em] text-muted-foreground/60 mt-10 font-bold">
              Luxe Glow Premier • Private Aesthetic Intelligence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}