import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../../images/logo.png';
import styles from './Footer2.module.css';

export default function Footer2() {
  return (
    <footer className={styles.footer}>
      {/* Decorative top border */}
      <div className={styles.topBorder}></div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Get in Touch Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            
            {/* Call Us */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Phone size={18} className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactTitle}>Call Us</h3>
                <p className={styles.contactText}>971-267-2322</p>
              </div>
            </div>
            
            {/* Email Us */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail size={18} className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactTitle}>Email Us</h3>
                <p className={styles.contactText}>admin@mcaestheticsclinic.com</p>
              </div>
            </div>
            
            {/* Our Address */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={18} className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.contactTitle}>Our Address</h3>
                <p className={styles.contactText}>609 NE Baker St. Suite 130</p>
                <p className={styles.contactText}>McMinnville OR 97128</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className={styles.socialContainer}>
              <a 
                href="#" 
                aria-label="Facebook" 
                className={styles.socialIcon}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a 
                href="#" 
                aria-label="Instagram" 
                className={styles.socialIcon}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Find Us Here Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us Here</h2>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-123.1986!3d45.21034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5494469c3b7b2f4d%3A0x1d4d3a1e8f4f8e9c!2s609%20NE%20Baker%20St%20%23130%2C%20McMinnville%2C%20OR%2097128!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MC Aesthetics Location"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/place/609+NE+Baker+St+%23130,+McMinnville,+OR+97128/@45.21034,-123.1986,17z/data=!3m1!4b1!4m6!3m5!1s0x5494469c3b7b2f4d:0x1d4d3a1e8f4f8e9c!8m2!3d45.21034!4d-123.1986!16s%2Fg%2F11t4b6v4p_?entry=ttu"
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <span>View larger map</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          
          {/* Join Our List Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Join Our List</h2>
            <p className={styles.sectionText}>
              Join our email list for new treatment updates, promotions, special events and more.
            </p>
            
            {/* Newsletter Form */}
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={styles.input}
                />
              </div>
              <button 
                type="submit" 
                className={styles.button}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.logoContainer}>
            <img src={logo.src} alt="MC Aesthetics" className={styles.logo} />
          </div>
          
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/accessibility" className={styles.link}>
              Accessibility
            </Link>
          </div>
          
          <div className={styles.copyright}>
            © {new Date().getFullYear()} MC Aesthetics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}