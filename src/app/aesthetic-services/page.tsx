// src/app/aesthetic-services/page.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import styles from './AestheticServices.module.css';

export default function AestheticServicesPage() {
  const [openAccordions, setOpenAccordions] = useState<Set<number>>(new Set());

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={styles.aestheticServicesPageWrapper}>
      <div className={styles.aestheticServicesHeader}>
        <h1 className={styles.aestheticServicesMainTitle}>
          Aesthetic Services at MC Aesthetics
        </h1>
        <p className={styles.aestheticServicesIntroText}>
          At MC Aesthetics, we offer a wide range of premium aesthetic services tailored to your unique needs. 
          Explore our offerings below to find the perfect treatment for you.
        </p>
      </div>

      <div className={styles.aestheticServicesAccordionContainer}>
        {aestheticServicesData.items.map((service, index) => {
          // Skip "All Aesthetic Services" card
          if (service.name === "All Aesthetic Services") return null;

          const serviceSlug = service.name.toLowerCase().replace(/\s+/g, '-');
          const isOpen = openAccordions.has(index);
          const hasNested = service.nested && service.nested.length > 0;

          return (
            <div key={index} className={styles.aestheticServicesAccordionItem}>
              {/* ACCORDION HEADER */}
              <div className={styles.aestheticServicesAccordionHeader}>
                {/* Left side: Image + Title */}
                <Link
                  href={`/aesthetic-services/${serviceSlug}`}
                  className={styles.aestheticServicesAccordionTitleWrapper}
                >
                  {service.imageUrl && service.imageUrl.trim() !== '' && (
                    <div className={styles.aestheticServicesAccordionImageWrapper}>
                      <Image
                        src={service.imageUrl}
                        alt={service.name}
                        width={80}
                        height={80}
                        className={styles.aestheticServicesAccordionImage}
                      />
                    </div>
                  )}
                  <div className={styles.aestheticServicesAccordionTitleContent}>
                    <h2 className={styles.aestheticServicesAccordionTitle}>
                      {service.name}
                    </h2>
                    <p className={styles.aestheticServicesAccordionDescription}>
                      {service.meta.description}
                    </p>
                  </div>
                </Link>

                {/* Right side: Toggle button (only if nested items exist) */}
                {hasNested && (
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={styles.aestheticServicesAccordionToggle}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${service.name} nested services`}
                  >
                    <svg
                      className={`${styles.aestheticServicesAccordionIcon} ${
                        isOpen ? styles.aestheticServicesAccordionIconOpen : ''
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </div>

              {/* ACCORDION CONTENT (Nested Products) */}
              {hasNested && (
                <div
                  className={`${styles.aestheticServicesAccordionContent} ${
                    isOpen ? styles.aestheticServicesAccordionContentOpen : ''
                  }`}
                >
                  <div className={styles.aestheticServicesNestedList}>
                    {service.nested!.map((nestedItem, nestedIndex) => {
                      const productSlug = nestedItem.name.toLowerCase().replace(/\s+/g, '-');
                      
                      return (
                        <Link
                          key={nestedIndex}
                          href={`/aesthetic-services/${serviceSlug}/${productSlug}`}
                          className={styles.aestheticServicesNestedItem}
                        >
                          {nestedItem.imageUrl && nestedItem.imageUrl.trim() !== '' && (
                            <div className={styles.aestheticServicesNestedImageWrapper}>
                              <Image
                                src={nestedItem.imageUrl}
                                alt={nestedItem.name}
                                width={60}
                                height={60}
                                className={styles.aestheticServicesNestedImage}
                              />
                            </div>
                          )}
                          <div className={styles.aestheticServicesNestedContent}>
                            <h3 className={styles.aestheticServicesNestedTitle}>
                              {nestedItem.name}
                            </h3>
                            <p className={styles.aestheticServicesNestedDescription}>
                              {nestedItem.meta.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
