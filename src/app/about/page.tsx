import styles from './About.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={styles.mcaAboutPageWrapper}>
      {/* Curved Transition to Hero - Added for pronounced curve */}
      <div className={styles.mcaAboutHeaderToHeroTransition}></div>

      {/* Hero Section with Main Title and Intro */}
      <section className={styles.mcaAboutHero}>
        <h1 className={styles.mcaAboutMainTitle}>Discover the Essence of MC Aesthetics: Where Beauty Meets Expertise</h1>
        <p className={styles.mcaAboutIntroText}>
          At MC Aesthetics in McMinnville, we believe beauty is an art form, crafted with precision, passion, and personalized care.
        </p>
        {/* Local Image for Hero - Ensured visibility on mobile with higher z-index */}
        <div className={styles.mcaAboutHeroImageHolder}>
          <Image
            src="/images/MCOfficeLogoOnWall.jpg"
            alt="Elegant Interior of MC Aesthetics Clinic in McMinnville Showcasing Luxurious Ambiance and Modern Equipment"
            className={styles.mcaAboutImage}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // Added for faster mobile loading
          />
          <div className={styles.mcaAboutImageBorderAccent}></div>
          <div className={styles.mcaAboutImageBorderAccentTop}></div>
        </div>
      </section>

      {/* Call to Action - Reduced margin to minimize white space */}
      <div className={styles.mcaAboutCallToAction}>
        <a
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type"
          className={styles.mcaAboutCtaText}
          target="_blank"
          rel="noopener noreferrer"
        >
          SCHEDULE YOUR PERSONALIZED CONSULTATION TODAY
        </a>
      </div>

      {/* Our Story Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Our Story: A Legacy of Elegance and Innovation</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              MC Aesthetics was born from the vision of Melissa Cook, a passionate aesthetician and nurse practitioner who dreamed of creating a space where beauty and science harmonize. Located in the heart of McMinnville, our clinic has grown into a trusted name for aesthetic excellence. We specialize in non-invasive and minimally invasive treatments—like expertly administered injections and fillers—that deliver remarkable, natural-looking results, all while prioritizing safety, comfort, and your overall well-being. Melissa&apos;s journey began with her own experiences in the beauty industry, inspiring her to found a clinic that empowers individuals to feel their best, inside and out.
            </p>
            <p className={styles.mcaAboutParagraph}>
              What defines us is our holistic approach—treating the whole person through personalized care that goes beyond the surface. With a focus on education and transparency, we ensure every client understands their tailored path to beauty, whether it&apos;s through gentle fillers to restore volume or non-invasive laser therapies to rejuvenate your glow. At MC Aesthetics, your story becomes part of ours, creating lasting transformations that inspire confidence, joy, and that &quot;I woke up like this&quot; vibe.
            </p>
          </div>
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="/images/logo5.png"
              alt="Original Logo Used by Melissa Cook in the Early Days of MC Aesthetics McMinnville, Representing the Legacy of Elegance and Innovation"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
            <div className={styles.mcaAboutImageBorderAccentTop}></div>
          </div>
        </div>
      </section>

      {/* Melissa's Story Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Melissa&apos;s Story: The Heart Behind MC Aesthetics</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              Melissa Cook, entrepreneur and founder of MC Aesthetics, is a second-generation McMinnville business owner—her dad founded RB Rubber Products, inspiring her own dreams of innovation and community impact. As a board-certified nurse practitioner with over 21 years of clinical experience spanning primary care, reproductive and women&apos;s health, and 11 years in aesthetic medicine, she&apos;s passionate about helping people feel better through advanced, minimally invasive options like injections and fillers, alongside holistic treatments that blend science with self-care. Her journey reflects resilience, overcoming challenges to build a welcoming space for personalized, transformative care that boosts confidence and celebrates natural beauty.
            </p>
            <p className={styles.mcaAboutParagraph}>
              For the past six years as owner of MC Aesthetics, Melissa has built a practice rooted in trust, results, and a deep understanding of women&apos;s health and aging—ensuring every treatment delivers radiant, natural results that look refreshed, not overdone. Known for her skilled, gentle hands, honest communication, and commitment to advanced training, her compassionate approach empowers clients with education and precision in this niche medical specialty. This shapes our clinic into a beacon of excellence and self-assurance in McMinnville, where beauty isn&apos;t about perfection, but about feeling empowered in your own skin.
            </p>
          </div>
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="/images/melissa.png"
              alt="Melissa Cook, Founder of MC Aesthetics in McMinnville, in a Full-Body Portrait Holding a Sign, Highlighting Her Expertise in Aesthetic Treatments"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
            <div className={styles.mcaAboutImageBorderAccentTop}></div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Meet Our Expert Team: Dedicated to Your Beauty Journey</h2>
        <p className={styles.mcaAboutIntroParagraph}>
          Led by Melissa Cook, our team of certified professionals brings years of experience and a passion for aesthetics to every treatment. Here&apos;s a glimpse into the experts who make MC Aesthetics exceptional:
        </p>
        <ul className={styles.mcaAboutListContainer}>
          <li className={styles.mcaAboutListItem}>
            <strong>Melissa Cook:</strong> Founder and Lead Aesthetician with over 10 years in laser and skincare innovations, specializing in personalized treatment plans.
          </li>
          <li className={styles.mcaAboutListItem}>
            <strong>Maleah Espinoza:</strong> Aesthetic Nurse Injector who completed her nursing education at Chemeketa Community College and is pursuing her BSN. She has a natural &quot;eye&quot; for aesthetics and a warm, caring personality, specializing in natural, undetectable enhancements to help you feel confident and refreshed while maintaining your unique beauty.
          </li>
        </ul>
        <p className={styles.mcaAboutParagraph}>
          <br/>
        </p>
      </section>

      {/* Maleah's Introduction Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Introducing Maleah Espinoza: Our Talented Aesthetic Nurse Injector</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              &quot;Hi there! I&apos;m Maleah Espinoza, an aesthetic nurse injector at MC Aesthetics. I completed my nursing education at Chemeketa Community College, and I&apos;m excited to continue my journey by pursuing my BSN in the near future. Aesthetic nursing has always been a dream of mine, and I&apos;m so glad I chose this path! What I love most about this field is that it&apos;s constantly evolving, offering endless opportunities for growth and knowledge. It&apos;s incredibly rewarding to help others feel their best, and I&apos;m thrilled to be part of that process. I specialize in natural, undetectable enhancements, and my goal is to help you feel confident and refreshed while maintaining your unique beauty 🤍&quot;
            </p>
            <p className={styles.mcaAboutParagraph}>
              Here are some fun facts about Maleah:
            </p>
            <ul className={styles.mcaAboutListContainer}>
              <li className={styles.mcaAboutListItem}>
                I&apos;m going on my 4th year of being married to my middle school sweetheart.
              </li>
              <li className={styles.mcaAboutListItem}>
                I have a cute little hobby farm on 3 acres and love spending time with my animals.
              </li>
              <li className={styles.mcaAboutListItem}>
                This past summer, I had the opportunity to travel to Africa for a nursing internship, and it was hands down one of the most rewarding experiences of my life.
              </li>
            </ul>
            <p className={styles.mcaAboutParagraph}>
              Thank you for following Maleah on this journey! She&apos;s excited to see what this year brings.
            </p>
          </div>
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="/images/maleah.png"
              alt="Maleah Espinoza, Aesthetic Nurse Injector at MC Aesthetics in McMinnville, in a Professional Setting Showcasing Her Passion for Natural Enhancements"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
            <div className={styles.mcaAboutImageBorderAccentTop}></div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Our Core Values: Guiding Principles for Exceptional Care</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              Integrity, innovation, and inclusivity form the foundation of MC Aesthetics. We use only FDA-approved technologies and prioritize ethical practices to deliver safe, effective results. Our commitment to sustainability and community involvement reflects our dedication to a better world.
            </p>
          </div>
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="/images/melissa1.png"
              alt="Melissa Cook and Team at MC Aesthetics in McMinnville Demonstrating Core Values Through Collaborative and Inclusive Beauty Practices"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
            <div className={styles.mcaAboutImageBorderAccentTop}></div>
          </div>
        </div>
      </section>

      {/* Closing Section - Now fully complete */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Join the MC Aesthetics Family</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              Whether you&apos;re new to aesthetics or seeking advanced care, MC Aesthetics in McMinnville is here to guide you. Contact us today to start your journey toward timeless beauty and renewed confidence.
            </p>
          </div>
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="/images/teamShot.jpg"
              alt="Welcoming Entrance of MC Aesthetics Clinic in McMinnville Inviting Clients to Experience Premium Beauty Services"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
            <div className={styles.mcaAboutImageBorderAccentTop}></div>
          </div>
        </div>
      </section>
    </div>
  );
}