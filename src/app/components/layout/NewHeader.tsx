"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Menu, X, Phone, Calendar } from 'lucide-react';
import styles from './NewHeader.module.css';

interface SubItem {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  subitems?: SubItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NewHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // New: For hydration fix

  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Coolpeel', href: '/coolpeel' },
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
          ]
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
          ]
        },
        { name: 'Kybella', href: '/aesthetic-services/kybella' },
        { name: 'Sclerotherapy', href: '/aesthetic-services/sclerotherapy' },
        { name: 'Chemical Peels', href: '/aesthetic-services/chemical-peels-perfect-derma' },
        { name: 'Scarlet RF Microneedling', href: '/aesthetic-services/scarlet-rf-microneedling' },
        { name: 'CoolPeel CO2 Laser', href: '/aesthetic-services/coolpeel-co2-laser' },
        { name: 'All Services', href: '/aesthetic-services/all-aesthetic-services' },
      ]
    },
    {
      name: 'Laser Hair Removal',
      href: '/laser-hair',
      dropdown: [
        { name: 'Membership', href: '/laser-hair/membership' }
      ]
    },
    { name: 'ZO Skin Health', href: '/zo-skin-health' },
    { name: 'Financing', href: '/financing' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsMounted(true); // New: Set mounted after hydration
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  const toggleMobileDropdown = (itemName: string) => {
    setOpenMobileDropdown(openMobileDropdown === itemName ? null : itemName);
    setOpenMobileSubDropdown(null);
  };

  const toggleMobileSubDropdown = (itemName: string) => {
    setOpenMobileSubDropdown(openMobileSubDropdown === itemName ? null : itemName);
  };

  const handleDropdownEnter = (itemName: string) => {
    setOpenDropdown(itemName);
    setOpenSubDropdown(null);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }, 150);
  };

  const handleSubDropdownEnter = (itemName: string) => {
    setOpenSubDropdown(itemName);
  };

  const handleSubDropdownLeave = () => {
    setTimeout(() => {
      setOpenSubDropdown(null);
    }, 150);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.premiumBadge}>
              <span className={styles.premiumText}>Professional Aesthetic Services</span>
            </div>
            <div className={styles.topBarActions}>
              <a href="tel:+19712672322" className={styles.phoneLink}>
                <Phone className={styles.icon} />
                <span className={styles.phoneNumber}>(971) 267-2322</span>
              </a>
              <a 
                href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
                className={styles.bookButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className={styles.icon} />
                Book Now
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
              <Image
                src="/images/logo.png"
                alt="MC Aesthetics Logo"
                width={72}  // Matches CSS base size – prevents optimization mismatch
                height={72}
                className={styles.logoImage}
                priority
              />
              <div className={styles.logoTextContainer}>
                
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} ref={dropdownRef}>
            {navigationItems.map((item) => (
              <div key={item.name} className={styles.navItem}>
                {!isMounted ? (
                  // Fallback for SSR/initial client: Simple link to match server output
                  <Link href={item.href} className={styles.navLink}>
                    {item.name}
                  </Link>
                ) : (
                  // Full client-side render with dropdown logic
                  item.dropdown ? (
                    <div 
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button className={styles.navButton}>
                        {item.name}
                        <ChevronDown className={styles.chevronIcon} />
                      </button>
                      
                      <div className={`${styles.dropdown} ${openDropdown === item.name ? styles.visible : ''}`}>
                        {item.dropdown.map((dropdownItem) => (
                          <div key={dropdownItem.name} className={styles.dropdownItem}>
                            {dropdownItem.subitems ? (
                              <div
                                onMouseEnter={() => handleSubDropdownEnter(dropdownItem.name)}
                                onMouseLeave={handleSubDropdownLeave}
                              >
                                <div className={styles.dropdownButton}>
                                  <Link href={dropdownItem.href} className="flex-1">
                                    {dropdownItem.name}
                                  </Link>
                                  <ChevronRight className={styles.chevronIcon} />
                                </div>
                                
                                <div className={`${styles.subDropdown} ${openSubDropdown === dropdownItem.name ? styles.visible : ''}`}>
                                  {dropdownItem.subitems.map((subitem) => (
                                    <Link
                                      key={subitem.name}
                                      href={subitem.href}
                                      className={styles.subDropdownLink}
                                    >
                                      {subitem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link href={dropdownItem.href} className={styles.dropdownLink}>
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className={styles.navLink}>
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className={styles.mobileMenuButton}>
            {isMobileMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logoLink} onClick={() => setIsMobileMenuOpen(false)}>
              <div className={styles.logoContainer}>
                <Image
                  src="/images/logo.png"
                  alt="MC Aesthetics Logo"
                  width={56}  // Matches CSS mobile media query
                  height={56}
                  className={styles.logoImage}
                  priority
                />
                <div className={styles.logoTextContainer}>
                  <div className={styles.logoMainText}></div>
                </div>
              </div>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileCloseButton}>
              <X className={styles.menuIcon} />
            </button>
          </div>
          <nav>
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item) => (
                <li key={item.name} className={styles.mobileNavItem}>
                  {item.dropdown ? (
                    <>
                      <button onClick={() => toggleMobileDropdown(item.name)} className={styles.mobileDropdownButton}>
                        {item.name}
                        <ChevronDown className={`${styles.chevronIcon} ${openMobileDropdown === item.name ? styles.rotated : ''}`} />
                      </button>
                      <div className={`${styles.mobileDropdownContent} ${openMobileDropdown === item.name ? styles.open : ''}`}>
                        <ul className={styles.mobileSubNavList}>
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.name} className={styles.mobileSubNavItem}>
                              {dropdownItem.subitems ? (
                                <>
                                  <button onClick={() => toggleMobileSubDropdown(dropdownItem.name)} className={styles.mobileDropdownButton}>
                                    {dropdownItem.name}
                                    <ChevronDown className={`${styles.chevronIcon} ${openMobileSubDropdown === dropdownItem.name ? styles.rotated : ''}`} />
                                  </button>
                                  <div className={`${styles.mobileDropdownContent} ${openMobileSubDropdown === dropdownItem.name ? styles.open : ''}`}>
                                    <ul className={styles.mobileSubNavList}>
                                      {dropdownItem.subitems.map((subitem) => (
                                        <li key={subitem.name} className={styles.mobileSubNavItem}>
                                          <Link href={subitem.href} className={styles.mobileSubNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                                            {subitem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link href={dropdownItem.href} className={styles.mobileSubNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileContactSection}>
            <a href="tel:+19712672322" className={styles.phoneLink}>
              <Phone className={styles.icon} />
              <span>(971) 267-2322</span>
            </a>
            <a 
              href="https://www.joinblvd.com/b/mcaesthetics/widget#/cart/menu/Aesthetic%20Treatments/s_7fc39f5e-9742-48a3-a63b-dd9a234f0e14" 
              className={styles.bookButton} 
              onClick={() => setIsMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className={styles.icon} />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;