import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories, ServiceCategory, SubService } from '@/data/services';
import Image from 'next/image';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const serviceSlug = resolvedParams.service;
  
  // Find the service category based on the slug
  const serviceData = serviceCategories.find(cat => cat.slug === serviceSlug);
  
  // Show 404 if service not found
  if (!serviceData) {
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
        <span className="text-gray-900 font-medium">{serviceData.name}</span>
      </nav>
      
      {/* Service header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">{serviceData.name}</h1>
        <p className="text-xl text-gray-600 max-w-3xl">{serviceData.description}</p>
      </div>
      
      {/* Service image if available */}
      {serviceData.imageUrl && (
        <div className="mb-10 relative rounded-lg overflow-hidden">
          <Image 
            src={serviceData.imageUrl} 
            alt={serviceData.name}
            width={1200}
            height={600}
            className="w-full object-cover h-[400px]"
          />
        </div>
      )}
      
      {/* Service details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Main content */}
          <div className="prose prose-lg max-w-none">
            <h2>About this Service</h2>
            <p>{serviceData.description}</p>
            
            {/* Benefits section */}
            {serviceData.benefits && serviceData.benefits.length > 0 && (
              <>
                <h3>Benefits</h3>
                <ul>
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
            
            {/* Sub-services section */}
            {serviceData.subServices && serviceData.subServices.length > 0 && (
              <>
                <h3>Treatment Options</h3>
                <div className="space-y-6">
                  {serviceData.subServices.map((subService, index) => (
                    <div key={index} className="border-b pb-6">
                      <h4 className="font-medium text-xl">{subService.name}</h4>
                      <p className="mb-4">{subService.description}</p>
                      
                      {/* Sub-service benefits */}
                      {subService.benefits && subService.benefits.length > 0 && (
                        <div className="mt-4">
                          <h5 className="font-medium text-lg">Benefits</h5>
                          <ul className="list-disc pl-5 mt-2">
                            {subService.benefits.map((benefit, idx) => (
                              <li key={idx} className="mb-1">{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* FAQ section */}
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
            <h3 className="text-xl font-semibold mb-4">Service Details</h3>
            
            {/* Sub-services quick links */}
            {serviceData.subServices && serviceData.subServices.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm text-gray-500 mb-2">Available Treatments</h4>
                <ul className="space-y-2">
                  {serviceData.subServices.map((sub, index) => (
                    <li key={index}>
                      <a 
                        href={`#${sub.slug}`} 
                        className="text-primary hover:underline"
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
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
          
          {/* Related services */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Other Aesthetic Services</h3>
            <div className="space-y-4">
              {serviceCategories
                .filter(cat => cat.id !== serviceData.id)
                .slice(0, 3)
                .map((service) => (
                  <Link 
                    key={service.slug}
                    href={`/aesthetic-services/${service.slug}`}
                    className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {service.description.substring(0, 100)}...
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for known services
export async function generateStaticParams() {
  return serviceCategories.map(service => ({
    service: service.slug,
  }));
}
