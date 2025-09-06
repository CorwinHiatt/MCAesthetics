import styles from './Contact.module.css';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className={styles.mcaContactPageWrapper}>
      {/* Hero Section with Main Title, Intro, and Single Image */}
      <section className={styles.mcaContactHero}>
        <h1 className={styles.mcaContactMainTitle}>Contact MC Aesthetics</h1>
        <p className={styles.mcaContactIntroText}>
          We’d love to hear from you! Whether you have questions about our services, want to book an appointment, or need more information, feel free to reach out. Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        {/* Single Image: User's Specified Photo */}
        <div className={styles.mcaContactHeroImageHolder}>
          <Image
            src="/images/contactPhoto.png"  // Adjusted to public path as specified
            alt="Welcoming Image at MC Aesthetics in McMinnville"
            className={styles.mcaContactImage}
            width={800}
            height={400}
          />
          <div className={styles.mcaContactImageBorderAccent}></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.mcaContactContentSection}>
        <h2 className={styles.mcaContactSectionTitle}>Send Us a Message</h2>
        <div className={styles.mcaContactFormContainer}>
          <form>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="name" className={styles.mcaContactFormLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.mcaContactFormInput}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="email" className={styles.mcaContactFormLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.mcaContactFormInput}
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="phone" className={styles.mcaContactFormLabel}>
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.mcaContactFormInput}
                placeholder="Your Phone Number"
              />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="message" className={styles.mcaContactFormLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.mcaContactFormTextarea}
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.mcaContactSubmitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section (No Image, Text-Only for Simplicity) */}
      <section className={styles.mcaContactContentSection}>
        <h2 className={styles.mcaContactSectionTitle}>Our Contact Information</h2>
        <div className={styles.mcaContactContentLayout}>
          <div className={styles.mcaContactContentText}>
            <p className={styles.mcaContactInfoText}>
              <strong>Location:</strong> 609 NE Baker St Suite #130, McMinnville, OR 97128
            </p>
            <p className={styles.mcaContactInfoText}>
              <strong>Phone:</strong> 971-267-2322
            </p>
            <p className={styles.mcaContactInfoText}>
              <strong>Email:</strong> admin@mcaestheticsclinic.com
            </p>
            <p className={styles.mcaContactInfoText}>
              Reach out to us directly using the details above, or use the form to send a message. We’re excited to connect with you!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className={styles.mcaContactCallToAction}>
        <a
          href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type"
          className={styles.mcaContactCtaText}
          target="_blank"
          rel="noopener noreferrer"
        >
          SCHEDULE YOUR APPOINTMENT TODAY
        </a>
      </div>
    </div>
  );
}