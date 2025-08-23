"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header2.module.css';

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reset mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.header2Wrapper}>
      <header className={styles.header2}>
        <div className={styles.header2Container}>
          <div className={styles.header2Content}>
            {/* Logo Section with Placeholder */}
            <Link href="/" className={styles.header2LogoContainer}>
              {/* Placeholder for image logo */}
              <div className={styles.header2LogoPlaceholder}>
                {/* Replace this div with <Image src="/path-to-logo.png" alt="MC Aesthetics Logo" width={50} height={50} /> */}
              </div>
              <span className={styles.header2LogoText}>MC Aesthetics</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className={styles.header2MobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={styles.header2MenuIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className={styles.header2DesktopNav}>
              <div className={styles.header2NavLinks}>
                <Link
                  href="/about"
                  className={`${styles.header2NavLink} ${pathname === '/about' ? styles.header2Active : ''}`}
                >
                  About
                </Link>
                <Link
                  href="/zo-skin-health"
                  className={`${styles.header2NavLink} ${pathname === '/zo-skin-health' ? styles.header2Active : ''}`}
                >
                  Zo Skin Health
                </Link>
                <Link
                  href="/laser-hair"
                  className={`${styles.header2NavLink} ${pathname === '/laser-hair' ? styles.header2Active : ''}`}
                >
                  Laser Hair
                </Link>
                <Link
                  href="/gift-cards"
                  className={`${styles.header2NavLink} ${pathname === '/gift-cards' ? styles.header2Active : ''}`}
                >
                  Gift Cards
                </Link>
                <Link
                  href="/financing"
                  className={`${styles.header2NavLink} ${pathname === '/financing' ? styles.header2Active : ''}`}
                >
                  Financing
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.header2NavLink} ${pathname === '/contact' ? styles.header2Active : ''}`}
                >
                  Contact
                </Link>
                <Link
                  href="/aesthetic-services"
                  className={`${styles.header2NavLink} ${pathname === '/aesthetic-services' ? styles.header2Active : ''}`}
                >
                  Aesthetic Services
                </Link>
                <Link href="/book" className={styles.header2BookButton}>
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation - full screen overlay */}
        {mobileMenuOpen && (
          <div className={styles.header2MobileMenuOverlay}>
            <div className={styles.header2MobileMenuContent}>
              {/* Close button */}
              <button
                className={styles.header2MobileCloseButton}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={styles.header2CloseIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Mobile menu links */}
              <nav className={styles.header2MobileNav}>
                <Link href="/" className={styles.header2MobileNavLink}>
                  Home
                </Link>
                <Link href="/about" className={styles.header2MobileNavLink}>
                  About
                </Link>
                <Link href="/zo-skin-health" className={styles.header2MobileNavLink}>
                  Zo Skin Health
                </Link>
                <Link href="/laser-hair" className={styles.header2MobileNavLink}>
                  Laser Hair
                </Link>
                <Link href="/gift-cards" className={styles.header2MobileNavLink}>
                  Gift Cards
                </Link>
                <Link href="/financing" className={styles.header2MobileNavLink}>
                  Financing
                </Link>
                <Link href="/contact" className={styles.header2MobileNavLink}>
                  Contact
                </Link>
                <Link href="/aesthetic-services" className={styles.header2MobileNavLink}>
                  Aesthetic Services
                </Link>
                <Link href="/book" className={`${styles.header2MobileNavLink} ${styles.header2MobileBookLink}`}>
                  Book Now
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}