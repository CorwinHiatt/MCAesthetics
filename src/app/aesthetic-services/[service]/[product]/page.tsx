import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound } from 'next/navigation';
import styles from '../../AestheticServices.module.css';

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
          href={`/aesthetic-services/${serviceParam}`}
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
        <div className={styles.aestheticServicesImageContainer}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={480}
            className={styles.aestheticServicesImage}
            priority
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
            href={`/aesthetic-services/${serviceParam}`}
            className={styles.aestheticServicesAccordionLink}
          >
            ← Back to {service.name}
          </Link>
        </div>
      </div>
    </div>
  );
}
