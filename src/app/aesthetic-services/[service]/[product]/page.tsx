//app/aesthetic-services/[service]/[product]/page.tsx
"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import aestheticServicesData from '../../../../data/services';
import { notFound, useParams } from 'next/navigation';
import styles from '../../AestheticServices.module.css';

// Define interface to match Next.js expected PageProps with Promise for params
interface ProductPageProps {
  params?: Promise<{ service: string; product: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
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
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <p className={styles.aestheticServicesIntroText}>{product.meta.description}</p>
        {/* Additional detailed content can be added here */}
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
