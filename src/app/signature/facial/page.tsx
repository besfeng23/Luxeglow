'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Star, 
  Gem, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Waves, 
  Zap, 
  Snowflake, 
  Sun,
  Hand
} from 'lucide-react';

const facialSteps = [
  {
    step: "01",
    title: "Double Purification",
    desc: "We begin by removing surface impurities through a double-cleansing ritual, preparing the canvas for deep clinical intervention.",
    icon: Waves,
    image: "https://picsum.photos/seed/facial1/800/600"
  },
  {
    step: "02",
    title: "Thermal Softening",
    desc: "Gentle steaming opens the pores and softens the skin's texture, ensuring the extraction process is seamless and effective.",
    icon: Sun,
    image: "https://picsum.photos/seed/facial2/800/600"
  },
  {
    step: "03",
    title: "Meticulous Extraction",
    desc: "Our skilled therapists perform a precise extraction (pricking) to remove deep-seated impurities while maintaining the skin's integrity.",
    icon: Hand,
    image: PlaceHolderImages.find(img => img.id === 'step-extraction')?.imageUrl || "https://picsum.photos/seed/step1/800/600"
  },
  {
    step: "04",
    title: "Diamond Refinement",
    desc: "A medical-grade diamond-tip exfoliation gently removes dead skin cells, instantly revealing a smoother, more radiant surface.",
    icon: Gem,
    image: "https://picsum.photos/seed/facial4/800/600"
  },
  {
    step: "05",
    title: "Architectural Lifting",
    desc: "Radiofrequency (RF) waves stimulate collagen production in the deep dermis, providing an immediate lift and firmer facial contours.",
    icon: Zap,
    image: PlaceHolderImages.find(img => img.id === 'step-rf')?.imageUrl || "https://picsum.photos/seed/step3/800/600"
  },
  {
    step: "06",
    title: "Cellular Awakening",
    desc: "High-frequency technology delivers antimicrobial energy to the skin, accelerating healing and oxygenating the tissues.",
    icon: Zap,
    image: "https://picsum.photos/seed/facial6/800/600"
  },
  {
    step: "07",
    title: "The Cryo-Seal",
    desc: "A cold hammer treatment provides instant cooling, sealing the pores and locking in the beneficial serums while reducing inflammation.",
    icon: Snowflake,
    image: "https://picsum.photos/seed/facial7/800/600"
  },
  {
    step: "08",
    title: "Luminous Restoration",
    desc: "Photo-Dynamic Therapy (PDT) Light uses specific frequencies to target skin concerns, from acne to aging, at a cellular level.",
    icon: Sparkles,
    image: PlaceHolderImages.find(img => img.id === 'step-pdt')?.imageUrl || "https://picsum.photos/seed/step2/800/600"
  },
  {
    step: "09",
    title: "Signature Masking",
    desc: "A nutrient-rich mask tailored to your skin's intelligence is applied to deeply nourish and hydrate.",
    icon: Gem,
    image: "https://picsum.photos/seed/facial9/800/600"
  },
  {
    step: "10",
    title: "Final Shield",
    desc: "The ritual concludes with premium hydration and a broad-spectrum SPF to protect your newly radiant canvas.",
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/facial10/800/600"
  }
];

export default function LuxeSignatureFacialPage() {
  const mainImg = PlaceHolderImages.find(img => img.id === 'facial-process');

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Immersive Hero */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={mainImg?.imageUrl || "https://picsum.photos/seed/facialhero/1200/800"} 
            alt="Luxe Signature Facial" 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="luxury facial"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">Flagship Ritual</span>
            </div>
            <h1 className="font-headline text-7xl md:text-9xl text-white leading-[0.85]">
              Luxe <br />
              <span className="italic font-light text-accent/80">Signature.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed max-w-xl">
              "The definitive 90-minute journey to absolute skin perfection. A meticulous orchestration of clinical precision and sensory luxury."
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <div className="bg-white/95 luxury-shadow px-10 py-6 rounded-[2rem] border border-white flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-widest font-bold text-accent mb-1">Per Ritual</span>
                <span className="font-headline text-3xl text-foreground">₱3,500</span>
              </div>
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book The Journey</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-6 text-white/40">
           <div className="flex items-center gap-3">
             <Clock className="w-4 h-4" />
             <span className="text-[10px] uppercase tracking-widest font-bold">90 Minutes</span>
           </div>
           <div className="w-px h-6 bg-white/10" />
           <div className="flex items-center gap-3">
             <ShieldCheck className="w-4 h-4" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Clinical Grade</span>
           </div>
        </div>
      </section>

      {/* 2. Positioning & Intent */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Philosophy</span>
              <h2 className="font-headline text-6xl md:text-7xl">More Than A <br /><span className="italic font-light">Facial.</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
                At Luxe Glow Premier, we believe the face is an architectural masterpiece that requires periodic refinement. The Luxe Signature Facial is a clinical sequence that adapts to your skin's unique intelligence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                 <div className="p-8 rounded-[2rem] bg-secondary/30 border border-black/5">
                   <h4 className="text-[11px] uppercase tracking-widest font-bold mb-4">Cellular Renewal</h4>
                   <p className="text-sm text-muted-foreground font-light">Designed to accelerate turnover and reveal a fresh, oxygenated surface.</p>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-secondary/30 border border-black/5">
                   <h4 className="text-[11px] uppercase tracking-widest font-bold mb-4">Contour Fidelity</h4>
                   <p className="text-sm text-muted-foreground font-light">Utilizes Radiofrequency to define jawlines and lift the cheek structures.</p>
                 </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden luxury-shadow">
              <Image 
                src={facialSteps[7].image} 
                alt="The Signature Process" 
                fill 
                className="object-cover"
                data-ai-hint="luxury facial"
              />
              <div className="absolute inset-0 border-[40px] border-white/10 rounded-[4rem] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ritual Journey */}
      <section className="py-48 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-primary mb-8 block">The Protocol</span>
          <h2 className="font-headline text-6xl md:text-8xl">The Journey</h2>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {facialSteps.map((step, idx) => (
              <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 space-y-8 ${idx % 2 === 1 ? 'order-2' : 'order-1'}`}>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-black/5 bg-white flex items-center justify-center luxury-shadow">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/60">Step {step.step}</span>
                  </div>
                  <h3 className="font-headline text-5xl md:text-6xl">{step.title}</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed italic border-l-2 border-accent/20 pl-8">
                    {step.desc}
                  </p>
                </div>
                <div className={`lg:col-span-7 relative group ${idx % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <div className="aspect-[16/9] rounded-[3rem] overflow-hidden luxury-shadow relative">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      data-ai-hint="facial treatment"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className={`absolute -z-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl ${idx % 2 === 0 ? '-top-12 -right-12' : '-bottom-12 -left-12'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing & Privileges */}
      <section className="py-56 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">The Privilege</span>
              <h2 className="font-headline text-6xl md:text-8xl italic font-light">Secure Your <br /><span className="text-accent">Transformation</span></h2>
              <p className="text-white/40 text-2xl font-light italic max-w-xl">
                True radiance is a commitment. Experience the Luxe Signature Facial as a singular ritual or join our exclusive series.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl space-y-8 flex flex-col justify-between group hover:bg-white/10 transition-all duration-700">
                <div className="space-y-4">
                  <Star className="w-8 h-8 text-accent/40" />
                  <h4 className="text-[12px] uppercase tracking-widest font-bold">Single Ritual</h4>
                  <p className="text-white/40 text-sm italic font-light">The complete 10-step clinical experience.</p>
                </div>
                <div className="space-y-6">
                  <div className="font-headline text-4xl italic">₱3,500</div>
                  <Button asChild variant="outline" className="w-full rounded-full border-white/20 text-white hover:bg-white hover:text-foreground h-12 text-[10px] uppercase tracking-widest font-bold">
                    <Link href="/contact">Book Session</Link>
                  </Button>
                </div>
              </div>
              <div className="p-12 rounded-[3rem] bg-accent/90 text-foreground space-y-8 flex flex-col justify-between group hover:scale-105 transition-all duration-700">
                <div className="space-y-4">
                  <Gem className="w-8 h-8 text-foreground/40" />
                  <h4 className="text-[12px] uppercase tracking-widest font-bold">Privilege Series</h4>
                  <p className="text-foreground/60 text-sm italic font-light">5 Sessions + 1 Complementary. The ultimate maintenance protocol.</p>
                </div>
                <div className="space-y-6">
                  <div className="font-headline text-4xl italic">₱17,500</div>
                  <Button asChild className="w-full rounded-full bg-foreground text-white hover:bg-black h-12 text-[10px] uppercase tracking-widest font-bold border-none">
                    <Link href="/contact">Inquire Series</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="font-headline text-6xl md:text-8xl leading-none">Your Path to <br /><span className="italic font-light">Radiance.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
              <Button asChild variant="outline" className="rounded-full border-black/10 px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 hover:bg-secondary">
                <Link href="/signature">View Other Rituals</Link>
              </Button>
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
