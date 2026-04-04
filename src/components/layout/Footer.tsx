import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT, NAVIGATION, SIGNATURE_TREATMENTS } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-white pt-40 pb-20 border-t border-black/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-16 mb-40">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-12">
            <div className="flex flex-col">
              <span className="font-headline text-4xl tracking-[0.1em] uppercase font-light text-foreground">
                {BRAND.name} <span className="italic font-normal text-primary/40">{BRAND.suffix}</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.8em] text-muted-foreground mt-4 font-bold">{BRAND.type}</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md font-light italic">
              {BRAND.description}
            </p>
            <div className="flex gap-12 pt-6">
              <Link href={CONTACT.socials.facebook} target="_blank" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] font-bold text-foreground hover:text-primary transition-all duration-500">
                Facebook <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link href={CONTACT.socials.instagram} target="_blank" className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.5em] font-bold text-foreground hover:text-primary transition-all duration-500">
                Instagram <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-10 text-foreground">Navigation</h3>
            <ul className="space-y-6">
              {NAVIGATION.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-lg font-light text-muted-foreground hover:text-foreground hover:italic transition-all duration-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collection Curation */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-10 text-foreground">Featured</h3>
            <ul className="space-y-6">
              {SIGNATURE_TREATMENTS.map((item) => (
                <li key={item.name}>
                  <Link href={item.link} className="text-lg font-light text-muted-foreground hover:text-foreground hover:italic transition-all duration-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge info */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.6em] mb-10 text-foreground">Concierge</h3>
            <ul className="space-y-10 text-lg font-light text-muted-foreground">
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold">Location</span>
                <span className="leading-relaxed italic">{CONTACT.address}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold">Enquiries</span>
                <span className="text-3xl font-headline italic text-foreground tracking-tight">{CONTACT.phone}</span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold">Digital</span>
                <span className="truncate inline-block w-fit text-foreground">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-bold">
            © {new Date().getFullYear()} {BRAND.fullName} • Private Aesthetic Intelligence
          </p>
          <div className="flex space-x-12 text-[10px] uppercase tracking-[0.6em] text-muted-foreground font-bold">
            <Link href="#" className="hover:text-foreground transition-all duration-500">Privacy Narrative</Link>
            <Link href="#" className="hover:text-foreground transition-all duration-500">Terms of Care</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}