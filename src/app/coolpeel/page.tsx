import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './CoolPeel.module.css';
import CoolPeelClientWrapper from './CoolPeelClientWrapper';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import Carousel from '../components/features/Carousel';

export const metadata: Metadata = {
  title:
    'CoolPeel CO2 Laser McMinnville Oregon | Best Laser Facial Treatment | MC Aesthetics',
  description:
    'Experience CoolPeel CO2 laser facials in McMinnville, Oregon at MC Aesthetics. Our #1 ROI treatment for wrinkle reduction, sun damage repair, and skin rejuvenation with minimal downtime.',
  keywords:
    'CoolPeel McMinnville, CO2 laser facial Oregon, laser skin resurfacing McMinnville, CoolPeel laser treatment Yamhill County, fractional CO2 laser McMinnville, anti-aging laser Oregon, minimal downtime laser facial, skin rejuvenation McMinnville',
  metadataBase: new URL('https://mcaestheticsclinic.com/'),
  openGraph: {
    title: 'CoolPeel CO2 Laser Facials McMinnville Oregon | MC Aesthetics',
    description:
      'Transform your skin with CoolPeel laser facials in McMinnville. Minimal downtime, maximum results for wrinkles, sun damage & texture.',
    images: [
      {
        url: '/images/coolpeelMetaTag.png',
        width: 1200,
        height: 630,
        alt: 'CoolPeel CO2 Laser Treatment at MC Aesthetics McMinnville',
      },
    ],
    url: 'https://mcaestheticsclinic.com/coolpeel',
    type: 'website',
    siteName: 'MC Aesthetics McMinnville',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoolPeel CO2 Laser Facials McMinnville Oregon | MC Aesthetics',
    description:
      'Transform your skin with CoolPeel laser facials in McMinnville. Minimal downtime, maximum results!',
    images: ['/images/coolpeelMetaTag.png'],
  },
};

export default function CoolPeelPage() {
  return (
    <CoolPeelClientWrapper>
      <div className={styles.mcaLuxCoolPeelWrapper}>
        {/* Curved Header Transition */}
        <div
          className={styles.mcaLuxCoolPeelHeaderTransition}
          aria-hidden="true"
        ></div>

        {/* Hero Section */}
        <section className={styles.mcaLuxCoolPeelHero} role="banner">
          <div className={styles.mcaLuxCoolPeelHeroImageContainer}>
            <Image
              src="/images/CO2Coolpeel.jpg"
              alt="CoolPeel CO2 laser facial treatment McMinnville Oregon"
              className={styles.mcaLuxCoolPeelHeroImage}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div className={styles.mcaLuxCoolPeelHeroContent}>
            <h1 className={styles.mcaLuxCoolPeelHeroTitle}>
              CoolPeel CO2 Laser
            </h1>
            <p className={styles.mcaLuxCoolPeelHeroSubtitle}>
              Advanced Skin Resurfacing with Minimal Downtime
            </p>
            <p className={styles.mcaLuxCoolPeelHeroDescription}>
              McMinnville&apos;s #1 laser treatment for radiant, youthful skin
            </p>
            <div className={styles.mcaLuxCoolPeelHeroButtons}>
              <PrimaryButton
                text="Book Your Session"
                href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14"
              />
            </div>
          </div>
        </section>

        {/* What is CoolPeel Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <div className={styles.mcaLuxCoolPeelGrid}>
              <div className={styles.mcaLuxCoolPeelContent}>
                <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
                  What is CoolPeel?
                </h2>
                <p className={styles.mcaLuxCoolPeelText}>
                  CoolPeel is a revolutionary CO2 laser treatment that delivers
                  powerful anti-aging results without the extensive downtime of
                  traditional resurfacing. Using advanced technology, it targets
                  sun damage, fine lines, and uneven texture while keeping your
                  skin cool and comfortable.
                </p>
                <p className={styles.mcaLuxCoolPeelText}>
                  Perfect for busy McMinnville professionals, CoolPeel offers
                  dramatic improvements with minimal recovery—most patients
                  return to work within 1-3 days.
                </p>
              </div>
              <div className={styles.mcaLuxCoolPeelImageWrapper}>
                <Image
                  src="/images/coolpeel2.jpg"
                  alt="CoolPeel laser treatment results"
                  className={styles.mcaLuxCoolPeelImage}
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skin Concerns Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              What CoolPeel Treats
            </h2>
            <div className={styles.mcaLuxCoolPeelContent} style={{ maxWidth: '900px', margin: '0 auto' }}>
              <ul className={styles.mcaLuxCoolPeelList}>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Fine lines and wrinkles
                </li>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Sun damage and age spots
                </li>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Uneven skin texture
                </li>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Enlarged pores
                </li>
                <li className={styles.mcaLuxCoolPeelListItem}>Acne scars</li>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Dull, tired-looking skin
                </li>
                <li className={styles.mcaLuxCoolPeelListItem}>
                  Mild skin laxity
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              Why Choose CoolPeel?
            </h2>
            <div className={styles.mcaLuxCoolPeelBenefitsGrid}>
              <div className={styles.mcaLuxCoolPeelBenefitCard}>
                <h3 className={styles.mcaLuxCoolPeelBenefitTitle}>
                  Minimal Downtime
                </h3>
                <p className={styles.mcaLuxCoolPeelBenefitText}>
                  Back to normal activities within 1-3 days
                </p>
              </div>
              <div className={styles.mcaLuxCoolPeelBenefitCard}>
                <h3 className={styles.mcaLuxCoolPeelBenefitTitle}>
                  Long-term Results
                </h3>
                <p className={styles.mcaLuxCoolPeelBenefitText}>
                  Collagen stimulation continues for months
                </p>
              </div>
              <div className={styles.mcaLuxCoolPeelBenefitCard}>
                <h3 className={styles.mcaLuxCoolPeelBenefitTitle}>
                  Immediate Improvement
                </h3>
                <p className={styles.mcaLuxCoolPeelBenefitText}>
                  Smoother texture visible within one week
                </p>
              </div>
              <div className={styles.mcaLuxCoolPeelBenefitCard}>
                <h3 className={styles.mcaLuxCoolPeelBenefitTitle}>
                  Customizable
                </h3>
                <p className={styles.mcaLuxCoolPeelBenefitText}>
                  Tailored to your specific skin concerns
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Process Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              What to Expect
            </h2>
            <div className={styles.mcaLuxCoolPeelContent} style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className={styles.mcaLuxCoolPeelProcessStep}>
                <h3 className={styles.mcaLuxCoolPeelStepTitle}>
                  During Treatment
                </h3>
                <p className={styles.mcaLuxCoolPeelText}>
                  Your 15-30 minute session begins with skin cleansing and
                  optional numbing cream. You&apos;ll feel mild warmth as the
                  laser works—most find it very tolerable.
                </p>
              </div>
              <div className={styles.mcaLuxCoolPeelProcessStep}>
                <h3 className={styles.mcaLuxCoolPeelStepTitle}>
                  After Treatment
                </h3>
                <p className={styles.mcaLuxCoolPeelText}>
                  Expect mild redness and a &quot;sandpaper&quot; texture for
                  1-3 days. Skin naturally exfoliates, revealing fresh,
                  rejuvenated skin. Optimal results typically require 2-3
                  treatments spaced 4-6 weeks apart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Candidacy Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              Is CoolPeel Right for You?
            </h2>
            <div className={styles.mcaLuxCoolPeelContent} style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <p className={styles.mcaLuxCoolPeelText}>
                CoolPeel is ideal for McMinnville residents seeking
                significant skin improvements without lengthy recovery.
                Perfect for those with mild to moderate concerns like fine
                lines, sun damage, or acne scarring.
              </p>
              <p className={styles.mcaLuxCoolPeelText}>
                During your consultation at MC Aesthetics, we&apos;ll evaluate
                your skin type, concerns, and goals to create a personalized
                treatment plan.
              </p>
              <div className={styles.mcaLuxCoolPeelCandidacyBox}>
                <h3 className={styles.mcaLuxCoolPeelStepTitle}>Best For:</h3>
                <ul className={styles.mcaLuxCoolPeelList}>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Adults seeking anti-aging solutions
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Those with sun damage or age spots
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Patients wanting minimal downtime
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Individuals with realistic expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pre & Post Care Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              Pre & Post Treatment Care
            </h2>
            <div className={styles.mcaLuxCoolPeelCareGrid}>
              <div className={styles.mcaLuxCoolPeelCareCard}>
                <h3 className={styles.mcaLuxCoolPeelCareTitle}>
                  Before Treatment
                </h3>
                <ul className={styles.mcaLuxCoolPeelList}>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Avoid sun exposure for 2 weeks
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Discontinue retinoids 5-7 days prior
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Stay well-hydrated
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Inform us of all medications
                  </li>
                </ul>
              </div>
              <div className={styles.mcaLuxCoolPeelCareCard}>
                <h3 className={styles.mcaLuxCoolPeelCareTitle}>
                  After Treatment
                </h3>
                <ul className={styles.mcaLuxCoolPeelList}>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Keep skin hydrated with medical-grade moisturizers
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Apply SPF 30+ sunscreen daily
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Avoid picking at peeling skin
                  </li>
                  <li className={styles.mcaLuxCoolPeelListItem}>
                    Skip intense exercise for 24-48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.mcaLuxCoolPeelSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <h2 className={styles.mcaLuxCoolPeelSectionTitle}>
              Why MC Aesthetics?
            </h2>
            <div className={styles.mcaLuxCoolPeelGrid}>
              <div className={styles.mcaLuxCoolPeelImageWrapper}>
                <Image
                  src="/images/melissa.png"
                  alt="Melissa Cook, CoolPeel specialist"
                  className={styles.mcaLuxCoolPeelImage}
                  width={600}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.mcaLuxCoolPeelContent}>
                <p className={styles.mcaLuxCoolPeelText}>
                  At MC Aesthetics, we&apos;re McMinnville&apos;s premier
                  destination for advanced laser treatments. CoolPeel is our
                  signature service, and our team, led by experienced Nurse
                  Practitioner Melissa Cook, specializes in customizing each
                  session to your unique skin profile.
                </p>
                <p className={styles.mcaLuxCoolPeelText}>
                  We prioritize your comfort, safety, and
                  satisfaction—delivering dramatic skin improvements without
                  disrupting your busy schedule. Our Yamhill County clients
                  trust us because we combine cutting-edge technology with
                  personalized care.
                </p>
                <p className={styles.mcaLuxCoolPeelText}>
                  Experience the confidence that comes with radiant, youthful
                  skin. CoolPeel fits seamlessly into your routine with quick
                  sessions, minimal recovery, and results that speak for
                  themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.mcaLuxCoolPeelCtaSection}>
          <div className={styles.mcaLuxCoolPeelContainer}>
            <div className={styles.mcaLuxCoolPeelCtaContent}>
              <h2 className={styles.mcaLuxCoolPeelCtaTitle}>
                Ready to Transform Your Skin?
              </h2>
              <p className={styles.mcaLuxCoolPeelCtaText}>
                Experience why CoolPeel is McMinnville&apos;s most requested
                laser treatment. Book your consultation today and discover the
                power of advanced CO2 laser technology.
              </p>
              <div className={styles.mcaLuxCoolPeelCtaButtons}>
                <PrimaryButton
                  text="Schedule Consultation"
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14"
                />
                <SecondaryButton
                  text="View All Services"
                  href="/aesthetic-services"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Carousel */}
        <Carousel />
      </div>
    </CoolPeelClientWrapper>
  );
}
