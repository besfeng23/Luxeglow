
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { aiTreatmentRecommender, AITreatmentRecommenderOutput } from '@/ai/flows/ai-treatment-recommender';
import { Loader2, Sparkles, Star, ArrowLeft, RefreshCw, Gem } from 'lucide-react';
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
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {step === 1 && (
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center luxury-shadow border border-primary/20">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl mb-6">AI Beauty Concierge</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience personalized luxury skin intelligence. Our AI concierge will analyze your unique needs to curate a bespoke treatment ritual just for you.
            </p>
            <Button 
              onClick={() => setStep(2)} 
              className="rounded-full bg-primary text-white h-16 px-12 uppercase tracking-widest text-sm font-bold shadow-xl shadow-primary/20"
            >
              Start Your Consultation
            </Button>
          </div>
        )}

        {step === 2 && (
          <Card className="border-none luxury-shadow animate-fade-in-up">
            <CardHeader className="bg-white rounded-t-lg border-b p-8">
              <CardTitle className="font-headline text-3xl">Consultation Form</CardTitle>
              <CardDescription className="text-muted-foreground">Please share your details to receive your bespoke recommendations.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-12">
              
              {/* Skin Concerns */}
              <div className="space-y-4">
                <Label className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">What are your primary skin concerns?</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skinConcernsOptions.map(option => (
                    <div 
                      key={option} 
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${form.skinConcerns.includes(option) ? 'border-primary bg-primary/5' : 'border-secondary hover:border-accent'}`}
                      onClick={() => handleToggle('skinConcerns', option)}
                    >
                      <Checkbox id={option} checked={form.skinConcerns.includes(option)} />
                      <Label htmlFor={option} className="cursor-pointer font-medium">{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beauty Goals */}
              <div className="space-y-4">
                <Label className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">What are your beauty goals?</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {beautyGoalsOptions.map(option => (
                    <div 
                      key={option} 
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all cursor-pointer ${form.beautyGoals.includes(option) ? 'border-primary bg-primary/5' : 'border-secondary hover:border-accent'}`}
                      onClick={() => handleToggle('beautyGoals', option)}
                    >
                      <Checkbox id={option} checked={form.beautyGoals.includes(option)} />
                      <Label htmlFor={option} className="cursor-pointer font-medium">{option}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age and Skin Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <Label className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">Age Group</Label>
                  <RadioGroup value={form.ageGroup} onValueChange={(val) => setForm(f => ({...f, ageGroup: val}))} className="flex flex-wrap gap-4">
                    {ageGroups.map(group => (
                      <div key={group} className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-transparent hover:border-primary/30">
                        <RadioGroupItem value={group} id={`age-${group}`} />
                        <Label htmlFor={`age-${group}`} className="cursor-pointer">{group}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <Label className="text-sm uppercase tracking-[0.2em] font-bold text-foreground">Skin Type</Label>
                  <RadioGroup value={form.skinType} onValueChange={(val) => setForm(f => ({...f, skinType: val}))} className="flex flex-wrap gap-4">
                    {skinTypes.map(type => (
                      <div key={type} className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-transparent hover:border-primary/30">
                        <RadioGroupItem value={type} id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-8 flex flex-col items-center">
                <Button 
                  onClick={handleSubmit} 
                  disabled={loading}
                  className="rounded-full bg-primary text-white h-14 px-16 uppercase tracking-widest text-sm font-bold shadow-lg shadow-primary/20 w-full md:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Your Profile...
                    </>
                  ) : (
                    'Reveal My Bespoke Ritual'
                  )}
                </Button>
                <p className="mt-4 text-xs text-muted-foreground">This analysis is powered by Luxe Glow Premier intelligence.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && recommendations && (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Your Bespoke Selection</span>
              </div>
              <h2 className="font-headline text-5xl md:text-6xl text-foreground">Recommended Rituals</h2>
              <p className="text-muted-foreground mt-4 italic font-headline text-xl">"Specifically curated for your unique beauty canvas."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recommendations.recommendations.map((rec, i) => (
                <Card key={i} className="border-none luxury-shadow overflow-hidden bg-white">
                  <div className="h-2 gold-gradient" />
                  <CardHeader className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <Gem className="w-8 h-8 text-primary/30" />
                      <span className="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">Selection 0{i+1}</span>
                    </div>
                    <CardTitle className="font-headline text-3xl mb-4">{rec.name}</CardTitle>
                    <CardDescription className="text-base italic leading-relaxed text-foreground/80">{rec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-0">
                    <div className="bg-ivory/50 p-6 rounded-2xl border border-primary/5">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3">Why we chose this:</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{rec.reason}</p>
                    </div>
                    <Button asChild className="w-full mt-8 rounded-full border-primary text-primary hover:bg-primary hover:text-white" variant="outline">
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {recommendations.generalAdvice && (
              <Card className="border-none luxury-shadow bg-foreground text-white p-12 text-center rounded-[30px]">
                <h3 className="font-headline text-3xl mb-6">Concierge Advice</h3>
                <p className="text-lg text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
                  "{recommendations.generalAdvice}"
                </p>
              </Card>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-12">
              <Button 
                onClick={() => setStep(2)} 
                variant="ghost" 
                className="rounded-full text-muted-foreground hover:text-primary group"
              >
                <RefreshCw className="mr-2 w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                New Consultation
              </Button>
              <Button asChild className="rounded-full bg-primary text-white px-12 h-12">
                <Link href="/contact">Book Your Journey</Link>
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
