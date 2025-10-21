// src/app/laser-hair/page.tsx
import type { Metadata } from 'next';
import styles from './LaserHair.module.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Laser Hair Removal McMinnville | Elysion Technology & Membership at MC Aesthetics",
  description: "Experience effortless smoothness with Elysion Laser Hair Removal at MC Aesthetics in McMinnville, OR. Safe, comfortable treatments for all skin types. Join our exclusive membership! Book today!",
  keywords: "laser hair removal McMinnville, Elysion laser hair removal Oregon, hair removal treatments Yamhill County, smooth skin MC Aesthetics, permanent hair reduction, laser hair removal membership",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "Laser Hair Removal & Membership in McMinnville | Elysion at MC Aesthetics",
    description: "Discover silky, hair-free skin with Elysion Laser Hair Removal at MC Aesthetics in McMinnville, OR. Advanced, painless technology for lasting results! Exclusive membership available!",
    images: [
      {
        url: "/images/laserFaceHair.jpg",
        width: 800,
        height: 400,
        alt: "Laser Hair Removal Treatment on Face for Smooth Skin at MC Aesthetics McMinnville",
      },
    ],
    url: "https://www.mcaestheticsclinic.com/laser-hair",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Hair Removal in McMinnville | Elysion at MC Aesthetics",
    description: "Achieve hair-free confidence with Elysion Laser Hair Removal at MC Aesthetics, McMinnville. Painless, safe, and effective. Schedule now!",
    images: ["/images/laserFaceHair.jpg"],
  },
};

export default function LaserHairPage() {
  const bookingUrl = "https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14";

  return (
    <div className={styles.mcaLaserHairPageWrapper}>
      {/* Hero Section with Main Title and Intro */}
      <section className={styles.mcaLaserHairHero}>
        <h1 className={styles.mcaLaserHairMainTitle}>
          Embrace Effortless Elegance: Laser Hair Removal in McMinnville
        </h1>
        <p className={styles.mcaLaserHairIntroText}>
          Imagine a life free from the endless cycle of shaving, waxing, and plucking. 
          At MC Aesthetics, our Elysion Laser Hair Removal transforms this dream into reality. 
          Step into a world where smooth, silky skin is your everyday luxury. Powered by 
          cutting-edge technology, Elysion delivers precise, comfortable treatments that bid 
          farewell to unwanted hair for good. Whether it&apos;s the gentle curves of your legs 
          or the delicate contours of your face, discover the freedom and confidence that comes 
          with flawless, hair-free skin. Join us on this journey to rediscover your natural radiance.
        </p>
        
        <div className={styles.mcaLaserHairImageHolder}>
          <Image
            src="/images/laserFaceHair.jpg"
            alt="Close-up of Laser Hair Removal Treatment on Face for Smooth, Radiant Skin at MC Aesthetics"
            className={styles.mcaLaserHairImage}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className={styles.mcaLaserHairImageBorderAccent}></div>
        </div>
      </section>

      {/* Call to Action with Link */}
      <div className={styles.mcaLaserHairCallToAction}>
        <a
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type"
          className={styles.mcaLaserHairCtaText}
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOK YOUR TRANSFORMATIVE SESSION TODAY
        </a>
      </div>

      {/* MEMBERSHIP SECTION - NEW */}
      <section id="membership" className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>
          Exclusive Membership: Your Path to Lasting Smoothness
        </h2>
        
        <div className={styles.mcaLaserHairMembershipHighlight}>
          <div className={styles.mcaLaserHairGalleryGrid}>
            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserHairMembership.jpg"
                  alt="Full body laser hair removal treatment"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>Full-Body Confidence</p>
            </div>

            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserFaceHair.jpg"
                  alt="Facial laser hair removal treatment"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>Flawless Facial Smoothness</p>
            </div>

            <div className={styles.mcaLaserHairGalleryItem}>
              <div className={styles.mcaLaserHairImageHolder}>
                <Image
                  src="/images/laserArmpit.jpg"
                  alt="Underarm laser hair removal treatment"
                  fill
                  className={styles.mcaLaserHairImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.mcaLaserHairImageBorderAccent}></div>
              </div>
              <p className={styles.mcaLaserHairGalleryCaption}>Effortless Underarm Care</p>
            </div>
          </div>
        </div>

        <div className={styles.mcaLaserHairMembershipCard}>
          <h3 className={styles.mcaLaserHairCtaText}>
            1-Hour Laser Hair Removal Membership
          </h3>
          <p className={styles.mcaLaserHairPriceTag}>$299 / Month</p>
          
          <ul className={styles.mcaLaserHairListContainer}>
            <li className={styles.mcaLaserHairListItem}>
              1 full hour of laser hair removal per session
            </li>
            <li className={styles.mcaLaserHairListItem}>
              6-month minimum commitment for best results
            </li>
            <li className={styles.mcaLaserHairListItem}>
              Cover 3-4 body areas in one hour (face, underarms, legs—customize to your needs!)
            </li>
            <li className={styles.mcaLaserHairListItem}>
              Professional, pain-free treatments with lasting smoothness
            </li>
          </ul>
          
          <p className={styles.mcaLaserHairParagraph}>
            This membership is perfect if you&apos;re ready to invest in yourself. 
            Imagine the time you will save—no more daily shaving routines. 
            Commit to 6 months and watch the transformation!
          </p>
          
          <a 
            href={bookingUrl}
            className={styles.mcaLaserHairCtaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up for Membership
          </a>
        </div>

        {/* Membership Benefits */}
        <div className={styles.mcaLaserHairBenefitsGrid}>
          <div className={styles.mcaLaserHairBenefitCard}>
            <div className={styles.mcaLaserHairIconWrapper}>
              <span className={styles.mcaLaserHairIcon}>💰</span>
            </div>
            <h3 className={styles.mcaLaserHairBenefitTitle}>Affordable & Flexible</h3>
            <p className={styles.mcaLaserHairBenefitText}>
              Pay monthly, customize sessions, and see real results without breaking the bank.
            </p>
          </div>

          <div className={styles.mcaLaserHairBenefitCard}>
            <div className={styles.mcaLaserHairIconWrapper}>
              <span className={styles.mcaLaserHairIcon}>👩‍⚕️</span>
            </div>
            <h3 className={styles.mcaLaserHairBenefitTitle}>Expert Care</h3>
            <p className={styles.mcaLaserHairBenefitText}>
              Trained professionals using state-of-the-art Elysion technology for safe, effective treatments.
            </p>
          </div>

          <div className={styles.mcaLaserHairBenefitCard}>
            <div className={styles.mcaLaserHairIconWrapper}>
              <span className={styles.mcaLaserHairIcon}>✨</span>
            </div>
            <h3 className={styles.mcaLaserHairBenefitTitle}>Lasting Results</h3>
            <p className={styles.mcaLaserHairBenefitText}>
              Up to 90% hair reduction after consistent treatments—permanent smoothness is within reach!
            </p>
          </div>
        </div>
      </section>

      {/* Elysion Technology Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>
          The Magic of Elysion: Revolutionizing Hair Removal
        </h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              At the heart of our laser hair removal services lies the Elysion system—a beacon 
              of innovation in aesthetic care. This advanced diode laser technology gently targets 
              hair follicles, disrupting their growth cycle while safeguarding your skin&apos;s 
              natural beauty. The result? A dramatic reduction in hair regrowth, often leading to 
              permanent smoothness that feels like a fresh start.
            </p>
            <p className={styles.mcaLaserHairParagraph}>
              What sets Elysion apart is its versatility and comfort. Safe for all skin types, 
              it glides effortlessly over any area, from broad expanses like the back to intimate 
              zones. With built-in cooling for a virtually painless experience, each session is a 
              step toward liberation from traditional hair removal hassles. At MC Aesthetics in 
              McMinnville, we&apos;re not just removing hair; we&apos;re unveiling the confident, 
              carefree you.
            </p>
          </div>
          
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/laserLegs.jpg"
              alt="Laser Hair Removal Treatment on Legs for Silky, Hair-Free Results at MC Aesthetics"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>
          Unlock the Benefits: Why Elysion is Your Path to Freedom
        </h2>
        <p className={styles.mcaLaserHairIntroParagraph}>
          Choosing Elysion at MC Aesthetics means embracing a smoother, more empowered life. 
          Here&apos;s how this transformative treatment elevates your beauty routine:
        </p>
        <ul className={styles.mcaLaserHairListContainer}>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Swift, Lasting Results:</strong> Witness a visible transformation from the 
            very first session, with progressive reduction leading to enduring smoothness that 
            redefines your daily glow.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Adaptable to Every Curve:</strong> From legs and arms to bikini lines and 
            beyond, Elysion&apos;s precision ensures flawless coverage, tailored to your body&apos;s 
            unique contours.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Unmatched Safety and Serenity:</strong> FDA-approved and equipped with soothing 
            cooling tech, Elysion prioritizes your comfort, making each treatment a relaxing escape.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Inclusive for All Skin Tones:</strong> Our technology welcomes every skin type, 
            breaking barriers to deliver inclusive, effective care that celebrates diversity.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Seamless Integration into Life:</strong> With no downtime, step out of our clinic 
            and straight back into your world, radiating confidence without interruption.
          </li>
        </ul>
        <p className={styles.mcaLaserHairParagraph}>
          Elysion isn&apos;t just a treatment—it&apos;s a celebration of your natural beauty, 
          freeing you to live boldly and beautifully.
        </p>
      </section>

      {/* Preparation Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>
          Prepare for Your Journey to Smoothness
        </h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              To make your Elysion experience at MC Aesthetics truly magical, a touch of preparation 
              goes a long way. Shave the area 24 hours prior to focus the laser&apos;s energy precisely. 
              Shield your skin from the sun for two weeks beforehand, avoiding tans that could dim the 
              results. Stay hydrated, skip the caffeine, and arrive with clean, product-free skin. 
              These simple steps set the stage for optimal, radiant outcomes.
            </p>
          </div>
          
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/smoothLegs.jpg"
              alt="Smooth, Hair-Free Legs After Preparation for Laser Hair Removal at MC Aesthetics in McMinnville"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Post-Treatment Care Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>
          Nurture Your Glow: Aftercare Essentials
        </h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              Post-treatment, let your skin bask in gentle care to preserve its newfound silkiness. 
              A cool compress soothes any mild redness, while sunscreen guards against the sun&apos;s 
              rays. Pause on heat-inducing activities for a day, allowing your skin to revel in its 
              transformation. Our team is here to guide you every step, ensuring your path to lasting 
              smoothness is as effortless as the results.
            </p>
            <p className={styles.mcaLaserHairParagraph}>
              Ready to embark on this empowering adventure? Contact MC Aesthetics in McMinnville for 
              a consultation and step into a hair-free future.
            </p>
          </div>
          
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/afterCareLaser.jpg"
              alt="Post-Laser Hair Removal Aftercare Routine for Glowing, Smooth Skin at MC Aesthetics"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.mcaLaserHairFinalCta}>
        <h2 className={styles.mcaLaserHairCtaText}>
          Ready to Transform Your Skin?
        </h2>
        <p className={styles.mcaLaserHairParagraph}>
          Join hundreds of satisfied clients who have discovered the freedom of hair-free living.
        </p>
        <a 
          href={bookingUrl}
          className={styles.mcaLaserHairCtaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Consultation
        </a>
      </section>
    </div>
  );
}