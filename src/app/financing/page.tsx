import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/app/components/buttons/PrimaryButton';
import styles from './Financing.module.css';
import Carousel from '@/app/components/features/Carousel';

export const metadata = {
  title: 'Flexible Financing Options | MC Aesthetics | McMinnville, OR',
  description:
    'Affordable beauty financing in Yamhill County, Oregon. PatientFi offers flexible payment plans for aesthetic treatments at MC Aesthetics in McMinnville. Apply today!',
  keywords:
    'beauty financing McMinnville, aesthetic financing Oregon, PatientFi Yamhill County, cosmetic treatment payment plans, medical spa financing',
};

export default function FinancingPage() {
  return (
    <main className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Financing at MC Aesthetics</h1>
        <p className={styles.subtitle}>
          Flexible Payment Plans - Make Beauty Affordable Today
        </p>

        {/* Financing Available Image */}
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/finacingAvalable.jpg"
            alt="Financing available at MC Aesthetics - PatientFi payment plans"
            width={800}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>

        <p className={styles.description}>
          Looking for flexible payment options for your aesthetic treatments? MC
          Aesthetics partners with PatientFi to offer affordable financing
          solutions. Whether it&apos;s injectables, laser treatments, or
          skincare products, our financing makes it easy to invest in yourself
          without the financial stress. Get approved in minutes with transparent
          terms and no hidden fees!
        </p>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <h2 className={styles.sectionTitle}>Why Choose PatientFi Financing?</h2>

        <ul className={styles.benefitsList}>
          <li>Instant approval in minutes - no hard credit check</li>
          <li>Flexible payment plans from 3 to 24 months</li>
          <li>No hidden fees - transparent pricing you can trust</li>
          <li>Easy online management with convenient autopay options</li>
          <li>Available for all treatments and skincare products</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>

        <ol className={styles.stepsList}>
          <li>Complete a quick online application in minutes</li>
          <li>Get instant approval and choose your payment plan</li>
          <li>Start your treatment right away with confidence</li>
        </ol>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
        <p className={styles.ctaText}>
          Apply for PatientFi financing today and make your beauty goals a
          reality with affordable monthly payments.
        </p>

        <div className={styles.ctaButton}>
          <a
            href="https://app.patientfi.com/v2/mc-aesthetics/apply"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            <PrimaryButton text="Apply Now" />
          </a>
        </div>

        <p className={styles.ctaFooter}>
          Questions?{' '}
          <a href="/contact" className={styles.contactLink}>
            Contact us
          </a>{' '}
          - we&apos;re here to help!
        </p>
      </section>

      {/* Local SEO Footer */}
      <section className={styles.seoFooter}>
        <p className={styles.seoText}>
          MC Aesthetics proudly serves McMinnville, Newberg, Dundee, Carlton,
          and all of Yamhill County, Oregon with flexible financing options for
          aesthetic treatments. Our partnership with PatientFi makes
          professional beauty services accessible and affordable for everyone in
          the Willamette Valley.
        </p>
        <p className={styles.disclaimer}>
          *Financing subject to credit approval. Terms and conditions apply.
        </p>
      </section>

      {/* Google Reviews Carousel */}
      <Carousel />
    </main>
  );
}
