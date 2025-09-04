import styles from './LaserHair.module.css';
import Image from 'next/image';

export default function LaserHairPage() {
  return (
    <div className={styles.mcaLaserHairPageWrapper}>
      {/* Hero Section with Main Title and Intro */}
      <section className={styles.mcaLaserHairHero}>
        <h1 className={styles.mcaLaserHairMainTitle}>Embrace Effortless Elegance: Laser Hair Removal in McMinnville</h1>
        <p className={styles.mcaLaserHairIntroText}>
          Imagine a life free from the endless cycle of shaving, waxing, and plucking. At MC Aesthetics, our Elysion Laser Hair Removal transforms this dream into reality. Step into a world where smooth, silky skin is your everyday luxury. Powered by cutting-edge technology, Elysion delivers precise, comfortable treatments that bid farewell to unwanted hair for good. Whether it&apos;s the gentle curves of your legs or the delicate contours of your face, discover the freedom and confidence that comes with flawless, hair-free skin. Join us on this journey to rediscover your natural radiance.
        </p>
        {/* Updated: Laser Face Hair Image on Top */}
        <div className={styles.mcaLaserHairImageHolder}>
          <Image
            src="/images/laserFaceHair.jpg"
            alt="Close-up of Laser Hair Removal Treatment on Face for Smooth, Radiant Skin at MC Aesthetics"
            className={styles.mcaLaserHairImage}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Prioritize for hero image performance
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

      {/* Elysion Technology Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>The Magic of Elysion: Revolutionizing Hair Removal</h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              At the heart of our laser hair removal services lies the Elysion system—a beacon of innovation in aesthetic care. This advanced diode laser technology gently targets hair follicles, disrupting their growth cycle while safeguarding your skin&apos;s natural beauty. The result? A dramatic reduction in hair regrowth, often leading to permanent smoothness that feels like a fresh start.
            </p>
            <p className={styles.mcaLaserHairParagraph}>
              What sets Elysion apart is its versatility and comfort. Safe for all skin types, it glides effortlessly over any area, from broad expanses like the back to intimate zones. With built-in cooling for a virtually painless experience, each session is a step toward liberation from traditional hair removal hassles. At MC Aesthetics in McMinnville, we&apos;re not just removing hair; we&apos;re unveiling the confident, carefree you.
            </p>
          </div>
          {/* Updated: Laser Legs Image */}
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/laserLegs.jpg"
              alt="Laser Hair Removal Treatment on Legs for Silky, Hair-Free Results at MC Aesthetics"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy" // Lazy load for performance
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Unlock the Benefits: Why Elysion is Your Path to Freedom</h2>
        <p className={styles.mcaLaserHairIntroParagraph}>
          Choosing Elysion at MC Aesthetics means embracing a smoother, more empowered life. Here&apos;s how this transformative treatment elevates your beauty routine:
        </p>
        <ul className={styles.mcaLaserHairListContainer}>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Swift, Lasting Results:</strong> Witness a visible transformation from the very first session, with progressive reduction leading to enduring smoothness that redefines your daily glow.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Adaptable to Every Curve:</strong> From legs and arms to bikini lines and beyond, Elysion&apos;s precision ensures flawless coverage, tailored to your body&apos;s unique contours.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Unmatched Safety and Serenity:</strong> FDA-approved and equipped with soothing cooling tech, Elysion prioritizes your comfort, making each treatment a relaxing escape.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Inclusive for All Skin Tones:</strong> Our technology welcomes every skin type, breaking barriers to deliver inclusive, effective care that celebrates diversity.
          </li>
          <li className={styles.mcaLaserHairListItem}>
            <strong>Seamless Integration into Life:</strong> With no downtime, step out of our clinic and straight back into your world, radiating confidence without interruption.
          </li>
        </ul>
        <p className={styles.mcaLaserHairParagraph}>
          Elysion isn&apos;t just a treatment—it&apos;s a celebration of your natural beauty, freeing you to live boldly and beautifully.
        </p>
      </section>

      {/* Preparation Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Prepare for Your Journey to Smoothness</h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              To make your Elysion experience at MC Aesthetics truly magical, a touch of preparation goes a long way. Shave the area 24 hours prior to focus the laser&apos;s energy precisely. Shield your skin from the sun for two weeks beforehand, avoiding tans that could dim the results. Stay hydrated, skip the caffeine, and arrive with clean, product-free skin. These simple steps set the stage for optimal, radiant outcomes.
            </p>
          </div>
          {/* Local Image for Preparation */}
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/smoothLegs.jpg"
              alt="Smooth, Hair-Free Legs After Preparation for Laser Hair Removal at MC Aesthetics in McMinnville"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: 'contain' }}  // Ensures full image visibility
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Post-Treatment Care Section */}
      <section className={styles.mcaLaserHairContentSection}>
        <h2 className={styles.mcaLaserHairSectionTitle}>Nurture Your Glow: Aftercare Essentials</h2>
        <div className={styles.mcaLaserHairContentLayout}>
          <div className={styles.mcaLaserHairContentText}>
            <p className={styles.mcaLaserHairParagraph}>
              Post-treatment, let your skin bask in gentle care to preserve its newfound silkiness. A cool compress soothes any mild redness, while sunscreen guards against the sun&apos;s rays. Pause on heat-inducing activities for a day, allowing your skin to revel in its transformation. Our team is here to guide you every step, ensuring your path to lasting smoothness is as effortless as the results.
            </p>
            <p className={styles.mcaLaserHairParagraph}>
              Ready to embark on this empowering adventure? Contact MC Aesthetics in McMinnville for a consultation and step into a hair-free future.
            </p>
          </div>
          {/* Local Image for Post-Treatment */}
          <div className={styles.mcaLaserHairImageHolder}>
            <Image
              src="/images/afterCareLaser.jpg"
              alt="Post-Laser Hair Removal Aftercare Routine for Glowing, Smooth Skin at MC Aesthetics"
              className={styles.mcaLaserHairImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: 'contain' }}  // Ensures full image visibility
            />
            <div className={styles.mcaLaserHairImageBorderAccent}></div>
          </div>
        </div>
      </section>
    </div>
  );
}