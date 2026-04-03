import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Gem, Clock, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FAQS } from '@/content/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ritual Menu | Premium Aesthetic Intelligence in Pasig',
  description: 'Explore our curated menu of high-prestige aesthetic rituals including Signature Facials, Carbon Laser, and BB Glow at Luxe Glow Premier, Estancia Mall.',
};

const services = [
  {
    category: "Signature Rituals",
    items: [
      {
        name: "Luxe Signature Facial",
        price: "₱3,500",
        duration: "90 min",
        desc: "The definitive 10-step clinical orchestration. A comprehensive journey featuring Diamond Refinement, Radiofrequency, and PDT Light Restoration.",
        features: ["Diamond Refinement", "Architectural Lifting", "PDT Restoration", "Cryo-Seal", "Meticulous Extraction"],
        link: "/signature/facial"
      },
      {
        name: "Carbon Laser Ritual",
        price: "₱4,500",
        duration: "75 min",
        desc: "The 'Hollywood Peel'. Advanced laser technology paired with foundational cleansing for superior pore architecture and collagen induction.",
        features: ["Hollywood Peel", "Pore Minimization", "Deep Exfoliation", "Collagen Stimulation"],
        link: "/contact"
      }
    ]
  },
  {
    category: "Complexion Intelligence",
    items: [
      {
        name: "BB Glow Ritual",
        price: "₱3,000",
        duration: "60 min",
        desc: "Semi-permanent foundation infusion for a flawlessly radiant and even-toned canvas with zero daily maintenance.",
        features: ["Pigment infusion", "Hydration boost", "Color correction", "Long-lasting glow"],
        link: "/signature/bb-glow"
      },
      {
        name: "BB Blush Ritual",
        price: "₱2,500",
        duration: "45 min",
        desc: "A natural, semi-permanent rosy flush that enhances cheekbone architecture with zero makeup application.",
        features: ["Natural tint", "Youthful glow", "Sweat-proof radiance"],
        link: "/signature/bb-glow"
      }
    ]
  },
  {
    category: "The Silk Protocol",
    items: [
      {
        name: "IPL Hair Removal",
        price: "From ₱1,500",
        duration: "30-60 min",
        desc: "Permanent hair reduction meeting clinical artistry. Includes specialized whitening protocols for total skin confidence.",
        features: ["Silk Protocol", "Painless technology", "Underarm whitening"],
        link: "/signature/ipl-hair-removal"
      },
      {
        name: "Mesolipo Sculpt",
        price: "₱5,000",
        duration: "45 min",
        desc: "Targeted silhouette refinement using medical-grade clinical micro-injection protocols for absolute precision.",
        features: ["Fat dissolving", "Silhouette sculpting", "Precision targeting"],
        link: "/contact"
      }
    ]
  }
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'treatment-room');

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header - Immersive Elite Menu */}
      <section className="relative h-[65vh] flex items-center bg-foreground overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src={serviceImg?.imageUrl || ''}
            alt="Overview of elite aesthetic treatments at Estancia Mall Pasig"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="container mx-auto px-8 lg:px-20 relative z-10 text-center">
          <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent mb-8 block animate-fade-in-up">The Collection Menu</span>
          <h1 className="font-headline text-7xl md:text-9xl text-white mb-8 animate-fade-in-up tracking-tighter leading-none">
            Private <span className="italic font-light">Rituals.</span>
          </h1>
          <p className="text-white/60 max-w-3xl mx-auto text-xl italic font-light animate-fade-in-up delay-200 leading-relaxed text-balance">
            "A comprehensive curation of aesthetic intelligence designed for absolute skin fidelity."
          </p>
        </div>
      </section>

      {/* 2. Organized Service Menu */}
      <section className="py-32">
        <div className="container mx-auto px-8 lg:px-20">
          {services.map((category, idx) => (
            <div key={idx} className="mb-48 last:mb-0">
              <div className="flex flex-col items-center mb-24">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-6">Selection 0{idx + 1}</span>
                <h2 className="font-headline text-5xl md:text-7xl text-foreground text-center tracking-tighter">{category.category}</h2>
                <div className="h-px w-24 bg-accent/20 mt-8" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {category.items.map((service, sIdx) => (
                  <div key={sIdx} className="group flex flex-col justify-between h-full bg-white p-12 md:p-16 rounded-[4rem] luxury-shadow border border-black/5 hover:-translate-y-2 transition-all duration-700">
                    <div>
                      <div className="flex justify-between items-start mb-12">
                        <div className="p-4 rounded-full bg-secondary/50 border border-black/5">
                          <Gem className="w-6 h-6 text-accent stroke-[1.2]" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-headline text-foreground mb-1 italic">{service.price}</div>
                          <div className="flex items-center justify-end text-[10px] text-muted-foreground/40 gap-2 uppercase tracking-[0.4em] font-bold">
                            <Clock className="w-3.5 h-3.5" /> {service.duration}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-headline text-4xl md:text-5xl text-foreground mb-6 group-hover:text-primary transition-colors leading-none">{service.name}</h3>
                      <p className="text-muted-foreground/60 leading-relaxed font-light text-lg mb-12 italic">{service.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 border-t border-black/5 pt-10">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full rounded-full bg-foreground text-white h-16 uppercase tracking-[0.4em] text-[10px] font-bold shadow-xl hover:bg-black transition-all">
                      <Link href={service.link}>Inquire Ritual</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Concierge Reassurance */}
      <section className="py-32 bg-secondary/15">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-primary mb-8 block">Concierge Intelligence</span>
              <h2 className="font-headline text-6xl md:text-8xl tracking-tighter">The Ritual <span className="italic font-light">Protocol</span></h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-8">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none bg-white rounded-[2.5rem] px-10 md:px-16 luxury-shadow overflow-hidden transition-all duration-700 hover:bg-white/90">
                  <AccordionTrigger className="hover:no-underline py-10 group">
                    <div className="flex items-center gap-10 text-left">
                       <span className="text-[11px] font-bold text-accent group-hover:text-primary transition-colors">0{index+1}</span>
                       <h3 className="text-xl md:text-2xl font-headline italic text-foreground tracking-tight">{faq.question}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-12 pt-0">
                    <div className="pl-16">
                      <p className="text-lg text-muted-foreground/70 font-light leading-relaxed border-l-2 border-accent/20 pl-8 italic">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-24 text-center">
              <div className="inline-flex items-center gap-6 p-10 bg-white rounded-[3rem] luxury-shadow border border-black/5">
                <ShieldCheck className="w-10 h-10 text-accent" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground mb-2">Private Consultation Available</p>
                  <p className="text-sm text-muted-foreground font-light italic">"Your journey to radiance is treated with absolute clinical discretion."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Conversion Spread */}
      <section className="py-56 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-20 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-20">
            <h2 className="font-headline text-7xl md:text-[110px] italic font-light leading-none tracking-tighter">"Bespoke beauty is the <br /><span className="text-accent">ultimate luxury.</span>"</h2>
            <p className="text-white/30 text-2xl font-light italic leading-relaxed max-w-3xl mx-auto">
              Join our private clientele at Capitol Commons for an intimate transformation.
            </p>
            <div className="pt-12">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-20 h-24 uppercase tracking-[0.5em] text-[12px] font-bold shadow-2xl transition-all duration-700 hover:scale-[1.03]">
                <Link href="/contact">Reserve Your Journey</Link>
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
