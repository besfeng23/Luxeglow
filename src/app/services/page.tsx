import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Check, Sparkles, Gem, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    category: "Signature Treatments",
    items: [
      {
        name: "Luxe Signature Facial",
        price: "₱3,500",
        duration: "90 min",
        desc: "A comprehensive, multi-step rejuvenating experience tailored to your unique skin needs. Includes cleansing, steaming, extractions, diamond peel, radiofrequency, and PDT light therapy.",
        features: ["Diamond Peel", "Radiofrequency", "PDT Light Therapy", "Cooling Hammer"]
      },
      {
        name: "Carbon Laser Ritual",
        price: "₱4,500",
        duration: "75 min",
        desc: "Advanced laser rejuvenation combined with a basic facial. Perfect for minimizing pores, improving texture, and achieving an immediate glow.",
        features: ["Pore Tightening", "Deep Exfoliation", "Collagen Stimulation"]
      }
    ]
  },
  {
    category: "Radiance & Glow",
    items: [
      {
        name: "BB Glow Ritual",
        price: "₱3,000",
        duration: "60 min",
        desc: "The ultimate semi-permanent foundation treatment for a radiant, even-toned complexion that lasts for weeks.",
        features: ["Semi-permanent foundation", "Hydration boost", "Color correction"]
      },
      {
        name: "BB Blush",
        price: "₱2,500",
        duration: "45 min",
        desc: "A soft, natural, long-lasting blush effect that gives you a healthy, sun-kissed look without makeup.",
        features: ["Natural tint", "Rosy glow", "No makeup look"]
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
        desc: "Targeted fat reduction and body contouring using micro-injections to dissolve stubborn fatty tissue.",
        features: ["Spot fat reduction", "Body contouring", "Quick recovery"]
      },
      {
        name: "Botox Smoothing",
        price: "Inquire",
        duration: "30 min",
        desc: "Premium wrinkle-smoothing treatments administered with precision and artistry for a naturally youthful appearance.",
        features: ["Forehead lines", "Crow's feet", "Natural finish"]
      }
    ]
  }
];

export default function ServicesPage() {
  const serviceImg = PlaceHolderImages.find(img => img.id === 'treatment-room');

  return (
    <div className="bg-background min-h-screen">
      {/* Header - Editorial Style */}
      <section className="relative h-[70vh] flex items-center bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={serviceImg?.imageUrl || ''}
            alt="Services Header"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-8 block animate-fade-in-up">The Collection</span>
          <h1 className="font-headline text-6xl md:text-9xl text-white mb-8 animate-fade-in-up delay-100">
            Our <span className="italic font-light">Rituals</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-xl italic font-light animate-fade-in-up delay-200 leading-relaxed">
            "A curation of high-end aesthetic experiences designed for absolute perfection and refined results."
          </p>
        </div>
      </section>

      {/* Rituals Menu */}
      <section className="py-40">
        <div className="container mx-auto px-6 lg:px-12">
          {services.map((category, idx) => (
            <div key={idx} className="mb-40 last:mb-0">
              <div className="flex flex-col items-center mb-24">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6">Selection 0{idx + 1}</span>
                <h2 className="font-headline text-5xl md:text-6xl text-foreground text-center">{category.category}</h2>
                <div className="h-px w-32 bg-accent/20 mt-10" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {category.items.map((service, sIdx) => (
                  <div key={sIdx} className="group flex flex-col justify-between h-full bg-white p-12 md:p-16 rounded-[3rem] luxury-shadow border border-black/5 hover:-translate-y-2 transition-all duration-700">
                    <div>
                      <div className="flex justify-between items-start mb-10">
                        <Gem className="w-8 h-8 text-accent/40" />
                        <div className="text-right">
                          <div className="text-3xl font-headline text-foreground mb-1 italic">{service.price}</div>
                          <div className="flex items-center justify-end text-[10px] text-muted-foreground gap-2 uppercase tracking-[0.2em]">
                            <Clock className="w-3 h-3" /> {service.duration}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-headline text-4xl text-foreground mb-6 group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                      <p className="text-muted-foreground/80 leading-relaxed font-light text-lg mb-10">{service.desc}</p>
                      
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-16 border-t border-black/5 pt-10">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full rounded-full bg-foreground text-white h-14 uppercase tracking-[0.3em] text-[10px] font-bold shadow-xl transition-all duration-500 hover:bg-black">
                      <Link href="/contact">Book This Ritual</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Highlight - Editorial Spread */}
      <section className="py-40 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="relative group">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden luxury-shadow border-[12px] border-white/5">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'hero-main')?.imageUrl || ''} 
                  alt="Luxe Packages" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent rounded-full flex items-center justify-center p-8 text-center text-foreground luxury-shadow rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <p className="font-headline italic text-xl leading-tight">Seasonal Collections</p>
              </div>
            </div>
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent">Curated Spreads</span>
              <h2 className="font-headline text-6xl md:text-8xl leading-none">The <span className="italic font-light">Collections</span></h2>
              <p className="text-white/50 text-xl font-light leading-relaxed">
                Elevate your journey with our meticulously designed sequences. From the Bridal Radiance collection to Private Boutique events.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Gem className="w-4 h-4 text-accent group-hover:text-foreground" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Bridal Glow Collection</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <Sparkles className="w-4 h-4 text-accent group-hover:text-foreground" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold">The Socialite Series</span>
                </div>
              </div>
              <div className="pt-10">
                <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-foreground px-16 h-16 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500">
                  <Link href="/promos">Enquire About Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}