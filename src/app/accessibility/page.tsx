"use client"

import Link from 'next/link';
import styles from './AccessibilityPage.module.css';
import Image from 'next/image';

export default function AccessibilityPage() {
  return (
    <div className={styles.accessibilityWrapper}>
      <main className={styles.accessibilityMain} role="main">
        <header className={styles.accessibilityHeader}>
          <h1 className={styles.accessibilityTitle}>Accessibility at MC Aesthetics: Pioneering Inclusivity</h1>
        </header>

        {/* Hero Image Section with Custom Image */}
        <section className={styles.accessibilityHero} aria-labelledby="hero-heading">
          <h2 id="hero-heading" className="sr-only">Welcoming All to MC Aesthetics</h2>
          <div className={styles.accessibilityImageHolder}>
            <Image
              src="/images/AcesibilityImage.jpg"
              alt="Diverse group of people in an inclusive, modern aesthetics clinic environment, featuring wheelchair accessibility, braille signage, and warm, welcoming lighting to symbolize ethical inclusivity."
              className={styles.accessibilityImage}
              width={800}
              height={400}
              priority
            />
            <div className={styles.accessibilityImageBorderAccent}></div>
          </div>
          <p className={styles.accessibilityCaption}>Image: Embracing diversity through thoughtful design—our ethical foundation.</p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Our Ethical Commitment to Universal Access</h2>
          <p className={styles.accessibilityText}>
            At MC Aesthetics, accessibility isn't just compliance—it's an ethical imperative. We envision a world where beauty and wellness are truly universal, breaking barriers for all abilities, backgrounds, and experiences. Ahead of our time, we're not waiting for mandates; we're actively working towards meeting WCAG 2.2 standards at Level AA, incorporating principles like cognitive accessibility and inclusive design. This reflects our core values: empathy, equity, and empowerment. As a digital-first presence, we focus on creating seamless online experiences while continuously improving.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Digital Accessibility: Best Practices in Action</h2>
          <p className={styles.accessibilityText}>
            Our Next.js-powered site is built with inclusive design in mind, striving to meet WCAG 2.2 Level AA standards (with ongoing efforts towards AAA elements where feasible). We're transparent about our progress: Mobile accessibility is a key focus, and while we're not at 100% yet, we conduct regular audits to close gaps. Here are key features, plus practical tips to enhance your experience:
          </p>
          <ul className={styles.accessibilityList}>
            <li className={styles.accessibilityListItem}>
              <strong>Keyboard Navigation:</strong> Tab through all elements seamlessly. Tip: Use browser extensions like Keyboard Accessibility Checker for testing.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Screen Reader Optimization:</strong> Semantic HTML, ARIA labels, and landmarks ensure tools like NVDA, VoiceOver, or JAWS read content intuitively. We conduct regular audits with real users.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Descriptive Alt Text:</strong> Every image conveys purpose—e.g., not just "photo," but context for non-visual users.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>High Color Contrast:</strong> Ratios meet or exceed 4.5:1, with options for high-contrast modes. Check yours with tools like WAVE.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Flexible Text Sizing:</strong> Resize up to 200% without breakage, supporting low-vision users.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Multimedia Accessibility:</strong> Captions, transcripts, and audio descriptions for any videos or interactive elements.
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Mobile Responsiveness:</strong> Optimized for touch devices, with ongoing improvements to ensure full accessibility on smaller screens.
            </li>
          </ul>
          <p className={styles.accessibilityText}>
            Encounter an issue? Report it via our form—we respond within 24 hours and use feedback to iterate ethically. We're committed to transparency and continuous enhancement.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Innovative Accessibility: Ahead of the Curve</h2>
          <p className={styles.accessibilityText}>
            We're pioneers in ethical digital design, prioritizing user-centered practices like inclusive language and diverse representation. Sustainability matters too—our site optimizes for efficient loading to support low-bandwidth users. We collaborate with accessibility communities for user testing, ensuring our efforts uplift underrepresented voices and evolve with best practices.
          </p>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Feedback and Assistance: Your Voice Matters</h2>
          <p className={styles.accessibilityText}>
            Help us evolve—your insights drive our ethical progress. Contact us anytime:
          </p>
          <ul className={styles.accessibilityList}>
            <li className={styles.accessibilityListItem}>
              <strong>Email:</strong> <a href="mailto:accessibility@mcaesthetics.com" className={styles.accessibilityLink}>corwin@coleesoftwareservices.com</a>
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Phone:</strong> <a href="tel:+19712679344" className={styles.accessibilityLink}>(971) 267-9344</a> (TTY compatible, Mon–Fri 9 AM–5 PM)
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>Contact Form:</strong> <Link href="/contact" className={styles.accessibilityLink}>Submit Here</Link>
            </li>
            <li className={styles.accessibilityListItem}>
              <strong>For technical accessibility issues or improvements:</strong> Reach out to our specialist at <a href="mailto:corwin@coleesoftwareservices.com" className={styles.accessibilityLink} aria-label="Email Corwin for accessibility support">corwin@coleesoftwareservices.com</a> or <a href="tel:+19712679344" className={styles.accessibilityLink} aria-label="Call Corwin for accessibility support">971-267-9344</a>.
            </li>
          </ul>
        </section>

        <section className={styles.accessibilitySection}>
          <h2 className={styles.accessibilitySubtitle}>Ongoing Improvements: The Gold Standard</h2>
          <p className={styles.accessibilityText}>
            Accessibility is dynamic—we audit quarterly, incorporate user feedback, and adapt to new standards. Our goal: A future where inclusivity is intuitive and accessible to all.
          </p>
          {/* Custom Gold Standard Image */}
          <div className={styles.accessibilityImageHolder}>
            <Image
              src="/images/AcessibilityGoldStandard.jpg"
              alt="Symbolic gold standard seal representing MC Aesthetics' commitment to ethical, forward-thinking accessibility practices, with elements like inclusive icons and innovative tech motifs."
              className={styles.accessibilityImage}
              width={800}
              height={400}
            />
            <div className={styles.accessibilityImageBorderAccent}></div>
          </div>
          <p className={styles.accessibilityCaption}>Image: Our pledge to the gold standard—ethical innovation in action.</p>
        </section>

        {/* Call to Action */}
        <div className={styles.accessibilityCallToAction}>
          <p className={styles.accessibilityCtaText}>JOIN US IN BUILDING AN INCLUSIVE FUTURE—CONTACT US TODAY</p>
        </div>
      </main>
    </div>
  );
}