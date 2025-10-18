'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import logo from '../../../../public/images/logo.png';
import styles from './Footer2.module.css';

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
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix hydration by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const loadRecaptcha = () => {
    if (typeof window === 'undefined') return;
    
    if (!recaptchaLoaded && !document.getElementById('recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('reCAPTCHA v3 loaded');
        setRecaptchaLoaded(true);
      };
      script.onerror = () => {
        console.error('reCAPTCHA load error');
        setStatus('Verification system failed to load.');
      };
      document.body.appendChild(script);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;
    
    if (form.current && !isSubmitting) {
      setIsSubmitting(true);
      setStatus('Subscribing...');

      try {
        if (!recaptchaLoaded) {
          loadRecaptcha();
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        await window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute('6LcvfMErAAAAAI3zzfntZawJciDSdzwhXcmSqvlL', { action: 'signup' });
          
          const formData = new FormData(form.current!);
          formData.append('g-recaptcha-response', token);

          const response = await fetch('/api/signup-email', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Subscription failed');
          }

          const result = await response.json();
          setStatus('Success! Check your email for confirmation.');
          form.current?.reset();
        });
      } catch (error) {
        const errorMessage = (error as Error).message || 'Something went wrong.';
        setStatus(errorMessage);
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(''), 5000);
      }
    }
  };

  const handleFocus = () => {
    if (!recaptchaLoaded) loadRecaptcha();
  };

  // Render placeholder during SSR to match client structure
  if (!mounted) {
    return (
      <footer className={styles.mcaLuxFooter}>
        <div className={styles.mcaLuxFooterTopBorder}></div>
        <div className={styles.mcaLuxFooterContainer}>
          <div className={styles.mcaLuxFooterGrid}></div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.mcaLuxFooter}>
      {/* Top Border */}
      <div className={styles.mcaLuxFooterTopBorder}></div>
      
      <div className={styles.mcaLuxFooterContainer}>
        
        <div className={styles.mcaLuxFooterGrid}>
          
          {/* Get in Touch */}
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Get in Touch</h2>
            
            <div className={styles.mcaLuxFooterContactItem}>
              <div className={styles.mcaLuxFooterIconWrapper}>
                <Phone size={18} className={styles.mcaLuxFooterIcon} />
              </div>
              <div>
                <h3 className={styles.mcaLuxFooterContactTitle}>Call Us</h3>
                <a href="tel:9712672322" className={styles.mcaLuxFooterContactText}>971-267-2322</a>
              </div>
            </div>
            
            <div className={styles.mcaLuxFooterContactItem}>
              <div className={styles.mcaLuxFooterIconWrapper}>
                <Mail size={18} className={styles.mcaLuxFooterIcon} />
              </div>
              <div>
                <h3 className={styles.mcaLuxFooterContactTitle}>Email Us</h3>
                <a href="mailto:admin@mcaestheticsclinic.com" className={styles.mcaLuxFooterContactText}>
                  admin@mcaestheticsclinic.com
                </a>
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
                aria-label="Facebook"
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
                aria-label="Instagram"
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
          
          {/* Find Us Here */}
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Find Us Here</h2>
            <div className={styles.mcaLuxFooterMapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-123.1986!3d45.21034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5494469c3b7b2f4d%3A0x1d4d3a1e8f4f8e9c!2s609%20NE%20Baker%20St%20%23130%2C%20McMinnville%2C%20OR%2097128!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MC Aesthetics Location"
              />
            </div>
            <a 
              href="https://www.google.com/maps/place/609+NE+Baker+St+%23130,+McMinnville,+OR+97128"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mcaLuxFooterMapLink}
            >
              View larger map →
            </a>
          </div>
          
          {/* Join Our List */}
          <div className={styles.mcaLuxFooterSection}>
            <h2 className={styles.mcaLuxFooterSectionTitle}>Join Our List</h2>
            <p className={styles.mcaLuxFooterSectionText}>
              Sign up for exclusive updates, promotions, and special events.
            </p>
            
            <form ref={form} onSubmit={handleSignup} className={styles.mcaLuxFooterForm}>
              <div className={styles.mcaLuxFooterInputGroup}>
                <label htmlFor="firstName" className={styles.srOnly}>First Name</label>
                <input 
                  id="firstName"
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  className={styles.mcaLuxFooterInput}
                  onFocus={handleFocus}
                />
              </div>
              
              <div className={styles.mcaLuxFooterInputGroup}>
                <label htmlFor="email" className={styles.srOnly}>Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className={styles.mcaLuxFooterInput}
                  required
                  onFocus={handleFocus}
                />
              </div>
              
              <button 
                type="submit" 
                className={styles.mcaLuxFooterButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>

            {status && (
              <p 
                className={`${styles.mcaLuxFooterStatusMessage} ${status.includes('Success') ? styles.success : styles.error}`}
                role="status"
              >
                {status}
              </p>
            )}
          </div>
          
        </div>
        
        {/* Bottom Section */}
        <div className={styles.mcaLuxFooterBottomSection}>
          <div className={styles.mcaLuxFooterLogoContainer}>
            <Image 
              src={logo} 
              alt="MC Aesthetics Logo" 
              className={styles.mcaLuxFooterLogo} 
              width={200}
              height={80}
              priority
            />
          </div>
          
          <div className={styles.mcaLuxFooterBottomLinks}>
            <Link href="/privacy-policy" className={styles.mcaLuxFooterLink}>
              Privacy Policy
            </Link>
            <span className={styles.mcaLuxFooterDivider}>|</span>
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
