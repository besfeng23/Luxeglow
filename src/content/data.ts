import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Star, Gem, Sparkles, ShieldCheck, MapPin, Clock, 
  CheckCircle2, Phone, MessageCircle, Mail, Facebook, 
  Instagram, Waves, Sun, Hand, Zap, Snowflake, Target, Smile, Info,
  Lock, Award, Eye
} from 'lucide-react';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/800/600`;

export const BRAND = {
  name: "Luxe Glow",
  suffix: "Premier",
  fullName: "Luxe Glow Premier",
  type: "Private Aesthetic Clinic",
  location: "Estancia Mall • Capitol Commons",
  description: "Redefining luxury aesthetics through medical-grade precision and a refined, editorial approach to beauty.",
  tagline: "Art of Radiant Being.",
};

export const CONTACT = {
  phone: "+63 998 936 8395",
  email: "luxeglowbeautylounge@gmail.com",
  address: "Estancia Mall, 3F East Wing, Capitol Commons, Pasig City, Philippines",
  shortAddress: "Capitol Commons, Pasig",
  mallLocation: "3F East Wing, Estancia Mall",
  hours: "Daily: 10:00 AM - 9:00 PM",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    messenger: "https://facebook.com",
  }
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Signature', href: '/signature' },
  { name: 'Rituals', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Concierge', href: '/ai-recommendations' },
  { name: 'Contact', href: '/contact' },
];

export const TRUST_STATEMENTS = [
  {
    icon: ShieldCheck,
    title: "Clinical Integrity",
    desc: "Every ritual is performed using FDA-approved technology and medical-grade clinical protocols."
  },
  {
    icon: Lock,
    title: "Absolute Discretion",
    desc: "Our private suites and discrete location ensure your aesthetic journey remains your own narrative."
  },
  {
    icon: Award,
    title: "Master Artistry",
    desc: "Our therapists undergo rigorous proprietary training in advanced aesthetic intelligence and care."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The most discrete and professional clinical experience I've had in Manila. The Signature Facial is truly transformative.",
    author: "A. Rivera",
    title: "Private Clientele",
    rating: 5
  },
  {
    quote: "Luxe Glow isn't just a clinic; it's a sanctuary. Their attention to detail and the 'Quiet Wealth' ambiance is unmatched.",
    author: "C. Montilla",
    title: "Signature Member",
    rating: 5
  },
  {
    quote: "Finally, a place that understands subtle, natural refinement. The Carbon Laser ritual left my skin looking airbrushed.",
    author: "S. Tan",
    title: "Elite Client",
    rating: 5
  }
];

export const HOME_CONTENT = {
  hero: {
    badge: CONTACT.shortAddress,
    title: "Radiance",
    titleItalic: "Refined.",
    description: '"Experience the private sanctuary of Luxe Glow Premier, where clinical precision meets the art of quiet luxury and aesthetic intelligence."',
    image: getImg('hero-main'),
  },
  positioning: {
    title: "A Sanctuary of",
    titleItalic: "Elevated Rejuvenation",
    quote: '"We believe beauty is an intimate journey of self-honor. Our philosophy centers on quiet prestige—delivering luminous results through clinical artistry and absolute care."',
    features: [
      { icon: ShieldCheck, title: "Clinical Integrity", desc: "Medical-grade precision meets aesthetic intuition for safe, visible transformation." },
      { icon: Sparkles, title: "Bespoke Protocols", desc: "Every treatment is tailored to your unique skin DNA and personal beauty aspirations." },
      { icon: MapPin, title: "Elite Location", desc: "Located in the exclusive Estancia Mall, offering a discrete and peaceful haven." }
    ]
  },
  sequence: [
    { step: "01", title: "Consultation", desc: "Private skin intelligence analysis with our aesthetic experts at Capitol Commons." },
    { step: "02", title: "Purification", desc: "Deep double-cleansing and thermal steaming to prepare the clinical canvas." },
    { step: "03", title: "Refinement", desc: "Precision execution of your bespoke ritual using advanced medical-grade technology." },
    { step: "04", title: "Restoration", desc: "PDT Light Therapy and final SPF shielding for a luminous, protected finish." }
  ]
};

export const PACKAGES = [
  {
    title: "Holiday Radiance",
    price: "₱12,000",
    tag: "Limited Selection",
    desc: "A specialized festive sequence designed to restore glow during the social season. Includes Signature Facial and Carbon Laser.",
    variant: "secondary"
  },
  {
    title: "First Experience",
    price: "Gifted Offer",
    tag: "New Privilege",
    desc: "Your first journey with us begins with a complimentary Skin Intelligence report and a special rate on our Signature Facial ritual.",
    variant: "primary"
  }
];

export const SIGNATURE_TREATMENTS = [
  {
    id: "signature-facial",
    name: "Luxe Signature Facial",
    tagline: "The 10-Step Rejuvenation Ritual",
    price: "₱3,500",
    package: "5 Sessions + 1 Complimentary",
    description: "The definitive Luxe Glow experience. A meticulous multi-step clinical sequence including Diamond Peel, Radiofrequency, and PDT Light Therapy. Tailored precisely to your skin's intelligence.",
    benefits: ["Cellular Deep Cleansing", "Diamond Peel Exfoliation", "Radiofrequency Tightening", "PDT Light Restoration"],
    image: 'signature-facial',
    link: "/signature/facial"
  },
  {
    id: "carbon-laser",
    name: "Carbon Laser Ritual",
    tagline: "Advanced Texture Refinement",
    price: "₱4,500",
    package: "Buy 3 Get 1 Offer",
    description: "The 'Hollywood Peel' for immediate porcelain-smooth skin. Combines advanced laser technology with our foundational facial for superior pore minimization and texture correction.",
    benefits: ["Instant Pore Refinement", "Texture Smoothing", "Deep Exfoliation", "Collagen Induction"],
    image: 'carbon-laser',
    link: "/contact"
  },
  {
    id: "bb-glow",
    name: "BB Glow & Blush",
    tagline: "The Semi-Permanent Canvas",
    price: "From ₱2,500",
    package: "Radiant Bundle: ₱5,000",
    description: "Wake up with a flawless, radiant complexion every day. Our pigment-infusion rituals provide a semi-permanent foundation and a natural rosy flush for a perfectly finished look.",
    benefits: ["Even Skin Tone", "Hyper-pigmentation Cover", "Natural Rosy Glow", "Minimal Makeup Lifestyle"],
    image: 'facial-treatment',
    link: "/signature/bb-glow"
  },
  {
    id: "ipl-hair-removal",
    name: "IPL Silk Protocol",
    tagline: "Permanent Hair Reduction",
    price: "From ₱1,500",
    package: "Unlimited Yearly Privileges",
    description: "Precision permanent hair reduction using advanced light-based rituals. Includes specialized underarm whitening protocols for the ultimate in carefree, smooth skin.",
    benefits: ["Permanent Reduction", "Precision Area Targeting", "Painless Technology", "Underarm Whitening"],
    image: 'treatment-room',
    link: "/signature/ipl-hair-removal"
  }
];

export const FAQS = [
  {
    question: "What should I expect during my first visit?",
    answer: "Your journey begins with a private skin intelligence analysis. We discuss your concerns and goals to curate a bespoke ritual sequence tailored specifically to your skin's architecture."
  },
  {
    question: "How do I maintain my results at home?",
    answer: "Following your ritual, our therapists provide a personalized aftercare protocol. We recommend specific maintenance steps to prolong the luminous effects of your clinical treatment."
  },
  {
    question: "Is there a private waiting area?",
    answer: "Yes, our Estancia Mall sanctuary is designed for absolute privacy. We offer discrete treatment suites and a serene reception atelier to ensure a peaceful experience."
  },
  {
    question: "Do you offer seasonal privilege packages?",
    answer: "We periodically curate limited-edition treatment sequences and socialite maintenance protocols. Please enquire with our concierge for current curated offers."
  }
];
