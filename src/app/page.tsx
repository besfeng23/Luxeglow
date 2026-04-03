import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, ShieldCheck, Sparkles, Gem, Clock, CheckCircle2, Phone, MessageCircle, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-main');
  const signatureImg = PlaceHolderImages.find(img => img.id === 'signature-facial');
  const treatmentImg = PlaceHolderImages.find(img => img.id === 'treatment-room');
  const glowImg = PlaceHolderImages.find(img => img.id === 'model-glowing-skin');
  const productsImg = PlaceHolderImages.find(img => img.id === 'skincare-products');

  return (
    <div className="flex flex-col bg-background selection:bg-accent/30">
      
      {/* 1. Hero Section - Editorial Premium */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -z-10 translate-x-1/4 skew-x-12 hidden lg:block" />
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-10 px-6 py-2 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary">Estancia Mall • Capitol Commons</span>
            </div>
            
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[110px] leading-[0.85] mb-12 text-foreground tracking-tight">
              Radiance <br />
              <span className="italic font-light text-primary/70">Refined.</span>
            </h1>
            
            <p className="font-body text-xl text-muted-foreground/80 mb-14 leading-relaxed max-w-lg text-balance font-light italic">
              "Experience the private sanctuary of Luxe Glow Premier, where clinical precision meets the art of quiet luxury and aesthetic intelligence."
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
            
            <div className="mt-24 flex items-center gap-12 border-t border-black/5 pt-12">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60">The Location</p>
                <p className="text-sm font-medium tracking-wide">Capitol Commons, Pasig</p>
              </div>
              <div className="w-px h-12 bg-black/10" />
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60">The Standard</p>
                <div className="flex items-center gap-2">
                  <Gem className="w-3 h-3 text-accent" />
                  <p className="text-sm font-medium tracking-wide">Private Aesthetic Intelligence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden luxury-shadow animate-reveal group">
              <Image
                src={heroImg?.imageUrl || "https://picsum.photos/seed/lux1/1200/800"}
                alt="Luxe Glow Premier Editorial"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                priority
                data-ai-hint="luxury spa"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Elegant Floating Badge */}
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
              A Sanctuary of <br />
              <span className="italic font-light text-primary/60">Elevated Rejuvenation</span>
            </h2>
            <div className="h-px w-24 bg-accent/30 mx-auto" />
            <p className="text-2xl text-muted-foreground/90 leading-relaxed font-light italic max-w-2xl mx-auto">
              "We believe beauty is an intimate journey of self-honor. Our philosophy centers on quiet prestige—delivering luminous results through clinical artistry and absolute care."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16">
              {[
                { icon: ShieldCheck, title: "Clinical Integrity", desc: "Medical-grade precision meets aesthetic intuition for safe, visible transformation." },
                { icon: Sparkles, title: "Bespoke Protocols", desc: "Every treatment is tailored to your unique skin DNA and personal beauty aspirations." },
                { icon: MapPin, title: "Elite Location", desc: "Located in the exclusive Estancia Mall, offering a discrete and peaceful haven." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
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

      {/* 3. Featured Treatments Section */}
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
            {[
              {
                title: "Luxe Signature Facial",
                price: "₱3,500",
                desc: "The cornerstone of our clinic. A 10-step clinical sequence including Diamond Peel, RF, and PDT Light Therapy.",
                img: signatureImg?.imageUrl,
                tag: "Flagship",
                link: "/signature/facial"
              },
              {
                title: "Carbon Laser Ritual",
                price: "₱4,500",
                desc: "Advanced laser rejuvenation for immediate texture refinement, pore minimization, and a porcelain glow.",
                img: PlaceHolderImages.find(img => img.id === 'carbon-laser')?.imageUrl,
                tag: "Advanced",
                link: "/signature"
              },
              {
                title: "BB Glow & Blush",
                price: "From ₱2,500",
                desc: "Semi-permanent foundation infusion for a flawlessly even-toned canvas and a natural rosy flush.",
                img: PlaceHolderImages.find(img => img.id === 'facial-treatment')?.imageUrl,
                tag: "Radiance",
                link: "/signature/bb-glow"
              },
              {
                title: "IPL Hair Removal",
                price: "From ₱1,500",
                desc: "Permanent hair reduction using the 'Silk Protocol'—precision light therapy for carefree, smooth skin.",
                img: treatmentImg?.imageUrl,
                tag: "Essentials",
                link: "/signature/ipl-hair-removal"
              }
            ].map((item, i) => (
              <div key={i} className="group relative bg-white rounded-[3rem] overflow-hidden luxury-shadow flex flex-col md:flex-row transition-all duration-700 hover:-translate-y-2 border border-black/5">
                <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
                  <Image src={item.img || "https://picsum.photos/seed/lux1/600/800"} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint="facial treatment" />
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] uppercase tracking-widest font-bold bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-primary">{item.tag}</span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-headline text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="text-sm font-bold text-accent">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm mb-10">{item.desc}</p>
                  <Button asChild variant="outline" className="w-fit rounded-full border-black/5 text-[10px] uppercase tracking-widest font-bold h-10 px-8 hover:bg-foreground hover:text-white transition-all duration-500">
                    <Link href={item.link}>Discover Ritual</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature Spotlight Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden luxury-shadow">
                <Image src={signatureImg?.imageUrl || "https://picsum.photos/seed/lux7/600/600"} alt="Signature Facial" fill className="object-cover" data-ai-hint="luxury facial" />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/20 backdrop-blur-3xl rounded-full animate-pulse pointer-events-none" />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Signature Series</span>
              <h2 className="font-headline text-6xl md:text-[90px] leading-[0.9] text-foreground">
                Luxe <br />
                <span className="italic font-light">Signature</span>
              </h2>
              <p className="text-xl text-muted-foreground/80 leading-relaxed font-light italic border-l-2 border-accent/20 pl-8">
                "Our flagship facial isn't just a treatment; it's a dedicated 90-minute ritual of refinement designed to honor the natural architecture of your skin."
              </p>
              <ul className="space-y-6">
                {[
                  "Diamond Peel Exfoliation",
                  "Radiofrequency Skin Tightening",
                  "PDT Light Therapy Restoration",
                  "Clinical Steaming & Extraction"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-sm font-medium tracking-wide uppercase">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full bg-foreground text-white px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-xl">
                <Link href="/signature/facial">Experience The Ritual</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Treatment Experience (Process) */}
      <section className="py-40 bg-foreground text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-8 block">The Protocol</span>
            <h2 className="font-headline text-5xl md:text-7xl mb-10 leading-none">The Luxury <span className="italic font-light">Sequence</span></h2>
            <p className="text-white/50 text-xl font-light">Every ritual follows a meticulous clinical path to ensure your safety and luminous results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="absolute top-1/4 left-0 w-full h-px bg-white/10 hidden md:block" />
            
            {[
              { step: "01", title: "Consultation", desc: "Private skin intelligence analysis with our aesthetic experts at Capitol Commons." },
              { step: "02", title: "Purification", desc: "Deep double-cleansing and thermal steaming to prepare the clinical canvas." },
              { step: "03", title: "Refinement", desc: "Precision execution of your bespoke ritual using advanced medical-grade technology." },
              { step: "04", title: "Restoration", desc: "PDT Light Therapy and final SPF shielding for a luminous, protected finish." }
            ].map((item, idx) => (
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

      {/* 6. Packages & Promos Preview */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4 space-y-10">
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
              <Card className="rounded-[3rem] border-none luxury-shadow bg-secondary/30 overflow-hidden group">
                <CardContent className="p-12 space-y-8">
                  <div className="flex justify-between items-start">
                    <Star className="w-8 h-8 text-accent/40" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Limited Selection</span>
                  </div>
                  <h3 className="font-headline text-4xl italic group-hover:text-primary transition-colors">Holiday Radiance</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">A specialized festive sequence designed to restore glow during the social season. Includes Signature Facial and Carbon Laser.</p>
                  <div className="pt-4 border-t border-black/5 flex justify-between items-center">
                    <span className="font-headline text-2xl italic">₱12,000</span>
                    <Link href="/contact" className="text-[10px] uppercase tracking-widest font-bold hover:text-primary">Inquire Ritual</Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[3rem] border-none luxury-shadow bg-foreground text-white overflow-hidden group">
                <CardContent className="p-12 space-y-8">
                  <div className="flex justify-between items-start">
                    <Gem className="w-8 h-8 text-accent/40" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent">New Privilege</span>
                  </div>
                  <h3 className="font-headline text-4xl italic group-hover:text-accent transition-colors">First Experience</h3>
                  <p className="text-white/40 font-light leading-relaxed">Your first journey with us begins with a complimentary Skin Intelligence report and a special rate on our Signature Facial ritual.</p>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="font-headline text-2xl italic">Gifted Offer</span>
                    <Link href="/contact" className="text-[10px] uppercase tracking-widest font-bold hover:text-accent">Redeem Now</Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Luxe Glow */}
      <section className="py-40 bg-secondary/10">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Differentiation</span>
            <h2 className="font-headline text-5xl md:text-7xl leading-tight">Why Clients <br /><span className="italic font-light">Trust Us</span></h2>
            
            <div className="space-y-10">
              {[
                { title: "Private Sanctuary", desc: "A sanctuary of quiet prestige at Estancia Mall, designed for absolute discretion and calm." },
                { title: "Clinical Artistry", desc: "Our therapists are trained in proprietary clinical protocols that merge medical science with sensory care." },
                { title: "Modern Intelligence", desc: "We invest in the latest medical-grade aesthetic technology to ensure consistent, luminous results." },
                { title: "Personalized Care", desc: "We move away from one-size-fits-all. Every treatment plan is bespoke to your skin's intelligence." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden luxury-shadow">
              <Image src={productsImg?.imageUrl || "https://picsum.photos/seed/lux4/600/400"} alt="Luxe Products" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" data-ai-hint="luxury skincare" />
            </div>
            <div className="absolute inset-0 border-[32px] border-white/20 rounded-[4rem] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 9. Book-now CTA Section */}
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
                Join our private clientele at Estancia Mall. Appointments are available daily for your aesthetic refinement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pb-12">
                <div className="space-y-4">
                  <Phone className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Call Concierge</p>
                  <p className="text-lg font-medium">+63 998 936 8395</p>
                </div>
                <div className="space-y-4">
                  <MessageCircle className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Social Connection</p>
                  <p className="text-lg font-medium">Messenger / FB</p>
                </div>
                <div className="space-y-4">
                  <MapPin className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase tracking-widest font-bold">Sanctuary</p>
                  <p className="text-sm font-medium">Estancia Mall, Pasig</p>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-full bg-foreground text-white hover:bg-black px-20 h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 w-full md:w-auto">
                <Link href="/contact">Reserve Appointment</Link>
              </Button>
            </div>
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

    </div>
  );
}
