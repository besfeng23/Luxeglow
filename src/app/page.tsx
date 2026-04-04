'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gem, MapPin, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BRAND, HOME_CONTENT, SIGNATURE_TREATMENTS, TRUST_STATEMENTS } from '@/content/data';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col bg-background overflow-hidden">
      
      {/* 1. Commanding Hero - Elite Campaign Presence */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HOME_CONTENT.hero.image}
            alt={BRAND.fullName}
            fill
            className="object-cover brightness-[0.7] md:brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-5xl space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.8em] font-bold text-white">{HOME_CONTENT.hero.badge}</span>
            </div>
            
            <h1 className="font-headline text-5xl sm:text-7xl md:text-9xl lg:text-[140px] leading-[0.9] text-white tracking-tighter">
              {HOME_CONTENT.hero.title} <br />
              <span className="italic font-light text-accent/80">{HOME_CONTENT.hero.titleItalic}</span>
            </h1>
            
            <p className="font-body text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl font-light italic text-balance">
              {HOME_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-8">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Journey</Link>
              </Button>
              
              <Link href="/signature" className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.5em] font-bold text-white hover:text-accent transition-all duration-500 py-3">
                Explore Ritual Menu 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Simplified Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* 2. Trust & Philosophy - Quiet Wealth Spacing */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="space-y-12 animate-fade-in-up">
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">The Private Narrative</span>
              <h2 className="font-headline text-5xl md:text-7xl text-foreground leading-tight tracking-tighter">
                {HOME_CONTENT.positioning.title} <br />
                <span className="italic font-light text-primary/40">{HOME_CONTENT.positioning.titleItalic}</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic border-l-2 border-accent/20 pl-8 md:pl-12 max-w-2xl">
                {HOME_CONTENT.positioning.quote}
              </p>
              <div className="pt-6">
                <Button asChild variant="outline" className="rounded-full h-14 px-12 text-[10px] uppercase tracking-[0.4em] font-bold">
                  <Link href="/about">Our Philosophy</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              {TRUST_STATEMENTS.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-8 group p-10 rounded-[3rem] bg-secondary/40 border border-black/5 hover:bg-white hover:luxury-shadow transition-all duration-700">
                  <div className="shrink-0 w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-primary bg-white group-hover:bg-foreground group-hover:text-white transition-all duration-700 shadow-sm">
                    <item.icon className="w-6 h-6 stroke-[1.2]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold mb-3">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Rituals - High Visual Merchandising */}
      <section className="py-32 md:py-48 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-8">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-primary block">The Signature Collection</span>
            <h2 className="font-headline text-5xl md:text-8xl tracking-tighter">Curated <span className="italic font-light">Rejuvenation</span></h2>
            <p className="text-muted-foreground text-lg md:text-2xl font-light italic text-balance">"Intelligent aesthetic sequences designed for absolute skin fidelity."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {SIGNATURE_TREATMENTS.map((item, i) => {
              const imgUrl = PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/1200/800`;
              return (
                <div key={i} className="group bg-white rounded-[4rem] overflow-hidden luxury-shadow flex flex-col transition-all duration-700 border border-black/5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={imgUrl} alt={item.name} fill className="object-cover transition-transform duration-3000 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6">
                      <span className="text-[9px] uppercase tracking-[0.4em] font-bold bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full text-primary border border-black/5 shadow-sm">{item.tagline}</span>
                    </div>
                  </div>
                  <div className="p-10 md:p-14 space-y-10">
                    <div className="flex justify-between items-start border-b border-black/5 pb-8">
                      <h3 className="font-headline text-3xl md:text-4xl text-foreground transition-colors group-hover:text-primary leading-none tracking-tight">{item.name}</h3>
                      <div className="text-right">
                         <span className="text-xl md:text-2xl font-bold text-accent italic block">{item.price}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light text-base md:text-lg italic">{item.description}</p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-6 items-center justify-between">
                      <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground/60">{item.package}</div>
                      <Button asChild className="rounded-full bg-foreground text-white hover:bg-black h-14 px-10 uppercase tracking-[0.4em] text-[10px] font-bold shadow-xl w-full sm:w-auto">
                        <Link href={item.link}>Secure Ritual</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 text-center">
            <Link href="/services" className="inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.6em] font-bold text-foreground border-b border-black/10 pb-4 hover:border-primary hover:text-primary transition-all duration-500 group">
              View Full Ritual Menu <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Protocol - Visual Trust Sequence */}
      <section className="py-32 md:py-48 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-10">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent block">The Elite Sequence</span>
            <h2 className="font-headline text-5xl md:text-9xl leading-none tracking-tighter">The Luxe <span className="italic font-light text-accent/40">Protocol</span></h2>
            <p className="text-white/50 text-xl md:text-2xl font-light italic">"A meticulous clinical path to absolute luminous perfection."</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {HOME_CONTENT.sequence.map((item, idx) => (
              <div key={idx} className="space-y-8 group text-center md:text-left">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-accent font-headline italic text-3xl md:text-4xl group-hover:bg-accent group-hover:text-foreground transition-all duration-700">
                  {item.step}
                </div>
                <div className="space-y-4">
                  <h4 className="text-[13px] uppercase tracking-[0.5em] font-bold">{item.title}</h4>
                  <p className="text-white/40 text-base leading-relaxed font-light italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. High-Prestige Call to Action */}
      <section className="py-40 md:py-64 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.8em] font-bold text-accent mb-6">
               <Gem className="w-6 h-6" />
               Private Sanctuary
            </div>
            <h2 className="font-headline text-5xl md:text-[120px] text-foreground leading-[0.9] tracking-tighter">
              Secure Your <br />
              <span className="italic font-light text-primary/30">Radiance.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic max-w-3xl mx-auto text-balance">
              Join our private clientele at Estancia Mall, Capitol Commons. Experience the pinnacle of clinical artistry and quiet luxury.
            </p>
            
            <div className="flex flex-col items-center gap-12 pt-10">
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-20 h-24 uppercase tracking-[0.5em] text-[12px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-12 pt-10 border-t border-black/5 w-full max-w-4xl">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  FDA Approved
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Bespoke Skin intelligence
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  Pasig Sanctuary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}