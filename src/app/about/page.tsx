import type { Metadata } from 'next';
import styles from './About.module.css';
import Image from 'next/image';
import AboutClientWrapper from './AboutClientWrapper';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';

export const metadata: Metadata = {
  title: "About MC Aesthetics McMinnville | Anti-Aging & Skin Care Experts Oregon",
  description: "Discover MC Aesthetics in McMinnville, Oregon. Led by Melissa Cook, we specialize in anti-aging treatments like Botox, fillers, and CoolPeel laser with personalized care.",
  keywords: "MC Aesthetics McMinnville, anti-aging treatments Oregon, skin care McMinnville, Botox Yamhill County, aesthetic clinic Oregon, Melissa Cook aesthetics",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "About MC Aesthetics McMinnville | Anti-Aging & Skin Care Experts",
    description: "Learn about MC Aesthetics in McMinnville, OR. Specializing in anti-aging with Botox, fillers & more. Meet Melissa Cook & our team!",
    images: [
      {
        url: "/images/teamShot.jpg",
        width: 1200,
        height: 800,
        alt: "The Dedicated Team at MC Aesthetics in McMinnville, Oregon",
      },
    ],
    url: "/about",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MC Aesthetics McMinnville | Anti-Aging & Skin Care Experts",
    description: "Learn about MC Aesthetics in McMinnville, OR. Experts in anti-aging with Botox, fillers & more. Meet our team!",
    images: ["/images/teamShot.jpg"],
  },
};

export default function AboutPage() {
  return (
    <AboutClientWrapper>
      <div className={styles.mcaAboutWrapper}>
        {/* Curved Header to Hero Transition */}
        <div className={styles.mcaAboutHeaderToHeroTransition} aria-hidden="true"></div>

        {/* Hero Section */}
        <section className={styles.mcaAboutHeroBanner} role="banner">
          <div className={styles.mcaAboutHeroImageContainer}>
            <Image 
              src="/images/MCOfficeLogoOnWall.jpg"
              alt="Elegant Interior of MC Aesthetics Clinic"
              className={styles.mcaAboutHeroBackgroundImage}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className={styles.mcaAboutHeroImageOverlay}></div>
          </div>
          
          <div className={styles.mcaAboutHeroShade}></div>
          <div className={styles.mcaAboutHeroContentBox}>
            <h1 className={styles.mcaAboutHeroMainText}>Where Beauty Meets Expertise</h1>
            <p className={styles.mcaAboutHeroSubText}>
              At MC Aesthetics in McMinnville, we believe beauty is an art form, crafted with precision, passion, and personalized care.
            </p>
            <PrimaryButton text="Schedule Your Consultation" href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type" />
          </div>
        </section>

        {/* Our Story Section */}
        <section className={styles.mcaAboutContentSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutSectionTitle}>Our Story: A Legacy of Elegance</h2>
            <div className={styles.mcaAboutContentLayout}>
              <div className={styles.mcaAboutTextBlock}>
                <p className={styles.mcaAboutParagraph}>
                  MC Aesthetics was born from the vision of Melissa Cook, a passionate aesthetician and nurse practitioner who dreamed of creating a space where beauty and science harmonize. Located in the heart of McMinnville, our clinic has grown into a trusted name for aesthetic excellence.
                </p>
                <p className={styles.mcaAboutParagraph}>
                  We specialize in non-invasive and minimally invasive treatments—like expertly administered injections and fillers—that deliver remarkable, natural-looking results, all while prioritizing safety, comfort, and your overall well-being.
                </p>
                <p className={styles.mcaAboutParagraph}>
                  What defines us is our holistic approach—treating the whole person through personalized care that goes beyond the surface. At MC Aesthetics, your story becomes part of ours, creating lasting transformations that inspire confidence and joy.
                </p>
              </div>
              <div className={styles.mcaAboutVisual}>
                <Image
                  src="/images/logo5.png"
                  alt="Original Logo of MC Aesthetics McMinnville"
                  className={styles.mcaAboutImage}
                  width={600}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Melissa's Story Section */}
        <section className={styles.mcaAboutContentSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutSectionTitle}>Melissa Cook: The Heart Behind MC Aesthetics</h2>
            <div className={styles.mcaAboutContentLayout}>
              <div className={styles.mcaAboutVisual}>
                <Image
                  src="/images/melissa.png"
                  alt="Melissa Cook, Founder of MC Aesthetics"
                  className={styles.mcaAboutImage}
                  width={600}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.mcaAboutTextBlock}>
                <p className={styles.mcaAboutParagraph}>
                  Melissa Cook is a board-certified nurse practitioner with over 21 years of clinical experience and 11 years specializing in aesthetic medicine. As a second-generation McMinnville business owner, she's passionate about helping people feel better through advanced, minimally invasive treatments.
                </p>
                <p className={styles.mcaAboutParagraph}>
                  For the past six years as owner of MC Aesthetics, Melissa has built a practice rooted in trust, results, and a deep understanding of women's health and aging. Known for her skilled, gentle hands and honest communication, she's committed to helping women look refreshed—not overdone—enhancing natural beauty while prioritizing safety and precision.
                </p>
                <p className={styles.mcaAboutParagraph}>
                  Her compassionate approach empowers clients with education and expertise, making MC Aesthetics a beacon of excellence in McMinnville where beauty isn't about perfection, but about feeling empowered in your own skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.mcaAboutTeamSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutSectionTitle}>Meet Our Expert Team</h2>
            <p className={styles.mcaAboutIntroText}>
              Led by Melissa Cook, our team of certified professionals brings years of experience and a passion for aesthetics to every treatment.
            </p>
            
            <div className={styles.mcaAboutTeamGrid}>
              {/* Melissa Card */}
              <div className={styles.mcaAboutTeamCard}>
                <div className={styles.mcaAboutTeamPhotoWrapper}>
                  {/* <Image 
                    src="/images/melissa1.png"
                    alt="Melissa Cook, Founder & Lead Aesthetician"
                    className={styles.mcaAboutTeamPhoto}
                    width={400}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  /> */}
                </div>
                <div className={styles.mcaAboutTeamDetails}>
                  <h3 className={styles.mcaAboutTeamName}>Melissa Cook</h3>
                  <h4 className={styles.mcaAboutTeamTitle}>Founder & Lead Aesthetician</h4>
                  <p className={styles.mcaAboutTeamBio}>
                    Over 10 years in laser and skincare innovations, specializing in personalized treatment plans that enhance natural beauty.
                  </p>
                </div>
              </div>

              {/* Maleah Card */}
              <div className={styles.mcaAboutTeamCard}>
                <div className={styles.mcaAboutTeamPhotoWrapper}>
                  {/* <Image 
                    src="/images/maleah.jpg"
                    alt="Maleah Espinoza, Aesthetic Nurse Injector"
                    className={styles.mcaAboutTeamPhoto}
                    width={400}
                    height={500}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  /> */}
                </div>
                <div className={styles.mcaAboutTeamDetails}>
                  <h3 className={styles.mcaAboutTeamName}>Maleah Espinoza</h3>
                  <h4 className={styles.mcaAboutTeamTitle}>Aesthetic Nurse Injector</h4>
                  <p className={styles.mcaAboutTeamBio}>
                    Specializing in natural, undetectable enhancements with a warm, caring approach. Dedicated to helping you feel confident and refreshed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maleah's Story Section */}
        <section className={styles.mcaAboutContentSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutSectionTitle}>Meet Maleah Espinoza</h2>
            <div className={styles.mcaAboutContentLayout}>
              <div className={styles.mcaAboutTextBlock}>
                <p className={styles.mcaAboutParagraph}>
                  "Hi there! I'm Maleah Espinoza, an aesthetic nurse injector at MC Aesthetics. I completed my nursing education at Chemeketa Community College, and I'm excited to continue my journey by pursuing my BSN in the near future."
                </p>
                <p className={styles.mcaAboutParagraph}>
                  "What I love most about this field is that it's constantly evolving, offering endless opportunities for growth. It's incredibly rewarding to help others feel their best, and I'm thrilled to be part of that process."
                </p>
                <h3 className={styles.mcaAboutSubheading}>Fun Facts About Maleah:</h3>
                <ul className={styles.mcaAboutList}>
                  <li className={styles.mcaAboutListItem}>Going on my 4th year of being married to my middle school sweetheart</li>
                  <li className={styles.mcaAboutListItem}>I have a cute little hobby farm on 3 acres and love spending time with my animals</li>
                  <li className={styles.mcaAboutListItem}>This past summer, I traveled to Africa for a nursing internship—one of the most rewarding experiences of my life</li>
                </ul>
              </div>
              <div className={styles.mcaAboutVisual}>
                <Image
                  src="/images/maleah.jpg"
                  alt="Maleah Espinoza, Aesthetic Nurse Injector"
                  className={styles.mcaAboutImage}
                  width={600}
                  height={800}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className={styles.mcaAboutValuesSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutSectionTitle}>Our Core Values</h2>
            <div className={styles.mcaAboutValuesGrid}>
              <div className={styles.mcaAboutValueCard}>
                <h3 className={styles.mcaAboutValueTitle}>Integrity</h3>
                <p className={styles.mcaAboutValueText}>
                  We use only FDA-approved technologies and prioritize ethical practices in every treatment.
                </p>
              </div>
              <div className={styles.mcaAboutValueCard}>
                <h3 className={styles.mcaAboutValueTitle}>Innovation</h3>
                <p className={styles.mcaAboutValueText}>
                  Staying at the forefront of aesthetic medicine with cutting-edge techniques and continuous education.
                </p>
              </div>
              <div className={styles.mcaAboutValueCard}>
                <h3 className={styles.mcaAboutValueTitle}>Inclusivity</h3>
                <p className={styles.mcaAboutValueText}>
                  Creating a welcoming space where everyone feels valued, respected, and beautiful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className={styles.mcaAboutCtaSection}>
          <div className={styles.mcaAboutContainer}>
            <h2 className={styles.mcaAboutCtaTitle}>Join the MC Aesthetics Family</h2>
            <p className={styles.mcaAboutCtaText}>
              Whether you're new to aesthetics or seeking advanced care, MC Aesthetics in McMinnville is here to guide you on your journey toward timeless beauty and renewed confidence.
            </p>
            <div className={styles.mcaAboutCtaButtons}>
              <PrimaryButton text="Schedule Consultation" href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type" />
              <SecondaryButton text="View Our Services" href="/aesthetic-services" />
            </div>
            
            <div className={styles.mcaAboutTeamImageWrapper}>
              <Image
                src="/images/teamShot.jpg"
                alt="The MC Aesthetics Team in McMinnville, Oregon"
                className={styles.mcaAboutTeamImage}
                width={1200}
                height={800}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
            </div>
          </div>
        </section>
      </div>
    </AboutClientWrapper>
  );
}
