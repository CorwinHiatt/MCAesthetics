import Link from 'next/link';
import styles from './Book.module.css';

export default function BookPage() {
  return (
    <div className={styles.bookPageWrapper}>
      {/* Main Booking Section */}
      <section className={styles.bookMainSection}>
        <h1 className={styles.bookMainTitle}>Book Your Appointment</h1>
        <p className={styles.bookMainSubtitle}>
          Ready to enhance your natural beauty? Schedule your consultation or treatment with MC Aesthetics today. We can’t wait to help you look and feel your best!
        </p>
        <Link href="#book-now" className={styles.bookMainButton}>
          Book Now
        </Link>
      </section>

      {/* Booking Info Section */}
      <section className={styles.bookInfoSection}>
        <h2 className={styles.bookInfoTitle}>How to Book with Us</h2>
        <p className={styles.bookInfoText}>
          At MC Aesthetics, booking your appointment is simple and convenient. Whether you’re interested in a facial, laser hair removal, or a consultation for injectables, we offer multiple ways to schedule your visit.
        </p>
        <p className={styles.bookInfoText}>
          You can book directly through our online scheduling system (coming soon), call us at our McMinnville, OR location, or fill out a contact form with your preferred time and service. Our team will get back to you promptly to confirm.
        </p>
        <p className={styles.bookInfoText}>
          Not sure which service is right for you? Reach out for a personalized consultation, and we’ll guide you through the options!
        </p>
      </section>

      {/* Placeholder Form Section */}
      <section className={styles.bookFormSection}>
        <h2 className={styles.bookFormTitle}>Schedule Your Appointment</h2>
        <p className={styles.bookFormPlaceholder}>
          This section is reserved for our online booking form or integration with a scheduling platform. In the meantime, please contact us directly via phone or through our Contact page to book your appointment. Stay tuned for updates as we enhance your booking experience!
        </p>
        <Link href="/contact" className={styles.bookMainButton}>
          Contact Us to Book
        </Link>
      </section>
    </div>
  );
}