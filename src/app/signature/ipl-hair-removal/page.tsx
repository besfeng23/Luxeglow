'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Target,
  Smile,
  Info
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iplAreas = [
  { area: "Underarms", price: "₱1,500", note: "Includes Whitening Treatment" },
  { area: "Bikini Line", price: "₱2,500", note: "Precise & Discrete" },
  { area: "Brazilian", price: "₱4,000", note: "Complete Smoothness" },
  { area: "Full Legs", price: "₱5,500", note: "Total Leg Transformation" },
  { area: "Upper Lip", price: "₱800", note: "Gentle Facial Protocol" },
  { area: "Full Arms", price: "₱3,500", note: "Silky Arm Texture" }
];

const faqs = [
  {
    question: "Is the procedure painful?",
    answer: "Our advanced IPL technology features integrated cooling systems that minimize discomfort. Most clients describe the sensation as a light, warm snap, far more comfortable than traditional waxing."
  },
  {
    question: "How many sessions are required?",
    answer: "Hair grows in cycles. For permanent reduction, we generally recommend a series of 6 to 10 sessions spaced 4-6 weeks apart to capture all follicles in their active growth phase."
  },
  {
    question: "How should I prepare for my session?",
    answer: "Please shave the target area 24 hours before your appointment. Avoid sun exposure, tanning beds, and waxing or plucking for at least two weeks prior to ensure the laser can target the follicle effectively."
  },
  {
    question: "Is there any downtime?",
    answer: "There is zero downtime. You may experience slight redness similar to a mild sunburn for a few hours, but you can return to your daily activities immediately."
  }
];

export default function IPLHairRemovalPage() {
  const mainImg = PlaceHolderImages.find(img => img.id === 'treatment-room');
  const glowImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Immersive Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={mainImg?.imageUrl || "https://picsum.photos/seed/iplhero/1200/800"} 
            alt="IPL Hair Removal Ritual" 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="treatment room"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-accent fill-accent" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">The Silk Protocol</span>
            </div>
            <h1 className="font-headline text-7xl md:text-9xl text-white leading-[0.85]">
              IPL <br />
              <span className="italic font-light text-accent/80">Refinement.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed max-w-xl">
              "Precision permanent hair reduction meeting clinical artistry. Experience the liberation of flawlessly smooth skin through our advanced light-based rituals."
            </p>
            <div className="pt-8">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Positioning & Benefits */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary mb-8 block">Clinical Precision</span>
            <h2 className="font-headline text-5xl md:text-7xl mb-10">Why The <span className="italic font-light">Silk Protocol?</span></h2>
            <p className="text-xl text-muted-foreground font-light italic leading-relaxed">
              "We move beyond standard hair removal. Our IPL rituals are designed to respect your skin's integrity while delivering permanent, luminous results."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { 
                icon: Target, 
                title: "Precision Targeting", 
                desc: "Our technology focuses energy directly into the follicle, ensuring effective reduction while protecting the surrounding tissue." 
              },
              { 
                icon: Smile, 
                title: "Advanced Comfort", 
                desc: "Integrated cooling technology maintains skin temperature for a virtually painless and serene clinical experience." 
              },
              { 
                icon: Sparkles, 
                title: "Skin Smoothing", 
                desc: "Beyond hair removal, our light therapy helps refine skin texture and can assist in reducing pigmentation in treated areas." 
              }
            ].map((benefit, i) => (
              <div key={i} className="space-y-8 group text-center">
                <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center mx-auto text-primary bg-secondary/30 group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[12px] uppercase tracking-[0.3em] font-bold">{benefit.title}</h4>
                <p className="text-base text-muted-foreground font-light leading-relaxed italic">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Investment Spreads */}
      <section className="py-48 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Investment</span>
              <h2 className="font-headline text-6xl md:text-7xl leading-tight">Targeted <br /><span className="italic font-light">Refinement</span></h2>
              <p className="text-lg text-muted-foreground font-light italic leading-relaxed border-l-2 border-accent/40 pl-8">
                Every body is a unique landscape. We provide specific protocols for every area, ensuring complete coverage and absolute satisfaction.
              </p>
              <div className="pt-8">
                <Card className="bg-foreground text-white p-10 rounded-[3rem] border-none luxury-shadow overflow-hidden relative">
                   <div className="relative z-10 space-y-6">
                     <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Privilege Package</h4>
                     <p className="text-xl font-light italic text-white/70">"Commit to total smoothness. Purchase a series of 5 and receive your 6th ritual as a gift."</p>
                     <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-foreground w-full h-12 text-[10px] uppercase tracking-widest font-bold">
                       <Link href="/contact">Inquire Series</Link>
                     </Button>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {iplAreas.map((item, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2.5rem] luxury-shadow border border-black/5 flex flex-col justify-between hover:-translate-y-1 transition-all duration-500">
                    <div className="space-y-4">
                      <h5 className="text-[11px] uppercase tracking-widest font-bold text-foreground">{item.area}</h5>
                      <p className="text-xs text-muted-foreground italic font-light">{item.note}</p>
                    </div>
                    <div className="pt-8 mt-8 border-t border-black/5 flex justify-between items-center">
                      <span className="font-headline text-2xl italic text-primary">{item.price}</span>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/40">Per Ritual</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trust & FAQ */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 sticky top-32 space-y-10">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Intelligence</span>
            <h2 className="font-headline text-6xl md:text-7xl">Common <br /><span className="italic font-light">Enquiries</span></h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed italic">
              "Clarity is the first step toward confidence. We invite you to explore the specifics of the Silk Protocol."
            </p>
            <div className="aspect-square relative rounded-[3rem] overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-1000">
               <Image 
                src={glowImg?.imageUrl || "https://picsum.photos/seed/ipl2/600/800"} 
                alt="Radiant Skin" 
                fill 
                className="object-cover"
                data-ai-hint="glowing skin"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 pt-12">
            <Accordion type="single" collapsible className="w-full space-y-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none bg-secondary/30 rounded-[2rem] px-10 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-10">
                    <div className="flex items-center gap-6 text-left">
                       <span className="text-[10px] font-bold text-accent">0{index+1}</span>
                       <span className="text-lg font-headline italic text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10 pt-0">
                    <div className="pl-12">
                      <p className="text-base text-muted-foreground font-light leading-relaxed border-l border-accent/20 pl-8 italic">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-16 p-12 bg-ivory rounded-[3rem] border border-black/5 space-y-8">
               <div className="flex items-center gap-6">
                 <Info className="w-6 h-6 text-accent" />
                 <h4 className="text-[11px] uppercase tracking-widest font-bold">Important Notice</h4>
               </div>
               <p className="text-sm text-muted-foreground font-light leading-relaxed italic">
                 "For optimal safety and efficacy, we recommend avoiding sun exposure and the use of retinol-based products on the target area for 7 days prior to your ritual."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="font-headline text-6xl md:text-9xl italic font-light leading-none">The Path to <br /><span className="text-accent">Lasting Silk.</span></h2>
            <p className="text-white/40 text-2xl font-light leading-relaxed italic max-w-2xl mx-auto">
              Ready to liberate yourself from traditional hair removal? Private consultations are available daily at Luxe Glow Premier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10 pt-10">
              <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-foreground px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500">
                <Link href="/signature">View Other Rituals</Link>
              </Button>
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />
      </section>
    </div>
  );
}
