'use client'; // For client-side interactivity (hooks, etc.)

import React, { useRef, useState } from 'react';
import Script from 'next/script'; // For loading reCAPTCHA v3 script
import styles from './Contact.module.css';
import Image from 'next/image';

// Extend Window interface to type grecaptcha properly (avoids 'any' and fixes TypeScript error)
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>(''); // For success/error/processing messages

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default submission
    console.log('Submit handler fired!'); // Debug: Log attempt start

    if (form.current) {
      setStatus('Verifying and sending...');
      console.log('Status set to: Verifying and sending...'); // Debug

      try {
        // Execute reCAPTCHA v3 to get token (now typed via the global declaration)
        const token = await window.grecaptcha.execute('6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL', { action: 'submit' });
        console.log('reCAPTCHA v3 token generated:', token); // Log successful token generation

        const formData = new FormData(form.current);
        formData.append('g-recaptcha-response', token); // Add v3 token

        console.log('Sending FormData to API:', Object.fromEntries(formData)); // Log form data

        const response = await fetch('/api/send-email', {
          method: 'POST',
          body: formData,
        });

        console.log('API response status:', response.status); // Log response status

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Submission failed:', errorData); // Log failed attempt details
          if (errorData.error.includes('reCAPTCHA')) {
            throw new Error('Verification failed—looks like something went wrong. Please try submitting again.'); // Friendly retry message for low score
          } else {
            throw new Error(`Error: ${errorData.error || 'Unknown issue'}`);
          }
        }

        const result = await response.json();
        console.log('Submission successful!', result); // Log successful submission
        setStatus('Message sent successfully! We\'ll get back to you soon.');
        form.current.reset(); // Reset form only on success
      } catch (error) {
        console.error('Client-side error during submission:', error); // Log any client errors
        setStatus((error as Error).message || 'Oops! Something went wrong. Please try again.');
      } finally {
        setTimeout(() => setStatus(''), 5000); // Auto-clear status
      }
    }
  };

  return (
    <div className={styles.mcaContactPageWrapper}>
      {/* Load reCAPTCHA v3 script with your provided site key */}
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL"
        strategy="afterInteractive"
        onLoad={() => console.log('reCAPTCHA v3 script loaded successfully!')}
        onError={() => {
          console.error('Error loading reCAPTCHA v3 script!');
          setStatus('Failed to load verification system. Check your network and try again.');
        }}
      />

      {/* Hero Section (unchanged) */}
      <section className={styles.mcaContactHero}>
        <h1 className={styles.mcaContactMainTitle}>Contact MC Aesthetics</h1>
        <p className={styles.mcaContactIntroText}>
          We’d love to hear from you! Whether you have questions about our services, want to book an appointment, or need more information, feel free to reach out. Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <div className={styles.mcaContactHeroImageHolder}>
          <Image
            src="/images/contactPhoto.png"
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
          <form ref={form} onSubmit={sendEmail} method="post">
            <div className={styles.mcaContactFormField}>
              <label htmlFor="name" className={styles.mcaContactFormLabel}>Name</label>
              <input type="text" id="name" name="name" className={styles.mcaContactFormInput} placeholder="Your Name" required />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="email" className={styles.mcaContactFormLabel}>Email</label>
              <input type="email" id="email" name="email" className={styles.mcaContactFormInput} placeholder="Your Email" required />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="phone" className={styles.mcaContactFormLabel}>Phone (Optional)</label>
              <input type="tel" id="phone" name="phone" className={styles.mcaContactFormInput} placeholder="Your Phone Number" />
            </div>
            <div className={styles.mcaContactFormField}>
              <label htmlFor="message" className={styles.mcaContactFormLabel}>Message</label>
              <textarea id="message" name="message" className={styles.mcaContactFormTextarea} placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className={styles.mcaContactSubmitButton}>Send Message</button>
          </form>

          {/* Status Message with Conditional Success/Error Classes and Accessibility */}
          {status && (
            <p 
              className={`${styles.mcaContactStatusMessage} ${status.includes('successfully') ? styles.success : styles.error}`}
              aria-live="polite" // For screen reader announcements
            >
              {status}
            </p>
          )}
        </div>
      </section>

      {/* Contact Info Section (unchanged) */}
      <section className={styles.mcaContactContentSection}>
        <h2 className={styles.mcaContactSectionTitle}>Our Contact Information</h2>
        <div className={styles.mcaContactContentLayout}>
          <div className={styles.mcaContactContentText}>
            <p className={styles.mcaContactInfoText}><strong>Location:</strong> 609 NE Baker St Suite #130, McMinnville, OR 97128</p>
            <p className={styles.mcaContactInfoText}><strong>Phone:</strong> 971-267-2322</p>
            <p className={styles.mcaContactInfoText}><strong>Email:</strong> admin@mcaestheticsclinic.com</p>
            <p className={styles.mcaContactInfoText}>Reach out to us directly using the details above, or use the form to send a message. We’re excited to connect with you!</p>
          </div>
        </div>
      </section>

      {/* Call to Action (unchanged) */}
      <div className={styles.mcaContactCallToAction}>
        <a href="https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type" className={styles.mcaContactCtaText} target="_blank" rel="noopener noreferrer">
          SCHEDULE YOUR APPOINTMENT TODAY
        </a>
      </div>
    </div>
  );
}