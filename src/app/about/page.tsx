'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Gem, Sparkles, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const clinicImg = PlaceHolderImages.find(img => img.id === 'clinic-interior');
  const treatmentImg = PlaceHolderImages.find(img => img.id === 'treatment-room');
  const modelImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');
  const productsImg = PlaceHolderImages.find(img => img.id === 'skincare-products');

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Editorial Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">The Private Narrative</span>
            <h1 className="font-headline text-7xl md:text-9xl lg:text-[140px] leading-none tracking-tight text-foreground">
              Art of <br />
              <span className="italic font-light text-primary/60">Radiant Being.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 font-light italic max-w-3xl mx-auto leading-relaxed">
              "At Luxe Glow Premier, we believe beauty is an intimate radiance to be cultivated through clinical precision and absolute care."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group aspect-[4/5] overflow-hidden rounded-[4rem] luxury-shadow animate-reveal">
              <Image 
                src={modelImg?.imageUrl || "https://picsum.photos/seed/lux6/600/800"} 
                alt="Luxe Glow Philosophy" 
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-105"
                data-ai-hint="glowing skin"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
            </div>
            <div className="space-y-16 animate-fade-in-up">
              <Quote className="w-16 h-16 text-accent/20" />
              <div className="space-y-8">
                <h2 className="font-headline text-6xl md:text-7xl leading-tight">Our <br /><span className="italic font-light">Philosophy</span></h2>
                <div className="space-y-10 text-xl text-muted-foreground/80 font-light leading-relaxed italic">
                  <p>
                    At Luxe Glow Premier, we approach aesthetics as a fine clinical art. Our philosophy is rooted in the concept of "Quiet Wealth"—delivering transformative results without the noise of mass-market trends.
                  </p>
                  <p>
                    Every ritual we perform is a dedicated sequence of refinement, designed to honor the natural architecture of your skin. We don't just treat; we curate an environment where your beauty can truly radiate.
                  </p>
                </div>
              </div>
              <div className="pt-8 flex items-center gap-8">
                <div className="h-px w-16 bg-accent/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">The Luxe Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Luxe Glow Experience */}
      <section className="py-48 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-10 block">The Protocol</span>
          <h2 className="font-headline text-6xl md:text-8xl">The Experience</h2>
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-32">
            {[
              {
                title: "Private Sanctuary",
                desc: "Located in the exclusive Estancia Mall at Capitol Commons, our clinic offers a discrete and peaceful haven away from the city's pace.",
                icon: MapPin
              },
              {
                title: "Clinical Artistry",
                desc: "Our therapists are trained in proprietary clinical protocols that merge medical science with the sensory experience of luxury care.",
                icon: Gem
              },
              {
                title: "Bespoke Care",
                desc: "No two skins are identical. We provide a tailored intelligence report for every client, ensuring your journey is uniquely yours.",
                icon: Sparkles
              }
            ].map((item, i) => (
              <div key={i} className="space-y-10 group text-center md:text-left">
                <div className="w-20 h-20 rounded-full border border-black/5 flex items-center justify-center text-primary bg-white luxury-shadow group-hover:bg-foreground group-hover:text-white transition-all duration-1000 mx-auto md:mx-0">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold">{item.title}</h4>
                <p className="text-base text-muted-foreground/80 leading-relaxed font-light italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Sanctuary */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-16 order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">The Atelier</span>
            <h2 className="font-headline text-6xl md:text-7xl leading-tight">The <span className="italic font-light">Sanctuary</span></h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-accent/20 pl-8">
              "A space designed for absolute clinical tranquility. From the soft palette of our treatment suites to the discrete layout, every detail is considered."
            </p>
            <div className="grid grid-cols-1 gap-10">
              <div className="flex items-center gap-8 p-10 rounded-[3rem] bg-secondary/30 border border-black/5 luxury-shadow">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <div>
                  <h5 className="text-[11px] uppercase tracking-widest font-bold mb-2">Elite Comfort</h5>
                  <p className="text-sm text-muted-foreground font-light italic leading-relaxed">Ergonomic treatment beds and premium linens for absolute relaxation during rituals.</p>
                </div>
              </div>
              <div className="flex items-center gap-8 p-10 rounded-[3rem] bg-secondary/30 border border-black/5 luxury-shadow">
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <div>
                  <h5 className="text-[11px] uppercase tracking-widest font-bold mb-2">Advanced Science</h5>
                  <p className="text-sm text-muted-foreground font-light italic leading-relaxed">Equipped with the latest FDA-approved aesthetic technology for consistent, visible results.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[3/4] rounded-[4rem] overflow-hidden luxury-shadow relative mt-16 animate-reveal">
                <Image 
                  src={clinicImg?.imageUrl || "https://picsum.photos/seed/lux3/800/600"} 
                  alt="Clinic Reception" 
                  fill 
                  className="object-cover"
                  data-ai-hint="aesthetic clinic"
                />
              </div>
              <div className="aspect-[3/4] rounded-[4rem] overflow-hidden luxury-shadow relative animate-reveal delay-500">
                <Image 
                  src={treatmentImg?.imageUrl || "https://picsum.photos/seed/lux5/800/600"} 
                  alt="Treatment Room" 
                  fill 
                  className="object-cover"
                  data-ai-hint="treatment room"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Personalized Care */}
      <section className="py-56 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-20">
            <Star className="w-12 h-12 text-accent mx-auto animate-pulse fill-accent/20" />
            <h2 className="font-headline text-6xl md:text-9xl italic font-light leading-tight">
              "Personalized beauty is the <br />
              <span className="text-accent">ultimate luxury.</span>"
            </h2>
            <p className="text-white/40 text-2xl font-light leading-relaxed italic max-w-3xl mx-auto">
              We move away from one-size-fits-all aesthetics. At Luxe Glow, your treatment sequence is built after an intimate understanding of your skin's intelligence and your personal aspirations.
            </p>
            <div className="pt-16">
              <Button asChild className="rounded-full bg-white text-foreground hover:bg-accent px-20 h-20 uppercase tracking-[0.4em] text-[11px] font-bold transition-all duration-700 shadow-2xl">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Image 
            src={productsImg?.imageUrl || "https://picsum.photos/seed/lux4/600/400"} 
            alt="Products Background" 
            fill 
            className="object-cover grayscale"
            data-ai-hint="luxury skincare"
          />
        </div>
      </section>
    </div>
  );
}
