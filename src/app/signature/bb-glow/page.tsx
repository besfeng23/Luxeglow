'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  Sparkles, 
  Gem, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sun,
  Star,
  Check
} from 'lucide-react';

const bbGlowFeatures = [
  "Evens out skin tone immediately",
  "Reduces appearance of hyperpigmentation",
  "Minimizes fine lines and dark circles",
  "Semi-permanent foundation effect (4-6 weeks)"
];

const bbBlushFeatures = [
  "Provides a natural, rosy flush",
  "Enhances cheekbone definition",
  "Sweat-proof and smudge-proof radiance",
  "Youthful, sun-kissed look without makeup"
];

export default function BBGlowPage() {
  const modelImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');
  const processImg = PlaceHolderImages.find(img => img.id === 'facial-treatment');

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Editorial Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={modelImg?.imageUrl || "https://picsum.photos/seed/bbhero/1200/800"} 
            alt="BB Glow Perfection" 
            fill 
            className="object-cover scale-105"
            priority
            data-ai-hint="glowing skin"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <Sun className="w-4 h-4 text-accent" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">The Morning Ritual</span>
            </div>
            <h1 className="font-headline text-7xl md:text-9xl text-white leading-[0.85]">
              Radiant <br />
              <span className="italic font-light text-accent/80">Canvas.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light italic leading-relaxed max-w-xl">
              "Wake up to effortless perfection. Our BB Glow and Blush rituals provide a flawlessly even, semi-permanent foundation and a natural rosy glow."
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-8">
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Glow</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Philosophy of The Canvas */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden luxury-shadow order-2 lg:order-1">
              <Image 
                src={processImg?.imageUrl || "https://picsum.photos/seed/bbprocess/800/1000"} 
                alt="BB Glow Treatment" 
                fill 
                className="object-cover"
                data-ai-hint="facial treatment"
              />
              <div className="absolute inset-0 border-[40px] border-white/10 rounded-[4rem] pointer-events-none" />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Innovation</span>
              <h2 className="font-headline text-6xl md:text-7xl">Seamless <br /><span className="italic font-light">Sophistication.</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light italic border-l-2 border-accent/20 pl-8">
                "We move away from the heavy layers of traditional makeup. BB Glow and BB Blush are clinical pigment infusions designed to celebrate your skin while concealing its whispers of imperfection."
              </p>
              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Pigment Intelligence</h4>
                    <p className="text-sm text-muted-foreground font-light italic">Our serums are formulated with botanical extracts and skin-loving vitamins, not just color.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Non-Invasive Artistry</h4>
                    <p className="text-sm text-muted-foreground font-light italic">A painless procedure that delivers deep-seated radiance with zero downtime.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Editorial Comparison: The Duo */}
      <section className="py-48 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-primary mb-8 block">The Collection</span>
          <h2 className="font-headline text-6xl md:text-8xl">Glow & Blush</h2>
          <p className="text-muted-foreground mt-8 italic font-headline text-2xl font-light">"Choose your level of refinement or combine for total radiance."</p>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* BB Glow Card */}
            <div className="group bg-white p-12 md:p-20 rounded-[4rem] luxury-shadow border border-black/5 flex flex-col justify-between hover:-translate-y-2 transition-all duration-700">
              <div className="space-y-10">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-6 py-2 rounded-full bg-secondary text-primary">01. BB Glow</span>
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-headline text-5xl leading-tight">The Foundation <br /><span className="italic font-light text-accent">Ritual</span></h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed italic">
                  A high-end skin treatment that uses micro-needling technology to infuse a specialized skin-brightening serum into the epidermis.
                </p>
                <div className="space-y-6 pt-8 border-t border-black/5">
                  {bbGlowFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium tracking-wide">
                      <Check className="w-4 h-4 text-accent" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-16 mt-16 border-t border-black/5 flex justify-between items-center">
                <span className="font-headline text-3xl italic text-foreground">₱3,000</span>
                <Button asChild variant="outline" className="rounded-full border-black/10 px-8 h-12 uppercase tracking-widest text-[10px] font-bold">
                  <Link href="/contact">Enquire Ritual</Link>
                </Button>
              </div>
            </div>

            {/* BB Blush Card */}
            <div className="group bg-foreground text-white p-12 md:p-20 rounded-[4rem] luxury-shadow flex flex-col justify-between hover:-translate-y-2 transition-all duration-700">
              <div className="space-y-10">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-6 py-2 rounded-full bg-white/10 text-accent">02. BB Blush</span>
                  <Gem className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-headline text-5xl leading-tight text-white">The Rosy <br /><span className="italic font-light text-accent/60">Flush</span></h3>
                <p className="text-lg text-white/50 font-light leading-relaxed italic">
                  A semi-permanent blush treatment that leaves your cheeks with a delicate, healthy color, eliminating the need for daily makeup application.
                </p>
                <div className="space-y-6 pt-8 border-t border-white/10">
                  {bbBlushFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium tracking-wide text-white/70">
                      <Check className="w-4 h-4 text-accent" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-16 mt-16 border-t border-white/10 flex justify-between items-center">
                <span className="font-headline text-3xl italic text-accent">₱2,500</span>
                <Button asChild className="rounded-full bg-white text-foreground hover:bg-accent px-8 h-12 uppercase tracking-widest text-[10px] font-bold">
                  <Link href="/contact">Enquire Ritual</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Ritual Bundle */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-secondary/30 rounded-[5rem] p-16 md:p-32 border border-black/5 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Ultimate Collection</span>
                <h2 className="font-headline text-6xl md:text-8xl leading-none">The Radiant <br /><span className="italic font-light">Bundle</span></h2>
                <p className="text-xl text-muted-foreground/80 font-light italic leading-relaxed">
                  "Experience the total transformation. Combine our BB Glow and BB Blush rituals in a single visit for a flawlessly finished look that lasts for weeks."
                </p>
                <div className="flex items-center gap-8 border-t border-black/5 pt-12">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60">Privilege Price</p>
                    <p className="font-headline text-5xl text-primary">₱5,000</p>
                  </div>
                  <Button asChild className="rounded-full bg-foreground text-white hover:bg-black px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-700">
                    <Link href="/contact">Secure This Duo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 border border-black/5 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-10 rounded-full overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-1000">
                   <Image 
                    src={PlaceHolderImages.find(img => img.id === 'hero-main')?.imageUrl || "https://picsum.photos/seed/bbbundle/800/800"} 
                    alt="Radiant Canvas" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* 5. Trust Indicators */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { icon: Clock, title: "Duration", desc: "Approximately 60-90 minutes depending on the selected ritual combination." },
              { icon: ShieldCheck, title: "Aftercare", desc: "Zero downtime. We provide a tailored hydration protocol for your post-treatment glow." },
              { icon: Gem, title: "Longevity", desc: "Maintain your radiant canvas for 4-6 weeks with a single clinical session." }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-8">
                <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center mx-auto text-accent bg-secondary/30">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed italic px-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-56 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            <h2 className="font-headline text-6xl md:text-9xl italic font-light leading-none">Your Path to <br /><span className="text-accent">Lasting Glow.</span></h2>
            <p className="text-white/40 text-2xl font-light leading-relaxed italic max-w-2xl mx-auto">
              Ready to redefine your morning routine? Experience the ultimate in skin intelligence and aesthetic refinement at Luxe Glow Premier.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-10 pt-10">
              <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-foreground px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500">
                <Link href="/signature">View Other Rituals</Link>
              </Button>
              <Button asChild className="rounded-full bg-accent text-foreground hover:bg-white px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-700">
                <Link href="/contact">Book Your Consultation</Link>
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
