import Link from 'next/link';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT, NAVIGATION, SIGNATURE_TREATMENTS } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-white pt-64 pb-20 border-t border-black/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-12 mb-48">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-16">
            <div className="flex flex-col">
              <span className="font-headline text-5xl tracking-[0.1em] uppercase font-light text-foreground">
                {BRAND.name} <span className="italic font-normal text-primary/40">{BRAND.suffix}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/40 mt-4 font-bold">{BRAND.type}</span>
            </div>
            <p className="text-2xl text-muted-foreground/60 leading-relaxed max-w-lg font-light italic">
              {BRAND.description}
            </p>
            <div className="flex gap-16 pt-6">
              <Link href={CONTACT.socials.facebook} className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] font-bold text-foreground hover:text-primary transition-all duration-1000">
                Facebook <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 opacity-40 group-hover:opacity-100" />
              </Link>
              <Link href={CONTACT.socials.instagram} className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] font-bold text-foreground hover:text-primary transition-all duration-1000">
                Instagram <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 opacity-40 group-hover:opacity-100" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-16 text-foreground/40">Navigation</h3>
            <ul className="space-y-8">
              {NAVIGATION.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-lg font-light text-muted-foreground/70 hover:text-foreground hover:italic transition-all duration-700">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Rituals */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-16 text-foreground/40">The Collection</h3>
            <ul className="space-y-8">
              {SIGNATURE_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-lg font-light text-muted-foreground/70 hover:text-foreground hover:italic transition-all duration-700">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Concierge */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-16 text-foreground/40">Concierge</h3>
            <ul className="space-y-12 text-lg font-light text-muted-foreground/70">
              <li className="flex flex-col gap-4">
                <span className="text-[9px] uppercase tracking-[0.6em] text-accent font-bold">The Sanctuary</span>
                <span className="leading-relaxed italic">{CONTACT.address}</span>
              </li>
              <li className="flex flex-col gap-4">
                <span className="text-[9px] uppercase tracking-[0.6em] text-accent font-bold">Immediate Enquiries</span>
                <span className="text-3xl font-headline italic text-foreground tracking-tighter">{CONTACT.phone}</span>
              </li>
              <li className="flex flex-col gap-4">
                <span className="text-[9px] uppercase tracking-[0.6em] text-accent font-bold">Digital Presence</span>
                <span className="truncate border-b border-black/5 pb-2 inline-block w-fit text-base">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-24 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground/30 font-bold">
            © {new Date().getFullYear()} {BRAND.fullName} • Private Aesthetic Intelligence • Absolute Privacy Protocol
          </p>
          <div className="flex space-x-16 text-[10px] uppercase tracking-[0.6em] text-muted-foreground/30 font-bold">
            <Link href="#" className="hover:text-foreground transition-all duration-1000">Privacy Narrative</Link>
            <Link href="#" className="hover:text-foreground transition-all duration-1000">Terms of Care</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
