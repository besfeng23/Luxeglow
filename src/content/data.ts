import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Star, Gem, Sparkles, ShieldCheck, MapPin, Clock, 
  Phone, MessageCircle, Mail, Award, Lock
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
    facebook: "https://facebook.com/luxeglowbeautylounge",
    instagram: "https://instagram.com/luxeglowbeautylounge",
    messenger: "https://m.me/luxeglowbeautylounge",
  }
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Signature Rituals', href: '/signature' },
  { name: 'The Menu', href: '/services' },
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
    desc: "Our private suites and discrete location ensure your journey remains your own narrative."
  },
  {
    icon: Award,
    title: "Master Artistry",
    desc: "Our therapists undergo rigorous proprietary training in advanced aesthetic intelligence."
  }
];

export const HOME_CONTENT = {
  hero: {
    badge: CONTACT.shortAddress,
    title: "The Art of",
    titleItalic: "Radiance.",
    description: '"Experience the private sanctuary of Luxe Glow Premier—where clinical precision meets the art of quiet luxury. We don\'t just treat skin; we curate perfection."',
    image: getImg('hero-main'),
  },
  positioning: {
    title: "A Sanctuary of",
    titleItalic: "Quiet Prestige",
    quote: '"We believe beauty is an intimate journey of self-honor. Our philosophy centers on delivering luminous results through clinical artistry and absolute discretion."',
  },
  sequence: [
    { step: "01", title: "Intelligence", desc: "Private skin analysis with our aesthetic experts to map your unique radiance journey." },
    { step: "02", title: "Preparation", desc: "Meticulous clinical cleansing and thermal steaming to prepare the skin architecture." },
    { step: "03", title: "Refinement", desc: "Precision execution of your bespoke ritual using advanced medical-grade technology." },
    { step: "04", title: "Restoration", desc: "PDT Light Therapy and final SPF shielding for a luminous, protected finish." }
  ]
};

export const SIGNATURE_TREATMENTS = [
  {
    id: "signature-facial",
    name: "Luxe Signature Facial",
    tagline: "The Definitive 10-Step Ritual",
    price: "₱3,500",
    package: "5 Sessions + 1 Complimentary",
    description: "Our flagship clinical experience. A multi-step sequence including Diamond Peel, Radiofrequency, and PDT Light Therapy tailored to your skin's intelligence.",
    benefits: ["Cellular Deep Cleansing", "Diamond Peel Exfoliation", "Radiofrequency Tightening", "PDT Light Restoration"],
    image: 'facial-process',
    link: "/signature/facial"
  },
  {
    id: "carbon-laser",
    name: "Carbon Laser Ritual",
    tagline: "The Hollywood Texture Peel",
    price: "₱4,500",
    package: "Buy 3 Get 1 Offer",
    description: "Immediate porcelain-smooth skin. Combines advanced laser technology with our basic facial for superior pore architecture refinement.",
    benefits: ["Instant Pore Refinement", "Texture Smoothing", "Deep Exfoliation", "Collagen Induction"],
    image: 'laser-tech',
    link: "/contact"
  },
  {
    id: "bb-glow",
    name: "BB Glow & Blush",
    tagline: "Semi-Permanent Radiance",
    price: "From ₱2,500",
    package: "Radiant Bundle: ₱5,000",
    description: "Wake up with a flawless, radiant complexion. Our pigment-infusion rituals provide a semi-permanent foundation and natural flush.",
    benefits: ["Even Skin Tone", "Hyper-pigmentation Cover", "Natural Rosy Glow", "Zero Makeup Maintenance"],
    image: 'model-radiant',
    link: "/signature/bb-glow"
  },
  {
    id: "ipl-hair-removal",
    name: "IPL Silk Protocol",
    tagline: "Permanent Hair Reduction",
    price: "From ₱1,500",
    package: "Unlimited Yearly Privileges",
    description: "Precision hair reduction meeting clinical artistry. Includes specialized underarm whitening for complete skin confidence.",
    benefits: ["Permanent Reduction", "Area Specific Precision", "Painless Technology", "Underarm Whitening"],
    image: 'treatment-suite',
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
    answer: "Following your ritual, our therapists provide a personalized aftercare protocol. We recommend specific maintenance steps to prolong the luminous effects."
  },
  {
    question: "Is there a private waiting area?",
    answer: "Yes, our Estancia Mall sanctuary is designed for absolute privacy with discrete treatment suites and a serene reception atelier."
  }
];
