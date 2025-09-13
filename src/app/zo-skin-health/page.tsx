import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ZoSkinHealth.module.css';

export const metadata: Metadata = {
  title: "ZO Skin Health | MC Aesthetics McMinnville, OR",
  description: "Discover ZO Skin Health products at MC Aesthetics in McMinnville, OR. Medical-grade skincare for radiant, timeless skin transformations across all skin types.",
  keywords: "ZO Skin Health McMinnville, MC Aesthetics skincare, Yamhill County medical-grade skincare, ZO products Oregon, anti-aging skin care",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "ZO Skin Health | MC Aesthetics McMinnville, OR",
    description: "Experience medical-grade ZO Skin Health products at MC Aesthetics in McMinnville for luminous, healthy skin that defies time.",
    images: [
      {
        url: "/images/zo-hero.webp", // Using the hero image as the meta preview per your request
        width: 1200,
        height: 600,
        alt: "Elegant ZO Skin Health Hero Image Showcasing Radiant Skin at MC Aesthetics in McMinnville",
      },
    ],
    url: "https://www.mcaestheticsclinic.com/zo-skin-health",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZO Skin Health | MC Aesthetics McMinnville, OR",
    description: "Transform your skin with ZO Skin Health at MC Aesthetics in McMinnville. Medical-grade skincare for lasting elegance!",
    images: ["/images/zo-hero.webp"], // Using the hero image as the meta preview
  },
};

export default function ZoSkinHealthPage() {
  return (
    <div className={styles.zoSkinPageWrapper}>
      {/* New Hero Section with Creative Hero Image */}
      <section className={styles.zoSkinHero}>
        <div className={styles.zoSkinHeroImageHolder}>
          <Image
            src="/images/zo-hero.webp"
            alt="Elegant ZO Skin Health Hero Image Showcasing Radiant, Timeless Skin Transformation at MC Aesthetics in McMinnville"
            className={styles.zoSkinHeroImage}
            width={1200}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager" // Prioritize for immediate load
            style={{ objectFit: 'cover' }}  // Fills container elegantly without distortion
          />
          <div className={styles.zoSkinImageBorderAccent}></div>
        </div>
        <div className={styles.zoSkinHeroOverlay}>
          <h1 className={styles.zoSkinHeroTitle}>Unveil Your Skin&apos;s True Potential with ZO® Skin Health</h1>
          <p className={styles.zoSkinHeroText}>
            Experience the art of medical-grade skincare, where science meets luxury for luminous, healthy skin that defies time.
          </p>
        </div>
      </section>

      {/* Main Title with Decorative Accent (Kept for consistency below hero) */}
      <div className={styles.zoSkinTitleContainer}>
        <h1 className={styles.zoSkinMainTitle}>ZO® Skin Health Products in McMinnville</h1>
        <div className={styles.zoSkinTitleDivider}></div>
      </div>

      {/* Introduction Section */}
      <div className={styles.zoSkinIntroSection}>
        <p className={styles.zoSkinIntroText}>
          Discover the pinnacle of skincare with ZO® Skin Health, a true medical-grade line exclusively curated for discerning clients through licensed practitioners. Crafted to nurture and sustain radiant, healthy skin across all ages, ethnicities, and skin types, ZO® offers bespoke solutions. From reversing sun damage and pigmentation to safeguarding against future concerns, ZO® ensures your skin&apos;s timeless vitality.
        </p>
        <p className={styles.zoSkinIntroText}>
          For over three decades, Dr. Zein Obagi, a Board-Certified Dermatologist, has redefined skincare with pioneering solutions grounded in his philosophy of cultivating enduring skin health over mere symptom treatment. His visionary expertise positions him as a global luminary in skin rejuvenation.
        </p>
        <p className={styles.zoSkinIntroText}>
          If you seek unparalleled skincare in McMinnville, ZO® delivers meticulously formulated products that target the deepest causes of premature aging, inflammation, acne, and pigmentation for transformative, lasting elegance.
        </p>
      </div>

      {/* Call to Action with Contact Button */}
      <div className={styles.zoSkinCallToAction}>
        <p className={styles.zoSkinCtaText}>Embark on Your Journey to Flawless Skin with ZO® Skin Health</p>
        <Link href="/contact" className={styles.zoSkinCtaButton}>
          Contact Us Now
        </Link>
      </div>

      {/* Why We Trust ZO Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>Why We Trust ZO® Skin Care Products in McMinnville</h2>
        <p className={styles.zoSkinContentText}>
          At MC Aesthetics, our premier med spa in McMinnville, we exclusively offer ZO® Skin Health for its ability to transcend superficial beauty, fostering profound skin wellness from within. Supported by uncompromising clinical research, ZO® products unveil extraordinary results through potent, medical-grade formulations.
        </p>
      </div>

      {/* Product Showcase Section with Images */}
      <div className={styles.zoSkinProductShowcase}>
        <h2 className={styles.zoSkinSectionHeading}>Curated ZO® Skin Health Collection</h2>
        <div className={styles.zoSkinProductGrid}>
          <div className={styles.zoSkinProductCard}>
            <div className={styles.zoSkinImageWrapper}>
              <Image 
                src="/images/ZOproduct1.webp" 
                alt="ZO Skin Health Radiance Product" 
                width={300} 
                height={400} 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.zoSkinProductImage} 
                style={{ objectFit: 'contain' }}  // Ensures full visibility
              />
            </div>
            <p className={styles.zoSkinProductCaption}>Exquisite Formulas for Unmatched Radiance</p>
          </div>
          <div className={styles.zoSkinProductCard}>
            <div className={styles.zoSkinImageWrapper}>
              <Image 
                src="/images/ZOproduct2.webp" 
                alt="ZO Skin Health Targeted Solution" 
                width={300} 
                height={400} 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.zoSkinProductImage} 
                style={{ objectFit: 'contain' }}  // Ensures full visibility
              />
            </div>
            <p className={styles.zoSkinProductCaption}>Precision Solutions for Complex Skin Needs</p>
          </div>
          <div className={styles.zoSkinProductCard}>
            <div className={styles.zoSkinImageWrapper}>
              <Image 
                src="/images/ZOproduct3.webp" 
                alt="ZO Skin Health Universal Care" 
                width={300} 
                height={400} 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.zoSkinProductImage} 
                style={{ objectFit: 'contain' }}  // Ensures full visibility
              />
            </div>
            <p className={styles.zoSkinProductCaption}>Sophisticated Care for Every Skin Type</p>
          </div>
        </div>
      </div>

      {/* ZO Line Includes Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>The ZO® Collection Encompasses:</h2>
        <ul className={styles.zoSkinListContainer}>
          <li className={styles.zoSkinListItem}>Luxurious Cleansers and Exfoliants for Profound Renewal</li>
          <li className={styles.zoSkinListItem}>Opulent Serums for Luminosity and Deep Hydration</li>
          <li className={styles.zoSkinListItem}>Precision Treatments for Acne, Melasma, and Hyperpigmentation</li>
          <li className={styles.zoSkinListItem}>Refined Retinol Products for Skin Metamorphosis</li>
          <li className={styles.zoSkinListItem}>Elite Broad-Spectrum Sun Protection for Unyielding Defense</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>The Art of ZO® Skin Health Benefits</h2>
        <p className={styles.zoSkinContentText}>
          ZO® formulations cultivate enduring skin resilience, diminish inflammation, and unveil a visibly luminous complexion. Designed for universal compatibility, they promise sustained, transformative elegance.
        </p>
        <p className={styles.zoSkinContentText}>
          At MC Aesthetics, our bespoke approach includes guiding you through the perfect ZO® regimen tailored to your unique profile. We illuminate the art of product layering, routine refinement, and the breathtaking evolution of your skin.
        </p>
      </div>

      {/* FAQ Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>Inquiries of Distinction</h2>
        <div className={styles.zoSkinFaqItem}>
          <p className={styles.zoSkinFaqQuestion}>What Elevates ZO® Skin Care Above Over-the-Counter Offerings?</p>
          <p className={styles.zoSkinFaqAnswer}>
            ZO® embodies medical-grade excellence with intensified active ingredients, penetrating deeper for swift, striking results that outshine conventional retail products.
          </p>
        </div>
        <div className={styles.zoSkinFaqItem}>
          <p className={styles.zoSkinFaqQuestion}>Is a Prescription Required for ZO® Skin Health Products?</p>
          <p className={styles.zoSkinFaqAnswer}>
            While no prescription is necessary, ZO® is solely available through esteemed licensed providers like MC Aesthetics, ensuring tailored expertise for your skin&apos;s distinct needs.
          </p>
        </div>
      </div>
    </div>
  );
}
