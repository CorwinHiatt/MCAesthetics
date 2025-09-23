'use client'; // For client-side rendering (if interactivity is added later)

import React from 'react';
import Image from 'next/image';
import styles from './Membership.module.css';

const MembershipClient = () => {
  return (
    <div className={styles['mca-membership-container']}>
      {/* Header Section */}
      {/* <header className={styles['mca-membership-header']}>
        <div className="container mx-auto px-4">
          <h1 className={styles['mca-membership-header-title']}>
            MC Aesthetics Membership Club – McMinnville, OR
          </h1>
          <p className={styles['mca-membership-header-subtitle']}>Book Your Appointment</p>
        </div> */}
        <header>
      </header>

      {/* Main Content */}
      <main className={styles['mca-membership-main']}>
        {/* Introduction */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>
            Your Monthly Beauty Bank for Ease, Value & Radiance
          </h2>
          <p className={styles['mca-membership-text']}>
            Discover a fresh way to invest in your skin and wellness journey with the MC Aesthetics Membership Club. 
            Created for clients who value simplicity, savings, and consistent care, this membership ensures you always 
            have beauty dollars on hand—without the guesswork or hassle. Whether you’re maintaining results or exploring 
            new treatments, our club offers flexibility, priority access, and exclusive perks designed just for you.
          </p>
        </section>

        {/* Image Card */}
        <section className={styles['mca-membership-section']}>
          <div className={styles['mca-membership-image-card']}>
            <div className={styles['mca-membership-image-wrapper']}>
              <Image 
                src="/images/membership.jpg" 
                alt="MC Aesthetics Radiance" 
                width={400}
                height={300}
                className={styles['mca-membership-image']}
              />
              <div className={styles['mca-membership-image-overlay']}></div>
            </div>
            <div className={styles['mca-membership-image-content']}>
              <h3 className={styles['mca-membership-image-title']}>Radiance Awaits</h3>
              <p className={styles['mca-membership-image-description']}>
                Join today and let your beauty shine with personalized care.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>How It Works</h2>
          <div className="space-y-8">
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Monthly Beauty Bank</h3>
              <p className={styles['mca-membership-text']}>
                For just $100 per month, your payments accumulate in a dedicated beauty bank—ready to be used at any time 
                for your favorite services. No service minimums, no downsides—just freedom to choose.
              </p>
            </div>
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Built-In Savings</h3>
              <p className={styles['mca-membership-text']}>
                Enjoy 10% off all treatments and product purchases, including injectables, skin care, laser services, and more.
              </p>
            </div>
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Easy to Use</h3>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>Why Join the Membership Club?</h2>
          <div className="space-y-8">
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Consistency Without Pressure</h3>
              <p className={styles['mca-membership-text']}>
                Committing to your aesthetic goals has never been easier. Instead of sporadic appointments, build a habit of 
                prioritizing self-care on your terms.
              </p>
            </div>
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Exclusive Value</h3>
              <p className={styles['mca-membership-text']}>
                With a steady $100 monthly credit plus 10% discounts, your membership pays for itself—and then some.
              </p>
            </div>
            <div>
              <h3 className={styles['mca-membership-subsection-title']}>Personalized Care</h3>
              <p className={styles['mca-membership-text']}>
                Members get priority booking and early access to new services or promotions. We stay connected, so you stay glowing.
              </p>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>Who It’s For</h2>
          <p className={styles['mca-membership-text']}>
            This club is perfect for clients who:
          </p>
          <ul className={styles['mca-membership-list']}>
            <li>Uplift their look regularly with injectables like Xeomin, Dysport, or fillers</li>
            <li>Maintain skin health with periodic peels, microneedling, or laser treatments</li>
            <li>Invest in skincare routines with ZO Skin Health products</li>
            <li>Prefer a budgeted, flexible plan over one-off purchases</li>
          </ul>
          <p className={styles['mca-membership-text']}>
            It’s ideal whether you’re just starting your aesthetics journey or already committed to regular treatments.
          </p>
        </section>

        {/* What Members Receive */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>What Members Receive</h2>
          <p className={styles['mca-membership-text']}>
            Each month, your beauty bank accumulates automatically. Then, enjoy:
          </p>
          <ul className={styles['mca-membership-list']}>
            <li>Credit toward any in-clinic service or product</li>
            <li>10% discount applied automatically at checkout</li>
            <li>First access to new procedures or specials</li>
            <li>Flexible, no-contract membership—you may cancel anytime</li>
          </ul>
        </section>

        {/* Our Commitment */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>Our Commitment to You</h2>
          <p className={styles['mca-membership-text']}>
            At MC Aesthetics, we take a personalized, results-driven approach to aesthetics. Led by Melissa Cook, Nurse 
            Practitioner and clinic owner, our team delivers treatments with precision, artistry, and care. We want your 
            experience to be seamless—from booking to follow-up—and our Membership Club is a key part of achieving that.
          </p>
          <p className={styles['mca-membership-text']}>
            The beauty bank model allows for easy, steady progress in your goals—be it smoothing fine lines, enhancing skin 
            health, or simply taking time for self-care. And with weekly check-ins included in other treatment plans, this 
            club complements a lifestyle of continuous improvement.
          </p>
        </section>

        {/* Getting Started */}
        <section className={styles['mca-membership-section']}>
          <h2 className={styles['mca-membership-section-title']}>Getting Started</h2>
          <p className={styles['mca-membership-text']}>
            Joining is simple:
          </p>
          <ol className={styles['mca-membership-ordered-list']}>
            <li>Click <strong>Join Now</strong> on the Membership Club section of our website or visit our booking portal.</li>
            <li>Enter your details and billing information—$100 will be added to your beauty bank each month.</li>
            <li>Start using your balance right away. Apply your credit and discount at checkout.</li>
            <li>Schedule your bespoke treatments, apply products, and enjoy added confidence.</li>
          </ol>
          <p className={styles['mca-membership-text']}>
            No long-term contracts, no pressure—just a flexible, curated beauty journey.
          </p>
        </section>

        {/* Ready to Join */}
        <section className={`${styles['mca-membership-section']} ${styles['mca-membership-text-center']}`}>
          <h2 className={styles['mca-membership-section-title']}>Ready to Join?</h2>
          <p className={`${styles['mca-membership-text']} ${styles['mca-membership-max-w-3xl']}`}>
            Let our Membership Club bring consistency and value to your aesthetic journey. At MC Aesthetics in McMinnville, 
            we’re here to support your goals and help you look—and feel—your best. Join today to start building your beauty 
            bank, receive ongoing perks, and enjoy expert care at every visit. If you have questions or want to confirm the 
            benefits, contact us anytime—we’re excited to welcome you!
          </p>
          <button className={styles['mca-membership-cta-button']}>
            Join Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default MembershipClient;
