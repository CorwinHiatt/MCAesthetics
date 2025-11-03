'use client';

import React from 'react';
import Image from 'next/image';
import { UserPlus, Wallet, CalendarCheck } from 'lucide-react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import styles from './Membership.module.css';
import Carousel from '../components/features/Carousel';

const MembershipClient = () => {
  const handleJoinClick = () => {
    // Add your join logic here (navigate to booking, open modal, etc.)
    window.location.href = '/contact';
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.membershipWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>MC Aesthetics Membership Club</h1>
            <p className={styles.heroSubtitle}>
              Your Monthly Beauty Bank for Ease, Value & Radiance
            </p>
            <p className={styles.heroDescription}>
              Invest in your skin and wellness journey with exclusive savings,
              priority access, and personalized care in McMinnville, OR.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Featured Image Card */}
          <section className={styles.featuredSection}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src="/images/membership.jpg"
                  alt="MC Aesthetics Membership - Radiance Awaits"
                  width={600}
                  height={400}
                  className={styles.featuredImage}
                  priority
                  quality={90}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.errorHandled) {
                      target.dataset.errorHandled = 'true';
                      target.src = '/images/placeholder.webp';
                    }
                  }}
                />
                <div className={styles.featuredOverlay}>
                  <h2 className={styles.featuredTitle}>Radiance Awaits</h2>
                  <p className={styles.featuredText}>
                    Join today and let your beauty shine
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Membership Benefits Grid */}
          <section className={styles.benefitsSection}>
            <h2 className={styles.sectionTitle}>Membership Benefits</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>💰</div>
                <h3 className={styles.benefitTitle}>Monthly Beauty Bank</h3>
                <p className={styles.benefitText}>
                  Just $100/month accumulates in your dedicated beauty
                  bank—ready to use anytime for your favorite services.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>✨</div>
                <h3 className={styles.benefitTitle}>10% Savings</h3>
                <p className={styles.benefitText}>
                  Enjoy 10% off all treatments and products, including
                  injectables, skin care, laser services, and more.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>⭐</div>
                <h3 className={styles.benefitTitle}>Priority Access</h3>
                <p className={styles.benefitText}>
                  Members get priority booking and early access to new services,
                  promotions, and exclusive events.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🎯</div>
                <h3 className={styles.benefitTitle}>Commitment to Results</h3>
                <p className={styles.benefitText}>
                  6-month minimum commitment to help you achieve the best
                  results. Use your credits on your schedule.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className={styles.howItWorksSection}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.stepsContainer}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>
                  <UserPlus size={32} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Join the Club</h3>
                  <p className={styles.stepText}>
                    Sign up with a simple $100/month commitment (6-month
                    minimum). Your payments automatically accumulate in your
                    beauty bank.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>
                  <Wallet size={32} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Build Your Balance</h3>
                  <p className={styles.stepText}>
                    Each month, $100 is added to your account. Save it up or use
                    it right away—total flexibility.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>
                  <CalendarCheck
                    size={32}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Book & Save</h3>
                  <p className={styles.stepText}>
                    Schedule your treatments, apply your credits, and enjoy an
                    automatic 10% discount at checkout.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className={styles.whoSection}>
            <h2 className={styles.sectionTitle}>Who It&apos;s Perfect For</h2>
            <div className={styles.whoContent}>
              <p className={styles.whoIntro}>
                This club is ideal for clients who:
              </p>
              <ul className={styles.whoList}>
                <li>
                  Maintain their look regularly with injectables like Xeomin,
                  Dysport, or fillers
                </li>
                <li>
                  Invest in skin health with periodic peels, microneedling, or
                  laser treatments
                </li>
                <li>
                  Use ZO Skin Health products as part of their skincare routine
                </li>
                <li>Prefer a budgeted, flexible plan over one-off purchases</li>
                <li>
                  Value consistency and want to prioritize self-care on their
                  terms
                </li>
              </ul>
            </div>
          </section>

          {/* What's Included */}
          <section className={styles.includedSection}>
            <h2 className={styles.sectionTitle}>What&apos;s Included</h2>
            <div className={styles.includedGrid}>
              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>$100 monthly credit toward any service or product</p>
              </div>

              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>10% discount applied automatically at checkout</p>
              </div>

              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>Priority booking for appointments</p>
              </div>

              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>First access to new procedures and specials</p>
              </div>

              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>6-month minimum commitment for optimal results</p>
              </div>

              <div className={styles.includedItem}>
                <span className={styles.checkmark}>✓</span>
                <p>Personalized care from our expert team</p>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className={styles.commitmentSection}>
            <div className={styles.commitmentCard}>
              <h2 className={styles.commitmentTitle}>Our Commitment to You</h2>
              <p className={styles.commitmentText}>
                At MC Aesthetics, we take a personalized, results-driven
                approach to aesthetics. Led by Melissa Cook, Nurse Practitioner
                and clinic owner, our team delivers treatments with precision,
                artistry, and care.
              </p>
              <p className={styles.commitmentText}>
                The beauty bank model allows for easy, steady progress toward
                your goals—be it smoothing fine lines, enhancing skin health, or
                simply taking time for self-care. We&apos;re here to support
                your journey every step of the way.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
            <p className={styles.ctaText}>
              Join the MC Aesthetics Membership Club today and experience the
              benefits of consistent, personalized care with exclusive savings
              and priority access.
            </p>
            <div className={styles.ctaButtonWrapper}>
              <PrimaryButton
                text="Join Now →"
                onClick={handleJoinClick}
                ariaLabel="Join MC Aesthetics Membership Club"
              />
            </div>
            <p className={styles.ctaSubtext}>
              Questions?{' '}
              <a href="/contact" className={styles.ctaLink}>
                Contact us
              </a>{' '}
              anytime—we&apos;re excited to welcome you!
            </p>
          </section>

          {/* Google Reviews Carousel */}
          <Carousel />
        </main>
      </div>
    </div>
  );
};

export default MembershipClient;
