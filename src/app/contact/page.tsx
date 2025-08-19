import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">
        We're here to answer your questions and help you schedule your appointments.
        Reach out to us through any of the methods below.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <div className="space-y-3">
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@aestheticclinic.com</p>
            <p><strong>Address:</strong> 123 Beauty Lane, Suite 100, Anytown, USA 12345</p>
            <p><strong>Hours:</strong></p>
            <ul className="pl-5">
              <li>Monday - Friday: 9am - 7pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Location</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Map would be displayed here</p>
          {/* In a real implementation, you would embed a Google Map or similar here */}
        </div>
      </div>
    </div>
  );
}