import React from 'react';
import Link from 'next/link';
import Image from "next/image";
// import meta from '../../public/images/meta.png';
import melissaImg from '../../public/images/melissa.png';
import maleahImg from '../../public/images/maleah.png';
import shadowMain from '../../public/images/shadowMain.png';
// import laserLegs from '../../public/images/laserLegs.jpg'; // New import for laser legs image
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
        url: shadowMain.src,
        width: 1200,
        height: 630,
        alt: "MC Aesthetics McMinnville - Luxury Skin Care and Anti-Aging Treatments",
      },
      {
        url: shadowMain.src,
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
    images: [shadowMain.src],
  },
  icons: {
    apple: [
      { url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/favicon_io/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    icon: "/images/favicon_io/favicon.ico",
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
  },
  {
    category: "Membership",
    description: "Unlock exclusive benefits, discounts, and priority access to our premium treatments with our VIP membership program.",
    items: [
      { name: "VIP Membership", href: "/aesthetic-services/membership" }
    ]
  }
];

// Gallery items for featured services - Reorganized in priority order with assigned local images
const galleryItems = [
  // 1. Micro-Needling (Scarlet RF Microneedling)
  {
    title: 'Scarlet RF Microneedling',
    description: 'Tighten skin with cutting-edge RF microneedling.',
    imageUrl: '/images/ScarletRFMicroNeedling.jpg',
    href: '/aesthetic-services/scarlet-rf-microneedling',
    altText: 'Scarlet RF Microneedling skin tightening at MC Aesthetics McMinnville'
  },
  // 2. Wrinkle Reducers - Primary image for Xeomin
  {
    title: 'Wrinkle Reducers - Xeomin',
    description: 'Smooth fine lines with Xeomin, a trusted anti-aging solution.',
    imageUrl: '/images/womanWrinkleReducers.jpg',
    href: '/aesthetic-services/wrinkle-reducers/xeomin',
    altText: 'Xeomin wrinkle reduction results at MC Aesthetics McMinnville'
  },
  // 2. Wrinkle Reducers - Alternative image for Dysport (handling duplicate category)
  {
    title: 'Wrinkle Reducers - Dysport',
    description: 'Achieve a refreshed look with Dysport wrinkle reduction.',
    imageUrl: '/images/wrinkelReducer2Women.jpg',
    href: '/aesthetic-services/wrinkle-reducers/dysport',
    altText: 'Dysport wrinkle treatment results at MC Aesthetics McMinnville'
  },
  // 3. CO2 Cool Peel (CoolPeel CO2 Laser)
  {
    title: 'CoolPeel CO2 Laser',
    description: 'Rejuvenate skin with advanced CoolPeel laser technology.',
    imageUrl: '/images/CO2Coolpeel.jpg',
    href: '/aesthetic-services/coolpeel%20co2%20laser',
    altText: 'CoolPeel CO2 Laser skin rejuvenation at MC Aesthetics McMinnville'
  },
  // 4. Dermal Fillers - Primary image for Restylane
  {
    title: 'Dermal Fillers - Restylane',
    description: 'Enhance facial volume with Restylane fillers.',
    imageUrl: '/images/dermalFIllers.jpg',
    href: '/aesthetic-services/dermal-fillers/restylane',
    altText: 'Restylane dermal filler application at MC Aesthetics McMinnville'
  },
  // 4. Dermal Fillers - Alternative image for Sculptra (handling duplicate category)
  {
    title: 'Dermal Fillers - Sculptra',
    description: 'Stimulate collagen with Sculptra for lasting results.',
    imageUrl: '/images/manWomanDermalFillers.jpg',
    href: '/aesthetic-services/dermal-fillers/sculptra',
    altText: 'Sculptra filler for collagen boost at MC Aesthetics McMinnville'
  },
  // Existing Laser Hair card (simplified and fixed)
  {
    title: 'Laser Hair',
    description: 'Embrace smooth, hair-free skin with our advanced Elysion laser technology for effortless elegance.',
    imageUrl: '/images/laserLegs.jpg',
    href: '/aesthetic-services/laser-hair',
    altText: 'Laser Hair on Legs for Silky, Radiant Results at MC Aesthetics McMinnville'
  },
  // New Membership card
  {
    title: 'VIP Membership',
    description: 'Join our exclusive membership for priority access, discounts, and personalized beauty perks.',
    imageUrl: '/images/membership.jpg',
    href: '/aesthetic-services/membership',
    altText: 'VIP Membership Benefits at MC Aesthetics McMinnville'
  },
];

export default function HomePage() {
  return (
    <div className={styles.mcaLuxHomeWrapper}>
      {/* Curved Header to Hero Transition */}
      <div className={styles.mcaLuxHomeHeaderToHeroTransition} aria-hidden="true"></div>

      {/* Enhanced Hero Section with Shadow Image */}
      <section className={styles.mcaLuxHomeHeroBanner} role="banner">
        {/* Background Shadow Image */}
        <div className={styles.mcaLuxHomeHeroImageContainer}>
          <Image 
            src={shadowMain}
            alt="Elegant aesthetic treatment ambiance"
            className={styles.mcaLuxHomeHeroBackgroundImage}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.mcaLuxHomeHeroImageOverlay}></div>
        </div>
        
        {/* Floating Shadow Element */}
        <div className={styles.mcaLuxHomeHeroShadowAccent}>
          <Image 
            src={shadowMain}
            alt=""
            className={styles.mcaLuxHomeHeroFloatingShadow}
            width={300}
            height={200}
            priority
          />
        </div>
        
        <div className={styles.mcaLuxHomeHeroShade}></div>
        <div className={styles.mcaLuxHomeHeroContentBox}>
          <h1 className={styles.mcaLuxHomeHeroMainText}>Elevate Your Beauty at MC Aesthetics</h1>
          <p className={styles.mcaLuxHomeHeroSubText}>
            McMinnville&apos;s premier destination for bespoke skin care and anti-aging treatments. Discover radiance in every detail.
          </p>
          <Link href="/contact" className={styles.mcaLuxHomeHeroActionBtn}>
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Team Section - Meet Our Professionals */}
      <section className={styles.mcaLuxHomeTeamSection}>
        <div className={styles.mcaLuxHomeTeamContainer}>
          <h2 className={styles.mcaLuxHomeTeamHeader}>About MC Aesthetics</h2>
          <p className={styles.mcaLuxHomeTeamIntro}>
            At MC Aesthetics, we are dedicated to enhancing your natural beauty with personalized, safe, and precise treatments. Meet our passionate team of professionals who bring expertise, warmth, and a commitment to excellence to every client.
          </p>
          
          <div className={styles.mcaLuxHomeTeamCards}>
            {/* Melissa's Card */}
            <div className={styles.mcaLuxHomeTeamCard}>
              <div className={styles.mcaLuxHomeTeamPhotoWrapper}>
                <div className={styles.mcaLuxHomeTeamPhotoContainer}>
                  <Image 
                    src={melissaImg}
                    alt="Melissa Cook, Nurse Practitioner & Owner of MC Aesthetics"
                    className={styles.mcaLuxHomeTeamPhoto}
                    width={400}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>
              <div className={styles.mcaLuxHomeTeamDetails}>
                <h3 className={styles.mcaLuxHomeTeamName}>Melissa Cook</h3>
                <h4 className={styles.mcaLuxHomeTeamTitle}>Nurse Practitioner & Owner of MC Aesthetics</h4>
                <p className={styles.mcaLuxHomeTeamBio}>
                  Melissa is a board-certified nurse practitioner with over 21 years of clinical experience and 11 years of experience in aesthetic medicine. As the founder and owner of MC Aesthetics for the past six years, she has built a practice rooted in trust, results, and a deep understanding of women&apos;s health and aging. Her background spans primary care, reproductive and women&apos;s health, and aesthetics, giving her a well-rounded, thoughtful approach to patient care. Known for her skilled, gentle hands and honest communication, Melissa is passionate about helping women look refreshed—not overdone—enhancing their natural beauty while prioritizing safety, precision, and education. She continues to invest in advanced training and techniques, ensuring her clients receive the highest standard of care in a warm and welcoming environment.
                </p>
              </div>
            </div>
            
            {/* Maleah's Card */}
            <div className={styles.mcaLuxHomeTeamCard}>
              <div className={styles.mcaLuxHomeTeamPhotoWrapper}>
                <div className={styles.mcaLuxHomeTeamPhotoContainer}>
                  <Image 
                    src={maleahImg}
                    alt="Maleah Espinoza, Nurse Injector at MC Aesthetics"
                    className={styles.mcaLuxHomeTeamPhoto}
                    width={400}
                    height={400}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>
              <div className={styles.mcaLuxHomeTeamDetails}>
                <h3 className={styles.mcaLuxHomeTeamName}>Maleah Espinoza</h3>
                <h4 className={styles.mcaLuxHomeTeamTitle}>Nurse Injector</h4>
                <p className={styles.mcaLuxHomeTeamBio}>
                  Maleah is a licensed nurse with over five years of experience in the healthcare field. Her journey into aesthetics stems from a long-standing passion for beauty, wellness, and helping others feel confident in their own skin. Although she is new to injecting, she brings a strong clinical background, a gentle touch, and a commitment to safety and precision in every treatment. Maleah believes aesthetic treatments should enhance—not change—your natural features. She&apos;s dedicated to providing personalized care with a warm, welcoming approach while continuously learning and staying up to date on the latest techniques in aesthetic medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Personal & Inviting */}
      <section className={styles.mcaLuxHomeAboutArea}>
        <div className={styles.mcaLuxHomeAboutContainer}>
          <div className={styles.mcaLuxHomeAboutTextBlock}>
            <h2 className={styles.mcaLuxHomeAboutHeadline}>Our Approach to Beauty</h2>
            <p className={styles.mcaLuxHomeAboutParagraph}>
              At MC Aesthetics, we believe in enhancing your natural beauty, not changing it. Our personalized approach ensures that each treatment is tailored to your unique features and goals.
            </p>
            <p className={styles.mcaLuxHomeAboutParagraph}>
              Nestled in the heart of McMinnville, OR, MC Aesthetics offers an oasis of luxury with services ranging from wrinkle reducers to CoolPeel CO2 Laser. Our mission? To unveil your timeless beauty while prioritizing safety, education, and natural-looking results.
            </p>
            <Link href="/about" className={styles.mcaLuxHomeAboutNavLink}>
              Learn More About Our Philosophy
            </Link>
          </div>
          <div className={styles.mcaLuxHomeAboutVisual}>
            <Image 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=500&fit=crop&crop=center" 
              alt="MC Aesthetics McMinnville Clinic Interior" 
              className={styles.mcaLuxHomeAboutPortrait} 
              width={600}
              height={750}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
                {serviceGroup.items.slice(0, 3).map((item) => (
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
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  className={styles.mcaLuxHomeGalleryPhoto}
                  width={400}
                  height={300}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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