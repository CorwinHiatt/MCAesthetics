//MC Aesthetics Contact Page with Updated Info
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPageWrapper}>
      {/* Main Title */}
      <h1 className={styles.contactMainTitle}>Contact MC Aesthetics</h1>

      {/* Introduction Text */}
      <p className={styles.contactIntroText}>
        We’d love to hear from you! Whether you have questions about our services, want to book an appointment, or need more information, feel free to reach out. Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <div className={styles.contactFormContainer}>
        <h2 className={styles.contactFormHeading}>Send Us a Message</h2>
        <form>
          <div className={styles.contactFormField}>
            <label htmlFor="name" className={styles.contactFormLabel}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.contactFormInput}
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.contactFormField}>
            <label htmlFor="email" className={styles.contactFormLabel}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.contactFormInput}
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.contactFormField}>
            <label htmlFor="phone" className={styles.contactFormLabel}>
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.contactFormInput}
              placeholder="Your Phone Number"
            />
          </div>
          <div className={styles.contactFormField}>
            <label htmlFor="message" className={styles.contactFormLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.contactFormTextarea}
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.contactSubmitButton}>
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className={styles.contactInfoSection}>
        <p className={styles.contactInfoText}>
          <strong>Location:</strong> 609 NE Baker St Suite #130, McMinnville, OR 97128
        </p>
        <p className={styles.contactInfoText}>
          <strong>Phone:</strong> 971-267-2322
        </p>
        <p className={styles.contactInfoText}>
          <strong>Email:</strong> admin@mcaestheticsclinic.com
        </p>
        <p className={styles.contactInfoText}>
          Reach out to us directly using the details above, or use the form to send a message. We’re excited to connect with you!
        </p>
      </div>
    </div>
  );
}