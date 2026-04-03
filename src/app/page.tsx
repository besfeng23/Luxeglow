'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, ShieldCheck, Gem, Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BRAND, CONTACT, HOME_CONTENT, SIGNATURE_TREATMENTS, TRUST_STATEMENTS } from '@/content/data';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col bg-background overflow-hidden">
      
      {/* 1. Commanding Hero - Elite Campaign Presence */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HOME_CONTENT.hero.image}
            alt={BRAND.fullName}
            fill
            className="object-cover brightness-[0.9] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-5xl space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white/90">{HOME_CONTENT.hero.badge}</span>
            </div>
            
            <h1 className="font-headline text-7xl md:text-9xl lg:text-[140px] leading-[0.8] text-white tracking-tighter">
              {HOME_CONTENT.hero.title} <br />
              <span className="italic font-light text-accent/80">{HOME_CONTENT.hero.titleItalic}</span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-light italic text-balance">
              {HOME_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center pt-10">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-20 h-24 uppercase tracking-[0.4em] text-[12px] font-bold shadow-2xl transition-all duration-1000 hover:scale-[1.03]">
                <Link href="/contact">Book Your Journey</Link>
              </Button>
              
              <Link href="/signature" className="group flex items-center gap-8 text-[11px] uppercase tracking-[0.4em] font-bold text-white hover:text-accent transition-all duration-500 py-4">
                Explore Ritual Menu 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Cinematic Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 text-white/40 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.8em] font-bold">Discover The Sanctuary</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* 2. Trust & Philosophy - Quiet Wealth Spacing */}
      <section className="py-56 bg-white relative">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16 animate-fade-in-up">
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">The Private Narrative</span>
              <h2 className="font-headline text-6xl md:text-8xl text-foreground leading-tight tracking-tighter">
                {HOME_CONTENT.positioning.title} <br />
                <span className="italic font-light text-primary/40">{HOME_CONTENT.positioning.titleItalic}</span>
              </h2>
              <p className="text-2xl text-muted-foreground/80 leading-relaxed font-light italic border-l-2 border-accent/20 pl-12 max-w-2xl">
                {HOME_CONTENT.positioning.quote}
              </p>
              <div className="pt-8">
                <Button asChild variant="outline" className="rounded-full border-black/10 text-[10px] uppercase tracking-[0.4em] font-bold h-16 px-16 hover:bg-foreground hover:text-white transition-all">
                  <Link href="/about">Our Philosophy</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {TRUST_STATEMENTS.map((item, i) => (
                <div key={i} className="flex gap-10 group p-10 rounded-[4rem] bg-secondary/30 border border-black/5 hover:bg-white hover:luxury-shadow transition-all duration-1000">
                  <div className="shrink-0 w-20 h-20 rounded-full border border-black/5 flex items-center justify-center text-primary bg-white group-hover:bg-foreground group-hover:text-white transition-all duration-1000 luxury-shadow">
                    <item.icon className="w-7 h-7 stroke-[1.2]" />
                  </div>
                  <div>
                    <h4 className="text-[13px] uppercase tracking-[0.4em] font-bold mb-4">{item.title}</h4>
                    <p className="text-base text-muted-foreground/70 leading-relaxed font-light italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Rituals - High Visual Merchandising */}
      <section className="py-56 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center max-w-4xl mx-auto mb-40 space-y-12">
            <span className="text-[10px] uppercase tracking-[1.2em] font-bold text-primary block">The Signature Collection</span>
            <h2 className="font-headline text-6xl md:text-9xl tracking-tighter">Curated <span className="italic font-light">Rejuvenation</span></h2>
            <p className="text-muted-foreground/60 text-2xl font-light italic">"Intelligent aesthetic sequences designed for absolute skin fidelity."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {SIGNATURE_TREATMENTS.map((item, i) => {
              const imgUrl = PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/1200/800`;
              return (
                <div key={i} className="group relative bg-white rounded-[6rem] overflow-hidden luxury-shadow flex flex-col transition-all duration-1000 hover:-translate-y-4 border border-black/5">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={imgUrl} alt={item.name} fill className="object-cover transition-transform duration-[4000ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
                    <div className="absolute bottom-10 left-10">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold bg-white/95 backdrop-blur-xl px-8 py-4 rounded-full text-primary border border-black/5 shadow-2xl">{item.tagline}</span>
                    </div>
                  </div>
                  <div className="p-16 md:p-20 space-y-12">
                    <div className="flex justify-between items-start border-b border-black/5 pb-10">
                      <h3 className="font-headline text-5xl text-foreground transition-colors duration-500 group-hover:text-primary leading-none">{item.name}</h3>
                      <div className="text-right">
                         <span className="text-2xl font-bold text-accent italic block">{item.price}</span>
                         <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/40 mt-1 block">Starting At</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground/70 leading-relaxed font-light text-xl italic">{item.description}</p>
                    <div className="pt-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">{item.package}</div>
                      <Button asChild className="rounded-full bg-foreground text-white hover:bg-black h-16 px-12 uppercase tracking-[0.4em] text-[11px] font-bold transition-all shadow-2xl w-full sm:w-auto">
                        <Link href={item.link}>Secure Ritual</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-32 text-center">
            <Link href="/services" className="inline-flex items-center gap-8 text-[12px] uppercase tracking-[0.6em] font-bold text-foreground border-b border-black/10 pb-6 hover:border-primary hover:text-primary transition-all group">
              View Full Ritual Menu <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Protocol - Visual Trust Sequence */}
      <section className="py-56 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-40 space-y-12">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent block">The Elite Sequence</span>
            <h2 className="font-headline text-6xl md:text-[110px] leading-none tracking-tighter">The Luxe <span className="italic font-light text-accent/40">Protocol</span></h2>
            <p className="text-white/40 text-3xl font-light italic">"A meticulous clinical path to absolute luminous perfection."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
            {HOME_CONTENT.sequence.map((item, idx) => (
              <div key={idx} className="space-y-12 group text-center md:text-left">
                <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-accent font-headline italic text-5xl group-hover:bg-accent group-hover:text-foreground transition-all duration-1000 luxury-shadow">
                  {item.step}
                </div>
                <div className="space-y-8">
                  <h4 className="text-[15px] uppercase tracking-[0.5em] font-bold">{item.title}</h4>
                  <p className="text-white/30 text-xl leading-relaxed font-light italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1200/800')] opacity-[0.02] grayscale pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* 5. High-Prestige Call to Action */}
      <section className="py-72 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-6xl mx-auto space-y-24">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[1em] font-bold text-accent mb-12">
               <Gem className="w-6 h-6 animate-pulse" />
               Private Sanctuary
            </div>
            <h2 className="font-headline text-7xl md:text-[140px] text-foreground leading-[0.8] tracking-tighter">
              Secure Your <br />
              <span className="italic font-light text-primary/30">Radiance.</span>
            </h2>
            <p className="text-3xl text-muted-foreground/50 leading-relaxed font-light italic max-w-4xl mx-auto">
              Join our private clientele at Estancia Mall, Capitol Commons. <br />Experience the pinnacle of clinical artistry and quiet luxury.
            </p>
            
            <div className="flex flex-col items-center gap-16 pt-16">
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-24 h-28 uppercase tracking-[0.6em] text-[13px] font-bold shadow-2xl transition-all duration-1000 hover:scale-[1.05] w-full md:w-auto">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
              <div className="flex flex-wrap justify-center gap-16 border-t border-black/5 pt-12 w-full max-w-4xl">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  FDA Approved Protocols
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Bespoke Skin Intelligence
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">
                  <MapPin className="w-5 h-5 text-accent" />
                  Capitol Commons Sanctuary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
