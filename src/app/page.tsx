import { Home, Mail, Phone } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Welcome to My Home Page - Next.js Site
      </h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <div className="flex items-center mb-4">
          <Home className="h-5 w-5 text-gray-500 mr-2" />
          <span>123 Main Street, Anytown, USA</span>
        </div>
        
        <div className="flex items-center mb-4">
          <Phone className="h-5 w-5 text-gray-500 mr-2" />
          <span>(555) 123-4567</span>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-gray-500 mr-2" />
          <span>contact@example.com</span>
        </div>
         {/* <Link href="/aesthetic-services" className="text-blue-600 hover:underline">
          ← Back to All Services
        </Link> */}
        <a href="/about" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          About Us
        </a>
        <a href="/aesthetic-services" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Services
        </a>
      </div>
    </main>
  )
}
