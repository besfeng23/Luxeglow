import Link from 'next/link';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT, NAVIGATION, SIGNATURE_TREATMENTS } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex flex-col mb-10">
              <span className="font-headline text-3xl tracking-[0.1em] uppercase font-light text-foreground">
                {BRAND.name} <span className="italic font-normal">{BRAND.suffix}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground/60 mt-2">{BRAND.type}</span>
            </div>
            <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12 max-w-md font-light">
              {BRAND.description}
            </p>
            <div className="flex gap-10">
              <Link href={CONTACT.socials.facebook} className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors">
                Facebook <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href={CONTACT.socials.instagram} className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors">
                Instagram <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-foreground">Navigation</h3>
            <ul className="space-y-5">
              {NAVIGATION.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm font-light text-muted-foreground hover:text-foreground transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-foreground">Featured</h3>
            <ul className="space-y-5">
              {SIGNATURE_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-sm font-light text-muted-foreground hover:text-foreground transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-foreground">Concierge</h3>
            <ul className="space-y-8 text-sm font-light text-muted-foreground">
              <li className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Location</span>
                <span className="leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Enquiries</span>
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Digital</span>
                <span className="truncate">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © {new Date().getFullYear()} {BRAND.fullName} • All Rights Reserved
          </p>
          <div className="flex space-x-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
