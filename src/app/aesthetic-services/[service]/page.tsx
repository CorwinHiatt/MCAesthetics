import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound } from 'next/navigation';
import styles from '../AestheticServices.module.css';

// GENERATE STATIC PARAMS FOR BUILD
export async function generateStaticParams() {
  return aestheticServicesData.items.map((service) => ({
    service: service.name.toLowerCase().replace(/\s+/g, '-')
  }));
}

interface ServicePageProps {
  params: Promise<{ service: string }>;
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

  return (
    <div className={styles.aestheticServicesPageWrapper}>
      <Head>
        <title>{service.meta.title}</title>
        <meta name="description" content={service.meta.description} />
        <meta name="keywords" content={service.meta.keywords.join(', ')} />
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
        <span className="text-gray-700">{service.name}</span>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl w-full">
        <h1 className={styles.aestheticServicesMainTitle}>{service.name}</h1>
        <div className={styles.aestheticServicesImageContainer}>
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={800}
            height={480}
            className={styles.aestheticServicesImage}
            priority
          />
        </div>

        {/* Display details if available */}
        {service.details ? (
          <section className={`${styles.aestheticServicesDetailSection} mb-8`}>
            {service.details.overview && (
              <div className="mb-6">
                <h2 className={`${styles.aestheticServicesDetailHeading} text-2xl font-semibold mb-2`}>Overview</h2>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.overview}</p>
              </div>
            )}
            {service.details.treats && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Treats</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {service.details.treats.map((treat) => (
                    <li key={treat}>{treat}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.details.benefits && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Benefits</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {service.details.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.details.candidacy && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Who is a Good Candidate</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.candidacy}</p>
              </div>
            )}
            {service.details.notCandidacy && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Who is Not a Good Candidate</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.notCandidacy}</p>
              </div>
            )}
            {service.details.resultsDuration && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Results Duration</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.resultsDuration}</p>
              </div>
            )}
            {service.details.preCare && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Pre-Treatment Care</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {service.details.preCare.map((care) => (
                    <li key={care}>{care}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.details.postCare && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Post-Treatment Care</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {service.details.postCare.map((care) => (
                    <li key={care}>{care}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.details.tips && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Additional Tips</h3>
                <ul className={styles.aestheticServicesDetailList}>
                  {service.details.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
            {service.details.whyChoose && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Why Choose Us</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.whyChoose}</p>
              </div>
            )}
            {service.details.whatToExpect && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>What to Expect</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.whatToExpect}</p>
              </div>
            )}
            {service.details.cost && (
              <div className="mb-6">
                <h3 className={`${styles.aestheticServicesDetailHeading} text-xl font-semibold mb-2`}>Cost</h3>
                <p className={styles.aestheticServicesDetailParagraph}>{service.details.cost}</p>
              </div>
            )}
          </section>
        ) : (
          <p className={styles.aestheticServicesIntroText}>{service.meta.description}</p>
        )}

        {/* Display nested services if available */}
        {service.nested && service.nested.length > 0 && (
          <section className={`${styles.aestheticServicesDetailSection} mb-8`}>
            <h2 className={`${styles.aestheticServicesDetailHeading} text-2xl font-semibold mb-4`}>Related Services</h2>
            <ul className="space-y-2">
              {service.nested.map((item, subIndex) => (
                <li key={subIndex} className="text-sm text-gray-600">
                  <Link
                    href={`/aesthetic-services/${encodeURIComponent(service.name.toLowerCase().replace(/\s+/g, '-'))}/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    className={styles.aestheticServicesAccordionLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <Link href="/aesthetic-services" className={styles.aestheticServicesAccordionLink}>
          Back to All Services
        </Link>
      </div>
    </div>
  );
}