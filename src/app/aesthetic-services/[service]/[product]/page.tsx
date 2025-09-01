// app/aesthetic-services/[service]/[product]/page.tsx
// Updated to display 'details' if available for the nested product.
// Handles cases where details are missing (falls back to meta.description).
// Keeps breadcrumb navigation and image.
// Applied new detail styles from AestheticServices.module.css.

"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound, useParams } from 'next/navigation';
import styles from '../../AestheticServices.module.css';

// Define interface to match Next.js expected PageProps with Promise for params
interface ProductPageProps {
  params?: Promise<{ service: string; product: string }>;
}

export default function ProductPage({ }: ProductPageProps) {
  const runtimeParams = useParams(); // Use runtime params from hook for Client Component
  
  // Decode slugs and find the matching service and nested product
  // Use runtimeParams since useParams() provides the values directly in Client Component
  const serviceName = decodeURIComponent((runtimeParams.service as string).replace(/-/g, ' ')).toLowerCase();
  const productName = decodeURIComponent((runtimeParams.product as string).replace(/-/g, ' ')).toLowerCase();
  
  // Debug logs for URL parameters and data
  console.log("Service URL param:", runtimeParams.service);
  console.log("Decoded service name for match:", serviceName);
  console.log("Product URL param:", runtimeParams.product);
  console.log("Decoded product name for match:", productName);
  console.log("Available services for matching:", aestheticServicesData.items.map(item => ({ 
    name: item.name, 
    lowercase: item.name.toLowerCase(), 
    nested: item.nested?.map(n => n.name) || [] 
  })));

  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  console.log("Matching service found:", service ? { name: service.name, nested: service.nested?.map(n => n.name) } : "Not found");

  const product = service?.nested?.find((p) => p.name.toLowerCase() === productName);

  console.log("Matching product found:", product ? { name: product.name } : "Not found");

  if (!service || !product) {
    console.log("Triggering 404 - Service or Product not found");
    notFound();
  }

  return (
    <div className={styles.aestheticServicesPageWrapper}>
      <Head>
        <title>{product.meta.title}</title>
        <meta name="description" content={product.meta.description} />
        <meta name="keywords" content={product.meta.keywords.join(', ')} />
      </Head>
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl w-full mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link
          href="/aesthetic-services"
          className={styles.aestheticServicesAccordionLink}
        >
          All Services
        </Link>
        <span className="text-gray-500">›</span>
        <Link
          href={`/aesthetic-services/${runtimeParams.service}`}
          className={styles.aestheticServicesAccordionLink}
        >
          {service.name}
        </Link>
        <span className="text-gray-500">›</span>
        <span className="text-gray-700">{product.name}</span>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl w-full">
        <h1 className={styles.aestheticServicesMainTitle}>{product.name}</h1>
        {/* Replaced <img> with Next.js <Image> for better rendering, optimization, and handling of public folder assets */}
        <div className={styles.aestheticServicesImageContainer}> {/* New container for elegant styling */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800} // Specify width for optimization
            height={480} // Specify height for optimization
            className={styles.aestheticServicesImage} // New class for professional, elegant styling
            priority // Prioritize loading for main image
          />
        </div>

        {/* Display details if available */}
        {product.details ? (
          <section className={`${styles.aestheticServicesDetailSection} mb-8`}>
            {product.details.overview && (
              <div className="mb-6">
                <h2 className={`${styles.aestheticServicesDetailHeading} text-2xl font-semibold mb-2`}>Overview</h2>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.overview}</p>
              </div>
            )}
            {product.details.treats && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Treats</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {product.details.treats.map((treat) => (
                    <li key={treat}>{treat}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.details.benefits && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Benefits</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {product.details.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.details.candidacy && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Who is a Good Candidate</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.candidacy}</p>
              </div>
            )}
            {product.details.notCandidacy && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Who is Not a Good Candidate</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.notCandidacy}</p>
              </div>
            )}
            {product.details.resultsDuration && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Results Duration</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.resultsDuration}</p>
              </div>
            )}
            {product.details.preCare && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Pre-Treatment Care</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {product.details.preCare.map((care) => (
                    <li key={care}>{care}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.details.postCare && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Post-Treatment Care</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {product.details.postCare.map((care) => (
                    <li key={care}>{care}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.details.tips && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Additional Tips</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {product.details.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.details.whyChoose && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Why Choose Us</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.whyChoose}</p>
              </div>
            )}
            {product.details.whatToExpect && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>What to Expect</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.whatToExpect}</p>
              </div>
            )}
            {product.details.cost && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Cost</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{product.details.cost}</p>
              </div>
            )}
          </section>
        ) : (
          <p className={styles.aestheticServicesIntroText}>{product.meta.description}</p>
        )}

        <div className="mt-6">
          <Link
            href={`/aesthetic-services/${runtimeParams.service}`}
            className={styles.aestheticServicesAccordionLink}
          >
            ← Back to {service.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
