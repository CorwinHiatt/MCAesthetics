"use client"

import Link from 'next/link';
import styles from './AccessibilityPage.module.css';

export default function AccessibilityPage() {
  return (
    <div className={styles.accessibilityWrapper}>
      <main className={styles.accessibilityMain} role="main">
        <header className={styles.accessibilityHeader}>
          <h1 className={styles.accessibilityTitle}>Accessibility at MC Aesthetics</h1>
        </header>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Our Commitment to Inclusivity</h2>
          <p className={styles.accessibilityText}>
            At MC Aesthetics, we are dedicated to ensuring that everyone can access our services, 
            both online and in person. We strive to create an inclusive environment where individuals 
            of all abilities feel welcomed and supported. Our goal is to meet or exceed accessibility 
            standards, including the Web Content Accessibility Guidelines (WCAG) 2.1, to provide a 
            seamless experience for all our clients.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Digital Accessibility</h2>
          <p className={styles.accessibilityText}>
            Our website is designed with accessibility in mind. We are committed to meeting WCAG 2.1 
            Level AA standards, which include features such as:
          </p>
          <ul className={styles.accessibilityList}>
            <li className={styles.accessibilityListItem}>
              <strong>Keyboard Navigation:</strong> All interactive elements can be accessed and 
              operated using a keyboard.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Screen Reader Compatibility:</strong> Our site is structured with semantic HTML 
              and ARIA landmarks to ensure compatibility with screen readers like NVDA and VoiceOver.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Alt Text for Images:</strong> Descriptive alternative text is provided for all 
              images to convey their content or purpose.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Color Contrast:</strong> We maintain sufficient color contrast ratios to ensure 
              readability for users with visual impairments.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Resizable Text:</strong> Text can be resized without loss of content or functionality.
            </li>
          </ul>
          <p className={styles.accessibilityText}>
            If you encounter any issues while navigating our website, we encourage you to reach out 
            so we can address them promptly.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Physical Accessibility</h2>
          <p className={styles.accessibilityText}>
            For clients visiting our location, MC Aesthetics is committed to providing an accessible 
            environment. Our facilities include:
          </p>
          <ul className={styles.accessibilityList}>
            <li className={styles.accessibilityListItem}>
              Wheelchair-accessible entrances and restrooms.
            </li>
            <li className={styles.accessibilityListItem}>
              Clear signage with high contrast for readability.
            </li>
            <li className={styles.accessibilityListItem}>
              Staff trained to assist clients with varying needs.
            </li>
          </ul>
          <p className={styles.accessibilityText}>
            If you have specific accessibility requirements for your visit, please contact us in 
            advance, and we will do our best to accommodate your needs.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Feedback and Assistance</h2>
          <p className={styles.accessibilityText}>
            We value your input on how we can improve accessibility. If you experience any barriers 
            while using our website or services, or if you have suggestions for enhancement, please 
            let us know. Your feedback helps us create a more inclusive experience for everyone.
          </p>
          <p className={styles.accessibilityText}>
            You can reach us through the following methods:
          </p>
          <ul className={styles.accessibilityList}>
            <li className={styles.accessibilityListItem}>
              <strong>Email:</strong> <a href="mailto:accessibility@mcaesthetics.com" className={styles.accessibilityLink}>accessibility@mcaesthetics.com</a>
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Phone:</strong> <a href="tel:+15551234567" className={styles.accessibilityLink}>(555) 123-4567</a> (Available Monday–Friday, 9 AM–5 PM)
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Contact Form:</strong> Visit our <Link href="/contact" className={styles.accessibilityLink}>Contact Page</Link> to submit a message.
            </li>
          </ul>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Ongoing Improvements</h2>
          <p className={styles.accessibilityText}>
            Accessibility is an ongoing journey at MC Aesthetics. We regularly review and update our 
            digital and physical spaces to ensure compliance with the latest standards and to address 
            the evolving needs of our community. We partner with accessibility experts and conduct 
            user testing to identify areas for improvement.
          </p>
        </section>
      </main>
    </div>
  );
}
