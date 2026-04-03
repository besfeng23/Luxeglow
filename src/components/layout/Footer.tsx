import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Star, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex flex-col mb-10">
              <span className="font-headline text-3xl tracking-[0.1em] uppercase font-light text-foreground">
                Luxe Glow <span className="italic font-normal">Premier</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground/60 mt-2">Private Aesthetic Clinic</span>
            </div>
            <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12 max-w-md font-light">
              Redefining luxury aesthetics through medical-grade precision and a refined, editorial approach to beauty.
            </p>
            <div className="flex gap-10">
              <Link href="https://facebook.com" className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors">
                Facebook <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="https://instagram.com" className="group flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors">
                Instagram <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-foreground">Navigation</h3>
            <ul className="space-y-5">
              {['Home', 'Rituals', 'Signature', 'Signature', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-light text-muted-foreground hover:text-foreground transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-foreground">Signature</h3>
            <ul className="space-y-5">
              {['Signature Facial', 'Carbon Laser', 'BB Glow Ritual', 'IPL Removal', 'Mesolipo Sculpt'].map((item) => (
                <li key={item}>
                  <span className="text-sm font-light text-muted-foreground">
                    {item}
                  </span>
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
                <span className="leading-relaxed">Estancia Mall, 3F East Wing,<br />Capitol Commons, Pasig City</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Enquiries</span>
                <span>+63 998 936 8395</span>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Digital</span>
                <span className="truncate">luxeglowbeautylounge@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © {new Date().getFullYear()} Luxe Glow Premier • All Rights Reserved
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