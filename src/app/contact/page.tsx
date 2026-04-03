'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
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
  Eye,
  Loader2,
  Gem
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
  "BB Glow Ritual",
  "BB Blush Ritual",
  "IPL Hair Removal",
  "Mesolipo Sculpt",
  "General Consultation"
];

const timeSlots = [
  "Morning (10:00 AM - 12:00 PM)",
  "Lunch (12:00 PM - 02:00 PM)",
  "Afternoon (02:00 PM - 05:00 PM)",
  "Evening (05:00 PM - 08:00 PM)"
];

export default function ContactPage() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Protocol Initiated",
        description: "Your private concierge will contact you within 4 business hours.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-accent block">Private Concierge</span>
            <h1 className="font-headline text-7xl md:text-9xl leading-none tracking-tight text-foreground">
              Secure Your <br />
              <span className="italic font-light text-primary/40">Radiance.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/60 font-light italic max-w-3xl mx-auto leading-relaxed">
              "Every journey to perfection begins with an intimate conversation. Our concierge is ready to curate your bespoke ritual."
            </p>
          </div>
        </div>
      </section>

      <section className="pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 items-start">
            
            {/* Left Column: Info & Trust */}
            <div className="lg:col-span-5 space-y-16 animate-fade-in-up">
              
              <div className="space-y-12 bg-white p-12 rounded-[4rem] luxury-shadow border border-black/5">
                <div className="space-y-8">
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground mb-2">The Sanctuary</h3>
                      <p className="text-lg font-light italic text-muted-foreground leading-relaxed">
                        {CONTACT.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 border-t border-black/5 pt-10">
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground mb-2">Immediate Enquiries</h3>
                      <p className="text-2xl font-headline italic">{CONTACT.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 border-t border-black/5 pt-10">
                  <div className="flex gap-8 group">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-primary bg-secondary/50 group-hover:bg-foreground group-hover:text-white transition-all duration-700">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground mb-2">Correspondence</h3>
                      <p className="text-lg font-light italic text-muted-foreground truncate max-w-[200px] md:max-w-none">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-foreground text-white rounded-[4rem] luxury-shadow space-y-10 relative overflow-hidden">
                <div className="relative z-10 space-y-8 text-center md:text-left">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <MessageCircle className="w-6 h-6 text-accent" />
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Social Concierge</h4>
                  </div>
                  <p className="text-white/50 text-lg font-light italic leading-relaxed">"For immediate bookings or quick aesthetic intelligence, connect with our social liaison."</p>
                  <div className="flex flex-col gap-4">
                    <Button asChild className="justify-between h-14 bg-primary text-white hover:bg-white hover:text-foreground rounded-full px-8 transition-all duration-500">
                      <a href={CONTACT.socials.messenger} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center gap-3">Messenger Chat</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white hover:text-foreground rounded-full px-6 h-12">
                        <a href={CONTACT.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                      </Button>
                      <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white hover:text-foreground rounded-full px-6 h-12">
                        <a href={CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>

              <div className="p-10 border border-black/5 rounded-[3rem] space-y-8">
                <div className="flex items-center gap-4">
                  <Lock className="w-5 h-5 text-accent" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Privacy Protocol</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "All personal and clinical information shared with Luxe Glow Premier is handled with absolute discretion and in accordance with premium medical-grade standards."
                </p>
              </div>
            </div>

            {/* Right Column: High-Status Booking Form */}
            <div className="lg:col-span-7 animate-fade-in-up delay-300">
              <Card className="border-none luxury-shadow bg-white rounded-[5rem] overflow-hidden">
                <div className="p-10 md:p-16 space-y-16">
                  <div className="space-y-4">
                    <h2 className="font-headline text-5xl italic font-light">The Booking <br />Request.</h2>
                    <p className="text-muted-foreground font-light italic leading-relaxed">"Please provide your aspirations to receive your bespoke ritual sequence."</p>
                  </div>

                  <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold ml-1">Full Name</Label>
                        <Input id="name" required placeholder="E.g., Alexandra Rose" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold ml-1">Mobile Number</Label>
                        <Input id="phone" required placeholder="+63 900 000 0000" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold ml-1">Email Address</Label>
                      <Input id="email" required type="email" placeholder="alexandra@example.com" className="rounded-2xl border-black/5 bg-secondary/30 h-14 px-6 focus:bg-white transition-all" />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-[10px] uppercase tracking-widest font-bold ml-1">Ritual of Interest</Label>
                      <Select required>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold ml-1">Preferred Date</Label>
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
                            <SelectValue placeholder="Select window" />
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
                      <Textarea id="message" placeholder="Tell us about your beauty goals..." className="rounded-3xl border-black/5 bg-secondary/30 min-h-[150px] px-6 py-6 focus:bg-white transition-all resize-none" />
                    </div>

                    <div className="pt-10 space-y-8">
                      <Button disabled={loading} className="w-full bg-foreground text-white hover:bg-black rounded-full h-20 uppercase tracking-[0.4em] text-[11px] font-bold shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                        {loading ? <Loader2 className="animate-spin" /> : "Secure Your Experience"}
                      </Button>
                      <div className="flex items-center justify-center gap-8">
                        <div className="flex items-center gap-2">
                           <ShieldCheck className="w-3 h-3 text-accent" />
                           <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">Secure Protocol</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Clock className="w-3 h-3 text-accent" />
                           <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60">Response: 4 Hrs</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Destination Focus */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">The Destination</span>
            <h2 className="font-headline text-6xl md:text-8xl">Capitol <br /><span className="italic font-light">Commons</span></h2>
            <div className="aspect-video bg-white rounded-[5rem] luxury-shadow overflow-hidden relative border border-black/5 group mt-16">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/50 transition-all duration-1000 group-hover:bg-white/10">
                <MapPin className="w-16 h-16 text-accent mb-6 opacity-40 animate-pulse" />
                <p className="text-[11px] uppercase tracking-[0.6em] font-bold text-muted-foreground">Estancia Mall • 3F East Wing</p>
                <p className="text-xl font-headline italic mt-4">"A discrete sanctuary in the heart of Pasig."</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 pt-12">
              <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
                <Clock className="w-5 h-5 text-accent" />
                <span>Daily: 10 AM - 9 PM</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium tracking-wide">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Complimentary Valet Assistance Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
