
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ivory border-t">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-primary fill-primary" />
              <span className="font-headline text-xl tracking-wider uppercase font-semibold text-foreground">
                Luxe Glow <span className="text-primary italic font-light">Premier</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Experience the ultimate skin perfection just for you at Metro Manila's most exclusive aesthetic destination.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-primary hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-primary hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Signature', 'Promos', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">Our Rituals</h3>
            <ul className="space-y-4">
              {['Signature Facial', 'Carbon Laser', 'BB Glow', 'IPL Hair Removal', 'Mesolipo'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-foreground">Concierge</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Estancia Mall, 3F East Wing,<br />Capitol Commons, Pasig City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+63 998 936 8395</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>luxeglowbeautylounge@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Luxe Glow Premier. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
