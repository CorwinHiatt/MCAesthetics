"use client"
//app/aesthetic-services/[service]/page.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import aestheticServicesData from '../../../data/services';
import { notFound, useParams } from 'next/navigation';
import styles from '../AestheticServices.module.css';

export default function ServicePage() {
  const params = useParams();
  // Decode the slug and find the matching service
  const serviceName = decodeURIComponent((params.service as string).replace(/-/g, ' ')).toLowerCase();
  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  // Debug log to check if service is found
  console.log("Params service:", params.service);
  console.log("Decoded service name:", serviceName);
  console.log("Available services:", aestheticServicesData.items.map(s => s.name.toLowerCase()));
  console.log("Matching service found:", service);

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
      <div className="max-w-4xl w-full mb-6">
        <Link
          href="/aesthetic-services"
          className={styles.aestheticServicesAccordionLink}
        >
          ← Back to All Services
        </Link>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl w-full">
        <h1 className={styles.aestheticServicesMainTitle}>{service.name}</h1>
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className={styles.aestheticServicesIntroText}>{service.meta.description}</p>
        {/* Additional content can be added here */}
        {service.nested && (
          <div className={styles.aestheticServicesAccordionContainer}>
            <h2 className="text-xl font-semibold text-[#3B5998] mb-4">
              Explore {service.name} Options
            </h2>
            {service.nested.map((item, index) => (
              <div key={index} className={styles.aestheticServicesAccordionItem}>
                <div
                  className={styles.aestheticServicesAccordionHeader}
                  role="button"
                  aria-expanded="true"
                  aria-controls={`nested-panel-${index}`}
                >
                  <h3 className={styles.aestheticServicesAccordionTitle}>{item.name}</h3>
                  <Link
                    href={`/aesthetic-services/${params.service}/${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    className={styles.aestheticServicesAccordionLink}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
