
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="font-headline text-5xl md:text-7xl mb-6 text-foreground">Connect with <span className="text-primary italic">Luxe Glow</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed italic font-headline text-xl">
            "Your journey to radiant perfection begins with a single conversation."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-up">
            <Card className="border-none luxury-shadow bg-white p-8 rounded-[30px]">
              <h3 className="font-headline text-2xl mb-8">Concierge Details</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1">Call Us</h4>
                    <p className="text-foreground font-semibold">+63 998 936 8395</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1">Email</h4>
                    <p className="text-foreground font-semibold">luxeglowbeautylounge@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1">Visit Us</h4>
                    <p className="text-foreground font-semibold leading-relaxed">
                      Estancia Mall, 3F East Wing,<br />Capitol Commons, Pasig City
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-1">Hours</h4>
                    <p className="text-foreground font-semibold">Daily: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-none luxury-shadow bg-foreground text-white p-8 rounded-[30px]">
              <h3 className="font-headline text-2xl mb-6">Social Presence</h3>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white rounded-full hover:bg-white hover:text-foreground">
                  <Facebook className="w-4 h-4 mr-2" /> Facebook
                </Button>
                <Button variant="outline" className="flex-1 bg-white/10 border-white/20 text-white rounded-full hover:bg-white hover:text-foreground">
                  <Instagram className="w-4 h-4 mr-2" /> Instagram
                </Button>
              </div>
              <Button className="w-full mt-4 bg-primary text-white rounded-full h-12">
                <MessageCircle className="w-4 h-4 mr-2" /> Chat with us on Messenger
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up delay-100">
            <Card className="border-none luxury-shadow bg-white rounded-[30px] overflow-hidden">
              <div className="h-2 gold-gradient" />
              <div className="p-8 md:p-12">
                <h2 className="font-headline text-3xl mb-8">Request Your <span className="text-primary italic">Private Appointment</span></h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold">Full Name</Label>
                      <Input id="name" placeholder="E.g., Isabella Rose" className="rounded-xl border-secondary bg-ivory/30 focus:bg-white h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold">Mobile Number</Label>
                      <Input id="phone" placeholder="+63 900 000 0000" className="rounded-xl border-secondary bg-ivory/30 focus:bg-white h-12" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-xs uppercase tracking-widest font-bold">Preferred Ritual</Label>
                    <Input id="service" placeholder="Which treatment are you interested in?" className="rounded-xl border-secondary bg-ivory/30 focus:bg-white h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-widest font-bold">Your Aspirations or Concerns</Label>
                    <Textarea id="message" placeholder="Tell us about your skin goals..." className="rounded-xl border-secondary bg-ivory/30 focus:bg-white min-h-[150px]" />
                  </div>

                  <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-14 uppercase tracking-[0.2em] text-sm font-bold shadow-xl shadow-primary/20">
                    Secure Your Experience
                  </Button>
                </form>
              </div>
            </Card>

            {/* Google Map Mockup */}
            <div className="mt-8 relative h-[300px] rounded-[30px] overflow-hidden luxury-shadow grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
              <div className="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-4 text-primary opacity-50" />
                  <p className="uppercase tracking-[0.3em] font-bold text-xs">Map Integration Placeholder</p>
                  <p className="text-sm mt-2">Estancia Mall, Pasig City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
