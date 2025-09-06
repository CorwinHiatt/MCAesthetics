import styles from './GiftCards.module.css';
import Image from 'next/image';

export default function GiftCardsPage() {
  return (
    <div className={styles.mcaGiftPageWrapper}>
      {/* Enhanced Hero Section with Elegant, Curved Top and Luxury Accents */}
      <section className={styles.mcaGiftHero}>
        <h1 className={styles.mcaGiftMainTitle}>Gift Cards at MC Aesthetics</h1>
        <p className={styles.mcaGiftTagline}>Your Road to Beauty – Gift Elegance Today</p>
        {/* Placeholder Image with Curved, Gold-Accented Border */}
        <div className={styles.mcaGiftHeroImageHolder}>
          <Image
            src="/images/giftCardGrafic.png" // Corrected spelling from your code
            alt="Luxurious Gift Card Illustration at MC Aesthetics in McMinnville"
            className={styles.mcaGiftImage}
            width={800}
            height={400}
          />
          <div className={styles.mcaGiftImageBorderAccent}></div>
        </div>
      </section>

      {/* Introduction Text – Concise and Promotional */}
      <section className={styles.mcaGiftContentSection}>
        <p className={styles.mcaGiftIntroText}>
          Looking for the perfect gift for someone special? MC Aesthetics offers gift cards that can be used for a variety of our premium services, including laser hair removal, skin care treatments, and more. Give the gift of beauty and relaxation with a personalized touch – unlock radiant confidence!
        </p>
      </section>

      {/* New: Why Choose Section – Promotional Benefits List */}
      <section className={styles.mcaGiftWhySection}>
        <h2 className={styles.mcaGiftSubTitle}>Why Choose MC Aesthetics Gift Cards?</h2>
        <ul className={styles.mcaGiftBenefitsList}>
          <li>Flexible amounts starting from $50 – perfect for any budget.</li>
          <li>Redeemable for top-tier treatments like laser hair removal and rejuvenating facials.</li>
          <li>Instant digital delivery or elegant physical cards for that luxury feel.</li>
          <li>Never expires – timeless beauty at your convenience!</li>
        </ul>
      </section>

      {/* New: How It Works Section – Concise Steps */}
      <section className={styles.mcaGiftHowSection}>
        <h2 className={styles.mcaGiftSubTitle}>How It Works</h2>
        <ol className={styles.mcaGiftStepsList}>
          <li>Select your amount and personalize with a message.</li>
          <li>Purchase securely through our platform.</li>
          <li>Redeem online or in-person at our McMinnville location.</li>
        </ol>
      </section>

      {/* Call to Action – Amplified for Promotion */}
      <div className={styles.mcaGiftCallToAction}>
        <p className={styles.mcaGiftCtaText}>
          Treat someone (or yourself!) to the ultimate in beauty and wellness. Purchase or redeem your MC Aesthetics gift card today!
        </p>
        <a
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mcaGiftCtaButton}
        >
          Buy a Gift Card Now
        </a>
      </div>
    </div>
  );
}
