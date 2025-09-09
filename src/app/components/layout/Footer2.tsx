'use client'; // Enable client-side interactivity

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import logo from '../../../../public/images/logo.png'; // Assumes pink logo; update path if needed
import styles from './Footer2.module.css';

// Extend Window interface to type grecaptcha properly
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Footer2() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>(''); // For success/error/processing messages
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false); // Track if reCAPTCHA script is loaded

  // Function to dynamically load reCAPTCHA script
  const loadRecaptcha = () => {
    if (!recaptchaLoaded && !document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('reCAPTCHA v3 script loaded dynamically!');
        setRecaptchaLoaded(true);
      };
      script.onerror = () => {
        console.error('Error loading reCAPTCHA v3 script!');
        setStatus('Failed to load verification system. Check your network and try again.');
      };
      document.body.appendChild(script);
    }
  };

  // Load reCAPTCHA only on form interaction (e.g., when component mounts or on focus – adjust as needed)
  useEffect(() => {
    // Optionally load on mount for eager users, or tie to focus event below
  }, []);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default submission
    console.log('Signup handler fired!'); // Debug: Log attempt start

    if (form.current && !isSubmitting) {
      setIsSubmitting(true);
      setStatus('Verifying and subscribing...');
      console.log('Status set to: Verifying and subscribing...'); // Debug

      try {
        // Load reCAPTCHA if not already loaded
        if (!recaptchaLoaded) {
          loadRecaptcha();
          // Wait a short time for script to load (or use a promise-based wait)
          await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust timeout if needed
        }

        // Ensure grecaptcha is ready before executing
        await window.grecaptcha.ready(async () => {
          // Execute reCAPTCHA v3 to get token
          const token = await window.grecaptcha.execute('6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL', { action: 'signup' });
          console.log('reCAPTCHA v3 token generated:', token); // Log successful token generation

          const formData = new FormData(form.current!);
          formData.append('g-recaptcha-response', token); // Add v3 token

          console.log('Sending FormData to API:', Object.fromEntries(formData)); // Log form data

          const response = await fetch('/api/signup-email', {
            method: 'POST',
            body: formData,
          });

          console.log('API response status:', response.status); // Log response status

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Signup failed:', errorData); // Log failed attempt details
            if (errorData.error?.includes('reCAPTCHA')) {
              throw new Error('Verification failed—looks like something went wrong. Please try again.'); // Friendly retry message
            } else {
              throw new Error(`Error: ${errorData.error || 'Unknown issue'}`);
            }
          }

          const result = await response.json();
          console.log('Signup successful!', result); // Log successful submission
          setStatus('Subscribed successfully! Check your email for confirmation.');
          if (form.current) {
            form.current.reset(); // Reset form only on success
          }
        });
      } catch (error) {
        console.error('Client-side error during signup:', error); // Log any client errors
        const errorMessage = (error as Error).message || 'Oops! Something went wrong. Please try again.';
        if (errorMessage.includes('network')) {
          setStatus('Network issue detected—check your connection and try again.');
        } else {
          setStatus(errorMessage);
        }
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(''), 5000); // Auto-clear status
      }
    }
  };

  // Optional: Add focus handler to inputs to trigger loadRecaptcha on user interaction
  const handleFocus = () => {
    if (!recaptchaLoaded) loadRecaptcha();
  };

  return (
    <footer className={styles.mcaLuxFooter}>
      <div className={styles.mcaLuxFooterTopBorder}></div>
      
      <div className={styles.mcaLuxFooterContainer}>
        {/* Floating Accent - Inspired by hero shadow for luxury glow */}
        <div className={styles.mcaLuxFooterFloatingAccent}>
          <div className={styles.mcaLuxFooterFloatingGlow}></div>
        </div>
        
        <div className={styles.mcaLuxFooterGrid}>
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Get in Touch</h2>
            
            <div className={styles.mcaLuxFooterContactItem}>
              <div className={styles.mcaLuxFooterIconWrapper}>
                <Phone size={18} className={styles.mcaLuxFooterIcon} />
              </div>
              <div>
                <h3 className={styles.mcaLuxFooterContactTitle}>Call Us</h3>
                <p className={styles.mcaLuxFooterContactText}>971-267-2322</p>
              </div>
            </div>
            
            <div className={styles.mcaLuxFooterContactItem}>
              <div className={styles.mcaLuxFooterIconWrapper}>
                <Mail size={18} className={styles.mcaLuxFooterIcon} />
              </div>
              <div>
                <h3 className={styles.mcaLuxFooterContactTitle}>Email Us</h3>
                <p className={styles.mcaLuxFooterContactText}>admin@mcaestheticsclinic.com</p>
              </div>
            </div>
            
            <div className={styles.mcaLuxFooterContactItem}>
              <div className={styles.mcaLuxFooterIconWrapper}>
                <MapPin size={18} className={styles.mcaLuxFooterIcon} />
              </div>
              <div>
                <h3 className={styles.mcaLuxFooterContactTitle}>Our Address</h3>
                <p className={styles.mcaLuxFooterContactText}>609 NE Baker St. Suite 130</p>
                <p className={styles.mcaLuxFooterContactText}>McMinnville OR 97128</p>
              </div>
            </div>
            
            <div className={styles.mcaLuxFooterSocialContainer}>
              <a 
                href="https://www.facebook.com/MCAesthetics23" 
                aria-label="Visit MC Aesthetics on Facebook" 
                className={styles.mcaLuxFooterSocialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/mcaesthetics23" 
                aria-label="Visit MC Aesthetics on Instagram" 
                className={styles.mcaLuxFooterSocialIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Find Us Here</h2>
            <div className={styles.mcaLuxFooterMapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-123.1986!3d45.21034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5494469c3b7b2f4d%3A0x1d4d3a1e8f4f8e9c!2s609%20NE%20Baker%20St%20%23130%2C%20McMinnville%2C%20OR%2097128!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px' }} // Added min-height for better mobile responsiveness
                allowFullScreen
                loading="lazy" // Already optimizing – enhanced for perf
                referrerPolicy="no-referrer-when-downgrade"
                title="MC Aesthetics Location Map"
              ></iframe>
              <div className={styles.mcaLuxFooterMapOverlay}></div> {/* Added gradient overlay for luxury accent */}
            </div>
            <a 
              href="https://www.google.com/maps/place/609+NE+Baker+St+%23130,+McMinnville,+OR+97128/@45.21034,-123.1986,17z/data=!3m1!4b1!4m6!3m5!1s0x5494469c3b7b2f4d:0x1d4d3a1e8f4f8e9c!8m2!3d45.21034!4d-123.1986!16s%2Fg%2F11t4b6v4p_?entry=ttu"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mcaLuxFooterMapLink}
            >
              <span>View larger map</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Join Our List</h2>
            <p className={styles.mcaLuxFooterSectionText}>
              Elevate your self-care journey—join our exclusive email list for premium treatment updates, luxurious promotions, special events, and more.
            </p>
            
            <form ref={form} onSubmit={handleSignup} className={styles.mcaLuxFooterForm}>
              <div className={styles.mcaLuxFooterInputGroup}>
                <label htmlFor="firstName" className="sr-only">First Name</label> {/* Accessible label */}
                <input 
                  id="firstName"
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  className={styles.mcaLuxFooterInput}
                  aria-label="First Name"
                  onFocus={handleFocus} // Trigger lazy load on focus
                />
              </div>
              <div className={styles.mcaLuxFooterInputGroup}>
                <label htmlFor="email" className="sr-only">Email Address</label> {/* Accessible label */}
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className={styles.mcaLuxFooterInput}
                  aria-label="Email Address"
                  required
                  onFocus={handleFocus} // Trigger lazy load on focus
                />
              </div>
              <button 
                type="submit" 
                className={styles.mcaLuxFooterButton}
                disabled={isSubmitting} // Prevent multiple submissions
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            {/* Status Message with Conditional Success/Error Classes and Accessibility */}
            {status && (
              <p 
                className={`${styles.mcaLuxFooterStatusMessage} ${status.includes('successfully') ? styles.success : styles.error}`}
                aria-live="polite" // For screen reader announcements
                role="status" // Enhanced ARIA for dynamic content
              >
                {status}
              </p>
            )}
          </div>
        </div>
        
        <div className={styles.mcaLuxFooterBottomSection}>
          <div className={styles.mcaLuxFooterLogoContainer}>
            <Image 
              src={logo} 
              alt="MC Aesthetics Logo" 
              className={styles.mcaLuxFooterLogo} 
              width={200}
              height={80}
              priority
              sizes="(max-width: 768px) 150px, 200px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div className={styles.mcaLuxFooterBottomLinks}>
            <Link href="/privacy-policy" className={styles.mcaLuxFooterLink}>
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/accessibility" className={styles.mcaLuxFooterLink}>
              Accessibility
            </Link>
          </div>
          
          <div className={styles.mcaLuxFooterCopyright}>
            © {new Date().getFullYear()} MC Aesthetics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}