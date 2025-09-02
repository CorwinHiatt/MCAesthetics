"use client"

import Link from 'next/link';
import Image from "next/legacy/image";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import styles from './Header2.module.css';
import logo from '../../../../public/images/logo.png';

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aestheticDropdownOpen, setAestheticDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Add scroll effect for dynamic header behavior
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAestheticDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isClient) return;
    
    function handleClickOutside(event: Event) {
      if (
        dropdownRef.current &&
        event.target &&
        !(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setAestheticDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isClient]);

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

  // Dropdown handlers with improved timing
  const handleDropdownToggle = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setAestheticDropdownOpen(!aestheticDropdownOpen);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    if (!aestheticDropdownOpen) {
      setAestheticDropdownOpen(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAestheticDropdownOpen(false);
    }, 150);
  };

  const handleDropdownItemClick = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setAestheticDropdownOpen(false);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.mcaLuxHeaderWrapper}>
      <header className={`${styles.mcaLuxHeader} ${isClient && scrolled ? styles.mcaLuxHeaderScrolled : ''}`}>
        <div className={styles.mcaLuxHeaderContainer}>
          <div className={styles.mcaLuxHeaderContent}>
            <Link href="/" className={styles.mcaLuxHeaderLogoContainer}>
              <div className={styles.mcaLuxHeaderLogoWrapper}>
                <Image 
                  src={logo}
                  alt="MC Aesthetics Logo"
                  width={80}
                  height={80}
                  className={styles.mcaLuxHeaderLogoImage}
                  priority
                />
              </div>
            </Link>

            <button
              className={styles.mcaLuxHeaderMobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className={styles.mcaLuxHeaderMenuIconWrapper}>
                <svg
                  width="28"
                  height="28"
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
              </div>
            </button>

            <nav className={styles.mcaLuxHeaderDesktopNav}>
              <div className={styles.mcaLuxHeaderNavLinks}>
                <Link
                  href="/about"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/about' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>About</span>
                </Link>
                <Link
                  href="/zo-skin-health"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/zo-skin-health' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>Zo Skin Health</span>
                </Link>
                <Link
                  href="/laser-hair"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/laser-hair' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>Laser Hair</span>
                </Link>
                <Link
                  href="/gift-cards"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/gift-cards' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>Gift Cards</span>
                </Link>
                <Link
                  href="/financing"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/financing' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>Financing</span>
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.mcaLuxHeaderNavLink} ${pathname === '/contact' ? styles.mcaLuxHeaderActive : ''}`}
                >
                  <span className={styles.mcaLuxHeaderNavLinkText}>Contact</span>
                </Link>
                
                <div 
                  className={styles.mcaLuxHeaderDropdownContainer} 
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button 
                    className={`${styles.mcaLuxHeaderNavLink} ${styles.mcaLuxHeaderDropdownButton} ${
                      pathname.startsWith('/aesthetic-services') ? styles.mcaLuxHeaderActive : ''
                    }`}
                    onClick={handleDropdownToggle}
                    aria-expanded={aestheticDropdownOpen}
                    aria-haspopup="true"
                    type="button"
                  >
                    <span className={styles.mcaLuxHeaderNavLinkText}>Aesthetic Services</span>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      className={`${styles.mcaLuxHeaderDropdownArrow} ${aestheticDropdownOpen ? styles.mcaLuxHeaderDropdownArrowOpen : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Enhanced dropdown rendering */}
                  <div 
                    className={`${styles.mcaLuxHeaderDropdownMenu} ${
                      aestheticDropdownOpen ? styles.mcaLuxHeaderDropdownMenuOpen : styles.mcaLuxHeaderDropdownMenuClosed
                    }`}
                    style={{
                      visibility: aestheticDropdownOpen ? 'visible' : 'hidden',
                      opacity: aestheticDropdownOpen ? 1 : 0,
                      transform: aestheticDropdownOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
                      pointerEvents: aestheticDropdownOpen ? 'auto' : 'none'
                    }}
                  >
                    <div className={styles.mcaLuxHeaderDropdownInner}>
                      {aestheticServices.map((section, sectionIndex) => (
                        <div key={`section-${sectionIndex}`} className={styles.mcaLuxHeaderDropdownSection}>
                          {section.category && (
                            <div className={styles.mcaLuxHeaderDropdownCategory}>
                              {section.category}
                            </div>
                          )}
                          {section.items.map((item, itemIndex) => (
                            <Link 
                              key={`item-${sectionIndex}-${itemIndex}`}
                              href={item.href}
                              className={`${styles.mcaLuxHeaderDropdownItem} ${
                                pathname === item.href ? styles.mcaLuxHeaderDropdownItemActive : ''
                              }`}
                              onClick={handleDropdownItemClick}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu" 
                  className={styles.mcaLuxHeaderBookButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.mcaLuxHeaderBookButtonText}>Book Now</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu with improved rendering */}
        <div 
          className={`${styles.mcaLuxHeaderMobileMenuOverlay} ${
            mobileMenuOpen ? styles.mcaLuxHeaderMobileMenuOpen : styles.mcaLuxHeaderMobileMenuClosed
          }`}
          style={{
            visibility: mobileMenuOpen ? 'visible' : 'hidden',
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
            pointerEvents: mobileMenuOpen ? 'auto' : 'none'
          }}
        >
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
                  type="button"
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
                
                <div 
                  className={`${styles.mcaLuxHeaderMobileAccordionContent} ${
                    mobileAestheticExpanded ? styles.mcaLuxHeaderMobileAccordionContentOpen : ''
                  }`}
                  style={{
                    maxHeight: mobileAestheticExpanded ? '1000px' : '0',
                    opacity: mobileAestheticExpanded ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  {aestheticServices.map((section, sectionIndex) => (
                    <div key={`mobile-section-${sectionIndex}`} className={styles.mcaLuxHeaderMobileAccordionSection}>
                      {section.category ? (
                        <>
                          <button 
                            className={styles.mcaLuxHeaderMobileSubCategory}
                            onClick={() => toggleMobileCategory(section.category)}
                            aria-expanded={!!mobileExpandedCategories[section.category]}
                            type="button"
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
                          <div 
                            className={styles.mcaLuxHeaderMobileSubItems}
                            style={{
                              maxHeight: mobileExpandedCategories[section.category] ? '500px' : '0',
                              opacity: mobileExpandedCategories[section.category] ? 1 : 0,
                              overflow: 'hidden'
                            }}
                          >
                            {section.items.map((item, itemIndex) => (
                              <Link 
                                key={`mobile-item-${sectionIndex}-${itemIndex}`}
                                href={item.href}
                                className={styles.mcaLuxHeaderMobileSubNavLink}
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
      </header>
    </div>
  );
}