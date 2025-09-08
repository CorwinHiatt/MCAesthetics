import { NextResponse } from 'next/server';

export async function GET() {
  // Your domain
  const baseUrl = 'https://www.mcaestheticsclinic.com/';
  
  // Static routes from app directory, including privacy-policy and accessibility
  // Added /coolpeel here as it's now a standalone static page
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'monthly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/accessibility', priority: '0.5', changefreq: 'yearly' },
    { path: '/book', priority: '0.9', changefreq: 'monthly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/financing', priority: '0.7', changefreq: 'monthly' },
    { path: '/gift-cards', priority: '0.7', changefreq: 'monthly' },
    { path: '/laser-hair', priority: '0.7', changefreq: 'monthly' },
    { path: '/membership', priority: '0.7', changefreq: 'monthly' }, // Added membership page
    { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { path: '/zo-skin-health', priority: '0.7', changefreq: 'monthly' },
    { path: '/coolpeel', priority: '0.8', changefreq: 'monthly' }, // New standalone CoolPeel page
  ];
  
  // Dynamic service routes (top-level services from aestheticServicesData)
  // Removed /aesthetic-services/coolpeel-co2-laser since it's now static and redirected
  const serviceRoutes = [
    { path: '/aesthetic-services/wrinkle-reducers', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/kybella', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/sclerotherapy', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/chemical-peels-perfect-derma', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/scarlet-rf-microneedling', priority: '0.8', changefreq: 'monthly' },
    { path: '/aesthetic-services/all-aesthetic-services', priority: '0.8', changefreq: 'monthly' },
  ];
  
  // Dynamic nested sub-service/product routes
  const nestedRoutes = [
    // Wrinkle Reducers nested items
    { path: '/aesthetic-services/wrinkle-reducers/xeomin', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/wrinkle-reducers/dysport', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/wrinkle-reducers/daxxify', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/wrinkle-reducers/jeuveau', priority: '0.7', changefreq: 'monthly' },
    // Dermal Fillers nested items
    { path: '/aesthetic-services/dermal-fillers/sculptra', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers/restylane', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers/rha', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers/revanesse', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers/belotero', priority: '0.7', changefreq: 'monthly' },
    { path: '/aesthetic-services/dermal-fillers/radiesse', priority: '0.7', changefreq: 'monthly' },
    { path: '/laser-hair/membership', priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Combine all routes
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...nestedRoutes];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`).join('')}
</urlset>`;

  // Serve as XML
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}