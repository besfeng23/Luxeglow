
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luxeglowpremier.com';
  
  const routes = [
    '',
    '/about',
    '/signature',
    '/services',
    '/gallery',
    '/ai-recommendations',
    '/contact',
    '/signature/facial',
    '/signature/bb-glow',
    '/signature/ipl-hair-removal'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
