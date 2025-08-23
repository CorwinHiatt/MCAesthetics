import styles from './ZoSkinHealth.module.css';

export default function ZoSkinHealthPage() {
  return (
    <div className={styles.zoSkinPageWrapper}>
      {/* Main Title */}
      <h1 className={styles.zoSkinMainTitle}>ZO® Skin Health Products in McMinnville</h1>

      {/* Introduction Section */}
      <div className={styles.zoSkinIntroSection}>
        <p className={styles.zoSkinIntroText}>
          ZO® Skin Health is one of the only true medical-grade skin care lines exclusively offered by licensed medical practitioners. It provides comprehensive solutions for creating and maintaining healthy skin for anyone regardless of age, ethnicity, unique skin condition, or skin type. From correcting sun damage and pigmentation, to preventing and protecting against future damage, ZO has your skin health covered.
        </p>
        <p className={styles.zoSkinIntroText}>
          For more than 35 years, Dr. Zein Obagi, Board-Certified Dermatologist, has pioneered advanced skincare solutions based on his philosophy of creating healthy skin as opposed to merely treating disease and damage. His visionary approach has earned him an international reputation as a leading authority on skin health and rejuvenation.
        </p>
        <p className={styles.zoSkinIntroText}>
          If you’re looking for proven skin care products in McMinnville, ZO® offers targeted formulas that go beyond the surface, addressing the root causes of premature aging, inflammation, acne, and pigmentation concerns.
        </p>
      </div>

      {/* Call to Action */}
      <div className={styles.zoSkinCallToAction}>
        <p className={styles.zoSkinCtaText}>Contact us for more information on ZO® Skin Health Products</p>
      </div>

      {/* Why We Trust ZO Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>Why We Trust ZO® Skin Care Products in McMinnville</h2>
        <p className={styles.zoSkinContentText}>
          At our med spa in McMinnville, we offer ZO® Skin Health because it gives our clients more than cosmetic improvement—it supports true skin health from the inside out. ZO® skin health products are backed by clinical science and carefully developed to deliver real results through high-quality, medical-grade ingredients.
        </p>
      </div>

      {/* ZO Line Includes Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>The ZO® Line Includes:</h2>
        <ul className={styles.zoSkinListContainer}>
          <li className={styles.zoSkinListItem}>Cleansers and exfoliants</li>
          <li className={styles.zoSkinListItem}>Serums for brightening and hydration</li>
          <li className={styles.zoSkinListItem}>Targeted treatments for acne, melasma, and hyperpigmentation</li>
          <li className={styles.zoSkinListItem}>Retinol-based products for skin renewal</li>
          <li className={styles.zoSkinListItem}>Broad-spectrum sun protection</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>Benefits of Using ZO® Skin Health</h2>
        <p className={styles.zoSkinContentText}>
          ZO® products promote long-term skin resilience, reduce inflammation, and visibly brighten your complexion. They’re safe for all skin types and formulated for lasting results.
        </p>
        <p className={styles.zoSkinContentText}>
          As part of our comprehensive approach to skin care, we guide you through choosing the best ZO® regimen for your skin concerns. We also help you understand how to layer your products, when to adjust your routine, and what to expect as your skin transforms.
        </p>
      </div>

      {/* FAQ Section */}
      <div className={styles.zoSkinContentSection}>
        <h2 className={styles.zoSkinSectionHeading}>Frequently Asked Questions</h2>
        <div>
          <p className={styles.zoSkinFaqQuestion}>What Makes ZO® Skin Care Different from Over-the-Counter Products?</p>
          <p className={styles.zoSkinFaqAnswer}>
            ZO® offers medical-grade formulations with higher concentrations of active ingredients, meaning they work deeper in the skin and deliver faster, more noticeable results.
          </p>
        </div>
        <div>
          <p className={styles.zoSkinFaqQuestion}>Do I Need a Prescription for ZO® Skin Health Products?</p>
          <p className={styles.zoSkinFaqAnswer}>
            While you don’t need a prescription, ZO® products are only available through licensed providers. This ensures you receive expert guidance for your specific skin concerns.
          </p>
        </div>
      </div>
    </div>
  );
}