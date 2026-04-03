
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ShieldCheck, Sparkles, Gem } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-main');
  const signatureImg = PlaceHolderImages.find(img => img.id === 'signature-facial');
  const glowImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');

  const fallbackHeroUrl = "https://picsum.photos/seed/lux1/1200/800";

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || fallbackHeroUrl}
            alt="Luxe Glow Premier Hero"
            fill
            className="object-cover brightness-[0.85]"
            priority
            data-ai-hint="luxury spa"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-primary">The Ultimate Aesthetic Destination</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-foreground drop-shadow-sm">
              Experience <br />
              <span className="italic font-light text-primary">Skin Perfection</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Indulge in a world of royalty and wealth. Luxe Glow Premier offers exclusive treatments designed for those who demand nothing less than perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-10 h-14 uppercase tracking-widest text-sm font-bold shadow-xl shadow-primary/20">
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-white/20 backdrop-blur-md border-primary text-primary hover:bg-white px-10 h-14 uppercase tracking-widest text-sm">
                <Link href="/services">View Rituals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-t-[100px] overflow-hidden luxury-shadow">
                <Image
                  src={glowImg?.imageUrl || "https://picsum.photos/seed/lux6/600/800"}
                  alt="Philosophy"
                  fill
                  className="object-cover"
                  data-ai-hint="glowing skin"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-ivory rounded-full flex items-center justify-center p-8 text-center border-4 border-white shadow-xl hidden md:flex">
                <p className="font-headline italic text-primary text-xl">
                  "True luxury is being at peace with your own reflection."
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Our Philosophy</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground">
                Where Elite Science <br />
                Meets <span className="text-primary italic">Eternal Beauty</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Luxe Glow Premier, we don't just provide treatments; we curate experiences. Our mission is to translate high-end editorial beauty into tangible results for our exclusive clientele. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Clinical Excellence</h4>
                    <p className="text-sm text-muted-foreground leading-snug">Safe and verified medical-grade equipment and protocols.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Bespoke Rituals</h4>
                    <p className="text-sm text-muted-foreground leading-snug">Every treatment is uniquely tailored to your DNA and goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments Section */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Signature Rituals</h2>
            <p className="text-muted-foreground">Experience our most requested, premium aesthetic procedures designed to deliver immediate, radiant results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Luxe Signature Facial',
                desc: 'A comprehensive, rejuvenating 10-step facial including Diamond Peel and Radiofrequency.',
                imgId: 'signature-facial',
                fallback: 'https://picsum.photos/seed/lux7/600/600',
                price: '₱3,500'
              },
              {
                title: 'Carbon Laser',
                desc: 'Advanced skin rejuvenation for texture and pores, combined with our foundational facial.',
                imgId: 'carbon-laser',
                fallback: 'https://picsum.photos/seed/lux8/600/600',
                price: '₱4,500'
              },
              {
                title: 'BB Glow Treatment',
                desc: 'Semi-permanent foundation ritual for a long-lasting radiant, even-toned complexion.',
                imgId: 'facial-treatment',
                fallback: 'https://picsum.photos/seed/lux2/600/800',
                price: '₱3,000'
              }
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden border-none luxury-shadow hover:-translate-y-2 transition-transform duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={PlaceHolderImages.find(img => img.id === item.imgId)?.imageUrl || item.fallback}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint={item.title}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-primary">{item.price}</span>
                  </div>
                </div>
                <CardContent className="p-8 bg-white text-center">
                  <h3 className="font-headline text-2xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{item.desc}</p>
                  <Button variant="link" className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold h-auto p-0 group">
                    Explore Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-10 h-12 uppercase tracking-widest text-xs font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Star className="w-[500px] h-[500px] text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Gem className="w-12 h-12 text-accent mx-auto mb-8 animate-pulse" />
            <h2 className="font-headline text-4xl md:text-6xl mb-8 leading-tight">
              Unsure of which <span className="text-accent italic">ritual</span> you need?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Our AI Concierge uses advanced skin intelligence to recommend the perfect Luxe Glow Premier treatment based on your unique concerns.
            </p>
            <Button asChild size="lg" className="rounded-full bg-accent text-foreground hover:bg-accent/90 px-12 h-16 uppercase tracking-widest text-sm font-bold shadow-lg shadow-accent/20">
              <Link href="/ai-recommendations">Consult Your AI Concierge</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl mb-6">The Experience</h2>
              <p className="text-muted-foreground">Step into an oasis of tranquility and witness the refined artistry of our clinic ambiance and life-changing skin transformations.</p>
            </div>
            <Button variant="link" asChild className="text-primary uppercase tracking-widest text-xs font-bold group p-0">
              <Link href="/gallery">Visit Full Gallery <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group luxury-shadow">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'clinic-interior')?.imageUrl || "https://picsum.photos/seed/lux3/800/600"} 
                alt="Clinic Interior" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl group luxury-shadow">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'treatment-room')?.imageUrl || "https://picsum.photos/seed/lux5/800/600"} 
                alt="Treatment Room" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl group luxury-shadow">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'skincare-products')?.imageUrl || "https://picsum.photos/seed/lux4/600/400"} 
                alt="Skincare" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-2xl group luxury-shadow">
              <Image 
                src={heroImg?.imageUrl || fallbackHeroUrl} 
                alt="Luxe Glow Ritual" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] p-12 md:p-24 luxury-shadow text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 gold-gradient" />
            <h2 className="font-headline text-4xl md:text-6xl text-foreground mb-8">
              Your Journey to <br />
              <span className="text-primary italic">Absolute Perfection</span> Begins Here
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Visit us at Estancia Mall for a transformation that transcends the ordinary and reveals your true inner glow.
            </p>
            <Button asChild size="lg" className="rounded-full bg-primary text-white px-16 h-14 uppercase tracking-widest text-sm font-bold shadow-lg shadow-primary/20">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
