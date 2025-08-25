import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.privacyPolicyWrapper}>
      {/* Main Title */}
      <h1 className={styles.privacyMainTitle}>Privacy Policy</h1>

      {/* Introduction Text */}
      <p className={styles.privacyIntroText}>
        At MC Aesthetics, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services, including through our website, in-person visits, or online forms. By using our services, you agree to the terms of this policy. This policy was last updated on August 25, 2025.
      </p>

      {/* Policy Sections */}
      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>1. Information We Collect</h2>
        <p className={styles.privacyText}>
          We collect information to provide and improve our aesthetic services. This includes:
        </p>
        <ul className={styles.privacyList}>
          <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address provided through contact forms, appointment bookings, or in-person consultations.</li>
          <li><strong>Health-Related Information:</strong> Information relevant to aesthetic treatments (e.g., medical history or skin conditions) shared during consultations, with your consent.</li>
          <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and cookies to analyze site performance and enhance user experience.</li>
          <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors (we do not store credit card information directly).</li>
        </ul>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>2. How We Use Your Information</h2>
        <p className={styles.privacyText}>
          Your information is used to:
        </p>
        <ul className={styles.privacyList}>
          <li>Schedule and manage appointments for aesthetic services.</li>
          <li>Communicate with you about treatments, promotions, or updates (with your consent for marketing).</li>
          <li>Improve our website and services through analytics (e.g., Google Analytics).</li>
          <li>Comply with legal obligations or protect against fraud and unauthorized access.</li>
        </ul>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>3. How We Share Your Information</h2>
        <p className={styles.privacyText}>
          We do not sell or rent your personal information. We may share data with:
        </p>
        <ul className={styles.privacyList}>
          <li><strong>Service Providers:</strong> Third-party vendors (e.g., payment processors or website hosting services) who assist in operations, bound by confidentiality agreements.</li>
          <li><strong>Legal Compliance:</strong> Authorities or regulators if required by law or to protect our rights and safety.</li>
          <li><strong>Consent:</strong> Other parties only with your explicit permission.</li>
        </ul>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>4. Data Security</h2>
        <p className={styles.privacyText}>
          We implement reasonable security measures to protect your data, including encryption, secure servers, and access controls. However, no system is 100% secure, and we cannot guarantee absolute protection against unauthorized access or breaches.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>5. Cookies and Tracking Technologies</h2>
        <p className={styles.privacyText}>
          Our website uses cookies to enhance functionality and track usage. You can manage cookie preferences through your browser settings. We use:
        </p>
        <ul className={styles.privacyList}>
          <li><strong>Essential Cookies:</strong> Necessary for website operation.</li>
          <li><strong>Analytics Cookies:</strong> To understand user behavior and improve site performance.</li>
        </ul>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>6. Your Rights</h2>
        <p className={styles.privacyText}>
          Depending on your location, you may have rights under laws like GDPR or CCPA, including:
        </p>
        <ul className={styles.privacyList}>
          <li>Accessing, correcting, or deleting your personal data.</li>
          <li>Opting out of marketing communications.</li>
          <li>Requesting information about data processing or third-party sharing.</li>
        </ul>
        <p className={styles.privacyText}>
          To exercise these rights, contact us at admin@mcaestheticsclinic.com.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>7. Data Retention</h2>
        <p className={styles.privacyText}>
          We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law. For example, health-related data may be kept in accordance with medical record retention laws.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>8. Third-Party Links</h2>
        <p className={styles.privacyText}>
          Our website may contain links to external sites. We are not responsible for the privacy practices of these sites and encourage you to review their policies.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>9. Children’s Privacy</h2>
        <p className={styles.privacyText}>
          Our services are not directed at individuals under 18. We do not knowingly collect personal information from children. If you believe we have such data, please contact us to have it removed.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>10. Changes to This Policy</h2>
        <p className={styles.privacyText}>
          We may update this Privacy Policy periodically to reflect changes in legal requirements or our practices. Updates will be posted here with the “last updated” date revised accordingly.
        </p>
      </div>

      <div className={styles.privacySection}>
        <h2 className={styles.privacyHeading}>11. Contact Us</h2>
        <p className={styles.privacyText}>
          If you have questions or concerns about this Privacy Policy or our data practices, please reach out to us:
        </p>
        <ul className={styles.privacyList}>
          <li><strong>Email:</strong> admin@mcaestheticsclinic.com</li>
          <li><strong>Phone:</strong> 971-267-2322</li>
          <li><strong>Address:</strong> 609 NE Baker St Suite #130, McMinnville, OR 97128</li>
        </ul>
      </div>
    </div>
  );
}