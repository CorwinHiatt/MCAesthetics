"use client";

import Head from 'next/head';
import Image from 'next/image';
import styles from './CoolPeel.module.css'; // Import the new module CSS

const CoolPeelPage = () => {
  return (
    <div className={styles.mcaCoolPeelPageWrapper}>
      <Head>
        <title>CoolPeel CO2 Laser McMinnville Oregon | Best Laser Facial Treatment | MC Aesthetics</title>
        <meta name="description" content="Experience CoolPeel CO2 laser facials in McMinnville, Oregon at MC Aesthetics. Our #1 ROI treatment for wrinkle reduction, sun damage repair, and skin rejuvenation with minimal downtime." />
        <meta name="keywords" content="CoolPeel McMinnville, CO2 laser facial Oregon, laser skin resurfacing McMinnville, CoolPeel laser treatment Yamhill County, fractional CO2 laser McMinnville, anti-aging laser Oregon, minimal downtime laser facial, skin rejuvenation McMinnville" />
        <link rel="canonical" href="https://mcaesthetics.com/coolpeel-laser-mcminnville" />
        <meta property="og:title" content="CoolPeel CO2 Laser Facials McMinnville Oregon | MC Aesthetics" />
        <meta property="og:description" content="Transform your skin with CoolPeel laser facials in McMinnville. Minimal downtime, maximum results for wrinkles, sun damage & texture." />
        <meta name="geo.region" content="US-OR" />
        <meta name="geo.placename" content="McMinnville" />
        <meta name="geo.position" content="45.2101;-123.1987" />
        <meta name="ICBM" content="45.2101, -123.1987" />
      </Head>

      {/* Curved Header to Hero Transition */}
      <div className={styles.mcaCoolPeelHeaderToHeroTransition} />

      {/* Hero Section with Background Image */}
      <section className={styles.mcaCoolPeelHero}>
        <div className={styles.mcaCoolPeelHeroBackgroundWrapper}>
          <div className={styles.mcaCoolPeelHeroImageContainer}>
            <Image
              src="/images/CO2Coolpeel.jpg"
              alt="CoolPeel CO2 laser facial treatment McMinnville Oregon before and after results"
              fill
              className={styles.mcaCoolPeelHeroBackgroundImage}
            />
          </div>
          <div className={styles.mcaCoolPeelHeroImageOverlay} />
        </div>
        <h1 className={styles.mcaCoolPeelMainTitle}>CoolPeel CO2 Laser Facials in McMinnville, Oregon</h1>
        <p className={styles.mcaCoolPeelIntroText}>
          Experience McMinnville&apos;s premier CoolPeel laser treatment – our #1 ROI service for radiant, youthful skin with minimal downtime and maximum results!
        </p>
        <div className={styles.mcaCoolPeelCallToAction}>
          <a 
            href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
            className={styles.mcaCoolPeelCtaText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your CoolPeel Session Now
          </a>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>What is CoolPeel CO2 Laser Treatment?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel CO2 laser is McMinnville&apos;s most advanced fractional laser skin resurfacing treatment, delivering powerful anti-aging results with minimal downtime. Unlike traditional CO2 lasers that required weeks of recovery, our CoolPeel technology at MC Aesthetics uses controlled, cool energy bursts to target damaged skin layers while stimulating natural collagen production. This revolutionary laser facial treatment addresses fine lines, sun damage, and skin texture concerns throughout Yamhill County, giving you a refreshed, youthful glow that continues improving over time.
            </p>
          </div>
        </div>
      </section>

      {/* Treats Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Skin Concerns CoolPeel Treats in McMinnville</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Our CoolPeel laser facial treatments in McMinnville effectively address:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Fine lines and wrinkles around eyes and mouth</li>
              <li className={styles.mcaCoolPeelListItem}>Sun damage and age spots from Oregon outdoor activities</li>
              <li className={styles.mcaCoolPeelListItem}>Uneven skin texture and rough patches</li>
              <li className={styles.mcaCoolPeelListItem}>Enlarged pores and blackheads</li>
              <li className={styles.mcaCoolPeelListItem}>Acne scars and post-inflammatory hyperpigmentation</li>
              <li className={styles.mcaCoolPeelListItem}>Dull, tired-looking skin lacking radiance</li>
              <li className={styles.mcaCoolPeelListItem}>Mild skin laxity and loss of firmness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Why Choose CoolPeel Laser Treatment in McMinnville?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel targets both the epidermis and dermis to stimulate your body&apos;s natural healing and collagen production. Here&apos;s why McMinnville clients love this treatment:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Minimal Downtime:</strong> Unlike traditional CO2 lasers, most clients return to work in 1-3 days
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Long-term Collagen Stimulation:</strong> Results continue improving for months after treatment
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Immediate Skin Improvement:</strong> Smoother texture and brighter tone visible within one week
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Customizable Treatment:</strong> Tailored to your specific skin concerns and Fitzpatrick skin type
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Safe for Most Skin Types:</strong> Advanced technology suitable for various skin tones with proper consultation
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Smooths Fine Lines and Wrinkles:</strong> Vaporizes damaged cells while boosting collagen production – perfect for erasing years of Oregon sun exposure!
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Fades Sun Damage and Pigmentation:</strong> Breaks down excess melanin for even skin tone throughout Yamhill County&apos;s sunny seasons
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Minimizes Acne Scars and Large Pores:</strong> Resurfaces skin for refined texture and helps with active acne concerns
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Natural Skin Tightening:</strong> Stimulates elastin production for firmer, more youthful-looking skin
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Am I a Good Candidate for CoolPeel in McMinnville?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel laser treatment is ideal for McMinnville area residents seeking to improve skin texture, tone, and signs of aging without lengthy recovery periods. Perfect candidates include those with mild to moderate skin concerns like fine lines, sun damage from Oregon outdoor activities, or acne scarring. During your consultation at MC Aesthetics, we&apos;ll evaluate your skin type, concerns, and goals to confirm if CoolPeel matches your needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Not Candidacy Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Who Should Avoid CoolPeel Treatment?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              CoolPeel may not be suitable for individuals with active skin infections, certain autoimmune conditions, or very dark skin tones due to potential pigmentation risks. Pregnant or breastfeeding individuals should postpone laser treatments. Our experienced team at MC Aesthetics will thoroughly evaluate your medical history and skin condition during consultation to ensure safe, effective treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Results Duration Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>CoolPeel Results: What to Expect and How Long They Last</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              You&apos;ll notice smoother, brighter skin within one week as the superficial damaged layer naturally peels away. Collagen production continues for 3-6 months, progressively enhancing skin firmness and texture. For optimal anti-aging results, McMinnville clients typically benefit from a series of 2-3 CoolPeel sessions spaced 4-6 weeks apart, with maintenance treatments every 6-12 months to preserve your youthful glow.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Your CoolPeel Experience at MC Aesthetics McMinnville</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Your CoolPeel laser facial at our McMinnville clinic begins with a comprehensive skin assessment and discussion of your aesthetic goals. The actual treatment takes 15-30 minutes depending on the treatment area. Most clients describe the sensation as mild stinging or warmth, easily managed with our cooling techniques and topical numbing cream when needed. Post-treatment, expect skin that feels like a mild sunburn with slight redness or flaking for 1-3 days. Most McMinnville clients resume normal activities quickly, following our personalized aftercare protocol for optimal healing and results.
            </p>
          </div>
          <div className={styles.mcaCoolPeelImageHolder}>
            <Image
              src="/images/coolpeel2.jpg"
              alt="CoolPeel laser treatment results before and after McMinnville Oregon"
              width={600}
              height={400}
              className={styles.mcaCoolPeelImage}
            />
            <div className={styles.mcaCoolPeelImageBorderAccent} />
            <div className={styles.mcaCoolPeelImageBorderAccentTop} />
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>CoolPeel Laser Treatment Process: Step-by-Step</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Here&apos;s your complete CoolPeel experience at MC Aesthetics McMinnville:
            </p>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Pre-Treatment Preparation:</strong> Skin cleansing and optional topical numbing cream application
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Laser Treatment Session:</strong> Precise CoolPeel laser passes over treatment areas with cooling technology for comfort
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Immediate Post-Care:</strong> Soothing treatment application and detailed aftercare instructions
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Recovery Period:</strong> 1-3 days of mild peeling and redness, with full results developing over 3-6 months
              </li>
              <li className={styles.mcaCoolPeelListItem}>
                <strong>Follow-up Care:</strong> Check-in appointments to monitor healing and plan additional sessions if needed
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pre-Care Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Preparing for Your CoolPeel Treatment in McMinnville</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Avoid sun exposure and tanning for at least 2 weeks before your laser treatment</li>
              <li className={styles.mcaCoolPeelListItem}>Discontinue retinoids, AHA/BHA products, and exfoliating treatments 5-7 days prior</li>
              <li className={styles.mcaCoolPeelListItem}>Inform our team of any medications, supplements, or skin conditions during consultation</li>
              <li className={styles.mcaCoolPeelListItem}>Stay well-hydrated and maintain a gentle skincare routine leading up to treatment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Post-Care Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>CoolPeel Aftercare for Optimal Results</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Keep skin hydrated with recommended medical-grade moisturizers</li>
              <li className={styles.mcaCoolPeelListItem}>Apply broad-spectrum SPF 30+ sunscreen religiously for at least 4 weeks post-treatment</li>
              <li className={styles.mcaCoolPeelListItem}>Avoid picking at peeling skin—allow natural shedding process for best results</li>
              <li className={styles.mcaCoolPeelListItem}>Skip harsh skincare products, retinoids, and exfoliants for 5-7 days post-treatment</li>
              <li className={styles.mcaCoolPeelListItem}>Avoid intense exercise and sweating for 24-48 hours after laser treatment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Maximizing Your CoolPeel Results in McMinnville</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <ul className={styles.mcaCoolPeelListContainer}>
              <li className={styles.mcaCoolPeelListItem}>Combine CoolPeel with our medical-grade skincare regimen for enhanced anti-aging results</li>
              <li className={styles.mcaCoolPeelListItem}>Schedule treatments during Oregon&apos;s cooler months (fall/winter) to minimize sun exposure risks</li>
              <li className={styles.mcaCoolPeelListItem}>Maintain consistent follow-up sessions for cumulative collagen-building benefits</li>
              <li className={styles.mcaCoolPeelListItem}>Consider pairing with our other services like Botox or dermal fillers for comprehensive facial rejuvenation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Why Choose MC Aesthetics for CoolPeel in McMinnville?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              At MC Aesthetics, we&apos;re McMinnville&apos;s premier destination for advanced laser treatments that fit seamlessly into your busy lifestyle. CoolPeel CO2 laser is our signature treatment, and our team, led by experienced Nurse Practitioner Melissa Cook, specializes in customizing each session to your unique skin profile and aesthetic goals. We prioritize your comfort, safety, and satisfaction, providing comprehensive consultation, treatment, and aftercare guidance. Our Yamhill County clients choose us because we deliver dramatic skin improvements without disrupting their schedules—proving that achieving radiant, youthful skin doesn&apos;t require extensive downtime.
            </p>
            <p className={styles.mcaCoolPeelParagraph}>
              Juggling work, family, and self-care in McMinnville? CoolPeel fits perfectly into your routine with quick treatment sessions, minimal recovery time, and confidence-boosting results that let you face each day with natural radiance and renewed self-assurance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className={styles.mcaCoolPeelContentSection}>
        <h2 className={styles.mcaCoolPeelSectionTitle}>Ready for Your CoolPeel Transformation in McMinnville?</h2>
        <div className={styles.mcaCoolPeelContentLayout}>
          <div className={styles.mcaCoolPeelContentText}>
            <p className={styles.mcaCoolPeelParagraph}>
              Experience why CoolPeel is McMinnville&apos;s most requested laser facial treatment. Book your consultation today and discover how this revolutionary CO2 laser technology can transform your skin with minimal downtime and maximum results.
            </p>
          </div>
        </div>
        <div className={styles.mcaCoolPeelCallToAction}>
          <a 
            href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
            className={styles.mcaCoolPeelCtaText}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Your CoolPeel Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default CoolPeelPage;