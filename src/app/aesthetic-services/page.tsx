import Link from 'next/link';

// Hardcoded service categories
const services = [
  {
    id: 1,
    name: "Facial Treatments",
    slug: "facial-treatments",
    description: "Rejuvenating facial treatments to enhance your skin's natural beauty."
  },
  {
    id: 2,
    name: "Body Treatments",
    slug: "body-treatments",
    description: "Comprehensive body treatments designed to tone, tighten, and revitalize."
  },
  {
    id: 3,
    name: "Injectables",
    slug: "injectables",
    description: "Professional injectable treatments for wrinkle reduction and facial contouring."
  }
  // Add more services as needed
];

export default function AestheticServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Aesthetic Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            key={service.id} 
            href={`/aesthetic-services/${service.slug}`}
            className="block p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
