import React from 'react';
import Link from 'next/link';
import meta from '../images/meta.png';
import styles from './HomeLuxury.module.css';

// Metadata for SEO and Social Previews (App Router style)
export const metadata = {
  title: "MC Aesthetics McMinnville - Luxury Skin Care & Anti-Aging Expertise",
  description: "Experience unparalleled skin care at MC Aesthetics in McMinnville, Oregon. Specializing in wrinkle reducers, dermal fillers, CoolPeel CO2 Laser, and bespoke aesthetic treatments.",
  keywords: "MC Aesthetics McMinnville, luxury skin care Oregon, anti-aging expertise, dermal fillers, wrinkle reducers, CoolPeel laser, facial rejuvenation, premium aesthetics McMinnville",
  metadataBase: new URL("https://mc-aesthetics.vercel.app/"),
  openGraph: {
    title: "MC Aesthetics McMinnville - Elevate Your Beauty",
    description: "Indulge in premium aesthetic treatments at MC Aesthetics in McMinnville, OR. From fillers to CoolPeel laser, unveil your radiant skin with us!",
    images: [
      {
        url: meta.src, // Primary image (ideally 1200x630 for 1.91:1 ratio)
        width: 1200,
        height: 630,
        alt: "MC Aesthetics McMinnville - Luxury Skin Care and Anti-Aging Treatments",
      },
      {
        url: meta.src, // Fallback square image for Instagram (1080x1080)
        width: 1080,
        height: 1080,
        alt: "MC Aesthetics McMinnville - Luxury Skin Care and Anti-Aging Treatments",
      },
    ],
    url: "/",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Aesthetics McMinnville - Elevate Your Beauty",
    description: "Indulge in premium aesthetic treatments at MC Aesthetics in McMinnville, OR. Unveil radiant skin with us!",
    images: [meta.src],
  },
  icons: {
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    icon: "/favicon.ico",
  },
};

// Separate viewport export for Next.js compliance
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// Services data with categories, descriptions, and routes
const services = [
  {
    category: "Wrinkle Reducers",
    description: "Smooth fine lines and reclaim youthful vitality with our expert treatments.",
    items: [
      { name: "Xeomin", href: "/aesthetic-services/wrinkle-reducers/xeomin" },
      { name: "Dysport", href: "/aesthetic-services/wrinkle-reducers/dysport" },
      { name: "DAXXIFY", href: "/aesthetic-services/wrinkle-reducers/daxxify" },
      { name: "Jeuveau", href: "/aesthetic-services/wrinkle-reducers/jeuveau" }
    ]
  },
  {
    category: "Dermal Fillers",
    description: "Enhance facial volume and sculpt natural beauty with precision fillers.",
    items: [
      { name: "Sculptra", href: "/aesthetic-services/dermal-fillers/sculptra" },
      { name: "Restylane", href: "/aesthetic-services/dermal-fillers/restylane" },
      { name: "RHA", href: "/aesthetic-services/dermal-fillers/rha" },
      { name: "Revanesse", href: "/aesthetic-services/dermal-fillers/revanesse" },
      { name: "Belotero", href: "/aesthetic-services/dermal-fillers/belotero" },
      { name: "Radiesse", href: "/aesthetic-services/dermal-fillers/radiesse" }
    ]
  },
  {
    category: "Specialty Treatments",
    description: "Tailored solutions for unique skin concerns with cutting-edge technology.",
    items: [
      { name: "Kybella", href: "/aesthetic-services/kybella" },
      { name: "Sclerotherapy", href: "/aesthetic-services/sclerotherapy" },
      { name: "Chemical Peels - Perfect Derma™", href: "/aesthetic-services/chemical-peels" },
      { name: "Scarlet RF Microneedling", href: "/aesthetic-services/scarlet-rf-microneedling" },
      { name: "CoolPeel CO2 Laser", href: "/aesthetic-services/coolpeel%20co2%20laser" }
    ]
  }
];

// Gallery items for featured services with enhanced alt text
const galleryItems = [
  {
    title: 'Wrinkle Reducers - Xeomin',
    description: 'Smooth fine lines with Xeomin, a trusted anti-aging solution.',
    imageUrl: 'https://picsum.photos/seed/1/400/300',
    href: '/aesthetic-services/wrinkle-reducers/xeomin',
    altText: 'Xeomin wrinkle reduction results at MC Aesthetics McMinnville'
  },
  {
    title: 'Dermal Fillers - Restylane',
    description: 'Enhance facial volume with Restylane fillers.',
    imageUrl: 'https://picsum.photos/seed/2/400/300',
    href: '/aesthetic-services/dermal-fillers/restylane',
    altText: 'Restylane dermal filler application at MC Aesthetics McMinnville'
  },
  {
    title: 'CoolPeel CO2 Laser',
    description: 'Rejuvenate skin with advanced CoolPeel laser technology.',
    imageUrl: 'https://picsum.photos/seed/3/400/300',
    href: '/aesthetic-services/coolpeel%20co2%20laser',
    altText: 'CoolPeel CO2 Laser skin rejuvenation at MC Aesthetics McMinnville'
  },
  {
    title: 'Wrinkle Reducers - Dysport',
    description: 'Achieve a refreshed look with Dysport wrinkle reduction.',
    imageUrl: 'https://picsum.photos/seed/4/400/300',
    href: '/aesthetic-services/wrinkle-reducers/dysport',
    altText: 'Dysport wrinkle treatment results at MC Aesthetics McMinnville'
  },
  {
    title: 'Dermal Fillers - Sculptra',
    description: 'Stimulate collagen with Sculptra for lasting results.',
    imageUrl: 'https://picsum.photos/seed/5/400/300',
    href: '/aesthetic-services/dermal-fillers/sculptra',
    altText: 'Sculptra filler for collagen boost at MC Aesthetics McMinnville'
  },
  {
    title: 'Scarlet RF Microneedling',
    description: 'Tighten skin with cutting-edge RF microneedling.',
    imageUrl: 'https://picsum.photos/seed/6/400/300',
    href: '/aesthetic-services/scarlet-rf-microneedling',
    altText: 'Scarlet RF Microneedling skin tightening at MC Aesthetics McMinnville'
  },
];

export default function HomePage() {
  return (
    <div className={styles.mcaLuxHomeWrapper}>
      {/* Hero Section - Dynamic & Luxurious */}
      <section className={styles.mcaLuxHomeHeroBanner} role="banner">
        <div className={styles.mcaLuxHomeHeroShade}></div>
        <div className={styles.mcaLuxHomeHeroContentBox}>
          <h1 className={styles.mcaLuxHomeHeroMainText}>Elevate Your Beauty at MC Aesthetics</h1>
          <p className={styles.mcaLuxHomeHeroSubText}>
            McMinnville’s premier destination for bespoke skin care and anti-aging treatments. Discover radiance in every detail.
          </p>
          <Link href="/contact" className={styles.mcaLuxHomeHeroActionBtn}>
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* About Section - Personal & Inviting */}
      <section className={styles.mcaLuxHomeAboutArea}>
        <div className={styles.mcaLuxHomeAboutContainer}>
          <div className={styles.mcaLuxHomeAboutTextBlock}>
            <h2 className={styles.mcaLuxHomeAboutHeadline}>Meet Melissa & MC Aesthetics</h2>
            <p className={styles.mcaLuxHomeAboutParagraph}>
              Melissa, our visionary founder, infuses every treatment with passion and precision. Her dedication to personalized care transforms each visit into a rejuvenating experience.
            </p>
            <p className={styles.mcaLuxHomeAboutParagraph}>
              Nestled in the heart of McMinnville, OR, MC Aesthetics offers an oasis of luxury with services ranging from wrinkle reducers to CoolPeel CO2 Laser. Our mission? To unveil your timeless beauty.
            </p>
            <Link href="/about" className={styles.mcaLuxHomeAboutNavLink}>
              Discover Our Story
            </Link>
          </div>
          <div className={styles.mcaLuxHomeAboutVisual}>
            <img 
              src="https://picsum.photos/seed/7/400/500" 
              alt="Melissa, Founder of MC Aesthetics McMinnville" 
              className={styles.mcaLuxHomeAboutPortrait} 
              loading="lazy" 
            />
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Cards */}
      <section className={styles.mcaLuxHomeServicesZone}>
        <h2 className={styles.mcaLuxHomeServicesHeader}>Our Signature Aesthetic Services</h2>
        <p className={styles.mcaLuxHomeServicesIntroText}>
          Indulge in tailored treatments designed to enhance your natural beauty. Explore our curated offerings below.
        </p>
        <div className={styles.mcaLuxHomeServicesLayout}>
          {services.map((serviceGroup, groupIndex) => (
            <div key={groupIndex} className={styles.mcaLuxHomeServiceTile}>
              <h3 className={styles.mcaLuxHomeServiceTileTitle}>{serviceGroup.category}</h3>
              <p className={styles.mcaLuxHomeServiceTileDesc}>{serviceGroup.description}</p>
              <ul className={styles.mcaLuxHomeServiceTileItems}>
                {serviceGroup.items.slice(0, 3).map((item, itemIndex) => (
                  <li key={item.name} className={styles.mcaLuxHomeServiceTileEntry}>
                    <Link href={item.href} className={styles.mcaLuxHomeServiceTileLink}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                {serviceGroup.items.length > 3 && (
                  <li className={styles.mcaLuxHomeServiceTileEntry}>
                    <Link href={`/aesthetic-services/${serviceGroup.category.toLowerCase().replace(/\s/g, '-')}`} className={styles.mcaLuxHomeServiceTileMore}>
                      View All...
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Gallery - Visual Focus */}
      <section className={styles.mcaLuxHomeGallerySpace}>
        <h2 className={styles.mcaLuxHomeGalleryCaption}>Featured Transformations</h2>
        <div className={styles.mcaLuxHomeGalleryDisplay}>
          {galleryItems.map((item) => (
            <div key={item.title} className={styles.mcaLuxHomeGalleryPiece}>
              <Link href={item.href} className={styles.mcaLuxHomeGalleryNav}>
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className={styles.mcaLuxHomeGalleryPhoto}
                  loading="lazy"
                />
                <div className={styles.mcaLuxHomeGalleryHoverLayer}>
                  <h3 className={styles.mcaLuxHomeGalleryPieceTitle}>{item.title}</h3>
                  <p className={styles.mcaLuxHomeGalleryPieceInfo}>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}