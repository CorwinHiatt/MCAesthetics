import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPageWrapper}>
      {/* Page Header */}
      <h1 className={styles.aboutMainTitle}>About MC Aesthetics</h1>
      <p className={styles.aboutIntroText}>
        At MC Aesthetics, we are dedicated to enhancing your natural beauty with personalized, safe, and precise treatments. 
        Meet our passionate team of professionals who bring expertise, warmth, and a commitment to excellence to every client.
      </p>

      {/* Team Section */}
      <div className={styles.aboutTeamLayout}>
        {/* Melissa Cook */}
        <div className={styles.aboutMemberCard}>
          {/* Placeholder Image */}
          <div className={styles.aboutMemberImageHolder}>
            <span>Placeholder for Melissa Cook&apos;s Photo</span>
            <div className={styles.aboutImageBorderAccent}></div>
          </div>
          <div className={styles.aboutMemberContent}>
            <h2 className={styles.aboutMemberName}>Melissa Cook</h2>
            <h3 className={styles.aboutMemberRole}>Nurse Practitioner & Owner of MC Aesthetics</h3>
            <p className={styles.aboutMemberDescription}>
              Melissa is a board-certified nurse practitioner with over 21 years of clinical experience and 11 years of experience in aesthetic medicine. 
              As the founder and owner of MC Aesthetics for the past six years, she has built a practice rooted in trust, results, and a deep understanding of women’s health and aging. 
              Her background spans primary care, reproductive and women’s health, and aesthetics, giving her a well-rounded, thoughtful approach to patient care. 
              Known for her skilled, gentle hands and honest communication, Melissa is passionate about helping women look refreshed—not overdone—enhancing their natural beauty while prioritizing safety, precision, and education. 
              She continues to invest in advanced training and techniques, ensuring her clients receive the highest standard of care in a warm and welcoming environment.
            </p>
          </div>
        </div>

        {/* Maleah Espinoza */}
        <div className={styles.aboutMemberCard}>
          {/* Placeholder Image */}
          <div className={styles.aboutMemberImageHolder}>
            <span>Placeholder for Maleah Espinoza&apos;s Photo</span>
            <div className={styles.aboutImageBorderAccent}></div>
          </div>
          <div className={styles.aboutMemberContent}>
            <h2 className={styles.aboutMemberName}>Maleah Espinoza</h2>
            <h3 className={styles.aboutMemberRole}>Nurse Injector</h3>
            <p className={styles.aboutMemberDescription}>
              Maleah is a licensed nurse with over five years of experience in the healthcare field. 
              Her journey into aesthetics stems from a long-standing passion for beauty, wellness, and helping others feel confident in their own skin. 
              Although she is new to injecting, she brings a strong clinical background, a gentle touch, and a commitment to safety and precision in every treatment. 
              Maleah believes aesthetic treatments should enhance—not change—your natural features. 
              She’s dedicated to providing personalized care with a warm, welcoming approach while continuously learning and staying up to date on the latest techniques in aesthetic medicine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}