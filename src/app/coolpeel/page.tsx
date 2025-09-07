"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './CoolPeel.module.css'; // Import the new module CSS

const CoolPeelPage = () => {
  const [faqOpen, setFaqOpen] = useState(false); // Simple toggle for interactivity

  return (
    <div className={styles.mcaCoolPeelPageWrapper}>
      <Head>
        <title>CoolPeel CO2 Laser | Premier Skin Rejuvenation in McMinnville - Highest ROI Treatment</title>
        <meta name="description" content="Discover CoolPeel CO2 Laser, our top ROI service for radiant, youthful skin. Minimal downtime, maximum results." />
        <meta name="keywords" content="coolpeel co2 laser, skin rejuvenation, mcmillville aesthetics, high roi treatment" />
        {/* Add schema markup here if desired */}
      </Head>

      {/* Curved Header to Hero Transition */}
      <div className={styles.mcaCoolPeelHeaderToHeroTransition} />

      {/* Hero Section with Background Image */}
      <section className={styles.mcaCoolPeelHero}>
        <div className={styles.mcaCoolPeelHeroBackgroundWrapper}>
          <div className={styles.mcaCoolPeelHeroImageContainer}>
            <Image
              src="/images/CO2Coolpeel.jpg"
              alt="CoolPeel CO2 Laser Treatment Background"
              fill
              className={styles.mcaCoolPeelHeroBackgroundImage}
            />
          </div>
          <div className={styles.mcaCoolPeelHeroImageOverlay} />
        </div>
        <h1 className={styles.mcaCoolPeelMainTitle}>CoolPeel CO2 Laser: Your Highest ROI Glow-Up</h1>
        <p className={styles.mcaCoolPeelIntroText}>
          Unlock radiant, youthful skin with our #1 high-impact treatment – 90% client satisfaction, minimal downtime, and results that deliver big time!
        </p>
        <div className={styles.mcaCoolPeelCallToAction}>
          <Link href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" className={styles.mcaCoolPeelCtaText}>
            Book Your Session Now
          </Link>
        </div>
      </section>

      {/* Benefits Section - Integrated from provided info */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>What Does CoolPeel Do for Your Skin? (The Benefits Breakdown)</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel targets the epidermis and dermis to stimulate your body's natural healing powers. Here's what it can do:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Smooths Out Texture and Fine Lines:</strong> Vaporizes damaged cells, boosting collagen. Erase wrinkles and crow's feet – like ditching years of squinting at HR spreadsheets!
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Fades Pigmentation and Sun Damage:</strong> Breaks down melanin for even tone. Reset those sunny Yamhill County regrets.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Minimizes Acne Scars and Pores:</strong> Resurfaces for refined skin, plus helps with active acne.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Boosts Overall Glow and Firmness:</strong> Ramps up collagen and elastin for tighter, radiant skin – a natural facelift!
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Treats Other Concerns:</strong> Great for stretch marks, rough patches, or mild rosacea. Results vary; consult for your skin type.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>How Does the Treatment Work? (Step-by-Step)</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Think of this as your virtual walkthrough – quick, comfy, and transformative:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Prep Time:</strong> Numb with topical cream; avoid sun/retinols beforehand.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>The Zap Session:</strong> Laser glides over skin – mild pinpricks, thanks to cool tech.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Immediate Aftermath:</strong> Pink and tingly, like a mild sunburn.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Recovery and Results:</strong> 1-3 days downtime; full glow in 3-6 months. Sunscreen is key!
              </li>
            </ul>
          </div>
          <div className={styles.mcaCoolPeelImageHolder}>
            <Image
              src="/images/coolpeel2.jpg"
              alt="CoolPeel Treatment Results"
              width={600}
              height={400}
              className={styles.mcaCoolPeelImage}
            />
            <div className={styles.mcaCoolPeelImageBorderAccent} />
            <div className={styles.mcaCoolPeelImageBorderAccentTop} />
          </div>
        </div>
      </section>

      {/* Why You'll Love It Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Why You Might Love It?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Balancing work, family, and self-care? CoolPeel fits right in – quick sessions, minimal disruption, and confidence-boosting results. Ditch the concealer and own that natural radiance while tackling life. 
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        {/* <h2 className={styles.mcaCoolPeelSectionTitle}>What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">"CoolPeel transformed my skin – absolutely amazing!"</p>
            <p className="mt-4 font-bold">- Sarah K., McMinnville</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">"Best addition to my glow-up routine."</p>
            <p className="mt-4 font-bold">- Mike T., Client</p>
          </div>
        </div> */}
      </section>

      {/* CTA Footer */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Ready for Your CoolPeel Transformation?</h2>
        <div className={styles.mcaCoolPeelCallToAction}>
          <Link href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" className={styles.mcaCoolPeelCtaText}>
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CoolPeelPage;