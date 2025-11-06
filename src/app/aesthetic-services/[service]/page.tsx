import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound } from 'next/navigation';
import styles from '../AestheticServices.module.css';
import type { Metadata } from 'next';

// GENERATE STATIC PARAMS FOR BUILD
export async function generateStaticParams() {
  return aestheticServicesData.items.map((service) => ({
    service: service.name.toLowerCase().replace(/\s+/g, '-')
  }));
}

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

// GENERATE METADATA FOR SEO
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceParam } = await params;
  const serviceName = decodeURIComponent(serviceParam.replace(/-/g, ' ')).toLowerCase();
  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  // Enhanced SEO keywords with Yamhill County focus
  const enhancedKeywords = [
    ...service.meta.keywords,
    'Yamhill County medical aesthetics',
    'McMinnville aesthetic clinic',
    'Oregon medical spa',
    'Yamhill County skin care',
    'McMinnville cosmetic treatments'
  ];

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: enhancedKeywords.join(', '),
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      images: service.imageUrl ? [
        {
          url: service.imageUrl,
          width: 800,
          height: 480,
          alt: service.name,
        },
      ] : [],
      type: 'website',
      siteName: 'MC Aesthetics McMinnville',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.meta.title,
      description: service.meta.description,
      images: service.imageUrl ? [service.imageUrl] : [],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceParam } = await params;
  const serviceName = decodeURIComponent(serviceParam.replace(/-/g, ' ')).toLowerCase();
  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  if (!service) {
    notFound();
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'MC Aesthetics',
    description: service.meta.description,
    serviceType: service.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'McMinnville',
      addressRegion: 'OR',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'McMinnville',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Yamhill County',
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.aestheticServicesPageWrapper}>
        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl w-full mb-6 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/aesthetic-services"
            className={styles.aestheticServicesAccordionLink}
          >
            All Services
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-gray-700 font-medium">{service.name}</span>
        </div>

        {/* Main Content */}
        <article className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className={styles.serviceHeroSection}>
            <h1 className={styles.servicePageTitle}>{service.name}</h1>
            <p className={styles.serviceSubtitle}>{service.meta.description}</p>
          </div>

          {/* Featured Image (if available) */}
          {service.imageUrl && (
            <div className={styles.productImageContainer}>
              <Image
                src={service.imageUrl}
                alt={service.name}
                width={1200}
                height={600}
                className={styles.productImage}
                priority
              />
            </div>
          )}

          {/* Display details if available */}
          {service.details && (
            <div className={styles.productContentWrapper}>
              {service.details.overview && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Overview</h2>
                  <div className={styles.productContentCard}>
                    <p className={styles.productParagraph}>{service.details.overview}</p>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* Display nested services/products if available */}
          {service.nested && service.nested.length > 0 && (
            <section className={styles.serviceProductsSection}>
              <h2 className={styles.serviceProductsHeading}>Our {service.name} Options</h2>
              <p className={styles.serviceProductsSubtext}>
                Explore our range of {service.name.toLowerCase()} treatments available at MC Aesthetics in McMinnville, Yamhill County.
              </p>
              <div className={styles.serviceProductsGrid}>
                {service.nested.map((item, subIndex) => (
                  <Link
                    key={subIndex}
                    href={`/aesthetic-services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    className={styles.serviceProductCard}
                  >
                    <div className={styles.serviceProductImageWrapper}>
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={400}
                        height={300}
                        className={styles.serviceProductImage}
                      />
                    </div>
                    <div className={styles.serviceProductContent}>
                      <h3 className={styles.serviceProductTitle}>{item.name}</h3>
                      <p className={styles.serviceProductDescription}>{item.meta.description}</p>
                      <span className={styles.serviceProductLink}>Learn More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action Section */}
          <div className={styles.productCTASection}>
            <h2 className={styles.productCTAHeading}>Ready to Get Started?</h2>
            <p className={styles.productCTAParagraph}>
              Book your consultation at MC Aesthetics in McMinnville, Yamhill County's premier medical aesthetics clinic.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className={styles.productCTAButton}
              >
                Schedule Consultation
              </Link>
              <Link
                href="/aesthetic-services"
                className={styles.productSecondaryButton}
              >
                ← Back to All Services
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}