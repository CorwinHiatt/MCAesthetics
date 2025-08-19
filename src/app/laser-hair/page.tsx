import React from 'react';
import Link from 'next/link';

export default function LaserHairPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Laser Hair Removal</h1>
      <p className="mb-6">Experience smooth, hair-free skin with our advanced laser hair removal treatments.</p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Our Technology</h2>
        <p className="mb-4">
          We use state-of-the-art laser technology that is effective for all skin types and hair colors.
          Our treatments are quick, comfortable, and provide long-lasting results.
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Treatment Areas</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Face</li>
          <li>Underarms</li>
          <li>Arms</li>
          <li>Legs</li>
          <li>Back</li>
          <li>Bikini Area</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Link href="/book" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}