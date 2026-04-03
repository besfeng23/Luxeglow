'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { aiTreatmentRecommender, AITreatmentRecommenderOutput } from '@/ai/flows/ai-treatment-recommender';
import { Loader2, Sparkles, Star, ArrowLeft, RefreshCw, Gem, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const skinConcernsOptions = [
  'Acne & Blemishes', 'Fine Lines & Wrinkles', 'Dullness', 'Hyperpigmentation', 
  'Large Pores', 'Uneven Skin Texture', 'Dryness', 'Oily Skin', 'Sagging Skin'
];

const beautyGoalsOptions = [
  'Anti-aging', 'Brightening', 'Deep Hydration', 'Clearer Skin', 
  'Face Slimming', 'Glowing Complexion', 'Body Contouring', 'Hair Removal'
];

const ageGroups = ['Teen', '20s', '30s', '40s+'];
const skinTypes = ['Oily', 'Dry', 'Combination', 'Normal', 'Sensitive'];

export default function AIRecommendationsPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<AITreatmentRecommenderOutput | null>(null);

  const [form, setForm] = useState({
    skinConcerns: [] as string[],
    beautyGoals: [] as string[],
    ageGroup: '30s',
    skinType: 'Normal',
  });

  const handleToggle = (list: 'skinConcerns' | 'beautyGoals', item: string) => {
    setForm(prev => {
      const current = prev[list];
      if (current.includes(item)) {
        return { ...prev, [list]: current.filter(i => i !== item) };
      }
      return { ...prev, [list]: [...current, item] };
    });
  };

  const handleSubmit = async () => {
    if (form.skinConcerns.length === 0 || form.beautyGoals.length === 0) {
      alert("Please select at least one concern and one goal.");
      return;
    }
    
    setLoading(true);
    try {
      const result = await aiTreatmentRecommender(form);
      setRecommendations(result);
      setStep(3);
    } catch (error) {
      console.error(error);
      alert("There was an error generating your recommendation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {step === 1 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center luxury-shadow border border-black/5 p-6">
                <Sparkles className="w-10 h-10 text-accent" />
              </div>
            </div>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent mb-6 block">The Digital Concierge</span>
            <h1 className="font-headline text-6xl md:text-8xl mb-8 leading-tight">Intelligent <br /><span className="italic font-light">Curation</span></h1>
            <p className="text-xl text-muted-foreground/80 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the future of personalized aesthetics. Our AI concierge uses skin intelligence to curate a bespoke ritual sequence just for you.
            </p>
            <Button 
              onClick={() => setStep(2)} 
              className="rounded-full bg-foreground text-white hover:bg-black h-16 px-16 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-500"
            >
              Begin Consultation
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in-up">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-5xl mb-4">Consultation Form</h2>
              <p className="text-muted-foreground font-light text-lg italic">"Please share your aspirations to receive your bespoke recommendations."</p>
            </div>
            
            <Card className="border-none luxury-shadow bg-white rounded-[3rem] overflow-hidden">
              <CardContent className="p-12 md:p-20 space-y-20">
                
                {/* Skin Concerns */}
                <div className="space-y-8">
                  <Label className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground block mb-10 text-center">What are your primary skin concerns?</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skinConcernsOptions.map(option => (
                      <div 
                        key={option} 
                        className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${form.skinConcerns.includes(option) ? 'border-primary bg-secondary/50' : 'border-black/5 hover:border-accent'}`}
                        onClick={() => handleToggle('skinConcerns', option)}
                      >
                        <Label htmlFor={option} className="cursor-pointer font-medium text-sm tracking-wide">{option}</Label>
                        <Checkbox id={option} checked={form.skinConcerns.includes(option)} className="rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beauty Goals */}
                <div className="space-y-8">
                  <Label className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground block mb-10 text-center">What are your beauty goals?</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {beautyGoalsOptions.map(option => (
                      <div 
                        key={option} 
                        className={`group flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${form.beautyGoals.includes(option) ? 'border-primary bg-secondary/50' : 'border-black/5 hover:border-accent'}`}
                        onClick={() => handleToggle('beautyGoals', option)}
                      >
                        <Label htmlFor={option} className="cursor-pointer font-medium text-sm tracking-wide">{option}</Label>
                        <Checkbox id={option} checked={form.beautyGoals.includes(option)} className="rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Age and Skin Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-8">
                    <Label className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground block text-center">Age Group</Label>
                    <RadioGroup value={form.ageGroup} onValueChange={(val) => setForm(f => ({...f, ageGroup: val}))} className="flex flex-wrap justify-center gap-4">
                      {ageGroups.map(group => (
                        <div key={group} className="flex items-center space-x-2 bg-secondary/50 px-6 py-3 rounded-full border border-black/5 transition-all hover:border-accent cursor-pointer">
                          <RadioGroupItem value={group} id={`age-${group}`} />
                          <Label htmlFor={`age-${group}`} className="cursor-pointer text-xs uppercase tracking-widest font-bold">{group}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-8">
                    <Label className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground block text-center">Skin Type</Label>
                    <RadioGroup value={form.skinType} onValueChange={(val) => setForm(f => ({...f, skinType: val}))} className="flex flex-wrap justify-center gap-4">
                      {skinTypes.map(type => (
                        <div key={type} className="flex items-center space-x-2 bg-secondary/50 px-6 py-3 rounded-full border border-black/5 transition-all hover:border-accent cursor-pointer">
                          <RadioGroupItem value={type} id={`type-${type}`} />
                          <Label htmlFor={`type-${type}`} className="cursor-pointer text-xs uppercase tracking-widest font-bold">{type}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-16 flex flex-col items-center">
                  <Button 
                    onClick={handleSubmit} 
                    disabled={loading}
                    className="rounded-full bg-foreground text-white h-16 px-20 uppercase tracking-[0.3em] text-[10px] font-bold shadow-2xl transition-all duration-500 w-full md:w-auto hover:bg-black"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Analysing Your Profile...
                      </>
                    ) : (
                      'Reveal Your Bespoke Ritual'
                    )}
                  </Button>
                  <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60">Luxe Glow Premier • Private Skin Intelligence</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && recommendations && (
          <div className="space-y-24 animate-fade-in-up">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-8">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-primary">Your Bespoke Selection</span>
              </div>
              <h2 className="font-headline text-6xl md:text-8xl text-foreground mb-6 leading-none">Recommended <br /><span className="italic font-light">Rituals</span></h2>
              <p className="text-muted-foreground mt-8 italic font-headline text-2xl font-light">"Specifically curated for your unique beauty canvas."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {recommendations.recommendations.map((rec, i) => (
                <Card key={i} className="group border-none luxury-shadow overflow-hidden bg-white rounded-[3rem] transition-all duration-700 hover:-translate-y-2">
                  <CardHeader className="p-12 pb-6">
                    <div className="flex justify-between items-start mb-10">
                      <Gem className="w-10 h-10 text-accent/30" />
                      <span className="text-[10px] uppercase tracking-[0.4em] bg-secondary/50 text-foreground px-5 py-2 rounded-full font-bold border border-black/5">0{i+1}</span>
                    </div>
                    <CardTitle className="font-headline text-4xl mb-6 leading-tight group-hover:text-primary transition-colors">{rec.name}</CardTitle>
                    <CardDescription className="text-lg italic font-light leading-relaxed text-foreground/80">{rec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-12 pb-12 pt-0">
                    <div className="bg-secondary/30 p-10 rounded-[2rem] border border-black/5 mb-12">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">The Justification</h4>
                      <p className="text-base leading-relaxed text-muted-foreground font-light">{rec.reason}</p>
                    </div>
                    <Button asChild className="w-full h-14 rounded-full border-foreground text-foreground hover:bg-foreground hover:text-white uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500" variant="outline">
                      <Link href="/contact">Book This Journey</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {recommendations.generalAdvice && (
              <div className="relative group">
                <div className="bg-foreground text-white p-16 md:p-24 text-center rounded-[4rem] luxury-shadow overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent/20" />
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-10 block">Concierge Advice</span>
                  <h3 className="font-headline text-4xl mb-10 italic font-light">" {recommendations.generalAdvice} "</h3>
                  <div className="h-px w-24 bg-white/10 mx-auto" />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-12">
              <Button 
                onClick={() => setStep(2)} 
                variant="ghost" 
                className="rounded-full text-muted-foreground hover:text-primary group uppercase tracking-[0.3em] text-[10px] font-bold h-12"
              >
                <RefreshCw className="mr-3 w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
                New Consultation
              </Button>
              <Button asChild className="rounded-full bg-foreground text-white px-16 h-14 uppercase tracking-[0.3em] text-[10px] font-bold shadow-xl hover:bg-black transition-all">
                <Link href="/contact">Reserve Journey</Link>
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}