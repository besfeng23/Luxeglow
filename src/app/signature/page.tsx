'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Gem, Sparkles, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const signatureTreatments = [
  {
    id: "signature-facial",
    name: "Luxe Signature Facial",
    tagline: "The 10-Step Rejuvenation Ritual",
    price: "₱3,500",
    package: "5 Sessions + 1 Free",
    description: "Our flagship experience. A meticulous multi-step journey designed for deep restoration and visible radiance. This treatment adapts to your skin's unique intelligence, using a combination of medical-grade technology and sensory care.",
    benefits: ["Deep Cellular Cleansing", "Diamond Peel Exfoliation", "Radiofrequency Tightening", "PDT Light Restoration"],
    image: "signature-facial",
    accent: "bg-secondary/30",
    link: "/signature/facial"
  },
  {
    id: "ipl-hair-removal",
    name: "IPL Hair Removal",
    tagline: "The Silk Protocol",
    price: "From ₱1,500",
    package: "Unlimited Yearly Options",
    description: "Achieve lasting smoothness with our advanced Intense Pulsed Light technology. Precise, safe, and effective hair reduction for those who demand the ultimate in care and convenience.",
    benefits: ["Long-term Reduction", "Precision Targeting", "Painless Experience", "Skin Smoothing"],
    image: "treatment-room",
    accent: "bg-secondary/20",
    link: "/signature/ipl-hair-removal"
  },
  {
    id: "bb-glow",
    name: "BB Glow & Blush",
    tagline: "The Semi-Permanent Canvas",
    price: "₱3,000",
    package: "Bundle: Glow + Blush ₱5,000",
    description: "Wake up with a flawless, radiant complexion every single day. Our BB Glow and Blush treatments use safe, semi-permanent foundation and tinting to even out skin tone and add a natural, healthy flush.",
    benefits: ["Even Skin Tone", "Hyper-pigmentation Cover", "Natural Rosy Glow", "Minimal Makeup Need"],
    image: "facial-treatment",
    accent: "bg-white",
    link: "/signature/bb-glow"
  },
  {
    id: "carbon-laser",
    name: "Carbon Laser Ritual",
    tagline: "The Hollywood Porcelain Peel",
    price: "₱4,500",
    package: "Promo: Buy 3 Get 1",
    description: "An advanced laser treatment that targets the deepest layers of the skin to minimize pores, refine texture, and stimulate collagen production. Results are immediate: skin looks airbrushed and luminous with zero downtime.",
    benefits: ["Instant Pore Refinement", "Texture Smoothing", "Oil Control", "Collagen Induction"],
    image: "carbon-laser",
    accent: "bg-foreground text-white",
    link: "/contact"
  },
  {
    id: "mesolipo",
    name: "Mesolipo Sculpt",
    tagline: "The Art of Contouring",
    price: "₱5,000",
    package: "Full Body Series Available",
    description: "Targeted fat reduction and body refinement through precision micro-injections. Designed to address stubborn areas and enhance your natural silhouette with medical-grade safety.",
    benefits: ["Spot Fat Reduction", "Cellulite Improvement", "Body Contouring", "Quick Recovery"],
    image: "skincare-products",
    accent: "bg-white",
    link: "/contact"
  },
  {
    id: "wart-removal",
    name: "The Refinement",
    tagline: "Skin Flawlessness Protocol",
    price: "From ₱500",
    package: "Unlimited Removal Packages",
    description: "Safe, effective, and clinical removal of skin imperfections. We use precise techniques to ensure clear results and healthy skin healing for a truly flawless finish.",
    benefits: ["Clinical Precision", "Safe Procedure", "Minimal Scarring", "Immediate Results"],
    image: "clinic-interior",
    accent: "bg-secondary/40",
    link: "/contact"
  }
];

export default function SignatureTreatmentsPage() {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Editorial Hero */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">The Signature Collection</span>
            <h1 className="font-headline text-7xl md:text-9xl leading-none tracking-tight text-foreground">
              Standout <br />
              <span className="italic font-light text-primary/60">Rituals.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 font-light italic max-w-3xl mx-auto leading-relaxed">
              "A curation of our most transformative aesthetic experiences, where high science meets absolute luxury."
            </p>
          </div>
        </div>
      </section>

      {/* Treatment List - Editorial Spreads */}
      {signatureTreatments.map((item, idx) => (
        <section key={item.id} className={`py-40 ${idx % 2 === 1 ? 'bg-secondary/10' : 'bg-white'}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className={`lg:col-span-7 relative ${idx % 2 === 1 ? 'order-2' : 'order-1'}`}>
                <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[3rem] md:rounded-[5rem] overflow-hidden luxury-shadow animate-reveal">
                  <Image 
                    src={PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/1200/800`}
                    alt={item.name}
                    fill
                    className="object-cover"
                    data-ai-hint={PlaceHolderImages.find(img => img.id === item.image)?.imageHint || "luxury spa"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
                </div>
                {/* Floating Price Badge */}
                <div className="absolute -bottom-8 -right-8 md:-right-12 bg-white luxury-shadow p-8 rounded-[2rem] border border-black/5 z-20 animate-fade-in-up delay-500">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Investment</p>
                  <p className="font-headline text-3xl italic text-foreground">{item.price}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className={`lg:col-span-5 space-y-12 ${idx % 2 === 1 ? 'order-1' : 'order-2'}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary">Signature 0{idx + 1}</span>
                    <div className="h-px w-12 bg-primary/20" />
                  </div>
                  <h2 className="font-headline text-5xl md:text-7xl leading-tight">{item.name}</h2>
                  <p className="text-xl font-light italic text-accent">{item.tagline}</p>
                </div>

                <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                  {item.description}
                </p>

                <div className="space-y-6 pt-6">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-foreground">Treatment Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center gap-10">
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">Privilege</p>
                    <p className="text-sm font-bold tracking-wide text-primary">{item.package}</p>
                  </div>
                  <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-12 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-700 hover:scale-105">
                    <Link href={item.link}>Discover The Ritual</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Experience High-Trust Section */}
      <section className="py-56 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            <ShieldCheck className="w-16 h-16 text-accent mx-auto animate-pulse" />
            <h2 className="font-headline text-6xl md:text-8xl italic font-light leading-tight">
              Clinical Artistry. <br />
              <span className="text-accent">Private Luxury.</span>
            </h2>
            <p className="text-white/40 text-2xl font-light leading-relaxed italic max-w-3xl mx-auto">
              Every signature ritual is performed in our discrete Estancia Mall sanctuary, ensuring your journey to radiance is as peaceful as it is transformative.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10 pt-10">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Daily: 10AM - 9PM</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full">
                <Gem className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Private Boutique Clinic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* CTA Spread */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-16">
            <h2 className="font-headline text-6xl md:text-8xl leading-none">Your Transformation <br /><span className="italic font-light">Starts Here.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Button asChild variant="outline" className="rounded-full border-black/10 px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 hover:bg-secondary">
                <Link href="/services">Full Ritual Menu</Link>
              </Button>
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground pt-8 font-bold">Luxe Glow Premier • Capitol Commons</p>
          </div>
        </div>
      </section>
    </div>
  );
}
