'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Search, Star, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  "All Rituals",
  "Signature Facial",
  "Advanced Aesthetics",
  "Skin Intelligence",
  "The Sanctuary"
];

const galleryItems = [
  {
    id: 1,
    category: "Signature Facial",
    title: "The Signature Cleansing",
    image: "https://picsum.photos/seed/gal1/800/1000",
    hint: "facial treatment",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    id: 2,
    category: "The Sanctuary",
    title: "Elite Reception Atelier",
    image: "https://picsum.photos/seed/gal2/1200/800",
    hint: "aesthetic clinic",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    id: 3,
    category: "Advanced Aesthetics",
    title: "Carbon Laser Precision",
    image: "https://picsum.photos/seed/gal3/800/800",
    hint: "laser skin",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: 4,
    category: "Skin Intelligence",
    title: "Radiant BB Glow",
    image: "https://picsum.photos/seed/gal4/800/1000",
    hint: "glowing skin",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    id: 5,
    category: "The Sanctuary",
    title: "Private Treatment Suite",
    image: "https://picsum.photos/seed/gal5/1200/800",
    hint: "treatment room",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: 6,
    category: "Signature Facial",
    title: "PDT Light Restoration",
    image: "https://picsum.photos/seed/gal6/800/800",
    hint: "luxury facial",
    span: "lg:col-span-1 lg:row-span-1"
  },
  {
    id: 7,
    category: "Skin Intelligence",
    title: "Bespoke Skincare Curations",
    image: "https://picsum.photos/seed/gal7/1200/800",
    hint: "luxury skincare",
    span: "lg:col-span-2 lg:row-span-1"
  },
  {
    id: 8,
    category: "Advanced Aesthetics",
    title: "Mesolipo Sculpting",
    image: "https://picsum.photos/seed/gal8/800/1000",
    hint: "skincare products",
    span: "lg:col-span-1 lg:row-span-2"
  },
  {
    id: 9,
    category: "Signature Facial",
    title: "The Cryo-Seal Protocol",
    image: "https://picsum.photos/seed/gal9/800/800",
    hint: "facial treatment",
    span: "lg:col-span-1 lg:row-span-1"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All Rituals");

  const filteredItems = galleryItems.filter(item => 
    filter === "All Rituals" || item.category === filter
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Header */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold text-accent block">The Atelier Gallery</span>
            <h1 className="font-headline text-5xl md:text-9xl leading-none tracking-tight text-foreground">
              Ambiance <br />
              <span className="italic font-light text-primary/60">& Artistry.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground/80 font-light italic max-w-3xl mx-auto leading-relaxed">
              "A visual journey through our private sanctuary, where every detail is a dedicated sequence of refinement."
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-12 md:pb-20 overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-8 md:gap-12 min-w-max md:min-w-0 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold transition-all duration-800 relative py-2",
                  filter === cat 
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary" 
                    : "text-muted-foreground/60 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-Style Grid */}
      <section className="pb-24 md:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div 
                    className={cn(
                      "group relative overflow-hidden rounded-[3rem] luxury-shadow cursor-pointer transition-all duration-1000 hover:-translate-y-2",
                      item.span
                    )}
                  >
                    <div className="absolute inset-0 z-10 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-center justify-center p-8 md:p-12 text-center text-white">
                      <Search className="w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 opacity-60" />
                      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold mb-2 md:mb-4">{item.category}</span>
                      <h4 className="font-headline text-2xl md:text-3xl italic font-light">{item.title}</h4>
                    </div>
                    <div className="relative aspect-square md:aspect-auto h-full w-full min-h-[400px]">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-3000 group-hover:scale-110"
                        data-ai-hint={item.hint}
                      />
                    </div>
                    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 md:hidden">
                       <span className="text-[8px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur px-4 py-2 rounded-full">{item.title}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl bg-transparent border-none p-0 shadow-none overflow-hidden">
                  <div className="relative aspect-video lg:aspect-[16/9] w-full rounded-[2rem] md:rounded-[4rem] overflow-hidden luxury-shadow">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 text-white z-10">
                      <div className="bg-black/40 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 max-w-xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-accent mb-2 md:mb-4 block">{item.category}</span>
                        <h3 className="font-headline text-3xl md:text-5xl italic font-light leading-tight">{item.title}</h3>
                        <div className="h-px w-12 md:w-16 bg-white/20 my-4 md:my-6" />
                        <p className="text-white/60 text-xs md:text-sm italic font-light">Experience the private clinical boutique standard at Estancia Mall.</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Experience High-Trust Spread */}
      <section className="py-24 md:py-48 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
             <div className="space-y-10 md:space-y-16">
               <div className="space-y-6 md:space-y-8">
                 <Star className="w-10 h-10 md:w-12 md:h-12 text-accent fill-accent/20 animate-pulse" />
                 <h2 className="font-headline text-5xl md:text-8xl italic font-light leading-tight">"A space where <br /><span className="text-accent">artistry</span> meets tranquility."</h2>
               </div>
               <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed italic border-l border-white/10 pl-8 md:pl-10 max-w-xl">
                 Our clinic is designed as a sanctuary of quiet prestige. From the desaturated palette to the discrete private suites, every element is considered.
               </p>
               <div className="pt-4">
                 <Button asChild className="rounded-full bg-white text-foreground hover:bg-accent px-12 md:px-16 h-16 md:h-20 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] font-bold shadow-2xl transition-all duration-1000">
                    <Link href="/contact">Book Your Visit</Link>
                 </Button>
               </div>
             </div>
             <div className="relative group">
                <div className="aspect-[3/4] rounded-[3rem] md:rounded-[5rem] overflow-hidden luxury-shadow relative border-[10px] md:border-[20px] border-white/5">
                   <Image 
                    src={PlaceHolderImages.find(img => img.id === 'clinic-interior')?.imageUrl || "https://picsum.photos/seed/atelier/800/1000"} 
                    alt="Clinic Interior" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <div className="absolute -top-6 md:-top-12 -right-6 md:-right-12 w-32 md:w-48 h-32 md:h-48 bg-accent/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
             </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
            <h2 className="font-headline text-5xl md:text-8xl leading-none">Ready for Your <br /><span className="italic font-light">Glow?</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
               <Button asChild variant="outline" className="rounded-full border-black/10 px-12 md:px-16 h-14 md:h-16 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] font-bold transition-all duration-1000 hover:bg-secondary">
                 <Link href="/signature">Explore Rituals</Link>
               </Button>
               <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-12 md:px-16 h-14 md:h-16 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-1000">
                 <Link href="/contact">Reserve Journey</Link>
               </Button>
            </div>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-muted-foreground/60 pt-8 md:pt-10 font-bold">Luxe Glow Premier • Private Aesthetic Intelligence</p>
          </div>
        </div>
      </section>
    </div>
  );
}
