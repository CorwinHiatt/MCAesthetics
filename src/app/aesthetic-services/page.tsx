"use client";

import { useState } from 'react';
import Link from 'next/link';
import aestheticServicesData from '@/data/services';
import styles from './AestheticServices.module.css';

export default function AestheticServicesPage() {
  // State to manage which accordion item is open (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.aestheticServicesPageWrapper}>
      {/* Main Title */}
      <h1 className={styles.aestheticServicesMainTitle}>Aesthetic Services at MC Aesthetics</h1>
      {/* Introduction Text */}
      <p className={styles.aestheticServicesIntroText}>
        At MC Aesthetics, we offer a wide range of premium aesthetic services tailored to your unique needs. Explore our offerings below to find the perfect treatment for you. Click on each category to learn more.
      </p>
      {/* Accordion for Services */}
      <div className={styles.aestheticServicesAccordionContainer}>
        {aestheticServicesData.items.map((service, index) => (
          <div key={index} className={styles.aestheticServicesAccordionItem}>
            <div
              className={styles.aestheticServicesAccordionHeader}
              onClick={() => toggleAccordion(index)}
              role="button"
              aria-expanded={openIndex === index}
              aria-controls={`service-panel-${index}`}
            >
              <h2 className={styles.aestheticServicesAccordionTitle}>{service.name}</h2>
              <span
                className={`${styles.aestheticServicesAccordionIcon} ${openIndex === index ? styles.open : ''}`}
              >
                ▼
              </span>
            </div>
            <div
              id={`service-panel-${index}`}
              className={`${styles.aestheticServicesAccordionContent} ${openIndex === index ? styles.open : ''}`}
              style={{ maxHeight: openIndex === index ? '500px' : '0' }}
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <p className={styles.aestheticServicesAccordionDescription}>{service.meta.description}</p>
              <Link
                href={`/aesthetic-services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}`}
                className={styles.aestheticServicesAccordionLink}
              >
                Learn More About {service.name}
              </Link>
              {service.nested && (
                <div className="mt-3">
                  <h3 className="text-md font-medium text-gray-700 mb-2">Options Available:</h3>
                  <ul className="space-y-2">
                    {service.nested.map((item, subIndex) => (
                      <li key={subIndex} className="text-sm text-gray-600">
                        <Link
                          href={`/aesthetic-services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
                          className="hover:text-blue-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}