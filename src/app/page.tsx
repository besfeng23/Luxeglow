'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight, ShieldCheck, Gem, Phone, MessageCircle, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BRAND, CONTACT, HOME_CONTENT, SIGNATURE_TREATMENTS, TRUST_STATEMENTS } from '@/content/data';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col bg-background overflow-hidden">
      
      {/* 1. Cinematic Hero - Soft Royalty Editorial */}
      <section className="relative min-h-screen flex items-center pt-48 pb-32">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-secondary/30 -z-10 translate-x-1/4 skew-x-3 hidden lg:block" />
        
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-7 z-10 space-y-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-6 px-10 py-3 rounded-full border border-primary/10 bg-white/30 backdrop-blur-2xl">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-primary/70">{HOME_CONTENT.hero.badge}</span>
            </div>
            
            <h1 className="font-headline text-8xl md:text-9xl lg:text-[160px] leading-[0.75] text-foreground tracking-tighter">
              {HOME_CONTENT.hero.title} <br />
              <span className="italic font-light text-primary/30">{HOME_CONTENT.hero.titleItalic}</span>
            </h1>
            
            <p className="font-body text-2xl md:text-3xl text-muted-foreground/60 leading-relaxed max-w-xl font-light italic text-balance">
              {HOME_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-16 items-start sm:items-center pt-10">
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-24 h-24 uppercase tracking-[0.6em] text-[11px] font-bold shadow-2xl transition-all duration-1000 hover:scale-[1.03]">
                <Link href="/contact">Book Your Journey</Link>
              </Button>
              
              <Link href="/signature" className="group flex items-center gap-8 text-[10px] uppercase tracking-[0.6em] font-bold text-foreground hover:text-primary transition-all duration-1000 py-6">
                The Rituals 
                <div className="w-20 h-px bg-foreground/10 group-hover:w-32 group-hover:bg-accent transition-all duration-1000" />
                <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform duration-1000" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[6rem] overflow-hidden luxury-shadow animate-reveal group">
              <Image
                src={HOME_CONTENT.hero.image}
                alt={BRAND.fullName}
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[6000ms] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
            </div>
            
            <div className="absolute -bottom-20 -left-20 hidden xl:flex w-96 h-96 bg-white/95 backdrop-blur-3xl rounded-full p-20 luxury-shadow border border-black/5 flex-col items-center justify-center text-center gap-8 animate-fade-in-up delay-1000">
              <Star className="w-10 h-10 text-accent fill-accent/10" />
              <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">Private Atelier</p>
              <p className="font-headline italic text-4xl leading-tight text-foreground">"Bespoke <br />Perfection."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Position Section - Quiet Wealth Narrative */}
      <section className="py-72 bg-white relative">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="max-w-6xl mx-auto space-y-32">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent block">The Private Narrative</span>
            <h2 className="font-headline text-7xl md:text-9xl text-foreground leading-tight tracking-tighter">
              {HOME_CONTENT.positioning.title} <br />
              <span className="italic font-light text-primary/30">{HOME_CONTENT.positioning.titleItalic}</span>
            </h2>
            <div className="h-px w-40 bg-accent/30 mx-auto" />
            <p className="text-4xl text-muted-foreground/70 leading-relaxed font-light italic max-w-5xl mx-auto text-balance">
              {HOME_CONTENT.positioning.quote}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-40 pt-40">
              {TRUST_STATEMENTS.map((item, i) => (
                <div key={i} className="space-y-12 group text-center">
                  <div className="w-24 h-24 rounded-full border border-black/5 flex items-center justify-center mx-auto text-primary bg-secondary/40 group-hover:bg-foreground group-hover:text-white transition-all duration-1000 shadow-sm">
                    <item.icon className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <h4 className="text-[13px] uppercase tracking-[0.5em] font-bold">{item.title}</h4>
                  <p className="text-xl text-muted-foreground/60 leading-relaxed px-10 font-light italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] -translate-x-1/2" />
      </section>

      {/* 3. Featured Rituals - High-Contrast Editorial Spreads */}
      <section className="py-72 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-48 gap-20">
            <div className="max-w-4xl space-y-12">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent block">The Signature Collection</span>
              <h2 className="font-headline text-8xl md:text-9xl tracking-tighter">Refined Rituals</h2>
              <p className="text-muted-foreground/60 text-4xl font-light leading-relaxed italic border-l-2 border-accent/30 pl-12">"Intelligent aesthetic sequences for the discerning few."</p>
            </div>
            <Link href="/services" className="text-[11px] uppercase tracking-[0.6em] font-bold border-b border-black/10 pb-8 hover:border-primary hover:text-primary transition-all duration-1000 flex items-center gap-8 group mb-4">
              Full Collection <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-1000" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-40">
            {SIGNATURE_TREATMENTS.map((item, i) => {
              const imgUrl = PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/800/1000`;
              return (
                <div key={i} className="group relative bg-white rounded-[6rem] overflow-hidden luxury-shadow flex flex-col transition-all duration-[1200ms] hover:-translate-y-6 border border-black/5">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={imgUrl} alt={item.name} fill className="object-cover transition-transform duration-[5000ms] group-hover:scale-110" />
                    <div className="absolute top-12 left-12">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold bg-white/95 backdrop-blur-2xl px-8 py-4 rounded-full text-primary shadow-sm border border-black/5">{item.tagline.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="p-20 space-y-12">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-5xl md:text-6xl text-foreground leading-tight group-hover:text-primary transition-colors duration-1000">{item.name}</h3>
                      <span className="text-2xl font-bold text-accent italic tracking-tight">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground/70 leading-relaxed font-light text-xl italic">{item.description}</p>
                    <div className="pt-8">
                      <Button asChild variant="outline" className="rounded-full border-black/10 text-[11px] uppercase tracking-[0.5em] font-bold h-20 px-16 hover:bg-foreground hover:text-white transition-all duration-1000">
                        <Link href={item.link}>Discover Ritual</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. The Protocol Sequence - Soft Royalty Progress */}
      <section className="py-80 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="text-center max-w-6xl mx-auto mb-48 space-y-16">
            <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent block">The Elite Sequence</span>
            <h2 className="font-headline text-8xl md:text-[130px] leading-none tracking-tighter">The Private <span className="italic font-light text-accent/30">Protocol</span></h2>
            <p className="text-white/30 text-4xl font-light italic leading-relaxed">"A meticulous clinical path to absolute luminous perfection."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24 relative">
            <div className="absolute top-1/3 left-0 w-full h-px bg-white/5 hidden md:block" />
            
            {HOME_CONTENT.sequence.map((item, idx) => (
              <div key={idx} className="relative z-10 space-y-16 group">
                <div className="w-28 h-28 rounded-full border border-white/10 bg-foreground flex items-center justify-center text-accent font-headline italic text-5xl group-hover:bg-accent group-hover:text-foreground transition-all duration-[1200ms] luxury-shadow">
                  {item.step}
                </div>
                <div className="space-y-10">
                  <h4 className="text-[16px] uppercase tracking-[0.6em] font-bold">{item.title}</h4>
                  <p className="text-white/25 text-xl leading-relaxed font-light italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* 5. Final Prestige Transformation */}
      <section className="py-80 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="bg-white rounded-[10rem] p-32 md:p-56 text-center relative overflow-hidden luxury-shadow border border-black/5">
            <div className="relative z-10 max-w-6xl mx-auto space-y-32">
              <span className="text-[10px] uppercase tracking-[1.2em] font-bold text-primary block">The Final Step</span>
              <h2 className="font-headline text-8xl md:text-[150px] text-foreground leading-[0.8] tracking-tighter">
                Secure Your <br />
                <span className="italic font-light text-primary/30">Radiance.</span>
              </h2>
              <p className="text-4xl text-muted-foreground/50 leading-relaxed font-light italic max-w-5xl mx-auto text-balance">
                Join our private clientele at {CONTACT.shortAddress}. <br />Exclusive sessions available daily for aesthetic refinement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-center pb-32 border-b border-black/5">
                <div className="space-y-10">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <Phone className="w-7 h-7 stroke-[1.2]" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.6em] font-bold">Concierge Line</p>
                  <p className="text-3xl font-light italic">{CONTACT.phone}</p>
                </div>
                <div className="space-y-10">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <MessageCircle className="w-7 h-7 stroke-[1.2]" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.6em] font-bold">Social Liaison</p>
                  <p className="text-3xl font-light italic">Messenger / FB</p>
                </div>
                <div className="space-y-10">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <MapPin className="w-7 h-7 stroke-[1.2]" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.6em] font-bold">The Sanctuary</p>
                  <p className="text-3xl font-light italic text-balance leading-tight">{CONTACT.shortAddress}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-16 pt-20">
                <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-32 h-28 uppercase tracking-[0.6em] text-[13px] font-bold shadow-2xl transition-all duration-[1200ms] w-full md:w-auto hover:scale-[1.04]">
                  <Link href="/contact">Reserve Your Journey</Link>
                </Button>
                <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.8em] font-bold text-muted-foreground/30">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                  <span>Private Consultation • Discrete Sanctuary</span>
                </div>
              </div>
            </div>
            
            {/* Soft Ambient Radiance */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[250px] translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
