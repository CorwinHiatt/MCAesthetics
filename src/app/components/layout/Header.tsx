"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header2.module.css';
import logo from '../../../images/logo.png';

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aestheticDropdownOpen, setAestheticDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAestheticDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        event.target &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setAestheticDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    category: null,
    items: [
      { name: "Kybella", href: "/aesthetic-services/kybella" },
      { name: "Sclerotherapy", href: "/aesthetic-services/sclerotherapy" },
      { name: "Chemical Peels - Perfect Derma™", href: "/aesthetic-services/chemical-peels" },
      { name: "Scarlet RF Microneedling", href: "/aesthetic-services/scarlet-rf-microneedling" }
    ]
  },
  {
    category: null,
    items: [
      { name: "All Aesthetic Services", href: "/aesthetic-services" }
    ]
  }
];

  const [mobileAestheticExpanded, setMobileAestheticExpanded] = useState(false);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<Record<string, boolean>>({});

  interface AestheticServiceItem {
    name: string;
    href: string;
  }

  interface AestheticServiceSection {
    category: string | null;
    items: AestheticServiceItem[];
  }

  const toggleMobileCategory = (category: string) => {
    setMobileExpandedCategories((prev: Record<string, boolean>) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className={styles.header2Wrapper}>
      <header className={styles.header2}>
        <div className={styles.header2Container}>
          <div className={styles.header2Content}>
            <Link href="/" className={styles.header2LogoContainer}>
              <Image 
                src={logo}
                alt="MC Aesthetics Logo"
                width={100}
                height={100}
                className={styles.header2LogoImage}
              />
            </Link>

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
                
                <div className={styles.header2DropdownContainer} ref={dropdownRef}>
                  <button 
                    className={`${styles.header2NavLink} ${styles.header2DropdownButton} ${
                      pathname.startsWith('/aesthetic-services') ? styles.header2Active : ''
                    }`}
                    onClick={() => setAestheticDropdownOpen(!aestheticDropdownOpen)}
                    aria-expanded={aestheticDropdownOpen}
                    aria-haspopup="true"
                  >
                    Aesthetic Services
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      className={`${styles.header2DropdownArrow} ${aestheticDropdownOpen ? styles.header2DropdownArrowOpen : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {aestheticDropdownOpen && (
                    <div className={styles.header2DropdownMenu}>
                      {aestheticServices.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.header2DropdownSection}>
                          {section.category && (
                            <div className={styles.header2DropdownCategory}>
                              {section.category}
                            </div>
                          )}
                          {section.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex}
                              href={item.href}
                              className={`${styles.header2DropdownItem} ${
                                pathname === item.href ? styles.header2DropdownItemActive : ''
                              }`}
                              onClick={() => setAestheticDropdownOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu" 
                  className={styles.header2BookButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.header2MobileMenuOverlay}>
            <div className={styles.header2MobileMenuContent}>
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
                
                <div className={styles.header2MobileAccordion}>
                  <button 
                    className={`${styles.header2MobileAccordionButton} ${
                      mobileAestheticExpanded ? styles.header2MobileAccordionExpanded : ''
                    }`}
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
                      className={`${styles.header2MobileAccordionArrow} ${
                        mobileAestheticExpanded ? styles.header2MobileAccordionArrowExpanded : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {mobileAestheticExpanded && (
                    <div className={styles.header2MobileAccordionContent}>
                      {aestheticServices.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.header2MobileAccordionSection}>
                          {section.category ? (
                            <>
                              <button 
                                className={styles.header2MobileSubCategory}
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
                                  className={`${styles.header2MobileSubCategoryArrow} ${
                                    mobileExpandedCategories[section.category] ? styles.header2MobileSubCategoryArrowExpanded : ''
                                  }`}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {mobileExpandedCategories[section.category] && (
                                <div className={styles.header2MobileSubItems}>
                                  {section.items.map((item, itemIndex) => (
                                    <Link 
                                      key={itemIndex}
                                      href={item.href}
                                      className={styles.header2MobileSubNavLink}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              {section.items.map((item, itemIndex) => (
                                <Link 
                                  key={itemIndex}
                                  href={item.href}
                                  className={styles.header2MobileSubNavLink}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu" 
                  className={`${styles.header2MobileNavLink} ${styles.header2MobileBookLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
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