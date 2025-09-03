"use client"

import Link from 'next/link';
// import Image from "next/image"; // Updated from next/legacy/image
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header2.module.css';
// import logo from '../../../../public/images/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aestheticDropdownOpen, setAestheticDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [mobileAestheticExpanded, setMobileAestheticExpanded] = useState(false);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<MobileExpandedCategories>({});
  const [isClient, setIsClient] = useState(false); // Added to handle hydration
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Set client-side flag to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Your complete aesthetic services structure - PRESERVED
  const aestheticServices = [
    { 
      category: "Wrinkle Reducers",
      items: [
        { name: "Xeomin", href: "/aesthetic-services/wrinkle-reducers/xeomin" },
        { name: "Dysport", href: "/aesthetic-services/wrinkle-reducers/dysport" },
        { name: "DAXXIFY", href: "/aesthetic-services/wrinkle-reducers/daxxify" },
        { name: "Jeuveau", href: "/aesthetic-services/wrinkle-reducers/jeuveau" }
      ]
    },
    {
      category: "Dermal Fillers",
      items: [
        { name: "Sculptra", href: "/aesthetic-services/dermal-fillers/sculptra" },
        { name: "Restylane", href: "/aesthetic-services/dermal-fillers/restylane" },
        { name: "RHA", href: "/aesthetic-services/dermal-fillers/rha" },
        { name: "Revanesse", href: "/aesthetic-services/dermal-fillers/revanesse" },
        { name: "Belotero", href: "/aesthetic-services/dermal-fillers/belotero" },
        { name: "Radiesse", href: "/aesthetic-services/dermal-fillers/radiesse" }
      ]
    },
    {
      category: null, // Individual services without category
      items: [
        { name: "Kybella", href: "/aesthetic-services/kybella" },
        { name: "Sclerotherapy", href: "/aesthetic-services/sclerotherapy" },
        { name: "Chemical Peels - Perfect Derma™", href: "/aesthetic-services/chemical-peels" },
        { name: "Scarlet RF Microneedling", href: "/aesthetic-services/scarlet-rf-microneedling" },
        { name: "CoolPeel CO2 Laser", href: "/aesthetic-services/coolpeel%20co2%20laser" }
      ]
    },
    {
      category: null,
      items: [
        { name: "All Aesthetic Services", href: "/aesthetic-services" }
      ]
    }
  ];

  // Function to close mobile menu and reset all expanded states
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAestheticExpanded(false);
    setMobileExpandedCategories({});
  };

  // Calculate dropdown position when it opens - only on client side
  useEffect(() => {
    if (isClient && aestheticDropdownOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: buttonRect.bottom + 8,
        left: buttonRect.left
      });
    }
  }, [isClient, aestheticDropdownOpen]);

  // Close dropdown when clicking outside - only on client side
  useEffect(() => {
    if (!isClient) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAestheticDropdownOpen(false);
      }
    }

    if (aestheticDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isClient, aestheticDropdownOpen]);

  // Scroll effect - only on client side
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Close mobile menu when pathname changes (navigation occurs)
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  // Mobile category toggle
  interface AestheticServiceItem {
    name: string;
    href: string;
  }

  interface AestheticServiceSection {
    category: string | null;
    items: AestheticServiceItem[];
  }

  interface DropdownPosition {
    top: number;
    left: number;
  }

  interface MobileExpandedCategories {
    [category: string]: boolean;
  }

  const toggleMobileCategory = (category: string) => {
    setMobileExpandedCategories((prev: MobileExpandedCategories) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Log to confirm component is rendering
  if (isClient) {
    console.log("Header component rendered");
  }

  return (
    <div className={styles.headerWrapper}>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            
            {/* Logo */}
            <Link href="/" className={styles.logoContainer}>
              <div className={styles.logoWrapper}>
                <div className={styles.logoWrapper}>
  <div style={{ width: 60, height: 60, backgroundColor: '#ccc', borderRadius: '50%' }}>
    Logo Placeholder
  </div>
</div>

              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <div className={styles.navLinks}>
                <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
                  About
                </Link>
                <Link href="/zo-skin-health" className={`${styles.navLink} ${pathname === '/zo-skin-health' ? styles.active : ''}`}>
                  Zo Skin Health
                </Link>
                <Link href="/laser-hair" className={`${styles.navLink} ${pathname === '/laser-hair' ? styles.active : ''}`}>
                  Laser Hair
                </Link>
                <Link href="/gift-cards" className={`${styles.navLink} ${pathname === '/gift-cards' ? styles.active : ''}`}>
                  Gift Cards
                </Link>
                <Link href="/financing" className={`${styles.navLink} ${pathname === '/financing' ? styles.active : ''}`}>
                  Financing
                </Link>
                <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
                  Contact
                </Link>
                
                {/* COMPLETE Aesthetic Services Dropdown */}
                <div className={styles.dropdownContainer} ref={dropdownRef}>
                  <button 
                    ref={buttonRef}
                    className={`${styles.dropdownButton} ${styles.navLink} ${pathname.startsWith('/aesthetic-services') ? styles.active : ''}`}
                    onClick={() => setAestheticDropdownOpen(!aestheticDropdownOpen)}
                    aria-expanded={aestheticDropdownOpen}
                  >
                    Aesthetic Services
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      className={styles.dropdownArrow}
                      style={{ 
                        transform: aestheticDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Complete Nested Dropdown Menu */}
                  {isClient && aestheticDropdownOpen && (
                    <div 
                      className={styles.dropdownMenu}
                      style={{
                        position: 'absolute', // Changed to absolute for better compatibility
                        top: `${dropdownPosition.top}px`,
                        left: `${dropdownPosition.left}px`,
                        zIndex: 9999
                      }}
                    >
                      <div className={styles.dropdownContent}>
                        {aestheticServices.map((section, sectionIndex) => (
                          <div key={`section-${sectionIndex}`} className={styles.dropdownSection}>
                            {section.category && (
                              <div className={styles.dropdownCategory}>
                                {section.category}
                              </div>
                            )}
                            {section.items.map((item, itemIndex) => (
                              <Link 
                                key={`item-${sectionIndex}-${itemIndex}`}
                                href={item.href}
                                className={`${styles.dropdownItem} ${pathname === item.href ? styles.active : ''}`}
                                onClick={() => setAestheticDropdownOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Link 
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu" 
                  className={styles.bookButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={styles.menuIconWrapper}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Complete Mobile Menu with Nested Structure */}
        {isClient && mobileMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <div className={styles.mobileMenuContent}>
              <button
                className={styles.mobileCloseButton}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <nav className={styles.mobileNav}>
                <Link 
                  href="/" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link 
                  href="/zo-skin-health" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Zo Skin Health
                </Link>
                <Link 
                  href="/laser-hair" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Laser Hair
                </Link>
                <Link 
                  href="/gift-cards" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Gift Cards
                </Link>
                <Link 
                  href="/financing" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Financing
                </Link>
                <Link 
                  href="/contact" 
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                
                {/* Complete Mobile Aesthetic Services Accordion */}
                <div className={styles.mobileAccordion}>
                  <button 
                    className={styles.mobileAccordionButton}
                    onClick={() => setMobileAestheticExpanded(!mobileAestheticExpanded)}
                    aria-expanded={mobileAestheticExpanded}
                  >
                    Aesthetic Services
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      style={{
                        transform: mobileAestheticExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={styles.mobileAccordionContent}
                    style={{
                      maxHeight: mobileAestheticExpanded ? '1000px' : '0',
                      opacity: mobileAestheticExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {aestheticServices.map((section, sectionIndex) => (
                      <div key={`mobile-section-${sectionIndex}`} className={styles.mobileAccordionSection}>
                        {section.category ? (
                          <>
                            <button 
                              className={styles.mobileSubCategory}
                              onClick={() => toggleMobileCategory(section.category)}
                              aria-expanded={!!mobileExpandedCategories[section.category]}
                            >
                              {section.category}
                              <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor"
                                style={{
                                  transform: mobileExpandedCategories[section.category] ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.3s ease'
                                }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <div 
                              className={styles.mobileSubItems}
                              style={{
                                maxHeight: mobileExpandedCategories[section.category] ? '500px' : '0',
                                opacity: mobileExpandedCategories[section.category] ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              {section.items.map((item, itemIndex) => (
                                <Link 
                                  key={`mobile-item-${sectionIndex}-${itemIndex}`}
                                  href={item.href}
                                  className={styles.mobileSubNavLink}
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            {section.items.map((item, itemIndex) => (
                              <Link 
                                key={`mobile-standalone-${sectionIndex}-${itemIndex}`}
                                href={item.href}
                                className={styles.mobileSubNavLink}
                                onClick={closeMobileMenu}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu" 
                  className={styles.mobileBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
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