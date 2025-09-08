"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './CoolPeel.module.css'; // Import the new module CSS

const CoolPeelPage = () => {
  return (
    <div className={styles.mcaCoolPeelPageWrapper}>
      <Head>
        <title>CoolPeel CO2 Laser | Premier Skin Rejuvenation in McMinnville - Our Favorite Skin Treatment</title>
        <meta name="description" content="Discover CoolPeel CO2 Laser, our top ROI service for radiant, youthful skin. Minimal downtime, maximum results." />
        <meta name="keywords" content="coolpeel co2 laser, skin rejuvenation, mcminnville aesthetics, high roi treatment" />
        {/* Add schema markup here if desired */}
      </Head>

      {/* Curved Header to Hero Transition */}
      <div className={styles.mcaCoolPeelHeaderToHeroTransition} />

      {/* Hero Section with Background Image */}
      <section className={styles.mcaCoolPeelHero}>
        <div className={styles.mcaCoolPeelHeroBackgroundWrapper}>
          <div className={styles.mcaCoolPeelHeroImageContainer}>
            <Image
              src="/images/CO2Coolpeel.jpg"
              alt="CoolPeel CO2 Laser Treatment Background"
              fill
              className={styles.mcaCoolPeelHeroBackgroundImage}
            />
          </div>
          <div className={styles.mcaCoolPeelHeroImageOverlay} />
        </div>
        <h1 className={styles.mcaCoolPeelMainTitle}>CoolPeel CO2 Laser</h1>
        <p className={styles.mcaCoolPeelIntroText}>
          Unlock radiant, youthful skin with our #1 high-impact treatment – minimal downtime, and results that deliver big time!
        </p>
        <div className={styles.mcaCoolPeelCallToAction}>
          <a 
            href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
            className={styles.mcaCoolPeelCtaText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Session Now
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Overview of CoolPeel CO2 Laser</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel CO2 Laser is a revolutionary skin resurfacing treatment that delivers the powerful benefits of traditional CO2 laser technology with significantly less downtime. Unlike older CO2 lasers that required weeks of recovery due to intense heat damage, CoolPeel uses short, controlled bursts of energy to target the superficial layers of skin, removing damaged tissue while stimulating collagen production. At MC Aesthetics in McMinnville, we use CoolPeel to address a variety of skin concerns, from fine lines to sun damage, giving you a refreshed, youthful glow with results that keep improving over time. It’s the perfect balance of efficacy and convenience for busy individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Treats Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>What CoolPeel Treats</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Fine lines and wrinkles</li>
              <li className={styles.mcaCoolPeelListItem}>Sun damage and age spots</li>
              <li className={styles.mcaCoolPeelListItem}>Uneven skin texture</li>
              <li className={styles.mcaCoolPeelListItem}>Enlarged pores</li>
              <li className={styles.mcaCoolPeelListItem}>Acne scars</li>
              <li className={styles.mcaCoolPeelListItem}>Dull or tired-looking skin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Benefits of CoolPeel</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel targets the epidermis and dermis to stimulate your body&apos;s natural healing powers. Here&apos;s what it can do:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Powerful skin resurfacing with minimal downtime (often just 1-3 days)</li>
              <li className={styles.mcaCoolPeelListItem}>Stimulates collagen for long-term skin firmness</li>
              <li className={styles.mcaCoolPeelListItem}>Improves skin tone and texture in just one session</li>
              <li className={styles.mcaCoolPeelListItem}>Customizable to your specific skin needs</li>
              <li className={styles.mcaCoolPeelListItem}>Safe for most skin types with proper consultation</li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Smooths Out Texture and Fine Lines:</strong> Vaporizes damaged cells, boosting collagen. Erase wrinkles and crow&apos;s feet – like ditching years of squinting at HR spreadsheets!
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Fades Pigmentation and Sun Damage:</strong> Breaks down melanin for even tone. Reset those sunny Yamhill County regrets.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Minimizes Acne Scars and Pores:</strong> Resurfaces for refined skin, plus helps with active acne.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Boosts Overall Glow and Firmness:</strong> Ramps up collagen and elastin for tighter, radiant skin – a natural facelift!
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Treats Other Concerns:</strong> Great for stretch marks, rough patches, or mild rosacea. Results vary; consult for your skin type.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Who is a Good Candidate?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel is ideal for adults seeking to improve skin texture, tone, and signs of aging without the lengthy recovery of traditional lasers. It’s best for those with mild to moderate skin concerns like fine lines, sun damage, or acne scarring. A consultation at MC Aesthetics will confirm if CoolPeel matches your skin type and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Not Candidacy Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Who Might Not Be a Candidate?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              This treatment may not be suitable for individuals with active skin infections, certain autoimmune conditions, or very dark skin tones due to pigmentation risks. Pregnant or breastfeeding individuals should postpone treatment. We’ll evaluate your skin and medical history to ensure safety.
            </p>
          </div>
        </div>
      </section>

      {/* Results Duration Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>How Long Do Results Last?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              You’ll notice smoother, brighter skin within a week after treatment as the superficial layer peels away. Collagen production continues for months, enhancing firmness and texture over time. For optimal results, a series of 2-3 sessions spaced 4-6 weeks apart is often recommended, with maintenance treatments every 6-12 months.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>What to Expect During Treatment</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Your CoolPeel session at MC Aesthetics begins with a thorough skin assessment and discussion of your goals. The treatment itself takes about 15-30 minutes, depending on the area. You might feel a mild stinging sensation, but we ensure comfort with cooling techniques or numbing cream if needed. Post-treatment, your skin may feel like a mild sunburn with slight redness or flaking for 1-3 days. Most clients resume normal activities quickly, following our tailored aftercare plan. Full results develop over weeks as new, healthy skin emerges.
            </p>
          </div>
          <div className={styles.mcaCoolPeelImageHolder}>
            <Image
              src="/images/coolpeel2.jpg"
              alt="CoolPeel Treatment Results"
              width={600}
              height={400}
              className={styles.mcaCoolPeelImage}
            />
            <div className={styles.mcaCoolPeelImageBorderAccent} />
            <div className={styles.mcaCoolPeelImageBorderAccentTop} />
          </div>
        </div>
      </section>

      {/* Treatment Process Section (Expanded Step-by-Step) */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>How Does the Treatment Work? (Step-by-Step)</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Think of this as your virtual walkthrough – quick, comfy, and transformative:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Prep Time:</strong> Numb with topical cream; avoid sun/retinols beforehand.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>The Zap Session:</strong> Laser glides over skin – mild pinpricks, thanks to cool tech.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Immediate Aftermath:</strong> Pink and tingly, like a mild sunburn.
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Recovery and Results:</strong> 1-3 days downtime; full glow in 3-6 months. Sunscreen is key!
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Care Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Pre-Treatment Care</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Avoid sun exposure and tanning for at least 2 weeks before treatment.</li>
              <li className={styles.mcaCoolPeelListItem}>Discontinue retinoids or exfoliating products 5-7 days prior.</li>
              <li className={styles.mcaCoolPeelListItem}>Inform us of any skin conditions or medications during consultation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Post-Care Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Post-Treatment Care</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Keep skin hydrated with recommended moisturizers.</li>
              <li className={styles.mcaCoolPeelListItem}>Avoid direct sun exposure and use SPF 30+ religiously for at least 4 weeks.</li>
              <li className={styles.mcaCoolPeelListItem}>Don&apos;t pick at flaking skin—let it shed naturally.</li>
              <li className={styles.mcaCoolPeelListItem}>Skip harsh skincare products for a few days post-treatment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Tips for Best Results</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Pair CoolPeel with a medical-grade skincare routine for enhanced results—ask us for recommendations!</li>
              <li className={styles.mcaCoolPeelListItem}>Schedule treatments during cooler months if possible to minimize sun exposure risks.</li>
              <li className={styles.mcaCoolPeelListItem}>Stay consistent with follow-up sessions for cumulative benefits.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Why Choose MC Aesthetics for CoolPeel?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              At MC Aesthetics, we’re committed to cutting-edge treatments that fit into your life. CoolPeel CO2 Laser is a game-changer, and our team, led by Nurse Practitioner Melissa Cook, is trained to customize each session to your unique skin profile. We prioritize your comfort and safety, offering detailed guidance before and after treatment. Our McMinnville clients love how CoolPeel delivers dramatic improvements without sidelining their schedules—because we believe glowing skin shouldn’t come at the cost of downtime.
            </p>
            <p className={styles.mcaCoolPeelParagraph}>
              Balancing work, family, and self-care? CoolPeel fits right in – quick sessions, minimal disruption, and confidence-boosting results. Ditch the concealer and own that natural radiance while tackling life.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        {/* <h2 className={styles.mcaCoolPeelSectionTitle}>What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">"CoolPeel transformed my skin – absolutely amazing!"</p>
            <p className="mt-4 font-bold">- Sarah K., McMinnville</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">"Best addition to my glow-up routine."</p>
            <p className="mt-4 font-bold">- Mike T., Client</p>
          </div>
        </div> */}
      </section>

      {/* CTA Footer */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Ready for Your CoolPeel Transformation?</h2>
        <div className={styles.mcaCoolPeelCallToAction}>
          <a 
            href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
            className={styles.mcaCoolPeelCtaText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoolPeelPage;