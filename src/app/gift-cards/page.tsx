import styles from './GiftCards.module.css';

export default function GiftCardsPage() {
  return (
    <div className={styles.giftCardPageWrapper}>
      {/* Main Title */}
      <h1 className={styles.giftCardMainTitle}>Gift Cards at MC Aesthetics</h1>

      {/* Introduction Text */}
      <p className={styles.giftCardIntroText}>
        Looking for the perfect gift for someone special? MC Aesthetics offers gift cards that can be used for a variety of our premium services, including laser hair removal, skin care treatments, and more. Give the gift of beauty and relaxation with a personalized touch.
      </p>

      {/* Call to Action */}
      <div className={styles.giftCardCallToAction}>
        <p className={styles.giftCardCtaText}>
          Purchase or redeem your MC Aesthetics gift card through our secure booking platform.
        </p>
        <a
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.giftCardCtaButton}
        >
          Buy a Gift Card Now
        </a>
      </div>
    </div>
  );
}