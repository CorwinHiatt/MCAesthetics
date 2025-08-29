"use client";
// src/app/aesthetic-services/page.tsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import styles from './AestheticServices.module.css';

export default function AestheticServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Debug: Log image URLs to console to verify paths
  console.log('Service image URLs:', aestheticServicesData.items.map(s => s.imageUrl));

  return (
    <div className={styles.aestheticServicesPageWrapper}>
      <h1 className={styles.aestheticServicesMainTitle}>Aesthetic Services at MC Aesthetics</h1>
      <p className={styles.aestheticServicesIntroText}>
        At MC Aesthetics, we offer a wide range of premium aesthetic services tailored to your unique needs. Explore our offerings below to find the perfect treatment for you. Click on each category to learn more.
      </p>
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
              <div className={styles.aestheticServicesImageContainer}>
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  width={800}
                  height={480}
                  className={styles.aestheticServicesImage}
                  priority={index === 0}
                  onError={() => console.error(`Image load error for ${service.imageUrl}`)} // Debug image loading
                />
              </div>
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
