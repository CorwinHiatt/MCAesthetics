'use client';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import PrimaryButton from '@/app/components/buttons/PrimaryButton';
import styles from './Contact.module.css';
import Image from 'next/image';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const ContactClient = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submit handler fired!');

    if (form.current) {
      setStatus('Verifying and sending...');
      console.log('Status set to: Verifying and sending...');

      try {
        const token = await window.grecaptcha.execute('6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL', { action: 'submit' });
        console.log('reCAPTCHA v3 token generated:', token);

        const formData = new FormData(form.current);
        formData.append('g-recaptcha-response', token);

        console.log('Sending FormData to API:', Object.fromEntries(formData));

        const response = await fetch('/api/send-email', {
          method: 'POST',
          body: formData,
        });

        console.log('API response status:', response.status);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Submission failed:', errorData);
          if (errorData.error.includes('reCAPTCHA')) {
            throw new Error('Verification failed—looks like something went wrong. Please try submitting again.');
          } else {
            throw new Error(`Error: ${errorData.error || 'Unknown issue'}`);
          }
        }

        const result = await response.json();
        console.log('Submission successful!', result);
        setStatus('Message sent successfully! We\'ll get back to you soon. ✨');
        form.current.reset();
      } catch (error) {
        console.error('Client-side error during submission:', error);
        setStatus((error as Error).message || 'Oops! Something went wrong. Please try again.');
      } finally {
        setTimeout(() => setStatus(''), 6000);
      }
    }
  };

  const handleScheduleClick = () => {
    window.open('https://www.joinblvd.com/b/mcaesthetics/widget#/visit-type', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.mcaContactPageWrapper}>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL"
        strategy="afterInteractive"
        onLoad={() => console.log('reCAPTCHA v3 script loaded successfully!')}
        onError={() => {
          console.error('Error loading reCAPTCHA v3 script!');
          setStatus('Failed to load verification system. Check your network and try again.');
        }}
      />

      {/* Hero Section */}
      <div className={styles.mcaContactHero}>
        <h1 className={styles.mcaContactMainTitle}>Contact MC Aesthetics</h1>
        <p className={styles.mcaContactTagline}>Your Journey to Radiance Starts Here</p>
        <p className={styles.mcaContactIntroText}>
          We'd love to hear from you! Whether you have questions about our services, want to book an appointment, or need more information, feel free to reach out. Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div className={styles.mcaContactHeroImageHolder}>
          <Image
            src="/images/contactPhoto.png"
            alt="Welcoming Image at MC Aesthetics in McMinnville"
            className={styles.mcaContactImage}
            width={800}
            height={400}
            priority
          />
          <div className={styles.mcaContactImageBorderAccent}></div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.mcaContactContentSection}>
        <h2 className={styles.mcaContactSectionTitle}>Send Us a Message</h2>
        <div className={styles.mcaContactFormContainer}>
          <form ref={form} onSubmit={sendEmail} method="post">
            <div className={styles.mcaContactFormField}>
              <label htmlFor="name" className={styles.mcaContactFormLabel}>Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className={styles.mcaContactFormInput} 
                placeholder="Jane Doe" 
                required 
                aria-required="true"
                autoComplete="name"
              />
            </div>

            <div className={styles.mcaContactFormField}>
              <label htmlFor="email" className={styles.mcaContactFormLabel}>Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className={styles.mcaContactFormInput} 
                placeholder="jane@example.com" 
                required 
                aria-required="true"
                autoComplete="email"
              />
            </div>

            <div className={styles.mcaContactFormField}>
              <label htmlFor="phone" className={styles.mcaContactFormLabel}>Phone Number (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className={styles.mcaContactFormInput} 
                placeholder="(555) 123-4567"
                autoComplete="tel"
              />
            </div>

            <div className={styles.mcaContactFormField}>
              <label htmlFor="message" className={styles.mcaContactFormLabel}>Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                className={styles.mcaContactFormTextarea} 
                placeholder="Tell us how we can help you achieve your beauty goals..." 
                required 
                aria-required="true"
              ></textarea>
            </div>

            <div className={styles.mcaContactButtonWrapper}>
              <button 
                type="submit" 
                className={styles.mcaContactSubmitButtonHidden}
                aria-label="Submit contact form"
                style={{ display: 'none' }}
              >
                Send Message
              </button>
              
              <div onClick={() => {
                if (form.current) {
                  form.current.requestSubmit();
                }
              }}>
                <PrimaryButton 
                  text="Send Message"
                  onClick={() => {}}
                  ariaLabel="Submit contact form"
                />
              </div>
            </div>
          </form>

          {status && (
            <p 
              className={`${styles.mcaContactStatusMessage} ${status.includes('successfully') ? styles.success : styles.error}`}
              role="alert"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className={styles.mcaContactContentSection}>
        <h2 className={styles.mcaContactSectionTitle}>Our Contact Information</h2>
        <div className={styles.mcaContactInfoGrid}>
          <div className={styles.mcaContactInfoCard}>
            <div className={styles.mcaContactInfoIcon}>📍</div>
            <h3 className={styles.mcaContactInfoCardTitle}>Visit Us</h3>
            <p className={styles.mcaContactInfoText}>609 NE Baker St Suite #130<br />McMinnville, OR 97128</p>
          </div>

          <div className={styles.mcaContactInfoCard}>
            <div className={styles.mcaContactInfoIcon}>📞</div>
            <h3 className={styles.mcaContactInfoCardTitle}>Call Us</h3>
            <p className={styles.mcaContactInfoText}>
              <a href="tel:971-267-2322" className={styles.mcaContactInfoLink}>971-267-2322</a>
            </p>
          </div>

          <div className={styles.mcaContactInfoCard}>
            <div className={styles.mcaContactInfoIcon}>✉️</div>
            <h3 className={styles.mcaContactInfoCardTitle}>Email Us</h3>
            <p className={styles.mcaContactInfoText}>
              <a href="mailto:admin@mcaestheticsclinic.com" className={styles.mcaContactInfoLink}>admin@mcaestheticsclinic.com</a>
            </p>
          </div>
        </div>
        <p className={styles.mcaContactInfoSubtext}>
          Reach out to us directly using the details above, or use the form to send a message. We're excited to connect with you!
        </p>
      </div>

      {/* Call to Action */}
      <div className={styles.mcaContactCallToAction}>
        <h2 className={styles.mcaContactCtaTitle}>Ready to Transform Your Look?</h2>
        <p className={styles.mcaContactCtaSubtext}>Book your consultation today and discover the MC Aesthetics difference.</p>
        <PrimaryButton 
          text="Schedule Your Appointment"
          onClick={handleScheduleClick}
          ariaLabel="Schedule your appointment at MC Aesthetics"
        />
      </div>
    </div>
  );
};

export default ContactClient;