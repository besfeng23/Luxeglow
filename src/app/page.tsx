import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ShieldCheck, Sparkles, Gem, Clock, CheckCircle2, Phone, MessageCircle, MapPin, Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BRAND, CONTACT, HOME_CONTENT, SIGNATURE_TREATMENTS, PACKAGES, TESTIMONIALS, TRUST_STATEMENTS } from '@/content/data';
import { cn } from '@/lib/utils';

export default function Home() {
  const signatureImg = PlaceHolderImages.find(img => img.id === 'signature-facial');
  const productsImg = PlaceHolderImages.find(img => img.id === 'skincare-products');

  return (
    <div className="flex flex-col bg-background selection:bg-accent/30">
      
      {/* 1. Hero Section - Editorial Premium */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10 translate-x-1/4 skew-x-12 hidden lg:block" />
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary">{HOME_CONTENT.hero.badge}</span>
            </div>
            
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[110px] leading-[0.85] mb-12 text-foreground tracking-tight">
              {HOME_CONTENT.hero.title} <br />
              <span className="italic font-light text-primary/70">{HOME_CONTENT.hero.titleItalic}</span>
            </h1>
            
            <p className="font-body text-xl text-muted-foreground/80 mb-14 leading-relaxed max-w-lg text-balance font-light italic">
              {HOME_CONTENT.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-16 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 hover:scale-105">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              
              <Link href="/signature" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-foreground hover:text-primary transition-all duration-500 py-4">
                Explore Rituals 
                <div className="w-12 h-px bg-foreground/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden luxury-shadow animate-reveal group">
              <Image
                src={HOME_CONTENT.hero.image}
                alt={BRAND.fullName}
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-12 -right-12 hidden xl:flex w-64 h-64 bg-white/90 backdrop-blur-2xl rounded-full p-12 luxury-shadow border border-white flex-col items-center justify-center text-center gap-3 animate-fade-in-up delay-700">
              <Star className="w-6 h-6 text-accent fill-accent mb-2" />
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Private Selection</p>
              <p className="font-headline italic text-xl leading-tight text-foreground">"Bespoke skin <br />perfection."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Positioning Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">The Private Narrative</span>
            <h2 className="font-headline text-5xl md:text-7xl text-foreground leading-tight">
              {HOME_CONTENT.positioning.title} <br />
              <span className="italic font-light text-primary/60">{HOME_CONTENT.positioning.titleItalic}</span>
            </h2>
            <div className="h-px w-24 bg-accent/30 mx-auto" />
            <p className="text-2xl text-muted-foreground/90 leading-relaxed font-light italic max-w-2xl mx-auto">
              {HOME_CONTENT.positioning.quote}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16">
              {TRUST_STATEMENTS.map((item, i) => (
                <div key={i} className="space-y-4 group text-center">
                  <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Rituals Section */}
      <section className="py-40 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-6 block">The Collection</span>
              <h2 className="font-headline text-5xl md:text-6xl mb-8">Refined Rituals</h2>
              <p className="text-muted-foreground text-xl font-light leading-relaxed italic">Specifically curated aesthetic sequences for the discerning individual.</p>
            </div>
            <Link href="/services" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/10 pb-3 hover:border-primary hover:text-primary transition-all duration-500 flex items-center gap-3 group">
              View All Rituals <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {SIGNATURE_TREATMENTS.map((item, i) => {
              const imgUrl = PlaceHolderImages.find(img => img.id === item.image)?.imageUrl || `https://picsum.photos/seed/${item.id}/600/800`;
              return (
                <div key={i} className="group relative bg-white rounded-[3rem] overflow-hidden luxury-shadow flex flex-col md:flex-row transition-all duration-700 hover:-translate-y-2 border border-black/5">
                  <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
                    <Image src={imgUrl} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-6 left-6">
                      <span className="text-[9px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-primary">{item.tagline.split(' ')[0]}</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="font-headline text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-sm font-bold text-accent">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm mb-10">{item.description}</p>
                    <Button asChild variant="outline" className="w-fit rounded-full border-black/5 text-[10px] uppercase tracking-widest font-bold h-10 px-8 hover:bg-foreground hover:text-white transition-all duration-500">
                      <Link href={item.link}>Discover Ritual</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Prestige Curation */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-6 block">The Private Circle</span>
            <h2 className="font-headline text-6xl md:text-8xl">Voices of <span className="italic font-light">Radiance</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-12 rounded-[3rem] bg-secondary/30 border border-black/5 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-700">
                <div className="space-y-8">
                  <Quote className="w-10 h-10 text-accent/30 group-hover:text-accent transition-colors duration-700" />
                  <p className="text-lg italic font-light leading-relaxed text-muted-foreground">"{t.quote}"</p>
                </div>
                <div className="pt-10 border-t border-black/5 mt-10">
                  <p className="text-sm font-bold uppercase tracking-widest">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mt-1">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatment Sequence Section */}
      <section className="py-40 bg-foreground text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-8 block">The Protocol</span>
            <h2 className="font-headline text-5xl md:text-7xl mb-10 leading-none">The Luxury <span className="italic font-light">Sequence</span></h2>
            <p className="text-white/50 text-xl font-light">Every ritual follows a meticulous clinical path to ensure your safety and luminous results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/4 left-0 w-full h-px bg-white/10 hidden md:block" />
            
            {HOME_CONTENT.sequence.map((item, idx) => (
              <div key={idx} className="relative z-10 space-y-8 group">
                <div className="w-16 h-16 rounded-full border border-white/20 bg-foreground flex items-center justify-center text-accent font-headline italic text-2xl group-hover:bg-accent group-hover:text-foreground transition-all duration-700">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-4">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curated Collections Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4 space-y-10 text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Curated Offers</span>
              <h2 className="font-headline text-5xl md:text-6xl text-foreground leading-tight">
                The Season <br />
                <span className="italic font-light">Collections</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Experience the complete Luxe Glow transformation with our curated treatment sequences and exclusive seasonal privilege offers.
              </p>
              <Button asChild variant="outline" className="rounded-full border-black/10 px-10 h-14 text-[10px] uppercase tracking-widest font-bold">
                <Link href="/services">View All Packages</Link>
              </Button>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {PACKAGES.map((pkg, i) => (
                <Card key={i} className={cn("rounded-[3rem] border-none luxury-shadow overflow-hidden group", pkg.variant === 'primary' ? 'bg-foreground text-white' : 'bg-secondary/30')}>
                  <CardContent className="p-12 space-y-8">
                    <div className="flex justify-between items-start">
                      {pkg.variant === 'primary' ? <Gem className="w-8 h-8 text-accent/40" /> : <Star className="w-8 h-8 text-accent/40" />}
                      <span className={cn("text-[10px] uppercase tracking-widest font-bold", pkg.variant === 'primary' ? 'text-accent' : 'text-primary')}>{pkg.tag}</span>
                    </div>
                    <h3 className={cn("font-headline text-4xl italic transition-colors", pkg.variant === 'primary' ? 'group-hover:text-accent' : 'group-hover:text-primary')}>{pkg.title}</h3>
                    <p className={cn("font-light leading-relaxed", pkg.variant === 'primary' ? 'text-white/40' : 'text-muted-foreground')}>{pkg.desc}</p>
                    <div className={cn("pt-4 border-t flex justify-between items-center", pkg.variant === 'primary' ? 'border-white/5' : 'border-black/5')}>
                      <span className="font-headline text-2xl italic">{pkg.price}</span>
                      <Link href="/contact" className={cn("text-[10px] uppercase tracking-widest font-bold transition-all", pkg.variant === 'primary' ? 'hover:text-accent' : 'hover:text-primary')}>Inquire Ritual</Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden luxury-shadow border border-black/5">
            <div className="relative z-10 max-w-4xl mx-auto space-y-16">
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-primary block">Your Transformation Awaits</span>
              <h2 className="font-headline text-6xl md:text-[110px] text-foreground mb-12 leading-[0.85]">
                Secure Your <br />
                <span className="italic font-light text-primary/80">Experience.</span>
              </h2>
              <p className="text-xl text-muted-foreground/70 mb-20 leading-relaxed font-light italic">
                Join our private clientele at {CONTACT.shortAddress}. Appointments are available daily for your aesthetic refinement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pb-12">
                <div className="space-y-4">
                  <Phone className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Call Concierge</p>
                  <p className="text-lg font-medium">{CONTACT.phone}</p>
                </div>
                <div className="space-y-4">
                  <MessageCircle className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Social Connection</p>
                  <p className="text-lg font-medium">Messenger / FB</p>
                </div>
                <div className="space-y-4">
                  <MapPin className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Sanctuary</p>
                  <p className="text-sm font-medium">{CONTACT.shortAddress}</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-20 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 w-full md:w-auto">
                  <Link href="/contact">Reserve Appointment</Link>
                </Button>
                <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Private Consultation • Discrete Sanctuary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
