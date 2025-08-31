import styles from './About.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={styles.mcaAboutPageWrapper}>
      {/* Hero Section with Main Title and Intro */}
      <section className={styles.mcaAboutHero}>
        <h1 className={styles.mcaAboutMainTitle}>Discover the Essence of MC Aesthetics: Where Beauty Meets Expertise</h1>
        <p className={styles.mcaAboutIntroText}>
          At MC Aesthetics in McMinnville, we believe beauty is an art form, crafted with precision, passion, and personalized care. Founded on the principles of innovation and inclusivity, our clinic is a sanctuary for those seeking transformative aesthetic treatments. From rejuvenating facials to advanced laser therapies, every service is designed to enhance your natural radiance and boost your confidence. Join us in celebrating the unique beauty that resides in everyone, guided by a team dedicated to your well-being and satisfaction.
        </p>
        {/* Picsum Placeholder Image for Hero */}
        <div className={styles.mcaAboutHeroImageHolder}>
          <Image
            src="https://picsum.photos/seed/abouthero/800/400"
            alt="Elegant Interior of MC Aesthetics Clinic in McMinnville Showcasing Luxurious Ambiance and Modern Equipment"
            className={styles.mcaAboutImage}
            width={800}
            height={400}
          />
          <div className={styles.mcaAboutImageBorderAccent}></div>
        </div>
      </section>

      {/* Call to Action */}
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
              MC Aesthetics was born from the vision of Melissa Cook, a passionate aesthetician who dreamed of creating a space where beauty and science harmonize. Located in the heart of McMinnville, our clinic has grown into a trusted name for aesthetic excellence. We specialize in non-invasive treatments that deliver remarkable results, all while prioritizing safety and comfort. Melissa&apos;s journey began with her own experiences in the beauty industry, inspiring her to found a clinic that empowers individuals to feel their best, inside and out.
            </p>
            <p className={styles.mcaAboutParagraph}>
              What defines us is our holistic approach—treating not just the skin, but the spirit. With a focus on education and transparency, we ensure every client understands their path to beauty. At MC Aesthetics, your story becomes part of ours, creating lasting transformations that inspire confidence and joy.
            </p>
          </div>
          {/* Picsum Placeholder Image */}
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="https://picsum.photos/seed/aboutstory/800/400"
              alt="Founder Melissa Cook of MC Aesthetics in McMinnville Sharing Her Vision for Innovative Beauty Treatments in a Serene Clinic Setting"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Melissa's Story Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Melissa&apos;s Story: The Heart Behind MC Aesthetics</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              Melissa Cook, the founder of MC Aesthetics, embarked on her journey in the world of aesthetics over a decade ago. Driven by a personal passion for skincare and a desire to help others achieve their beauty goals, Melissa pursued extensive training in advanced laser technologies and holistic treatments. Her story is one of resilience and dedication—overcoming industry challenges to create a welcoming space in McMinnville where clients can experience personalized, transformative care.
            </p>
            <p className={styles.mcaAboutParagraph}>
              Melissa&apos;s philosophy centers on empowering clients through education and innovative solutions. From her early days as a certified aesthetician to building MC Aesthetics, her commitment to excellence has shaped our clinic into a beacon of beauty and confidence. Today, Melissa continues to lead with compassion, ensuring every treatment reflects her vision of natural, radiant results.
            </p>
          </div>
          {/* Picsum Placeholder Image */}
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="https://picsum.photos/seed/melissastory/800/400"
              alt="Melissa Cook, Founder of MC Aesthetics in McMinnville, in a Professional Portrait Highlighting Her Expertise in Aesthetic Treatments"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
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
          Together, we create a supportive environment where your beauty goals are our top priority. Come see Maleah for model pricing on tox at $9/unit!
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
          {/* Picsum Placeholder Image */}
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="https://picsum.photos/seed/maleahintro/800/400"
              alt="Maleah Espinoza, Aesthetic Nurse Injector at MC Aesthetics in McMinnville, in a Professional Setting Showcasing Her Passion for Natural Enhancements"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
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
          {/* Picsum Placeholder Image */}
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="https://picsum.photos/seed/aboutvalues/800/400"
              alt="Team at MC Aesthetics in McMinnville Demonstrating Core Values Through Collaborative and Inclusive Beauty Practices"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.mcaAboutContentSection}>
        <h2 className={styles.mcaAboutSectionTitle}>Join the MC Aesthetics Family</h2>
        <div className={styles.mcaAboutContentLayout}>
          <div className={styles.mcaAboutContentText}>
            <p className={styles.mcaAboutParagraph}>
              Whether you&apos;re new to aesthetics or seeking advanced care, MC Aesthetics in McMinnville is here to guide you. Contact us today to start your journey toward timeless beauty and renewed confidence.
            </p>
          </div>
          {/* Picsum Placeholder Image */}
          <div className={styles.mcaAboutImageHolder}>
            <Image
              src="https://picsum.photos/seed/aboutclosing/800/400"
              alt="Welcoming Entrance of MC Aesthetics Clinic in McMinnville Inviting Clients to Experience Premium Beauty Services"
              className={styles.mcaAboutImage}
              width={800}
              height={400}
            />
            <div className={styles.mcaAboutImageBorderAccent}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
