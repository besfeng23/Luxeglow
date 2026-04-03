'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ShieldCheck, Sparkles, Gem, Clock, Quote, Phone, MessageCircle, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BRAND, CONTACT, HOME_CONTENT, SIGNATURE_TREATMENTS, PACKAGES, TESTIMONIALS, TRUST_STATEMENTS } from '@/content/data';
import { cn } from '@/lib/utils';

export default function Home() {
  const signatureImg = PlaceHolderImages.find(img => img.id === 'signature-facial');
  
  return (
    <div className="flex flex-col bg-background">
      
      {/* 1. Hero Section - Refined Editorial */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10 translate-x-1/4 skew-x-12 hidden lg:block" />
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 z-10 space-y-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary">{HOME_CONTENT.hero.badge}</span>
            </div>
            
            <h1 className="font-headline text-7xl md:text-8xl lg:text-[110px] leading-[0.85] text-foreground tracking-tighter">
              {HOME_CONTENT.hero.title} <br />
              <span className="italic font-light text-primary/70">{HOME_CONTENT.hero.titleItalic}</span>
            </h1>
            
            <p className="font-body text-xl text-muted-foreground/80 leading-relaxed max-w-lg font-light italic text-balance">
              {HOME_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4">
              <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              
              <Link href="/signature" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground hover:text-primary transition-all duration-500 py-4">
                Explore Rituals 
                <div className="w-12 h-px bg-foreground/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden luxury-shadow animate-reveal group">
              <Image
                src={HOME_CONTENT.hero.image}
                alt={BRAND.fullName}
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[4000ms] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-12 -right-12 hidden xl:flex w-72 h-72 bg-white/95 backdrop-blur-2xl rounded-full p-12 luxury-shadow border border-white flex-col items-center justify-center text-center gap-4 animate-fade-in-up delay-1000">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Private Selection</p>
              <p className="font-headline italic text-2xl leading-tight text-foreground">"Bespoke skin <br />perfection."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Positioning Section - Quiet Wealth */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-16">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent block">The Private Narrative</span>
            <h2 className="font-headline text-6xl md:text-8xl text-foreground leading-tight tracking-tighter">
              {HOME_CONTENT.positioning.title} <br />
              <span className="italic font-light text-primary/60">{HOME_CONTENT.positioning.titleItalic}</span>
            </h2>
            <div className="h-px w-24 bg-accent/30 mx-auto" />
            <p className="text-2xl text-muted-foreground/90 leading-relaxed font-light italic max-w-3xl mx-auto text-balance">
              {HOME_CONTENT.positioning.quote}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 pt-24">
              {TRUST_STATEMENTS.map((item, i) => (
                <div key={i} className="space-y-6 group text-center">
                  <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all duration-1000">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                  <p className="text-base text-muted-foreground/80 leading-relaxed px-6 font-light italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Rituals - Editorial Cards */}
      <section className="py-48 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent block">The Collection</span>
              <h2 className="font-headline text-6xl md:text-7xl leading-none tracking-tighter">Refined Rituals</h2>
              <p className="text-muted-foreground text-2xl font-light leading-relaxed italic border-l-2 border-accent/20 pl-8">"Specifically curated aesthetic sequences for the discerning individual."</p>
            </div>
            <Link href="/services" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-4 hover:border-primary hover:text-primary transition-all duration-700 flex items-center gap-4 group">
              View All Rituals <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {SIGNATURE_TREATMENTS.map((item, i) => {
              const imgUrl = PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/600/800`;
              return (
                <div key={i} className="group relative bg-white rounded-[4rem] overflow-hidden luxury-shadow flex flex-col md:flex-row transition-all duration-1000 hover:-translate-y-3 border border-black/5">
                  <div className="relative w-full md:w-2/5 aspect-[4/5] md:aspect-auto">
                    <Image src={imgUrl} alt={item.name} fill className="object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
                    <div className="absolute top-8 left-8">
                      <span className="text-[10px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-primary shadow-sm">{item.tagline.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center flex-1 space-y-8">
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline text-4xl text-foreground leading-tight group-hover:text-primary transition-colors duration-700">{item.name}</h3>
                      <span className="text-lg font-bold text-accent/80 italic">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground/80 leading-relaxed font-light text-base italic">{item.description}</p>
                    <div className="pt-4">
                      <Button asChild variant="outline" className="w-fit rounded-full border-black/10 text-[10px] uppercase tracking-[0.3em] font-bold h-12 px-10 hover:bg-foreground hover:text-white transition-all duration-700">
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

      {/* 4. The Protocol Sequence */}
      <section className="py-56 bg-foreground text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-32 space-y-12">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent block">The Protocol</span>
            <h2 className="font-headline text-6xl md:text-8xl leading-none tracking-tighter">The Luxury <span className="italic font-light">Sequence</span></h2>
            <p className="text-white/40 text-2xl font-light italic leading-relaxed">"Every ritual follows a meticulous clinical path to ensure your safety and luminous results."</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
            <div className="absolute top-1/4 left-0 w-full h-px bg-white/10 hidden md:block" />
            
            {HOME_CONTENT.sequence.map((item, idx) => (
              <div key={idx} className="relative z-10 space-y-10 group">
                <div className="w-20 h-20 rounded-full border border-white/20 bg-foreground flex items-center justify-center text-accent font-headline italic text-3xl group-hover:bg-accent group-hover:text-foreground transition-all duration-1000">
                  {item.step}
                </div>
                <div className="space-y-6">
                  <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold">{item.title}</h4>
                  <p className="text-white/40 text-base leading-relaxed font-light italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curated Testimonials */}
      <section className="py-56 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-32 space-y-8">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent block">The Private Circle</span>
            <h2 className="font-headline text-6xl md:text-8xl tracking-tighter">Voices of <span className="italic font-light">Radiance</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-16 rounded-[4rem] bg-secondary/20 border border-black/5 flex flex-col justify-between group hover:-translate-y-4 transition-all duration-1000 luxury-shadow">
                <div className="space-y-12">
                  <Quote className="w-12 h-12 text-accent/30 group-hover:text-accent transition-colors duration-1000" />
                  <p className="text-xl italic font-light leading-relaxed text-muted-foreground/90">"{t.quote}"</p>
                </div>
                <div className="pt-12 border-t border-black/5 mt-16 space-y-2">
                  <p className="text-[12px] font-bold uppercase tracking-[0.3em]">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Transformation CTA */}
      <section className="py-56 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-[5rem] p-20 md:p-32 text-center relative overflow-hidden luxury-shadow border border-black/5">
            <div className="relative z-10 max-w-5xl mx-auto space-y-20">
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-primary block">Your Transformation Awaits</span>
              <h2 className="font-headline text-7xl md:text-[120px] text-foreground leading-[0.85] tracking-tighter">
                Secure Your <br />
                <span className="italic font-light text-primary/80">Experience.</span>
              </h2>
              <p className="text-2xl text-muted-foreground/70 leading-relaxed font-light italic max-w-3xl mx-auto text-balance">
                Join our private clientele at {CONTACT.shortAddress}. Appointments are available daily for your aesthetic refinement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center pb-20 border-b border-black/5">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Call Concierge</p>
                  <p className="text-xl font-medium tracking-tight">{CONTACT.phone}</p>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Social Connection</p>
                  <p className="text-xl font-medium tracking-tight">Messenger / FB</p>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center mx-auto text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Sanctuary</p>
                  <p className="text-xl font-medium tracking-tight text-balance">{CONTACT.shortAddress}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 pt-12">
                <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-24 h-24 uppercase tracking-[0.4em] text-[12px] font-bold shadow-2xl transition-all duration-1000 w-full md:w-auto">
                  <Link href="/contact">Reserve Appointment</Link>
                </Button>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Private Consultation • Discrete Sanctuary</span>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
