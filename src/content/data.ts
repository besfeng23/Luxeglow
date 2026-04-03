import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Star, Gem, Sparkles, ShieldCheck, MapPin, Clock, 
  CheckCircle2, Phone, MessageCircle, Mail, Facebook, 
  Instagram, Waves, Sun, Hand, Zap, Snowflake, Target, Smile, Info
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

export const ABOUT_CONTENT = {
  philosophy: {
    title: "Our",
    titleItalic: "Philosophy",
    text: [
      'At Luxe Glow Premier, we approach aesthetics as a fine clinical art. Our philosophy is rooted in the concept of "Quiet Wealth"—delivering transformative results without the noise of mass-market trends.',
      'Every ritual we perform is a dedicated sequence of refinement, designed to honor the natural architecture of your skin. We don\'t just treat; we curate an environment where your beauty can truly radiate.'
    ],
    image: getImg('model-glowing-skin')
  },
  experience: [
    { title: "Private Sanctuary", desc: "Located in the exclusive Estancia Mall at Capitol Commons, our clinic offers a discrete and peaceful haven away from the city's pace.", icon: MapPin },
    { title: "Clinical Artistry", desc: "Our therapists are trained in proprietary clinical protocols that merge medical science with the sensory experience of luxury care.", icon: Gem },
    { title: "Bespoke Care", desc: "No two skins are identical. We provide a tailored intelligence report for every client, ensuring your journey is uniquely yours.", icon: Sparkles }
  ]
};

export const SERVICES_MENU = [
  {
    category: "Signature Rituals",
    items: [
      {
        name: "Luxe Signature Facial",
        price: "₱3,500",
        duration: "90 min",
        desc: "Our most comprehensive clinical experience. A multi-step journey including Diamond Peel, Radiofrequency, and PDT Light Therapy.",
        features: ["Diamond Peel", "Radiofrequency", "PDT Light Therapy", "Cooling Hammer", "Meticulous Extraction"],
        link: "/signature/facial"
      },
      {
        name: "Carbon Laser Ritual",
        price: "₱4,500",
        duration: "75 min",
        desc: "Advanced laser rejuvenation for porcelain-smooth skin. Targets pore size, texture, and collagen induction.",
        features: ["Hollywood Peel", "Pore Minimization", "Deep Exfoliation", "Collagen Stimulation"],
        link: "/signature"
      }
    ]
  },
  {
    category: "Radiance & Glow",
    items: [
      {
        name: "BB Glow Ritual",
        price: "₱3,000",
        duration: "60 min",
        desc: "Semi-permanent foundation infusion for a flawlessly radiant and even-toned complexion.",
        features: ["Pigment infusion", "Hydration boost", "Color correction", "Long-lasting glow"],
        link: "/signature/bb-glow"
      },
      {
        name: "BB Blush Ritual",
        price: "₱2,500",
        duration: "45 min",
        desc: "A natural, semi-permanent rosy flush that enhances your cheekbone definition without makeup.",
        features: ["Natural tint", "Youthful glow", "No makeup finish", "Sweat-proof radiance"],
        link: "/signature/bb-glow"
      }
    ]
  },
  {
    category: "Advanced Aesthetics",
    items: [
      {
        name: "Mesolipo Sculpt",
        price: "₱5,000",
        duration: "45 min",
        desc: "Targeted fat reduction and contouring using clinical micro-injections for silhouette refinement.",
        features: ["Fat dissolving", "Body contouring", "Precision targeting", "Minimal downtime"],
        link: "/signature"
      },
      {
        name: "Botox-Related Treatments",
        price: "Inquire",
        duration: "30 min",
        desc: "Premium wrinkle-smoothing and face slimming procedures administered with aesthetic artistry.",
        features: ["Forehead lines", "Face slimming", "Crow's feet", "Natural rejuvenation"],
        link: "/contact"
      }
    ]
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
    question: "What should I bring to my first consultation?",
    answer: "Simply yourself. We provide a complete skin intelligence analysis. However, a list of your current skincare ritual products is often helpful for our specialists."
  },
  {
    question: "Can I book a ritual for a same-day experience?",
    answer: "While we recommend booking 48 hours in advance, we do occasionally have private cancellations. Please call our sanctuary directly for immediate availability."
  },
  {
    question: "Is there a cancellation protocol?",
    answer: "We honor your time and ask for the same in return. We kindly request 24 hours notice for any rescheduling or cancellations of your private appointments."
  }
];

export const GALLERY_ITEMS = [
  { id: 1, category: "Signature Facial", title: "The Signature Cleansing", image: "https://picsum.photos/seed/gal1/800/1000", hint: "facial treatment", span: "lg:col-span-1 lg:row-span-2" },
  { id: 2, category: "The Sanctuary", title: "Elite Reception Atelier", image: "https://picsum.photos/seed/gal2/1200/800", hint: "aesthetic clinic", span: "lg:col-span-2 lg:row-span-1" },
  { id: 3, category: "Advanced Aesthetics", title: "Carbon Laser Precision", image: "https://picsum.photos/seed/gal3/800/800", hint: "laser skin", span: "lg:col-span-1 lg:row-span-1" },
  { id: 4, category: "Skin Intelligence", title: "Radiant BB Glow", image: "https://picsum.photos/seed/gal4/800/1000", hint: "glowing skin", span: "lg:col-span-1 lg:row-span-2" },
  { id: 5, category: "The Sanctuary", title: "Private Treatment Suite", image: "https://picsum.photos/seed/gal5/1200/800", hint: "treatment room", span: "lg:col-span-1 lg:row-span-1" },
];
