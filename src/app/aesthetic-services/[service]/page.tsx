"use client";
// src/app/aesthetic-services/[service]/page.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import aestheticServicesData from '@/data/services';
import { notFound, useParams } from 'next/navigation';
import styles from '../AestheticServices.module.css';

export default function ServicePage() {
  const params = useParams();
  const serviceName = decodeURIComponent((params.service as string).replace(/-/g, ' ')).toLowerCase();
  const service = aestheticServicesData.items.find(
    (s) => s.name.toLowerCase() === serviceName
  );

  // Improved debugging logs
  console.log("Params service:", params.service);
  console.log("Decoded service name:", serviceName);
  console.log("Available services:", aestheticServicesData.items.map(s => s.name.toLowerCase()));
  console.log("Matching service found:", service ? service.name : 'Not found');
  if (service) {
    console.log("Service image URL:", service.imageUrl);
  }

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
      <h1 className={styles.aestheticServicesMainTitle}>{service.name}</h1>
      <div className={styles.aestheticServicesImageContainer}>
        <Image
          src={service.imageUrl}
          alt={service.name}
          width={800}
          height={480}
          className={styles.aestheticServicesImage}
          priority
          onError={() => console.error(`Image load error for ${service.imageUrl}`)} // Debug
        />
      </div>
      <p className={styles.aestheticServicesAccordionDescription}>{service.meta.description}</p>
      {/* Add more details here if needed, e.g., nested services */}
      <Link href="/aesthetic-services" className={styles.aestheticServicesAccordionLink}>
        Back to All Services
      </Link>
    </div>
  );
}
