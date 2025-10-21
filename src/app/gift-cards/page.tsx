'use client';

import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/app/components/buttons/PrimaryButton';
import styles from './GiftCards.module.css';

const GiftCardsClient = () => {
  const handleBuyGiftCard = () => {
    window.open('https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.mcaGiftPageWrapper}>
      <div className={styles.mcaGiftHero}>
        <h1 className={styles.mcaGiftMainTitle}>Gift Cards at MC Aesthetics</h1>
        <p className={styles.mcaGiftTagline}>Your Road to Beauty – Gift Elegance Today</p>
        <div className={styles.mcaGiftHeroImageHolder}>
          <Image
            src="/images/giftCardGrafic.png"
            alt="Luxurious Gift Card Illustration at MC Aesthetics in McMinnville"
            className={styles.mcaGiftImage}
            width={800}
            height={400}
            priority
          />
          <div className={styles.mcaGiftImageBorderAccent}></div>
        </div>
      </div>

      <div className={styles.mcaGiftContentSection}>
        <p className={styles.mcaGiftIntroText}>
          Looking for the perfect gift for someone special? MC Aesthetics offers gift cards that can be used for a variety of our premium services, including laser hair removal, skin care treatments, and more. Give the gift of beauty and relaxation with a personalized touch – unlock radiant confidence!
        </p>
      </div>

      <div className={styles.mcaGiftWhySection}>
        <h2 className={styles.mcaGiftSubTitle}>Why Choose MC Aesthetics Gift Cards?</h2>
        <ul className={styles.mcaGiftBenefitsList}>
          <li>Flexible amounts starting from $50 – perfect for any budget.</li>
          <li>Redeemable for top-tier treatments like laser hair removal and rejuvenating facials.</li>
          <li>Instant digital delivery or elegant physical cards for that luxury feel.</li>
          <li>Never expires – timeless beauty at your convenience!</li>
        </ul>
      </div>

      <div className={styles.mcaGiftHowSection}>
        <h2 className={styles.mcaGiftSubTitle}>How It Works</h2>
        <ol className={styles.mcaGiftStepsList}>
          <li>Select your amount and personalize with a message.</li>
          <li>Purchase securely through our platform.</li>
          <li>Redeem online or in-person at our McMinnville location.</li>
        </ol>
      </div>

      <div className={styles.mcaGiftCallToAction}>
        <h2 className={styles.mcaGiftCtaTitle}>Ready to Give the Gift of Beauty?</h2>
        <p className={styles.mcaGiftCtaText}>
          Treat someone (or yourself!) to the ultimate in beauty and wellness. Purchase or redeem your MC Aesthetics gift card today!
        </p>
        <div className={styles.mcaGiftCtaButtonWrapper}>
          <PrimaryButton 
            text="Buy a Gift Card Now"
            onClick={handleBuyGiftCard}
            ariaLabel="Purchase MC Aesthetics Gift Card"
          />
        </div>
        <p className={styles.mcaGiftCtaSubtext}>
          Questions? <a href="/contact" className={styles.mcaGiftCtaLink}>Contact us</a> anytime—we're excited to help you celebrate!
        </p>
      </div>
    </div>
  );
};

export default GiftCardsClient;
