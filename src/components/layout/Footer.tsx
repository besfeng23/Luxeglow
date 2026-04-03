import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT, NAVIGATION, SIGNATURE_TREATMENTS } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-white pt-80 pb-24 border-t border-black/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-32 md:gap-16 mb-64">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-20">
            <div className="flex flex-col">
              <span className="font-headline text-5xl md:text-6xl tracking-[0.12em] uppercase font-light text-foreground">
                {BRAND.name} <span className="italic font-normal text-primary/30">{BRAND.suffix}</span>
              </span>
              <span className="text-[11px] uppercase tracking-[1em] text-muted-foreground/30 mt-6 font-bold">{BRAND.type}</span>
            </div>
            <p className="text-2xl text-muted-foreground/50 leading-relaxed max-w-lg font-light italic">
              {BRAND.description}
            </p>
            <div className="flex gap-20 pt-10">
              <Link href={CONTACT.socials.facebook} target="_blank" className="group flex items-center gap-6 text-[11px] uppercase tracking-[0.6em] font-bold text-foreground hover:text-primary transition-all duration-[1200ms]">
                Facebook <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 opacity-25 group-hover:opacity-100" />
              </Link>
              <Link href={CONTACT.socials.instagram} target="_blank" className="group flex items-center gap-6 text-[11px] uppercase tracking-[0.6em] font-bold text-foreground hover:text-primary transition-all duration-[1200ms]">
                Instagram <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 opacity-25 group-hover:opacity-100" />
              </Link>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.8em] mb-20 text-foreground/25">Navigation</h3>
            <ul className="space-y-10">
              {NAVIGATION.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-xl font-light text-muted-foreground/60 hover:text-foreground hover:italic transition-all duration-1000 tracking-tight">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collection Curation */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.8em] mb-20 text-foreground/25">The Collection</h3>
            <ul className="space-y-10">
              {SIGNATURE_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-xl font-light text-muted-foreground/60 hover:text-foreground hover:italic transition-all duration-1000 tracking-tight">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge end-cap */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.8em] mb-20 text-foreground/25">Concierge</h3>
            <ul className="space-y-16 text-xl font-light text-muted-foreground/60">
              <li className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.8em] text-accent font-bold">The Sanctuary</span>
                <span className="leading-relaxed italic">{CONTACT.address}</span>
              </li>
              <li className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.8em] text-accent font-bold">Enquiries</span>
                <span className="text-4xl font-headline italic text-foreground tracking-tighter">{CONTACT.phone}</span>
              </li>
              <li className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.8em] text-accent font-bold">Digital</span>
                <span className="truncate border-b border-black/5 pb-3 inline-block w-fit text-lg">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-32 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-16">
          <p className="text-[10px] uppercase tracking-[0.8em] text-muted-foreground/20 font-bold">
            © {new Date().getFullYear()} {BRAND.fullName} • Private Aesthetic Intelligence • Capitol Commons
          </p>
          <div className="flex space-x-20 text-[10px] uppercase tracking-[0.8em] text-muted-foreground/20 font-bold">
            <Link href="#" className="hover:text-foreground transition-all duration-1000">Privacy Narrative</Link>
            <Link href="#" className="hover:text-foreground transition-all duration-1000">Terms of Care</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
