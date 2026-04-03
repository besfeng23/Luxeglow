'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Calendar as CalendarIcon,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Lock,
  Eye
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { BRAND, CONTACT } from '@/content/data';

const services = [
  "Luxe Signature Facial",
  "Carbon Laser Ritual",
  "BB Glow / BB Blush",
  "IPL Hair Removal",
  "Mesolipo Sculpt",
  "Wart Removal Refinement",
  "General Consultation"
];

const timeSlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM"
];

export default function ContactPage() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">Private Concierge</span>
            <h1 className="font-headline text-7xl md:text-9xl leading-none tracking-tight text-foreground">
              Secure Your <br />
              <span className="italic font-light text-primary/60">Radiance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 font-light italic max-w-3xl mx-auto leading-relaxed">
              "Every journey to perfection begins with an intimate conversation. Our concierge is ready to curate your bespoke ritual."
            </p>
          </div>
        </div>
      </section>

      <section className="pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
            
            {/* Left Column: Info & Socials */}
            <div className="lg:col-span-5 space-y-20 animate-fade-in-up">
              
              {/* Contact Cards */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">The Sanctuary</h3>
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 transition-all duration-700 group-hover:bg-foreground group-hover:text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-light italic text-muted-foreground leading-relaxed">
                        {CONTACT.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">Immediate Enquiries</h3>
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 transition-all duration-700 group-hover:bg-foreground group-hover:text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <p className="text-2xl font-headline italic">{CONTACT.phone}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">Digital Correspondence</h3>
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 transition-all duration-700 group-hover:bg-foreground group-hover:text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <p className="text-lg font-light italic text-muted-foreground border-b border-black/10 pb-1">{CONTACT.email}</p>
                  </div>
                </div>
              </div>

              {/* Social Spreads */}
              <div className="p-12 bg-foreground text-white rounded-[3rem] luxury-shadow space-y-10 relative overflow-hidden group">
                <div className="relative z-10 space-y-8">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Real-time Connection</h4>
                  <p className="text-white/50 text-lg font-light italic leading-relaxed">"For immediate bookings or quick questions, our social concierge is active daily."</p>
                  <div className="flex flex-col gap-4">
                    <Button asChild variant="outline" className="justify-between h-14 border-white/10 bg-white/5 hover:bg-white hover:text-foreground rounded-full px-8">
                      <Link href={CONTACT.socials.facebook}>
                        <span className="flex items-center gap-3"><Facebook className="w-4 h-4" /> Facebook</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="justify-between h-14 border-white/10 bg-white/5 hover:bg-white hover:text-foreground rounded-full px-8">
                      <Link href={CONTACT.socials.instagram}>
                        <span className="flex items-center gap-3"><Instagram className="w-4 h-4" /> Instagram</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild className="justify-between h-14 bg-primary text-white hover:bg-white hover:text-foreground rounded-full px-8 transition-all duration-500">
                      <Link href={CONTACT.socials.messenger}>
                        <span className="flex items-center gap-3"><MessageCircle className="w-4 h-4" /> Messenger Chat</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>

              {/* Trust Section */}
              <div className="space-y-8 pt-8 border-t border-black/5">
                <div className="flex items-center gap-4">
                  <Lock className="w-5 h-5 text-accent" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Absolute Privacy Guaranteed</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "Your privacy is our utmost priority. All personal and clinical information shared with Luxe Glow Premier is handled with absolute discretion and in accordance with premium security standards."
                </p>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7 animate-fade-in-up delay-300">
              <Card className="border-none luxury-shadow bg-white rounded-[4rem] overflow-hidden">
                <div className="p-10 md:p-20 space-y-16">
                  <div className="space-y-6">
                    <h2 className="font-headline text-5xl italic font-light">The Booking <br />Request.</h2>
                    <p className="text-muted-foreground font-light italic leading-relaxed">"Please provide your aspirations to receive your bespoke consultation details."</p>
                  </div>

                  <form className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold ml-1">Full Name</Label>
                        <Input id="name" placeholder="E.g., Alexandra Rose" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold ml-1">Mobile Number</Label>
                        <Input id="phone" placeholder="+63 900 000 0000" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold ml-1">Email Address</Label>
                      <Input id="email" type="email" placeholder="alexandra@example.com" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-[10px] uppercase tracking-widest font-bold ml-1">Ritual of Interest</Label>
                      <Select>
                        <SelectTrigger className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all">
                          <SelectValue placeholder="Select your experience" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-black/5">
                          {services.map(s => (
                            <SelectItem key={s} value={s.toLowerCase().replace(/ /g, '-')} className="py-3">{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold ml-1 text-foreground">Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal rounded-2xl border-black/5 bg-secondary/30 h-14 px-6",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-3 h-4 w-4 text-accent" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 rounded-2xl border-black/5" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className="rounded-2xl"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="time" className="text-[10px] uppercase tracking-widest font-bold ml-1">Preferred Time</Label>
                        <Select>
                          <SelectTrigger className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all">
                            <SelectValue placeholder="Select a time window" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-black/5">
                            {timeSlots.map(t => (
                              <SelectItem key={t} value={t.toLowerCase().replace(/ /g, '-')} className="py-3">{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold ml-1">Aspirations or Concerns</Label>
                      <Textarea id="message" placeholder="Tell us about your beauty goals..." className="rounded-3xl border-black/5 bg-secondary/30 min-h-[180px] px-6 py-6 focus:bg-white transition-all resize-none" />
                    </div>

                    <div className="pt-8 space-y-10">
                      <div className="space-y-6">
                        <Button className="w-full bg-foreground text-white hover:bg-black rounded-full h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                          Secure Your Experience
                        </Button>
                        <div className="flex items-center justify-center gap-6">
                          <div className="flex items-center gap-2">
                             <ShieldCheck className="w-3 h-3 text-accent" />
                             <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">Secure Protocol</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Eye className="w-3 h-3 text-accent" />
                             <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">Private Consultation</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4 text-center">
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-accent" />
                          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Response Expectation</p>
                        </div>
                        <p className="text-xs text-muted-foreground/60 italic">"Our private concierge will respond to your request within 4 business hours."</p>
                      </div>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-40 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-10">
              <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Destination</span>
              <h2 className="font-headline text-6xl md:text-7xl">Capitol <br /><span className="italic font-light">Commons</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed italic border-l-2 border-accent/20 pl-8">
                Located in the exclusive East Wing of Estancia Mall, Luxe Glow Premier offers a discrete and peaceful haven away from the city's pace.
              </p>
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Daily: 10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>Complimentary Valet Assistance Available</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="aspect-video bg-white rounded-[4rem] luxury-shadow overflow-hidden relative border border-black/5 group">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 grayscale transition-all duration-1000 group-hover:grayscale-0">
                  <div className="text-center space-y-4">
                    <MapPin className="w-12 h-12 text-accent mx-auto opacity-40" />
                    <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground">Map Integration Active</p>
                    <p className="text-sm font-headline italic">3F East Wing, Estancia Mall</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="py-40 bg-foreground text-white overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-headline text-5xl md:text-7xl italic font-light leading-tight">"The first step toward radiance is a <br /><span className="text-accent">private choice.</span>"</h2>
            <div className="h-px w-24 bg-white/10 mx-auto" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.6em] font-bold">Luxe Glow Premier • Capitol Commons</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </section>
    </div>
  );
}
