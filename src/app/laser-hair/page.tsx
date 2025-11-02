// src/app/laser-hair/page.tsx
import type { Metadata } from 'next';
import styles from './LaserHair.module.css';
import Image from 'next/image';
import Carousel from '../components/features/Carousel';

export const metadata: Metadata = {
  title:
    'Laser Hair Removal McMinnville | Elysion Technology & Membership at MC Aesthetics',
  description:
    'Experience effortless smoothness with Elysion Laser Hair Removal at MC Aesthetics in McMinnville, OR. Safe, comfortable treatments for all skin types. Join our exclusive membership! Book today!',
  keywords:
    'laser hair removal McMinnville, Elysion laser hair removal Oregon, hair removal treatments Yamhill County, smooth skin MC Aesthetics, permanent hair reduction, laser hair removal membership',
  metadataBase: new URL('https://www.mcaestheticsclinic.com/'),
  openGraph: {
    title:
      'Laser Hair Removal & Membership in McMinnville | Elysion at MC Aesthetics',
    description:
      'Discover silky, hair-free skin with Elysion Laser Hair Removal at MC Aesthetics in McMinnville, OR. Advanced, painless technology for lasting results! Exclusive membership available!',
    images: [
      {
        url: '/images/laserFaceHair.jpg',
        width: 800,
        height: 400,
        alt: 'Laser Hair Removal Treatment on Face for Smooth Skin at MC Aesthetics McMinnville',
      },
    ],
    url: 'https://www.mcaestheticsclinic.com/laser-hair',
    type: 'website',
    siteName: 'MC Aesthetics McMinnville',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser Hair Removal in McMinnville | Elysion at MC Aesthetics',
    description:
      'Achieve hair-free confidence with Elysion Laser Hair Removal at MC Aesthetics, McMinnville. Painless, safe, and effective. Schedule now!',
    images: ['/images/laserFaceHair.jpg'],
  },
};

export default function LaserHairPage() {
  const bookingUrl =
    'https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14';
  const visitTypeUrl =
    'https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type';

  return (
    <div className={styles.mcaLaserHairPageWrapper}>
      {/* Hero Section */}
      <section className={styles.mcaLaserHairHero}>
        <div className={styles.mcaLaserHairHeroContent}>
          <h1 className={styles.mcaLaserHairMainTitle}>
            Laser Hair Removal in McMinnville
          </h1>

          <div className={styles.mcaLaserHairHeroImageHolder}>
            <Image
              src="/images/laserFaceHair.jpg"
              alt="Professional laser hair removal treatment on face at MC Aesthetics"
              className={styles.mcaLaserHairImage}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>

          <p className={styles.mcaLaserHairIntroText}>
            Experience the freedom of smooth, hair-free skin with Elysion Laser
            Hair Removal at MC Aesthetics. Our advanced technology delivers
            safe, comfortable, and lasting results for all skin types.
          </p>

          <a
            href={visitTypeUrl}
            className={styles.mcaLaserHairCtaButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your laser hair removal session"
          >
            Book Your Session
          </a>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className={styles.mcaLaserHairContentSection}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairSectionTitle}>
            Exclusive Membership Program
          </h2>

          <p className={styles.mcaLaserHairIntroParagraph}>
            Invest in yourself with our affordable monthly membership. Say
            goodbye to daily shaving and hello to lasting smoothness.
          </p>

          {/* Gallery Grid */}
          <div className={styles.mcaLaserHairGalleryGrid}>
            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserHairMembership.jpg"
                  alt="Full body laser hair removal treatment results"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>
                Full-Body Confidence
              </p>
            </div>

            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserFaceHair.jpg"
                  alt="Facial laser hair removal treatment"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>
                Flawless Facial Smoothness
              </p>
            </div>

            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserArmpit.jpg"
                  alt="Underarm laser hair removal treatment"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>
                Effortless Underarm Care
              </p>
            </div>
          </div>

          {/* Membership Card */}
          <article className={styles.mcaLaserHairMembershipCard}>
            <h3 className={styles.mcaLaserHairMembershipTitle}>
              1-Hour Laser Hair Removal Membership
            </h3>
            <p className={styles.mcaLaserHairPriceTag}>
              <span className={styles.mcaLaserHairPrice}>$299</span>
              <span className={styles.mcaLaserHairPricePeriod}> / month</span>
            </p>

            <ul className={styles.mcaLaserHairListContainer}>
              <li className={styles.mcaLaserHairListItem}>
                1 full hour of laser hair removal per session
              </li>
              <li className={styles.mcaLaserHairListItem}>
                6-month minimum commitment for optimal results
              </li>
              <li className={styles.mcaLaserHairListItem}>
                Cover 3-4 body areas per session (face, underarms, legs, bikini)
              </li>
              <li className={styles.mcaLaserHairListItem}>
                Professional, pain-free treatments with lasting smoothness
              </li>
            </ul>

            <p className={styles.mcaLaserHairParagraph}>
              Save time and money with our membership. No more daily shaving
              routines—just smooth, confident skin every day.
            </p>

            <a
              href={bookingUrl}
              className={styles.mcaLaserHairCtaButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sign up for laser hair removal membership"
            >
              Join Membership
            </a>
          </article>

          {/* Membership Benefits */}
          <div className={styles.mcaLaserHairBenefitsGrid}>
            <div className={styles.mcaLaserHairBenefitCard}>
              <div className={styles.mcaLaserHairIconWrapper}>
                <span
                  className={styles.mcaLaserHairIcon}
                  role="img"
                  aria-label="Affordable"
                >
                  💰
                </span>
              </div>
              <h3 className={styles.mcaLaserHairBenefitTitle}>
                Affordable & Flexible
              </h3>
              <p className={styles.mcaLaserHairBenefitText}>
                Pay monthly, customize sessions, and see real results without
                breaking the bank.
              </p>
            </div>

            <div className={styles.mcaLaserHairBenefitCard}>
              <div className={styles.mcaLaserHairIconWrapper}>
                <span
                  className={styles.mcaLaserHairIcon}
                  role="img"
                  aria-label="Expert care"
                >
                  👩‍⚕️
                </span>
              </div>
              <h3 className={styles.mcaLaserHairBenefitTitle}>Expert Care</h3>
              <p className={styles.mcaLaserHairBenefitText}>
                Trained professionals using state-of-the-art Elysion technology
                for safe, effective treatments.
              </p>
            </div>

            <div className={styles.mcaLaserHairBenefitCard}>
              <div className={styles.mcaLaserHairIconWrapper}>
                <span
                  className={styles.mcaLaserHairIcon}
                  role="img"
                  aria-label="Lasting results"
                >
                  ✨
                </span>
              </div>
              <h3 className={styles.mcaLaserHairBenefitTitle}>
                Lasting Results
              </h3>
              <p className={styles.mcaLaserHairBenefitText}>
                Up to 90% hair reduction after consistent treatments—permanent
                smoothness is within reach!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elysion Technology Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairSectionTitle}>
            Advanced Elysion Technology
          </h2>

          <div className={styles.mcaLaserHairContentLayout}>
            <div className={styles.mcaLaserHairContentText}>
              <h3 className={styles.mcaLaserHairSubheading}>
                Revolutionary Hair Removal
              </h3>
              <p className={styles.mcaLaserHairParagraph}>
                Our Elysion system uses advanced diode laser technology to
                gently target hair follicles, disrupting their growth cycle
                while protecting your skin. The result? Dramatic reduction in
                hair regrowth leading to permanent smoothness.
              </p>
              <p className={styles.mcaLaserHairParagraph}>
                Safe for all skin types, Elysion features built-in cooling for a
                virtually painless experience. From large areas like legs and
                back to delicate zones like the face and bikini line—we've got
                you covered.
              </p>
            </div>

            <div className={styles.mcaLaserHairImageHolder}>
              <Image
                src="/images/laserLegs.jpg"
                alt="Laser hair removal treatment on legs showing smooth results"
                className={styles.mcaLaserHairImage}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className={styles.mcaLaserHairImageBorderAccent}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairSectionTitle}>
            Why Choose Elysion Laser Hair Removal?
          </h2>

          <ul className={styles.mcaLaserHairListContainer}>
            <li className={styles.mcaLaserHairListItem}>
              <strong>Fast, Lasting Results:</strong> See visible transformation
              from the first session, with progressive reduction leading to
              enduring smoothness.
            </li>
            <li className={styles.mcaLaserHairListItem}>
              <strong>Treats All Body Areas:</strong> From legs and arms to
              bikini lines and face—Elysion's precision ensures flawless
              coverage everywhere.
            </li>
            <li className={styles.mcaLaserHairListItem}>
              <strong>FDA-Approved Safety:</strong> Equipped with soothing
              cooling technology, Elysion prioritizes your comfort for a
              relaxing treatment experience.
            </li>
            <li className={styles.mcaLaserHairListItem}>
              <strong>All Skin Types Welcome:</strong> Our technology works
              safely and effectively on every skin tone, delivering inclusive
              care for everyone.
            </li>
            <li className={styles.mcaLaserHairListItem}>
              <strong>Zero Downtime:</strong> Return to your daily activities
              immediately after treatment—no recovery period needed.
            </li>
          </ul>
        </div>
      </section>

      {/* Preparation Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairSectionTitle}>
            How to Prepare for Your Treatment
          </h2>

          <div className={styles.mcaLaserHairContentLayout}>
            <div className={styles.mcaLaserHairContentText}>
              <h3 className={styles.mcaLaserHairSubheading}>
                Pre-Treatment Checklist
              </h3>
              <ul className={styles.mcaLaserHairListContainer}>
                <li className={styles.mcaLaserHairListItem}>
                  Shave the treatment area 24 hours before your appointment
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Avoid sun exposure and tanning for 2 weeks prior
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Stay hydrated and skip caffeine on treatment day
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Arrive with clean, product-free skin
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Avoid waxing or plucking for 4 weeks before treatment
                </li>
              </ul>
            </div>

            <div className={styles.mcaLaserHairImageHolder}>
              <Image
                src="/images/smoothLegs.jpg"
                alt="Smooth, hair-free legs after laser hair removal preparation"
                className={styles.mcaLaserHairImage}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className={styles.mcaLaserHairImageBorderAccent}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Treatment Care Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairSectionTitle}>
            Aftercare for Best Results
          </h2>

          <div className={styles.mcaLaserHairContentLayout}>
            <div className={styles.mcaLaserHairContentText}>
              <h3 className={styles.mcaLaserHairSubheading}>
                Post-Treatment Care
              </h3>
              <ul className={styles.mcaLaserHairListContainer}>
                <li className={styles.mcaLaserHairListItem}>
                  Apply cool compress to soothe any mild redness
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Use SPF 30+ sunscreen daily on treated areas
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Avoid hot showers, saunas, and exercise for 24 hours
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Moisturize regularly to keep skin hydrated
                </li>
                <li className={styles.mcaLaserHairListItem}>
                  Contact us with any questions or concerns
                </li>
              </ul>
            </div>

            <div className={styles.mcaLaserHairImageHolder}>
              <Image
                src="/images/afterCareLaser.jpg"
                alt="Post-laser hair removal aftercare routine for glowing skin"
                className={styles.mcaLaserHairImage}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className={styles.mcaLaserHairImageBorderAccent}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.mcaLaserHairFinalCta}>
        <div className={styles.mcaLaserHairContainer}>
          <h2 className={styles.mcaLaserHairCtaTitle}>
            Ready to Transform Your Skin?
          </h2>
          <p className={styles.mcaLaserHairCtaDescription}>
            Join hundreds of satisfied clients who have discovered the freedom
            of hair-free living with Elysion Laser Hair Removal at MC
            Aesthetics.
          </p>
          <a
            href={bookingUrl}
            className={styles.mcaLaserHairCtaButton}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your laser hair removal consultation"
          >
            Book Your Consultation
          </a>
        </div>
      </section>

      {/* Google Reviews Carousel */}
      <Carousel />
    </div>
  );
}
