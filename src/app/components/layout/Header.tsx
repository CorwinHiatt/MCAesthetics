"use client"

import Link from 'next/link';
import Image from "next/legacy/image";
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

  const [mobileAestheticExpanded, setMobileAestheticExpanded] = useState(false);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<Record<string, boolean>>({});



  const toggleMobileCategory = (category: string) => {
    setMobileExpandedCategories((prev: Record<string, boolean>) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className={styles.mcaLuxHeaderWrapper}>
      <header className={styles.mcaLuxHeader}>
        <div className={styles.mcaLuxHeaderContainer}>
          <div className={styles.mcaLuxHeaderContent}>
            <Link href="/" className={styles.mcaLuxHeaderLogoContainer}>
              <Image 
                src={logo}
                alt="MC Aesthetics Logo"
                width={175}
                height={175}
                className={styles.mcaLuxHeaderLogoImage}
              />
            </Link>

            <button
              className={styles.mcaLuxHeaderMobileMenuButton}
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
                className={styles.mcaLuxHeaderMenuIcon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            <nav className={styles.mcaLuxHeaderDesktopNav}>
              <div className={styles.mcaLuxHeaderNavLinks}>
                <Link
                  href="/about"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/about' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  About
                </Link>
                <Link
                  href="/zo-skin-health"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/zo-skin-health' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  Zo Skin Health
                </Link>
                <Link
                  href="/laser-hair"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/laser-hair' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  Laser Hair
                </Link>
                <Link
                  href="/gift-cards"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/gift-cards' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  Gift Cards
                </Link>
                <Link
                  href="/financing"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/financing' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  Financing
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/contact' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  Contact
                </Link>
                
                <div className={styles.mcaLuxHeaderDropdownContainer} ref={dropdownRef}>
                  <button 
                    className={`${styles.mcaLuxHeaderNavLink} ${styles.mcaLuxHeaderDropdownButton} ${
                      pathname.startsWith('/aesthetic-services') ? styles.mcaLuxHeaderActive : ''
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
                      className={`${styles.mcaLuxHeaderDropdownArrow} ${aestheticDropdownOpen ? styles.mcaLuxHeaderDropdownArrowOpen : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {aestheticDropdownOpen && (
                    <div className={styles.mcaLuxHeaderDropdownMenu}>
                      {aestheticServices.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.mcaLuxHeaderDropdownSection}>
                          {section.category && (
                            <div className={styles.mcaLuxHeaderDropdownCategory}>
                              {section.category}
                            </div>
                          )}
                          {section.items.map((item, itemIndex) => (
                            <Link 
                              key={itemIndex}
                              href={item.href}
                              className={`${styles.mcaLuxHeaderDropdownItem} ${
                                pathname === item.href ? styles.mcaLuxHeaderDropdownItemActive : ''
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
                  className={styles.mcaLuxHeaderBookButton}
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
          <div className={styles.mcaLuxHeaderMobileMenuOverlay}>
            <div className={styles.mcaLuxHeaderMobileMenuContent}>
              <button
                className={styles.mcaLuxHeaderMobileCloseButton}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={styles.mcaLuxHeaderCloseIcon}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className={styles.mcaLuxHeaderMobileNav}>
                <Link href="/" className={styles.mcaLuxHeaderMobileNavLink}>
                  Home
                </Link>
                <Link href="/about" className={styles.mcaLuxHeaderMobileNavLink}>
                  About
                </Link>
                <Link href="/zo-skin-health" className={styles.mcaLuxHeaderMobileNavLink}>
                  Zo Skin Health
                </Link>
                <Link href="/laser-hair" className={styles.mcaLuxHeaderMobileNavLink}>
                  Laser Hair
                </Link>
                <Link href="/gift-cards" className={styles.mcaLuxHeaderMobileNavLink}>
                  Gift Cards
                </Link>
                <Link href="/financing" className={styles.mcaLuxHeaderMobileNavLink}>
                  Financing
                </Link>
                <Link href="/contact" className={styles.mcaLuxHeaderMobileNavLink}>
                  Contact
                </Link>
                
                <div className={styles.mcaLuxHeaderMobileAccordion}>
                  <button 
                    className={`${styles.mcaLuxHeaderMobileAccordionButton} ${
                      mobileAestheticExpanded ? styles.mcaLuxHeaderMobileAccordionExpanded : ''
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
                      className={`${styles.mcaLuxHeaderMobileAccordionArrow} ${
                        mobileAestheticExpanded ? styles.mcaLuxHeaderMobileAccordionArrowExpanded : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {mobileAestheticExpanded && (
                    <div className={styles.mcaLuxHeaderMobileAccordionContent}>
                      {aestheticServices.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={styles.mcaLuxHeaderMobileAccordionSection}>
                          {section.category ? (
                            <>
                              <button 
                                className={styles.mcaLuxHeaderMobileSubCategory}
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
                                  className={`${styles.mcaLuxHeaderMobileSubCategoryArrow} ${
                                    mobileExpandedCategories[section.category] ? styles.mcaLuxHeaderMobileSubCategoryArrowExpanded : ''
                                  }`}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {mobileExpandedCategories[section.category] && (
                                <div className={styles.mcaLuxHeaderMobileSubItems}>
                                  {section.items.map((item, itemIndex) => (
                                    <Link 
                                      key={itemIndex}
                                      href={item.href}
                                      className={styles.mcaLuxHeaderMobileSubNavLink}
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
                                  className={styles.mcaLuxHeaderMobileSubNavLink}
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
                  className={`${styles.mcaLuxHeaderMobileNavLink} ${styles.mcaLuxHeaderMobileBookLink}`}
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
