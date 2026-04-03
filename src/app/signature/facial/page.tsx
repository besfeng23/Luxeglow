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
    desc: "A meticulous multi-step cleansing sequence, removing deep-seated clinical residue to prepare the skin architecture.",
    icon: Waves,
    image: "https://picsum.photos/seed/facial1/800/1000"
  },
  {
    step: "02",
    title: "Thermal Softening",
    desc: "Gentle thermal intervention to soften the canvas, ensuring that the extraction process remains absolute and precise.",
    icon: Sun,
    image: "https://picsum.photos/seed/facial2/800/1000"
  },
  {
    step: "03",
    title: "Meticulous Extraction",
    desc: "A clinical pricking protocol executed with extreme precision, addressing imperfections while maintaining skin fidelity.",
    icon: Hand,
    image: PlaceHolderImages.find(img => img.id === 'step-extraction')?.imageUrl || "https://picsum.photos/seed/step1/800/600"
  },
  {
    step: "04",
    title: "Diamond Refinement",
    desc: "Micro-diamond tip technology gently resurfaces the epidermis, instantly polishing the skin's radiant texture.",
    icon: Gem,
    image: "https://picsum.photos/seed/facial4/800/1000"
  },
  {
    step: "05",
    title: "Architectural Lifting",
    desc: "Radiofrequency (RF) energy targets the deep dermis, orchestrating a cellular lift and redefining facial contours.",
    icon: Zap,
    image: PlaceHolderImages.find(img => img.id === 'step-rf')?.imageUrl || "https://picsum.photos/seed/step3/800/600"
  },
  {
    step: "06",
    title: "Cellular Awakening",
    desc: "High-frequency microbial energy oxygenates the tissue, accelerating the skin's natural restorative cycles.",
    icon: Zap,
    image: "https://picsum.photos/seed/facial6/800/1000"
  },
  {
    step: "07",
    title: "The Cryo-Seal",
    desc: "A cold hammer protocol seals the pores, locking in clinical intelligence and instantly soothing the complexion.",
    icon: Snowflake,
    image: "https://picsum.photos/seed/facial7/800/1000"
  },
  {
    step: "08",
    title: "Luminous Restoration",
    desc: "PDT Light Therapy utilizes specialized frequencies to target cellular aspirations, from anti-aging to deep clarity.",
    icon: Sparkles,
    image: PlaceHolderImages.find(img => img.id === 'step-pdt')?.imageUrl || "https://picsum.photos/seed/step2/800/600"
  }
];

export default function LuxeSignatureFacialPage() {
  const mainImg = PlaceHolderImages.find(img => img.id === 'facial-process');

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Immersive Hero - Protocol Title */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={mainImg?.imageUrl || "https://picsum.photos/seed/facialhero/1200/800"} 
            alt="Luxe Signature Facial Ritual" 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="luxury facial"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-8 lg:px-20 relative z-10">
          <div className="max-w-4xl space-y-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-3xl px-8 py-3 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-white">The Flagship Ritual</span>
            </div>
            <h1 className="font-headline text-8xl md:text-9xl lg:text-[140px] text-white leading-[0.75] tracking-tighter">
              Luxe <br />
              <span className="italic font-light text-accent/80">Signature.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/60 font-light italic leading-relaxed max-w-2xl">
              "The definitive 90-minute orchestration of clinical precision and private sanctuary luxury. An intelligent sequence for absolute skin refinement."
            </p>
            <div className="flex flex-col sm:flex-row gap-12 pt-12 items-start sm:items-center">
              <div className="bg-white/95 luxury-shadow px-12 py-8 rounded-[2.5rem] border border-white flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-2">Per Ritual</span>
                <span className="font-headline text-4xl text-foreground">₱3,500</span>
              </div>
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-20 h-24 uppercase tracking-[0.6em] text-[12px] font-bold shadow-2xl transition-all duration-1000">
                <Link href="/contact">Reserve Journey</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-20 hidden lg:flex items-center gap-10 text-white/30">
           <div className="flex items-center gap-4">
             <Clock className="w-5 h-5 stroke-[1]" />
             <span className="text-[11px] uppercase tracking-[0.5em] font-bold">90 Minutes</span>
           </div>
           <div className="w-px h-8 bg-white/10" />
           <div className="flex items-center gap-4">
             <ShieldCheck className="w-5 h-5 stroke-[1]" />
             <span className="text-[11px] uppercase tracking-[0.5em] font-bold">Clinical Protocol</span>
           </div>
        </div>
      </section>

      {/* 2. Positioning & Intent */}
      <section className="py-72 bg-white">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-16">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-primary">The Philosophy</span>
              <h2 className="font-headline text-7xl md:text-8xl leading-tight tracking-tighter">More Than <br /><span className="italic font-light">A Facial.</span></h2>
              <p className="text-2xl text-muted-foreground/60 leading-relaxed font-light italic border-l-2 border-accent/30 pl-12">
                "We approach the face as an architectural masterpiece. The Signature Ritual is not a treatment; it is a dedicated sequence of refinement designed to honor your skin's intelligence."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-10">
                 <div className="p-12 rounded-[3rem] bg-secondary/30 border border-black/5 luxury-shadow">
                   <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold mb-6 text-foreground">Cellular Renewal</h4>
                   <p className="text-base text-muted-foreground/60 font-light italic">Orchestrated to accelerate skin turnover and reveal a fresh, oxygenated surface.</p>
                 </div>
                 <div className="p-12 rounded-[3rem] bg-secondary/30 border border-black/5 luxury-shadow">
                   <h4 className="text-[12px] uppercase tracking-[0.4em] font-bold mb-6 text-foreground">Contour Fidelity</h4>
                   <p className="text-base text-muted-foreground/60 font-light italic">Advanced Radiofrequency define jawlines and lifts the primary facial structures.</p>
                 </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[6rem] overflow-hidden luxury-shadow animate-reveal group">
              <Image 
                src={facialSteps[7].image} 
                alt="Signature Clinical Process" 
                fill 
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-6000"
                data-ai-hint="luxury facial"
              />
              <div className="absolute inset-0 border-[50px] border-white/10 rounded-[6rem] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Ritual Journey - Asymmetrical Editorial Layouts */}
      <section className="py-72 bg-secondary/20">
        <div className="container mx-auto px-8 lg:px-20 text-center mb-48">
          <span className="text-[10px] uppercase tracking-[1.2em] font-bold text-primary mb-12 block">The Protocol Sequence</span>
          <h2 className="font-headline text-8xl md:text-9xl tracking-tighter">The Journey</h2>
        </div>
        
        <div className="container mx-auto px-8 lg:px-20">
          <div className="space-y-48">
            {facialSteps.map((step, idx) => (
              <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-48 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-5 space-y-12 ${idx % 2 === 1 ? 'order-2' : 'order-1'}`}>
                  <div className="flex items-center gap-10">
                    <div className="w-20 h-20 rounded-full border border-black/5 bg-white flex items-center justify-center luxury-shadow text-accent">
                      <step.icon className="w-8 h-8 stroke-[1.2]" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.6em] font-bold text-muted-foreground/40">Protocol {step.step}</span>
                  </div>
                  <h3 className="font-headline text-6xl md:text-7xl leading-none">{step.title}</h3>
                  <p className="text-2xl text-muted-foreground/60 font-light leading-relaxed italic border-l-2 border-accent/20 pl-12">
                    {step.desc}
                  </p>
                </div>
                <div className={`lg:col-span-7 relative group ${idx % 2 === 1 ? 'order-1' : 'order-2'}`}>
                  <div className="aspect-[16/10] rounded-[5rem] overflow-hidden luxury-shadow relative">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-5000"
                      data-ai-hint="facial treatment"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className={`absolute -z-10 w-96 h-96 bg-accent/5 rounded-full blur-[150px] ${idx % 2 === 0 ? '-top-20 -right-20' : '-bottom-20 -left-20'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Privilege & Series - High Trust end-cap */}
      <section className="py-80 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-16">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent">The Privilege</span>
              <h2 className="font-headline text-7xl md:text-9xl italic font-light tracking-tighter">Secure Your <br /><span className="text-accent/60">Transformation.</span></h2>
              <p className="text-white/30 text-3xl font-light italic leading-relaxed max-w-2xl">
                "Radiance is a commitment. Experience the Luxe Signature Ritual as a singular event or join our exclusive Series."
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="p-16 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-3xl space-y-12 flex flex-col justify-between group hover:bg-white/10 transition-all duration-1000">
                <div className="space-y-6">
                  <Star className="w-10 h-10 text-accent/20" />
                  <h4 className="text-[13px] uppercase tracking-[0.5em] font-bold text-white">Single Ritual</h4>
                  <p className="text-white/30 text-base italic font-light">The complete clinical 90-minute experience.</p>
                </div>
                <div className="space-y-10">
                  <div className="font-headline text-5xl italic text-accent">₱3,500</div>
                  <Button asChild variant="outline" className="w-full rounded-full border-white/20 text-white hover:bg-white hover:text-foreground h-16 text-[11px] uppercase tracking-[0.4em] font-bold">
                    <Link href="/contact">Book Session</Link>
                  </Button>
                </div>
              </div>
              <div className="p-16 rounded-[4rem] bg-accent text-foreground space-y-12 flex flex-col justify-between group hover:scale-[1.03] transition-all duration-1200">
                <div className="space-y-6">
                  <Gem className="w-10 h-10 text-foreground/20" />
                  <h4 className="text-[13px] uppercase tracking-[0.5em] font-bold text-foreground">Privilege Series</h4>
                  <p className="text-foreground/50 text-base italic font-light">5 Sessions + 1 Complementary protocol.</p>
                </div>
                <div className="space-y-10">
                  <div className="font-headline text-5xl italic text-foreground">₱17,500</div>
                  <Button asChild className="w-full rounded-full bg-foreground text-white hover:bg-black h-16 text-[11px] uppercase tracking-[0.4em] font-bold border-none shadow-xl">
                    <Link href="/contact">Inquire Series</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      </section>

      {/* 5. Final Close */}
      <section className="py-72 bg-white text-center">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="max-w-5xl mx-auto space-y-24">
            <h2 className="font-headline text-7xl md:text-9xl tracking-tighter">Your Path To <br /><span className="italic font-light">Radiance.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              <Button asChild variant="outline" className="rounded-full border-black/10 px-20 h-20 uppercase tracking-[0.5em] text-[11px] font-bold transition-all duration-1000 hover:bg-secondary">
                <Link href="/signature">View The Collection</Link>
              </Button>
              <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-20 h-20 uppercase tracking-[0.5em] text-[11px] font-bold shadow-2xl transition-all duration-1000">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
            <p className="text-[10px] uppercase tracking-[1em] text-muted-foreground/30 pt-16 font-bold">Luxe Glow Premier • Private Aesthetic Atelier</p>
          </div>
        </div>
      </section>
    </div>
  );
}