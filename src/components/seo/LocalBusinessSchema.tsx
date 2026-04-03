'use client';

import { BRAND, CONTACT } from '@/content/data';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": BRAND.fullName,
    "alternateName": "Luxe Glow Beauty Lounge",
    "image": "https://picsum.photos/seed/lux1/1200/800",
    "@id": "https://luxeglowpremier.com",
    "url": "https://luxeglowpremier.com",
    "telephone": CONTACT.phone.replace(/\s/g, ''),
    "priceRange": "₱₱₱",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3F East Wing, Estancia Mall, Capitol Commons",
      "addressLocality": "Pasig",
      "addressRegion": "Metro Manila",
      "postalCode": "1605",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 14.5786,
      "longitude": 121.0631
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    },
    "sameAs": [
      CONTACT.socials.facebook,
      CONTACT.socials.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
