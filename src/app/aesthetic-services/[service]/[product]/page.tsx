import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound } from 'next/navigation';
import styles from '../../AestheticServices.module.css';
import type { Metadata } from 'next';

// GENERATE STATIC PARAMS FOR BUILD
export async function generateStaticParams() {
  const params = [];

  for (const service of aestheticServicesData.items) {
    if (service.nested) {
      for (const product of service.nested) {
        params.push({
          service: service.name.toLowerCase().replace(/\s+/g, '-'),
          product: product.name.toLowerCase().replace(/\s+/g, '-')
        });
      }
    }
  }

  return params;
}

interface ProductPageProps {
  params: Promise<{ service: string; product: string }>;
}

// GENERATE METADATA FOR SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { service: serviceParam, product: productParam } = await params;

  const serviceName = decodeURIComponent(serviceParam.replace(/-/g, ' ')).toLowerCase();
  const productName = decodeURIComponent(productParam.replace(/-/g, ' ')).toLowerCase();

  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );
  const product = service?.nested?.find((p) => p.name.toLowerCase() === productName);

  if (!service || !product) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  // Enhanced SEO keywords with Yamhill County focus
  const enhancedKeywords = [
    ...product.meta.keywords,
    'Yamhill County medical aesthetics',
    'McMinnville aesthetic clinic',
    'Oregon medical spa',
    'Yamhill County skin care',
    'McMinnville cosmetic treatments'
  ];

  return {
    title: product.meta.title,
    description: product.meta.description,
    keywords: enhancedKeywords.join(', '),
    openGraph: {
      title: product.meta.title,
      description: product.meta.description,
      images: [
        {
          url: product.imageUrl,
          width: 800,
          height: 480,
          alt: product.name,
        },
      ],
      type: 'website',
      siteName: 'MC Aesthetics McMinnville',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.meta.title,
      description: product.meta.description,
      images: [product.imageUrl],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { service: serviceParam, product: productParam } = await params;
  
  // Decode slugs and find the matching service and nested product
  const serviceName = decodeURIComponent(serviceParam.replace(/-/g, ' ')).toLowerCase();
  const productName = decodeURIComponent(productParam.replace(/-/g, ' ')).toLowerCase();
  
  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  const product = service?.nested?.find((p) => p.name.toLowerCase() === productName);

  if (!service || !product) {
    notFound();
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: product.name,
    description: product.meta.description,
    image: product.imageUrl,
    procedureType: service.name,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'MC Aesthetics',
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
    },
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
          <Link
            href={`/aesthetic-services/${serviceParam}`}
            className={styles.aestheticServicesAccordionLink}
          >
            {service.name}
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>
        {/* Main Content */}
        <article className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className={styles.productHeroSection}>
            <h1 className={styles.productPageTitle}>{product.name}</h1>
            <p className={styles.productSubtitle}>{product.meta.description}</p>
          </div>

          {/* Featured Image */}
          <div className={styles.productImageContainer}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={1200}
              height={600}
              className={styles.productImage}
              priority
            />
          </div>

          {/* Display details if available */}
          {product.details ? (
            <div className={styles.productContentWrapper}>
              {product.details.overview && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Overview</h2>
                  <div className={styles.productContentCard}>
                    <p className={styles.productParagraph}>{product.details.overview}</p>
                  </div>
                </section>
              )}

              {/* Two-Column Layout for Treats and Benefits */}
              {(product.details.treats || product.details.benefits) && (
                <div className={styles.productTwoColumn}>
                  {product.details.treats && (
                    <section className={styles.productSection}>
                      <h2 className={styles.productSectionHeading}>What It Treats</h2>
                      <div className={styles.productContentCard}>
                        <ul className={styles.productList}>
                          {product.details.treats.map((treat, idx) => (
                            <li key={idx}>{treat}</li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {product.details.benefits && (
                    <section className={styles.productSection}>
                      <h2 className={styles.productSectionHeading}>Key Benefits</h2>
                      <div className={styles.productContentCard}>
                        <ul className={styles.productList}>
                          {product.details.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}
                </div>
              )}

              {product.details.whatToExpect && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>What to Expect</h2>
                  <div className={styles.productContentCard}>
                    <p className={styles.productParagraph}>{product.details.whatToExpect}</p>
                  </div>
                </section>
              )}

              {(product.details.candidacy || product.details.notCandidacy) && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Candidacy</h2>
                  <div className={styles.productContentCard}>
                    {product.details.candidacy && (
                      <div className="mb-4">
                        <h3 className={styles.productSubheading}>Good Candidates</h3>
                        <p className={styles.productParagraph}>{product.details.candidacy}</p>
                      </div>
                    )}
                    {product.details.notCandidacy && (
                      <div>
                        <h3 className={styles.productSubheading}>Not Recommended For</h3>
                        <p className={styles.productParagraph}>{product.details.notCandidacy}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {product.details.resultsDuration && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Results & Duration</h2>
                  <div className={styles.productContentCard}>
                    <p className={styles.productParagraph}>{product.details.resultsDuration}</p>
                  </div>
                </section>
              )}

              {/* Care Instructions in Two-Column Layout */}
              {(product.details.preCare || product.details.postCare) && (
                <div className={styles.productTwoColumn}>
                  {product.details.preCare && (
                    <section className={styles.productSection}>
                      <h2 className={styles.productSectionHeading}>Pre-Treatment Care</h2>
                      <div className={styles.productContentCard}>
                        <ul className={styles.productList}>
                          {product.details.preCare.map((care, idx) => (
                            <li key={idx}>{care}</li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {product.details.postCare && (
                    <section className={styles.productSection}>
                      <h2 className={styles.productSectionHeading}>Post-Treatment Care</h2>
                      <div className={styles.productContentCard}>
                        <ul className={styles.productList}>
                          {product.details.postCare.map((care, idx) => (
                            <li key={idx}>{care}</li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}
                </div>
              )}

              {product.details.tips && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Additional Tips</h2>
                  <div className={styles.productContentCard}>
                    <ul className={styles.productList}>
                      {product.details.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {product.details.whyChoose && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Why Choose MC Aesthetics</h2>
                  <div className={styles.productHighlightCard}>
                    <p className={styles.productParagraph}>{product.details.whyChoose}</p>
                  </div>
                </section>
              )}

              {product.details.cost && (
                <section className={styles.productSection}>
                  <h2 className={styles.productSectionHeading}>Investment</h2>
                  <div className={styles.productContentCard}>
                    <p className={styles.productParagraph}>{product.details.cost}</p>
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className={styles.productContentWrapper}>
              <p className={styles.productParagraph}>{product.meta.description}</p>
            </div>
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
                href={`/aesthetic-services/${serviceParam}`}
                className={styles.productSecondaryButton}
              >
                ← Back to {service.name}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}