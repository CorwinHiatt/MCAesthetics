"use client";

import { useState } from 'react';
import styles from './AestheticServices.module.css';

export default function AestheticServicesPage() {
  // State to manage which accordion item is open (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle accordion items
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Sample service categories (replace or expand as needed)
  const services = [
    {
      title: 'Facials & Skin Care',
      description: 'Indulge in our customized facials and skin care treatments designed to rejuvenate and hydrate your skin. From deep cleansing to anti-aging solutions, we’ve got you covered.',
      link: '#', // Placeholder until individual page is built
      linkText: 'Learn More About Facials',
    },
    {
      title: 'Injectables & Fillers',
      description: 'Enhance your natural beauty with our expert-administered injectables and fillers. Smooth out fine lines, add volume, and achieve a youthful glow with Botox, dermal fillers, and more.',
      link: '#', // Placeholder until individual page is built
      linkText: 'Explore Injectables',
    },
    {
      title: 'Laser Hair Removal',
      description: 'Say goodbye to unwanted hair with our state-of-the-art laser hair removal services. Safe, effective, and long-lasting results for all skin types.',
      link: '/laser-hair-removal', // Assuming this page exists or will be linked
      linkText: 'Discover Laser Hair Removal',
    },
    {
      title: 'Body Contouring',
      description: 'Sculpt and refine your silhouette with non-invasive body contouring treatments. Target stubborn fat and tighten skin for a more confident you.',
      link: '#', // Placeholder until individual page is built
      linkText: 'Learn About Body Contouring',
    },
    {
      title: 'Chemical Peels',
      description: 'Reveal brighter, smoother skin with our professional chemical peels. Address acne, hyperpigmentation, and uneven texture with personalized peel strengths.',
      link: '#', // Placeholder until individual page is built
      linkText: 'See Chemical Peel Options',
    },
  ];

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
        {services.map((service, index) => (
          <div key={index} className={styles.aestheticServicesAccordionItem}>
            <div
              className={styles.aestheticServicesAccordionHeader}
              onClick={() => toggleAccordion(index)}
              role="button"
              aria-expanded={openIndex === index}
              aria-controls={`service-panel-${index}`}
            >
              <h2 className={styles.aestheticServicesAccordionTitle}>{service.title}</h2>
              <span
                className={`${styles.aestheticServicesAccordionIcon} ${openIndex === index ? styles.open : ''}`}
              >
                ▼
              </span>
            </div>
            <div
              id={`service-panel-${index}`}
              className={`${styles.aestheticServicesAccordionContent} ${openIndex === index ? styles.open : ''}`}
              style={{ maxHeight: openIndex === index ? '500px' : '0' }} // Adjust maxHeight based on content
            >
              <p className={styles.aestheticServicesAccordionDescription}>{service.description}</p>
              <a
                href={service.link}
                className={styles.aestheticServicesAccordionLink}
                onClick={(e) => service.link === '#' && e.preventDefault()} // Prevent default for placeholders
              >
                {service.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}