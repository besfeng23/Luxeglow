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
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">The Private Story</span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl leading-none">
              A Legacy of <br />
              <span className="italic font-light text-primary/70">Radiant Confidence.</span>
            </h1>
            <p className="text-xl text-muted-foreground/80 font-light italic max-w-2xl mx-auto leading-relaxed">
              "We believe beauty is not a standard to be met, but an intimate radiance to be cultivated through clinical precision and absolute care."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Section - The Quote */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group overflow-hidden rounded-[4rem] luxury-shadow animate-reveal">
              <Image 
                src={modelImg?.imageUrl || "https://picsum.photos/seed/lux6/600/800"} 
                alt="Our Philosophy" 
                width={800} 
                height={1000} 
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
                data-ai-hint="glowing skin"
              />
            </div>
            <div className="space-y-12 animate-fade-in-up">
              <Quote className="w-12 h-12 text-accent/30" />
              <h2 className="font-headline text-5xl md:text-6xl leading-tight">Our <span className="italic font-light">Philosophy</span></h2>
              <div className="space-y-8 text-lg text-muted-foreground/80 font-light leading-relaxed italic">
                <p>
                  At Luxe Glow Premier, we approach aesthetics as a fine art. Our philosophy is rooted in the concept of "Quiet Wealth"—delivering transformative, clinical results without the noise of mass-market trends.
                </p>
                <p>
                  Every ritual we perform is a dedicated sequence of refinement, designed to honor the natural architecture of your skin. We don't just treat; we curate.
                </p>
              </div>
              <div className="pt-8 flex items-center gap-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">The Luxe Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Luxe Glow Experience */}
      <section className="py-40 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-8 block">The Protocol</span>
          <h2 className="font-headline text-5xl md:text-7xl">The Experience</h2>
        </div>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              {
                title: "Private Sanctuary",
                desc: "Located in the exclusive Estancia Mall at Capitol Commons, our clinic offers a discrete and peaceful haven away from the city's pace.",
                icon: MapPin
              },
              {
                title: "Clinical Artistry",
                desc: "Our therapists are trained in proprietary clinical protocols that merge medical-grade technology with the sensory experience of a luxury spa.",
                icon: Gem
              },
              {
                title: "Bespoke Care",
                desc: "No two skins are identical. We provide a tailored intelligence report for every client, ensuring your journey is uniquely yours.",
                icon: Sparkles
              }
            ].map((item, i) => (
              <div key={i} className="space-y-8 group">
                <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center text-primary bg-white luxury-shadow group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Space - Visual Gallery */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">The Atelier</span>
            <h2 className="font-headline text-5xl md:text-6xl leading-tight">Our <span className="italic font-light">Sanctuary</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed italic">
              "A space designed for absolute tranquility. From the soft palette of our treatment rooms to the discrete nature of our layout, every detail is considered."
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-secondary/30 border border-black/5">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest font-bold mb-1">Elite Comfort</h5>
                  <p className="text-xs text-muted-foreground font-light">Ergonomic treatment beds and premium linens.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-secondary/30 border border-black/5">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest font-bold mb-1">Modern Science</h5>
                  <p className="text-xs text-muted-foreground font-light">Equipped with the latest FDA-approved aesthetic technology.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden luxury-shadow relative mt-12 animate-reveal">
                <Image 
                  src={clinicImg?.imageUrl || "https://picsum.photos/seed/lux3/800/600"} 
                  alt="Clinic Reception" 
                  fill 
                  className="object-cover"
                  data-ai-hint="aesthetic clinic"
                />
              </div>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden luxury-shadow relative animate-reveal delay-300">
                <Image 
                  src={treatmentImg?.imageUrl || "https://picsum.photos/seed/lux5/800/600"} 
                  alt="Treatment Room" 
                  fill 
                  className="object-cover"
                  data-ai-hint="treatment room"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      {/* 5. Personalized Care - Storytelling */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-16">
            <Star className="w-10 h-10 text-accent mx-auto animate-pulse" />
            <h2 className="font-headline text-5xl md:text-8xl italic font-light">"Personalized beauty is the <br /><span className="text-accent">ultimate luxury.</span>"</h2>
            <p className="text-white/40 text-xl font-light leading-relaxed italic max-w-2xl mx-auto">
              We move away from one-size-fits-all aesthetics. At Luxe Glow, your treatment sequence is built after an intimate understanding of your skin concerns and beauty aspirations.
            </p>
            <div className="pt-12">
              <Button asChild className="rounded-full bg-white text-foreground hover:bg-accent px-16 h-16 uppercase tracking-[0.4em] text-[10px] font-bold transition-all duration-700">
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

      {/* 6. Why Choose Luxe Glow */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden luxury-shadow">
               <Image 
                src={PlaceHolderImages.find(img => img.id === 'facial-treatment')?.imageUrl || "https://picsum.photos/seed/lux2/600/800"} 
                alt="Treatment Focus" 
                fill 
                className="object-cover"
                data-ai-hint="facial treatment"
              />
             </div>
             <div className="space-y-16">
               <div className="space-y-6">
                 <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Differentiation</span>
                 <h2 className="font-headline text-5xl md:text-6xl">Why Our Clients <br /><span className="italic font-light">Trust Us</span></h2>
               </div>
               <div className="space-y-12">
                 {[
                   { title: "Refined Results", desc: "We focus on enhancements that look natural and radiant, avoiding the over-treated look." },
                   { title: "Premium Ambiance", desc: "A sanctuary at Estancia Mall designed for quiet prestige and absolute discretion." },
                   { title: "Personalized Protocols", desc: "Every treatment plan is bespoke, evolving with your skin's needs." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                     <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                       <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <div className="space-y-2">
                       <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                       <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-headline text-5xl md:text-6xl italic font-light">Your Journey to Radiance Starts Here.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Button asChild variant="outline" className="rounded-full border-black/10 px-12 h-14 uppercase tracking-[0.3em] text-[10px] font-bold">
                 <Link href="/services">Explore Rituals</Link>
               </Button>
               <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-12 h-14 uppercase tracking-[0.3em] text-[10px] font-bold shadow-xl">
                 <Link href="/contact">Book Appointment</Link>
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
