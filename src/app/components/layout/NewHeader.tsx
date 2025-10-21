'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronRight, Sparkles, Zap } from 'lucide-react';
import styles from './NewHeaderStyles.module.css';

const NewHeader = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fix hydration by ensuring client-only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Active state logic
  const isActive = (path: string) => {
    return pathname === path;
  };

  const isActiveSection = (basePath: string) => {
    if (basePath === '/' && pathname !== '/') return false;
    if (basePath === '/') return pathname === '/';
    return pathname.startsWith(basePath);
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'CoolPeel', href: '/coolpeel', featured: true },
    {
      name: 'Aesthetic Services',
      href: '/aesthetic-services/all-aesthetic-services',
      dropdown: [
        {
          name: 'Wrinkle Reducers',
          href: '/aesthetic-services/wrinkle-reducers',
          subitems: [
            { name: 'Xeomin', href: '/aesthetic-services/wrinkle-reducers/xeomin' },
            { name: 'Dysport', href: '/aesthetic-services/wrinkle-reducers/dysport' },
            { name: 'Daxxify', href: '/aesthetic-services/wrinkle-reducers/daxxify' },
            { name: 'Jeuveau', href: '/aesthetic-services/wrinkle-reducers/jeuveau' },
          ],
        },
        {
          name: 'Dermal Fillers',
          href: '/aesthetic-services/dermal-fillers',
          subitems: [
            { name: 'Sculptra', href: '/aesthetic-services/dermal-fillers/sculptra' },
            { name: 'Restylane', href: '/aesthetic-services/dermal-fillers/restylane' },
            { name: 'RHA', href: '/aesthetic-services/dermal-fillers/rha' },
            { name: 'Revanesse', href: '/aesthetic-services/dermal-fillers/revanesse' },
            { name: 'Belotero', href: '/aesthetic-services/dermal-fillers/belotero' },
            { name: 'Radiesse', href: '/aesthetic-services/dermal-fillers/radiesse' },
          ],
        },
        { name: 'Kybella', href: '/aesthetic-services/kybella' },
        { name: 'Sclerotherapy', href: '/aesthetic-services/sclerotherapy' },
        { name: 'Chemical Peels', href: '/aesthetic-services/chemical-peels-perfect-derma' },
        { name: 'Scarlet RF Microneedling', href: '/aesthetic-services/scarlet-rf-microneedling' },
        { name: 'CoolPeel CO2 Laser', href: '/aesthetic-services/coolpeel-co2-laser', featured: true },
        { name: 'All Services', href: '/aesthetic-services/all-aesthetic-services' },
      ],
    },
    {
      name: 'Laser Hair Removal',
      href: '/laser-hair',
      dropdown: [{ name: 'Membership', href: '/laser-hair#membership' }],
    },
    { name: 'ZO Skin Health', href: '/zo-skin-health' },
    { name: 'Financing', href: '/financing' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Click outside handler for desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (headerRef.current && !headerRef.current.contains(target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Click outside handler for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !target.closest(`.${styles.mobileMenuButton}`)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleDropdownEnter = (name: string) => {
    setOpenDropdown(name);
    setOpenSubDropdown(null);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubDropdownEnter = (name: string) => {
    setOpenSubDropdown(name);
  };

  const handleSubDropdownLeave = () => {
    setOpenSubDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    setOpenMobileSubDropdown(null);
  };

  const toggleMobileSubDropdown = (name: string) => {
    setOpenMobileSubDropdown(openMobileSubDropdown === name ? null : name);
  };

  const handleNavClick = () => {
    closeMenu();
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!isMounted) {
    return (
      <header ref={headerRef} className={styles.header}>
        {/* Futuristic Background Elements */}
        <div className={styles.headerBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.glowOrb1}></div>
          <div className={styles.glowOrb2}></div>
        </div>

        {/* Top Bar */}
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <div className={styles.topBarContent}>
              <div className={styles.premiumBadge}>
                <span className={styles.iconSparkle}></span>
                <span className={styles.premiumText}>Premium Aesthetic Services</span>
              </div>

              <div className={styles.topBarActions}>
                <a href="tel:9712672322" className={styles.phoneLink}>
                  <span className={styles.icon}></span>
                  <span className={styles.phoneNumber}>(971) 267-2322</span>
                </a>
                <a
                  href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookButton}
                >
                  <span className={styles.icon}></span>
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={styles.mainNav}>
          <div className={styles.navContent}>
            {/* Logo */}
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoContainer}>
                <div className={styles.logoGlow}></div>
                <Image
                  src="/images/logo.png"
                  alt="MC Aesthetics - Medical Spa & Wellness"
                  className={styles.logoImage}
                  width={200}
                  height={80}
                  priority
                />
              </div>
              <div className={styles.logoTextContainer}>
                <span className={styles.logoTagline}>Where Beauty Meets Science</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav} aria-label="Main navigation">
              {/* Navigation items will render after mount */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.mobileMenuButton}
              aria-label="Open menu"
            >
              <span className={styles.menuIcon}></span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header ref={headerRef} className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Futuristic Background Elements */}
      <div className={styles.headerBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.premiumBadge}>
              <Sparkles className={styles.iconSparkle} aria-hidden="true" />
              <span className={styles.premiumText}>Premium Aesthetic Services</span>
            </div>

            <div className={styles.topBarActions}>
              <a href="tel:9712672322" className={styles.phoneLink}>
                <Phone className={styles.icon} aria-hidden="true" />
                <span className={styles.phoneNumber}>(971) 267-2322</span>
              </a>
              <a
                href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookButton}
              >
                <Zap className={styles.icon} aria-hidden="true" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink} onClick={handleNavClick}>
            <div className={styles.logoContainer}>
              <div className={styles.logoGlow}></div>
              <Image
                src="/images/logo.png"
                alt="MC Aesthetics - Medical Spa & Wellness"
                className={styles.logoImage}
                width={200}
                height={80}
                priority
              />
            </div>
            <div className={styles.logoTextContainer}>
              <span className={styles.logoTagline}>Where Beauty Meets Science</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className={styles.navItem}
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`${styles.navButton} ${isActiveSection(item.href.split('#')[0]) ? styles.active : ''}`}
                      aria-expanded={openDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={`${styles.chevronIcon} ${openDropdown === item.name ? styles.rotated : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div className={`${styles.dropdown} ${openDropdown === item.name ? styles.visible : ''}`}>
                      <div className={styles.dropdownGlow}></div>
                      {item.dropdown.map((dropItem) => (
                        <div
                          key={dropItem.name}
                          className={styles.dropdownItem}
                          onMouseEnter={() => dropItem.subitems && handleSubDropdownEnter(dropItem.name)}
                          onMouseLeave={handleSubDropdownLeave}
                        >
                          {dropItem.subitems ? (
                            <>
                              <button
                                type="button"
                                className={`${styles.dropdownButton} ${isActiveSection(dropItem.href) ? styles.active : ''}`}
                                aria-expanded={openSubDropdown === dropItem.name}
                                aria-haspopup="true"
                              >
                                {dropItem.name}
                                <ChevronRight className={styles.chevronIcon} aria-hidden="true" />
                              </button>
                              <div className={`${styles.subDropdown} ${openSubDropdown === dropItem.name ? styles.visible : ''}`}>
                                <div className={styles.subDropdownGlow}></div>
                                {dropItem.subitems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`${styles.subDropdownLink} ${isActive(subItem.href) ? styles.active : ''}`}
                                    onClick={handleNavClick}
                                  >
                                    <span className={styles.linkAccent}></span>
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={dropItem.href}
                              className={`${styles.dropdownLink} ${dropItem.featured ? styles.featured : ''} ${isActive(dropItem.href) ? styles.active : ''}`}
                              onClick={handleNavClick}
                            >
                              {dropItem.featured && <Sparkles className={styles.iconTiny} aria-hidden="true" />}
                              <span className={styles.linkAccent}></span>
                              {dropItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className={styles.mobileMenuButton}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className={styles.menuIcon} aria-hidden="true" />
            ) : (
              <Menu className={styles.menuIcon} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileLogoSection}>
              <h2 className={styles.logoMainText}>MC Aesthetics</h2>
              <p className={styles.logoTaglineMobile}>Where Beauty Meets Science</p>
            </div>
            <button
              type="button"
              onClick={closeMenu}
              className={styles.mobileCloseButton}
              aria-label="Close menu"
            >
              <X className={styles.menuIcon} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item) => (
                <li key={item.name} className={styles.mobileNavItem}>
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`${styles.mobileDropdownButton} ${isActiveSection(item.href.split('#')[0]) ? styles.active : ''}`}
                        aria-expanded={openMobileDropdown === item.name}
                      >
                        {item.name}
                        <ChevronDown
                          className={`${styles.chevronIcon} ${openMobileDropdown === item.name ? styles.rotated : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      <div className={`${styles.mobileDropdownContent} ${openMobileDropdown === item.name ? styles.open : ''}`}>
                        <ul className={styles.mobileSubNavList}>
                          {item.dropdown.map((dropItem) => (
                            <li key={dropItem.name} className={styles.mobileSubNavItem}>
                              {dropItem.subitems ? (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => toggleMobileSubDropdown(dropItem.name)}
                                    className={`${styles.mobileDropdownButton} ${isActiveSection(dropItem.href) ? styles.active : ''}`}
                                    aria-expanded={openMobileSubDropdown === dropItem.name}
                                  >
                                    {dropItem.name}
                                    <ChevronDown
                                      className={`${styles.chevronIcon} ${openMobileSubDropdown === dropItem.name ? styles.rotated : ''}`}
                                      aria-hidden="true"
                                    />
                                  </button>
                                  <div className={`${styles.mobileDropdownContent} ${openMobileSubDropdown === dropItem.name ? styles.open : ''}`}>
                                    <ul className={styles.mobileSubNavList}>
                                      {dropItem.subitems.map((subItem) => (
                                        <li key={subItem.name} className={styles.mobileSubNavItem}>
                                          <Link
                                            href={subItem.href}
                                            onClick={handleNavClick}
                                            className={`${styles.mobileSubNavLink} ${isActive(subItem.href) ? styles.active : ''}`}
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={dropItem.href}
                                  onClick={handleNavClick}
                                  className={`${styles.mobileSubNavLink} ${dropItem.featured ? styles.featured : ''} ${isActive(dropItem.href) ? styles.active : ''}`}
                                >
                                  {dropItem.featured && <Sparkles className={styles.iconTiny} aria-hidden="true" />}
                                  {dropItem.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Contact Section */}
          <div className={styles.mobileContactSection}>
            <a href="tel:9712672322" className={styles.phoneLink} onClick={closeMenu}>
              <Phone className={styles.icon} aria-hidden="true" />
              <span>(971) 267-2322</span>
            </a>
            <a
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={styles.bookButton}
            >
              <Zap className={styles.icon} aria-hidden="true" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
