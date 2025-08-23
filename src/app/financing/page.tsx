import styles from './Financing.module.css';

export default function FinancingPage() {
  return (
    <div className={styles.financingPageWrapper}>
      {/* Main Title */}
      <h1 className={styles.financingMainTitle}>MC Aesthetics Payment Plans</h1>
      <h2 className={styles.financingSubtitle}>With Cherry Financing</h2>

      {/* How Cherry Works Section */}
      <div className={styles.financingContentSection}>
        <h2 className={styles.financingSectionHeading}>How Cherry Works</h2>
        <p className={styles.financingContentText}>
          No hidden fees. No paperwork. No hassle. No hard credit checks. Cherry Financing offers a seamless way to afford your med spa treatments at MC Aesthetics.
        </p>
        <p className={styles.financingContentText}>
          <strong>Buy now. Pay monthly.</strong> Split your payments and pay over time with plans tailored to fit any budget.
        </p>
      </div>

      {/* Payment Plans Section */}
      <div className={styles.financingContentSection}>
        <h2 className={styles.financingSectionHeading}>A Plan For Any Budget</h2>
        <p className={styles.financingContentText}>
          Choose from 3, 6, 12, 18, or 24-month payment plans, with some qualifying for as low as 0% APR. Enjoy your purchase in no time with our fast approval process. All we require is your state ID and mobile phone number.
        </p>
        <p className={styles.financingContentText}>
          <strong>Pay Over Time:</strong> Autopay and 24/7 access to Cherry’s self-serve customer portal give you more ways to pay and the power to manage your payments.
        </p>
        <p className={styles.financingContentText}>
          <strong>Flexible Payments For Any Budget:</strong> Cherry makes financing simple and accessible for everyone.
        </p>
      </div>

      {/* Reasons to Love Cherry Section */}
      <div className={styles.financingContentSection}>
        <h2 className={styles.financingSectionHeading}>3 Reasons Why Patients Love Cherry Financing</h2>
        <ul className={styles.financingListContainer}>
          <li className={styles.financingListItem}>
            Qualification for up to $10,000 in financing.
          </li>
          <li className={styles.financingListItem}>
            There is no hard credit check required.
          </li>
          <li className={styles.financingListItem}>
            0% APR financing available (subject to eligibility).
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className={styles.financingCallToAction}>
        <p className={styles.financingCtaText}>Apply Today for Med Spa Treatment Financing</p>
        <a
          href="https://pay.withcherry.com/mcaestheticsclinic?utm_source=merchant&utm_medium=website"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.financingCtaButton}
        >
          Apply for Cherry Financing
        </a>
      </div>

      {/* Disclaimer */}
      <p className={styles.financingDisclaimer}>
        *0% APR and other promotional rates subject to eligibility. Regular APR 9.99% – 35.99%. Down payment may be required.
      </p>
    </div>
  );
}