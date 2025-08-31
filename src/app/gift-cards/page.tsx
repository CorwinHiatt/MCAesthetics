import styles from './GiftCards.module.css';
import Image from 'next/image';

export default function GiftCardsPage() {
  return (
    <div className={styles.mcaGiftPageWrapper}>
      {/* Hero Section with Main Title and Image */}
      <section className={styles.mcaGiftHero}>
        <h1 className={styles.mcaGiftMainTitle}>Gift Cards at MC Aesthetics</h1>
        {/* Picsum Placeholder Image for Hero */}
        <div className={styles.mcaGiftHeroImageHolder}>
          <Image
            src="https://picsum.photos/seed/giftcardshero/800/400"
            alt="Gift Cards Illustration at MC Aesthetics in McMinnville"
            className={styles.mcaGiftImage}
            width={800}
            height={400}
          />
          <div className={styles.mcaGiftImageBorderAccent}></div>
        </div>
      </section>

      {/* Introduction Text */}
      <section className={styles.mcaGiftContentSection}>
        <p className={styles.mcaGiftIntroText}>
          Looking for the perfect gift for someone special? MC Aesthetics offers gift cards that can be used for a variety of our premium services, including laser hair removal, skin care treatments, and more. Give the gift of beauty and relaxation with a personalized touch.
        </p>
      </section>

      {/* Call to Action */}
      <div className={styles.mcaGiftCallToAction}>
        <p className={styles.mcaGiftCtaText}>
          Purchase or redeem your MC Aesthetics gift card through our secure booking platform.
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
