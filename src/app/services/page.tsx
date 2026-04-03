import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Gem, Clock, ArrowRight } from 'lucide-react';
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
        desc: "Our definitive clinical 90-minute journey. A multi-step sequence including Diamond Peel, Radiofrequency, and PDT Light Restoration.",
        features: ["Diamond Refinement", "Architectural Lifting", "PDT Restoration", "Cryo-Seal", "Meticulous Extraction"],
        link: "/signature/facial"
      },
      {
        name: "Carbon Laser Ritual",
        price: "₱4,500",
        duration: "75 min",
        desc: "The Hollywood Peel. Advanced laser technology for porcelain-smooth skin, focusing on pore architecture and collagen induction.",
        features: ["Hollywood Peel", "Pore Minimization", "Deep Exfoliation", "Collagen Stimulation"],
        link: "/signature"
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
        desc: "Semi-permanent foundation infusion for a flawlessly radiant and even-toned canvas.",
        features: ["Pigment infusion", "Hydration boost", "Color correction", "Long-lasting glow"],
        link: "/signature/bb-glow"
      },
      {
        name: "BB Blush Ritual",
        price: "₱2,500",
        duration: "45 min",
        desc: "A natural, semi-permanent rosy flush that enhances cheekbone architecture with zero makeup.",
        features: ["Natural tint", "Youthful glow", "Sweat-proof radiance"],
        link: "/signature/bb-glow"
      }
    ]
  },
  {
    category: "Advanced Aesthetics",
    items: [
      {
        name: "Mesolipo Sculpt",
        price: "₱5,000",
        duration: "45 min",
        desc: "Targeted fat reduction and silhouette refinement using high-end clinical micro-injection protocols.",
        features: ["Fat dissolving", "Silhouette sculpting", "Precision targeting"],
        link: "/signature"
      },
      {
        name: "Wart Removal Refinement",
        price: "From ₱500",
        duration: "30 min",
        desc: "Clinical removal of skin imperfections for an absolute flawless finish.",
        features: ["Clinical precision", "Safe protocol", "Skin clearing"],
        link: "/signature"
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
        desc: "Permanent hair reduction meeting clinical artistry. Includes specialized whitening protocols.",
        features: ["Silk Protocol", "Painless technology", "Underarm whitening"],
        link: "/signature/ipl-hair-removal"
      },
      {
        name: "Free Basic Facial",
        price: "Introductory Gift",
        duration: "45 min",
        desc: "A foundational facial experience for first-time privilege clients. Includes private skin intelligence analysis.",
        features: ["Intelligence Report", "Clinical analysis", "Gentle cleansing"],
        link: "/contact"
      }
    ]
  }
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'treatment-room');

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header - Elite Sanctuary Overview */}
      <section className="relative h-[75vh] flex items-center bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={serviceImg?.imageUrl || ''}
            alt="Overview of elite aesthetic treatments at Estancia Mall Pasig"
            fill
            className="object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="container mx-auto px-8 lg:px-20 relative z-10 text-center">
          <span className="text-[10px] uppercase tracking-[1em] font-bold text-accent mb-12 block animate-fade-in-up">The Collection Menu</span>
          <h1 className="font-headline text-8xl md:text-[140px] text-white mb-12 animate-fade-in-up tracking-tighter leading-none">
            Private <span className="italic font-light">Rituals.</span>
          </h1>
          <p className="text-white/50 max-w-3xl mx-auto text-2xl italic font-light animate-fade-in-up delay-200 leading-relaxed text-balance">
            "A comprehensive curation of aesthetic intelligence and clinical care designed for absolute radiant being."
          </p>
        </div>
      </section>

      {/* 2. Minimalist Menu Structure */}
      <section className="py-72">
        <div className="container mx-auto px-8 lg:px-20">
          {services.map((category, idx) => (
            <div key={idx} className="mb-64 last:mb-0">
              <div className="flex flex-col items-center mb-32">
                <span className="text-[11px] uppercase tracking-[0.8em] font-bold text-accent mb-8">Selection 0{idx + 1}</span>
                <h2 className="font-headline text-7xl md:text-8xl text-foreground text-center tracking-tighter">{category.category}</h2>
                <div className="h-px w-40 bg-accent/20 mt-12" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                {category.items.map((service, sIdx) => (
                  <div key={sIdx} className="group flex flex-col justify-between h-full bg-white p-16 md:p-24 rounded-[5rem] luxury-shadow border border-black/5 hover:-translate-y-4 transition-all duration-[1200ms]">
                    <div>
                      <div className="flex justify-between items-start mb-16">
                        <Gem className="w-10 h-10 text-accent/30 stroke-[1]" />
                        <div className="text-right">
                          <div className="text-4xl font-headline text-foreground mb-2 italic tracking-tight">{service.price}</div>
                          <div className="flex items-center justify-end text-[11px] text-muted-foreground/40 gap-3 uppercase tracking-[0.4em] font-bold">
                            <Clock className="w-4 h-4" /> {service.duration}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-headline text-5xl md:text-6xl text-foreground mb-10 group-hover:text-primary transition-colors duration-1000 leading-none">{service.name}</h3>
                      <p className="text-muted-foreground/60 leading-relaxed font-light text-xl mb-16 italic">{service.desc}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-20 border-t border-black/5 pt-12">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full rounded-full bg-foreground text-white h-20 uppercase tracking-[0.5em] text-[11px] font-bold shadow-2xl transition-all duration-1000 hover:bg-black">
                      <Link href={service.link}>Inquire Ritual</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Concierge FAQs */}
      <section className="py-72 bg-secondary/15">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-32">
              <span className="text-[10px] uppercase tracking-[1em] font-bold text-primary mb-10 block">Concierge Intelligence</span>
              <h2 className="font-headline text-8xl md:text-9xl tracking-tighter">The Ritual <span className="italic font-light">Protocol</span></h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-10">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-none bg-white rounded-[3rem] px-12 md:px-20 luxury-shadow overflow-hidden transition-all duration-1000 hover:bg-white/90">
                  <AccordionTrigger className="hover:no-underline py-12 group">
                    <div className="flex items-center gap-12 text-left">
                       <span className="text-[12px] font-bold text-accent group-hover:text-primary transition-colors duration-1000">0{index+1}</span>
                       <h3 className="text-2xl md:text-3xl font-headline italic text-foreground tracking-tight">{faq.question}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-16 pt-0">
                    <div className="pl-24">
                      <p className="text-xl text-muted-foreground/60 font-light leading-relaxed border-l-2 border-accent/20 pl-12 italic">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA - The Invitation */}
      <section className="py-80 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-8 lg:px-20 relative z-10 text-center">
          <div className="max-w-6xl mx-auto space-y-24">
            <h2 className="font-headline text-8xl md:text-[130px] italic font-light leading-none tracking-tighter">"Bespoke beauty is the <br /><span className="text-accent">ultimate luxury.</span>"</h2>
            <div className="h-px w-40 bg-white/10 mx-auto" />
            <p className="text-white/30 text-3xl font-light italic leading-relaxed max-w-4xl mx-auto">
              "We move beyond one-size-fits-all aesthetics. Join our private clientele at Capitol Commons for an intimate transformation."
            </p>
            <div className="pt-16">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-28 h-28 uppercase tracking-[0.6em] text-[13px] font-bold shadow-2xl transition-all duration-1000 hover:scale-[1.03]">
                <Link href="/contact">Secure Your Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
