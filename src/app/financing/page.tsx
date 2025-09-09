import styles from './Financing.module.css';
import Image from 'next/image';

export default function FinancingPage() {
  return (
    <div className={styles.mcaFinancingPageWrapper}>
      {/* Hero Section with Main Title, Subtitle, and Cherry Logo */}
      <section className={styles.mcaFinancingHero}>
        <h1 className={styles.mcaFinancingMainTitle}>Flexible Financing Options at MC Aesthetics</h1>
        <p className={styles.mcaFinancingSubtitle}>
          Partnering with Cherry for Seamless Payment Plans
        </p>
        {/* Cherry Logo Image */}
        <div className={styles.mcaFinancingLogoHolder}>
          <Image
            src="/images/cherryFinacing.png"  // User's specified logo path (fixed typo)
            alt="Cherry Financing Logo - Partner of MC Aesthetics"
            className={styles.mcaFinancingLogo}
            width={300}
            height={150}  // Adjusted for logo proportions; tweak as needed
          />
        </div>
      </section>

      {/* How Cherry Works Section (Text-Only for Optimization) */}
      <section className={styles.mcaFinancingContentSection}>
        <h2 className={styles.mcaFinancingSectionTitle}>How Cherry Financing Works</h2>
        <div className={styles.mcaFinancingContentLayout}>
          <div className={styles.mcaFinancingContentText}>
            <p className={styles.mcaFinancingParagraph}>
              No hidden fees. No paperwork. No hassle. No hard credit checks. Cherry Financing offers a seamless way to afford your med spa treatments at MC Aesthetics.
            </p>
            <p className={styles.mcaFinancingParagraph}>
              <strong>Buy now. Pay monthly.</strong> Split your payments and pay over time with plans tailored to fit any budget.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Plans Section with "You're Approved" Image */}
      <section className={styles.mcaFinancingContentSection}>
        <h2 className={styles.mcaFinancingSectionTitle}>A Plan For Any Budget</h2>
        <div className={styles.mcaFinancingContentLayout}>
          <div className={styles.mcaFinancingContentText}>
            <p className={styles.mcaFinancingParagraph}>
              Choose from 3, 6, 12, 18, or 24-month payment plans, with some qualifying for as low as 0% APR. Enjoy your purchase in no time with our fast approval process. All we require is your state ID and mobile phone number.
            </p>
            <p className={styles.mcaFinancingParagraph}>
              <strong>Pay Over Time:</strong> Autopay and 24/7 access to Cherry’s self-serve customer portal give you more ways to pay and the power to manage your payments.
            </p>
            <p className={styles.mcaFinancingParagraph}>
              <strong>Flexible Payments For Any Budget:</strong> Cherry makes financing simple and accessible for everyone.
            </p>
          </div>
          {/* "You're Approved" Image */}
          <div className={styles.mcaFinancingImageHolder}>
            <Image
              src="/images/Approved.png"  // User's specified promotional image
              alt="You're Approved - Girl Holding Card in Cherry Shirt for MC Aesthetics Financing"
              className={styles.mcaFinancingImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaFinancingImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Reasons to Love Cherry Section */}
      <section className={styles.mcaFinancingContentSection}>
        <h2 className={styles.mcaFinancingSectionTitle}>3 Reasons Why Patients Love Cherry Financing</h2>
        <p className={styles.mcaFinancingIntroParagraph}>
          Discover why Cherry is the preferred choice for financing your aesthetic treatments:
        </p>
        <ul className={styles.mcaFinancingListContainer}>
          <li className={styles.mcaFinancingListItem}>
            Qualification for up to $10,000 in financing.
          </li>
          <li className={styles.mcaFinancingListItem}>
            There is no hard credit check required.
          </li>
          <li className={styles.mcaFinancingListItem}>
            0% APR financing available (subject to eligibility).
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className={styles.mcaFinancingCallToAction}>
        <p className={styles.mcaFinancingCtaText}>Apply Today for Med Spa Treatment Financing</p>
        <a
          href="https://pay.withcherry.com/mcaestheticsclinic?utm_source=merchant&utm_medium=website"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mcaFinancingCtaButton}
        >
          Apply for Cherry Financing!
        </a>
      </div>

      {/* Disclaimer */}
      <p className={styles.mcaFinancingDisclaimer}>
        *0% APR and other promotional rates subject to eligibility. Regular APR 9.99% – 35.99%. Down payment may be required.
      </p>
    </div>
  );
}