import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ZoSkinHealth.module.css';
import Carousel from '../components/features/Carousel';

// Product data
const zoProducts = [
  {
    id: 1,
    name: 'Complex Renewal Pads',
    description:
      'Advanced exfoliating pads that help improve skin texture, tone, and clarity while minimizing the appearance of fine lines and pores.',
    image: '/images/complexRenewalPads.png',
    alt: 'ZO Skin Health Complexion Renewal Pads - Exfoliating treatment pads for smoother, brighter skin',
    link: '/contact',
  },
  {
    id: 2,
    name: 'Exfoliating Polish',
    description:
      'Ultra-fine magnesium crystals gently exfoliate dead skin cells to reveal a smoother, more radiant complexion. Perfect for all skin types.',
    image: '/images/exfoliatingPolish.png',
    alt: 'ZO Skin Health Exfoliating Polish - Magnesium crystal exfoliator for smooth, glowing skin',
    link: '/contact',
  },
  {
    id: 3,
    name: 'Daily Power Defense',
    description:
      'Comprehensive anti-aging serum with retinol and antioxidants that strengthens skin and protects against environmental damage for daily use.',
    image: '/images/dailyPowerDefense.png',
    alt: 'ZO Skin Health Daily Power Defense - Anti-aging retinol serum with antioxidant protection',
    link: '/contact',
  },
  {
    id: 4,
    name: 'Retinol Skin Brightener',
    description:
      'AM or PM brightening treatment for all skin types. Diminishes the appearance of dark spots and uneven skin tone for a more luminous complexion.',
    image: '/images/retinolSkinBrightner.png',
    alt: 'ZO Skin Health Retinol Skin Brightener - Brightening treatment for even skin tone and reduced dark spots',
    link: '/contact',
  },
  {
    id: 5,
    name: 'ZO Skin Health Products',
    description:
      'Experience the full range of medical-grade skincare solutions formulated by Dr. Zein Obagi to restore and maintain optimal skin health.',
    image: '/images/Zoproduct111.webp',
    alt: 'ZO Skin Health Professional Skincare Products - Medical-grade formulations by Dr. Zein Obagi',
    link: '/contact',
  },
];

export default function ZoSkinHealthPage() {
  return (
    <div className={styles.zoSkinHealthPage}>
      {/* Hero Section */}
      <section className={styles.zoHeroSection}>
        <div className="container">
          <h1 className={styles.zoHeroTitle}>ZO Skin Health</h1>
          <p className={styles.zoHeroSubtitle}>
            Medical-Grade Skincare by Dr. Zein Obagi
          </p>
          <p className={styles.zoHeroDescription}>
            Experience transformative results with ZO Skin Health's
            science-backed formulations. Designed to restore and maintain
            healthy skin at every age.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.zoProductsSection}>
        <div className="container">
          <h2 className={styles.zoSectionTitle}>Featured Products</h2>

          <div className={styles.zoProductsGrid}>
            {zoProducts.map((product) => (
              <div key={product.id} className={styles.zoProductCard}>
                <div className={styles.zoProductImageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={400}
                    height={400}
                    className={styles.zoProductImage}
                    priority={product.id <= 3}
                  />
                </div>

                <div className={styles.zoProductContent}>
                  <h3 className={styles.zoProductTitle}>{product.name}</h3>
                  <p className={styles.zoProductDescription}>
                    {product.description}
                  </p>

                  <Link href="/contact" className={styles.zoLearnMoreBtn}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.zoCtaSection}>
        <div className="container">
          <h2 className={styles.zoCtaTitle}>Ready to Transform Your Skin?</h2>
          <p className={styles.zoCtaDescription}>
            Schedule a consultation to discover which ZO Skin Health products
            are right for you.
          </p>
          <Link href="/contact" className={styles.zoCtaButton}>
            Learn More
          </Link>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <Carousel />
    </div>
  );
}
