import Link from 'next/link';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT, NAVIGATION, SIGNATURE_TREATMENTS } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-white pt-48 pb-16 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-8 mb-32">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-12">
            <div className="flex flex-col">
              <span className="font-headline text-4xl tracking-[0.1em] uppercase font-light text-foreground">
                {BRAND.name} <span className="italic font-normal">{BRAND.suffix}</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-muted-foreground/60 mt-3 font-bold">{BRAND.type}</span>
            </div>
            <p className="text-xl text-muted-foreground/70 leading-relaxed max-w-md font-light italic">
              {BRAND.description}
            </p>
            <div className="flex gap-12 pt-4">
              <Link href={CONTACT.socials.facebook} className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-bold text-foreground hover:text-primary transition-all duration-700">
                Facebook <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link href={CONTACT.socials.instagram} className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-bold text-foreground hover:text-primary transition-all duration-700">
                Instagram <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-foreground">Navigation</h3>
            <ul className="space-y-6">
              {NAVIGATION.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base font-light text-muted-foreground/80 hover:text-foreground hover:italic transition-all duration-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-foreground">Featured</h3>
            <ul className="space-y-6">
              {SIGNATURE_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-base font-light text-muted-foreground/80 hover:text-foreground hover:italic transition-all duration-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-foreground">Concierge</h3>
            <ul className="space-y-10 text-base font-light text-muted-foreground/80">
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">The Sanctuary</span>
                <span className="leading-relaxed italic">{CONTACT.address}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Immediate Enquiries</span>
                <span className="text-lg font-headline italic text-foreground tracking-tight">{CONTACT.phone}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Digital Correspondence</span>
                <span className="truncate border-b border-black/10 pb-1 inline-block w-fit">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 font-bold">
            © {new Date().getFullYear()} {BRAND.fullName} • Private Aesthetic Intelligence • All Rights Reserved
          </p>
          <div className="flex space-x-12 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60 font-bold">
            <Link href="#" className="hover:text-foreground transition-colors duration-700">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors duration-700">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
