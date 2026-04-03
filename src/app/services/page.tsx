
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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={serviceImg?.imageUrl || ''}
            alt="Services Header"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6">Our <span className="text-primary italic">Rituals</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg italic">"A curation of high-end aesthetic experiences designed for absolute perfection."</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px gold-gradient" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-4">
          {services.map((category, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="font-headline text-3xl md:text-4xl text-foreground whitespace-nowrap">{category.category}</h2>
                <div className="h-px w-full bg-primary/20" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.items.map((service, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl p-8 md:p-12 luxury-shadow border border-primary/5 hover:border-primary/20 transition-all group">
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Luxe Glow Selection</span>
                        </div>
                        <h3 className="font-headline text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">{service.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-headline text-foreground mb-1">{service.price}</div>
                        <div className="flex items-center justify-end text-xs text-muted-foreground gap-1 uppercase tracking-widest">
                          <Clock className="w-3 h-3" /> {service.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary" />
                          {feat}
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full rounded-full bg-primary text-white h-12 uppercase tracking-widest text-xs font-bold">
                      <Link href="/contact">Book Ritual <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Highlight */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="relative w-full md:w-1/2 aspect-square rounded-[40px] overflow-hidden luxury-shadow border-4 border-accent/20">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'hero-main')?.imageUrl || ''} 
                alt="Packages" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl">Seasonal <span className="text-accent italic">Packages</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Elevate your experience with our curated collections. From Bridal Showers to Holiday Glow packages, we offer combined treatments for a truly transformative journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Gem className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-semibold">Bridal Glow Collection</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-semibold">BFF Beauty Spree</span>
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-foreground px-10 h-14 uppercase tracking-widest text-sm font-bold">
                <Link href="/promos">Explore Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
