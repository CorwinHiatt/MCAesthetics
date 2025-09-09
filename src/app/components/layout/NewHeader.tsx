'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
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
        { name: 'CoolPeel CO2 Laser', href: '/aesthetic-services/coolpeel-co2-laser' },
        { name: 'All Services', href: '/aesthetic-services/all-aesthetic-services' },
      ],
    },
    {
      name: 'Laser Hair Removal',
      href: '/laser-hair',
      dropdown: [{ name: 'Membership', href: '/laser-hair/membership' }],
    },
    { name: 'ZO Skin Health', href: '/zo-skin-health' },
    { name: 'Financing', href: '/financing' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
    setOpenMobileDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((open) => (open === name ? null : name));
    setOpenMobileSubDropdown(null);
  };

  const toggleMobileSubDropdown = (name: string) => {
    setOpenMobileSubDropdown((open) => (open === name ? null : name));
  };

  const handleDropdownEnter = (name: string) => {
    setOpenDropdown(name);
    setOpenSubDropdown(null);
  };
  const handleDropdownLeave = () => {
    setTimeout(() => { setOpenDropdown(null); setOpenSubDropdown(null); }, 150);
  };
  const handleSubDropdownEnter = (name: string) => setOpenSubDropdown(name);
  const handleSubDropdownLeave = () => setTimeout(() => setOpenSubDropdown(null), 150);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBarContent}>
            <div className={styles.premiumBadge}>
              <span className={styles.premiumText}>
                Professional Aesthetic Services
              </span>
            </div>
            <div className={styles.topBarActions}>
              <a href="tel:+19712672322" className={styles.phoneLink}>
                <Phone className={styles.icon} />
                <span className={styles.phoneNumber}>
                  (971) 267-2322
                </span>
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
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/logo.png"
                alt="MC Aesthetics Logo"
                width={72}
                height={72}
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} ref={dropdownRef}>
            {navigationItems.map((item) => (
              <div key={item.name} className={styles.navItem}>
                {!isMounted ? (
                  <Link href={item.href} className={styles.navLink}>
                    {item.name}
                  </Link>
                ) : item.href === '/zo-skin-health' || item.href === '/financing' ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={styles.navLink}
                  >
                    {item.name}
                  </a>
                ) : item.dropdown ? (
                  <div
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className={styles.navButton}>
                      {item.name}
                      <ChevronDown className={styles.chevronIcon} />
                    </button>
                    <div
                      className={`${styles.dropdown} ${
                        openDropdown === item.name ? styles.visible : ''
                      }`}
                    >
                      {item.dropdown.map((di) => (
                        <div key={di.name} className={styles.dropdownItem}>
                          {di.subitems ? (
                            <div
                              onMouseEnter={() => handleSubDropdownEnter(di.name)}
                              onMouseLeave={handleSubDropdownLeave}
                            >
                              <div className={styles.dropdownButton}>
                                <Link href={di.href} className="flex-1">
                                  {di.name}
                                </Link>
                                <ChevronRight className={styles.chevronIcon} />
                              </div>
                              <div
                                className={`${styles.subDropdown} ${
                                  openSubDropdown === di.name ? styles.visible : ''
                                }`}
                              >
                                {di.subitems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={styles.subDropdownLink}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link href={di.href} className={styles.dropdownLink}>
                              {di.name}
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
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={styles.mobileMenuButton}
          >
            {isMobileMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <Link
              href="/"
              className={styles.logoLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/images/logo.png"
                alt="MC Aesthetics Logo"
                width={56}
                height={56}
                priority
                className={styles.logoImage}
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={styles.mobileCloseButton}
            >
              <X className={styles.menuIcon} />
            </button>
          </div>
          <nav>
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item) => (
                <li key={item.name} className={styles.mobileNavItem}>
                  {item.href === '/zo-skin-health' ||
                  item.href === '/financing' ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={styles.mobileNavLink}
                    >
                      {item.name}
                    </a>
                  ) : item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={styles.mobileDropdownButton}
                      >
                        {item.name}
                        <ChevronDown
                          className={`${styles.chevronIcon} ${
                            openMobileDropdown === item.name
                              ? styles.rotated
                              : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`${styles.mobileDropdownContent} ${
                          openMobileDropdown === item.name
                            ? styles.open
                            : ''
                        }`}
                      >
                        <ul className={styles.mobileSubNavList}>
                          {item.dropdown.map((di) => (
                            <li
                              key={di.name}
                              className={styles.mobileSubNavItem}
                            >
                              {di.subitems ? (
                                <>
                                  <button
                                    onClick={() =>
                                      toggleMobileSubDropdown(di.name)
                                    }
                                    className={styles.mobileDropdownButton}
                                  >
                                    {di.name}
                                    <ChevronDown
                                      className={`${styles.chevronIcon} ${
                                        openMobileSubDropdown === di.name
                                          ? styles.rotated
                                          : ''
                                      }`}
                                    />
                                  </button>
                                  <div
                                    className={`${styles.mobileDropdownContent} ${
                                      openMobileSubDropdown === di.name
                                        ? styles.open
                                        : ''
                                    }`}
                                  >
                                    <ul
                                      className={styles.mobileSubNavList}
                                    >
                                      {di.subitems.map((sub) => (
                                        <li
                                          key={sub.name}
                                          className={
                                            styles.mobileSubNavItem
                                          }
                                        >
                                          <Link
                                            href={sub.href}
                                            className={
                                              styles.mobileSubNavLink
                                            }
                                            onClick={() =>
                                              setIsMobileMenuOpen(false)
                                            }
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                <Link
                                  href={di.href}
                                  className={styles.mobileSubNavLink}
                                  onClick={() =>
                                    setIsMobileMenuOpen(false)
                                  }
                                >
                                  {di.name}
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
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
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