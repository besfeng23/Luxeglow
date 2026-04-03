import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ShieldCheck, Sparkles, Gem, ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-main');
  const signatureImg = PlaceHolderImages.find(img => img.id === 'signature-facial');
  const glowImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');

  const fallbackHeroUrl = "https://picsum.photos/seed/lux1/1200/800";

  return (
    <div className="flex flex-col">
      {/* Hero Section - Editorial Layout */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-black/5 bg-secondary/50 backdrop-blur">
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary">Est. 2024 • Metro Manila</span>
            </div>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[110px] leading-[0.9] mb-10 text-foreground">
              Absolute <br />
              <span className="italic font-light text-primary">Elegance</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-md text-balance">
              Luxe Glow Premier is a private aesthetic sanctuary dedicated to the art of subtle transformation and high-end skin intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-10 h-14 uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl transition-all duration-500">
                <Link href="/contact">The Private List</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full text-foreground hover:bg-transparent hover:text-primary px-10 h-14 uppercase tracking-[0.2em] text-[10px] font-bold group">
                <Link href="/services">Our Rituals <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] overflow-hidden luxury-shadow animate-reveal">
              <Image
                src={heroImg?.imageUrl || fallbackHeroUrl}
                alt="Luxe Glow Premier Hero"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                priority
              />
            </div>
            <div className="absolute -bottom-12 -left-12 hidden xl:block w-64 h-64 bg-white rounded-[2rem] p-10 luxury-shadow animate-fade-in-up delay-300">
              <Star className="w-8 h-8 text-accent mb-6" />
              <p className="text-sm font-headline italic leading-relaxed text-foreground/70">
                "Where editorial beauty meets clinical precision in perfect harmony."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy - Minimalist Spread */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden">
                <Image
                  src={glowImg?.imageUrl || "https://picsum.photos/seed/lux6/600/800"}
                  alt="Luxe Philosophy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 border-[24px] border-white/40 rounded-[3rem] pointer-events-none" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Our Ethos</span>
              <h2 className="font-headline text-5xl md:text-7xl text-foreground leading-tight">
                Quiet Luxury, <br />
                <span className="italic font-light">Loud Results</span>
              </h2>
              <div className="h-px w-24 bg-accent/30" />
              <p className="text-xl text-muted-foreground/90 leading-relaxed font-light italic">
                We believe in the power of restraint. Our treatments are designed not to alter who you are, but to reveal the most polished version of your natural self.
              </p>
              
              <div className="grid grid-cols-1 gap-10 pt-8">
                <div className="flex gap-8 group">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center text-primary border border-black/5 rounded-full group-hover:bg-foreground group-hover:text-white transition-all duration-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground mb-2">Private Care</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">Discrete, personalized protocols designed for the high-performing individual.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center text-primary border border-black/5 rounded-full group-hover:bg-foreground group-hover:text-white transition-all duration-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground mb-2">Clinical Artistry</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">Every ritual is a bespoke composition of medical-grade science and aesthetic intuition.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Rituals - Large Cards */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Selection</span>
              <h2 className="font-headline text-5xl md:text-6xl mb-6">Signature Rituals</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">Experience our most requested, premium aesthetic procedures designed to deliver immediate, radiant results.</p>
            </div>
            <Link href="/services" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-2 hover:border-primary transition-all">Explore All Rituals</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Signature Facial',
                desc: 'A comprehensive 10-step rejuvenation for the skin of royalty.',
                imgId: 'signature-facial',
                price: '₱3,500'
              },
              {
                title: 'Carbon Laser',
                desc: 'Precision porcelain skin rejuvenation for immediate texture refinement.',
                imgId: 'carbon-laser',
                price: '₱4,500'
              },
              {
                title: 'BB Glow Ritual',
                desc: 'The semi-permanent canvas for long-lasting radiant perfection.',
                imgId: 'facial-treatment',
                price: '₱3,000'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 luxury-shadow bg-muted">
                  <Image
                    src={PlaceHolderImages.find(img => img.id === item.imgId)?.imageUrl || "https://picsum.photos/seed/lux1/600/800"}
                    alt={item.title}
                    fill
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Limited Availability</p>
                    <h4 className="font-headline text-2xl italic">Private Booking Only</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline text-3xl text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="text-sm font-medium text-accent">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground/80 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Concierge - The Experience CTA */}
      <section className="py-40 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/50 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/30 rounded-full" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Gem className="w-10 h-10 text-accent mx-auto mb-10" />
            <h2 className="font-headline text-5xl md:text-8xl text-white mb-12 leading-[1.1]">
              Consult Your <br />
              <span className="italic font-light text-accent">Digital Concierge</span>
            </h2>
            <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Experience personalized skin intelligence. Our AI curator analyzes your unique profile to design a bespoke treatment sequence.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-foreground hover:bg-accent px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 shadow-xl shadow-white/5">
              <Link href="/ai-recommendations">Start Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Gallery - Large Format */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Atelier</span>
            <h2 className="font-headline text-5xl md:text-6xl mb-6">Ambiance & Artistry</h2>
            <p className="text-muted-foreground font-light text-lg">A visual journey through our private Capitol Commons sanctuary.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2.5rem] luxury-shadow group">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'clinic-interior')?.imageUrl || "https://picsum.photos/seed/lux3/800/600"} 
                alt="Clinic Interior" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] luxury-shadow group">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'treatment-room')?.imageUrl || "https://picsum.photos/seed/lux5/800/600"} 
                alt="Treatment Room" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] luxury-shadow group">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'skincare-products')?.imageUrl || "https://picsum.photos/seed/lux4/600/400"} 
                alt="Skincare" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="md:col-span-2 relative overflow-hidden rounded-[2rem] luxury-shadow group">
              <Image 
                src={heroImg?.imageUrl || fallbackHeroUrl} 
                alt="Luxe Glow Ritual" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Invitation - Clean Spread */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden luxury-shadow border border-black/5">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-5xl md:text-8xl text-foreground mb-10 leading-[1.1]">
                Reserve Your <br />
                <span className="italic font-light text-primary">Private Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground/80 mb-16 leading-relaxed font-light">
                Join our exclusive clientele for a transformation that transcends the ordinary. Private appointments available at Estancia Mall.
              </p>
              <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-500">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}