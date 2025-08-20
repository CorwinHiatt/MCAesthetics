"use server";

// app/aesthetic-services/[service]/[subservice]/page.tsx - CORRECTED
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories } from '@/data/services';
import Image from 'next/image';

interface SubServicePageProps {
  params: {
    service: string;
    subservice: string;
  };
}

export default async function SubServicePage({ params }: SubServicePageProps) {
  const serviceSlug = params.service;
  const subserviceSlug = params.subservice;
  
  // Find the service category and subservice based on the slugs
  const serviceData = serviceCategories.find(cat => cat.slug === serviceSlug);
  const subServiceData = serviceData?.subServices.find(sub => sub.slug === subserviceSlug);
  
  // Show 404 if service or subservice not found
  if (!serviceData || !subServiceData) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <nav className="flex mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/aesthetic-services" className="hover:text-primary">
          Aesthetic Services
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/aesthetic-services/${serviceData.slug}`} className="hover:text-primary">
          {serviceData.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{subServiceData.name}</span>
      </nav>
      
      {/* Subservice header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">{subServiceData.name}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{subServiceData.description}</p>
      </div>
      
      {/* Subservice image if available */}
      {subServiceData.imageUrl && (
        <div className="mb-10 relative rounded-lg overflow-hidden">
          <Image 
            src={subServiceData.imageUrl} 
            alt={subServiceData.name}
            width={1200}
            height={600}
            className="w-full object-cover h-[400px]"
          />
        </div>
      )}
      
      {/* Subservice details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Main content */}
          <div className="prose prose-lg max-w-none">
            <h2>About this Treatment</h2>
            <p>{subServiceData.description}</p>
            
            {/* Benefits section */}
            {subServiceData.benefits && subServiceData.benefits.length > 0 && (
              <>
                <h3>Benefits</h3>
                <ul>
                  {subServiceData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Process section if available */}
            {subServiceData.process && (
              <>
                <h3>Treatment Process</h3>
                <p>{subServiceData.process}</p>
              </>
            )}
            
            {/* Results section if available */}
            {subServiceData.results && (
              <>
                <h3>Expected Results</h3>
                <p>{subServiceData.results}</p>
              </>
            )}
            
            {/* FAQ section - using parent service FAQs if relevant */}
            {serviceData.faqs && serviceData.faqs.length > 0 && (
              <>
                <h3>Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {serviceData.faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                      <h4 className="font-medium">{faq.question}</h4>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Treatment Details</h3>
            
            {/* Duration if available */}
            {subServiceData.duration && (
              <div className="mb-4">
                <h4 className="text-sm text-gray-500 mb-1">Duration</h4>
                <p>{subServiceData.duration}</p>
              </div>
            )}
            
            {/* Recovery time if available */}
            {subServiceData.recoveryTime && (
              <div className="mb-4">
                <h4 className="text-sm text-gray-500 mb-1">Recovery Time</h4>
                <p>{subServiceData.recoveryTime}</p>
              </div>
            )}
            
            {/* CTA Button */}
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="block w-full py-3 px-4 bg-primary text-white text-center rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
          
          {/* Other treatments in this category */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Other {serviceData.name} Treatments</h3>
            <div className="space-y-4">
              {serviceData.subServices
                .filter(sub => sub.id !== subServiceData.id)
                .map((sub) => (
                  <Link 
                    key={sub.slug}
                    href={`/aesthetic-services/${serviceData.slug}/${sub.slug}`}
                    className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium">{sub.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {sub.description.substring(0, 100)}...
                    </p>
                  </Link>
                ))}
            </div>
          </div>
          
          {/* Back to service category */}
          <div className="mt-8">
            <Link 
              href={`/aesthetic-services/${serviceData.slug}`}
              className="text-primary hover:underline flex items-center"
            >
              <span>← Back to all {serviceData.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all subservices
export async function generateStaticParams() {
  const paths = [];
  
  for (const service of serviceCategories) {
    if (service.subServices && service.subServices.length > 0) {
      for (const subService of service.subServices) {
        paths.push({
          service: service.slug,
          subservice: subService.slug,
        });
      }
    }
  }
  
  return paths;
}
