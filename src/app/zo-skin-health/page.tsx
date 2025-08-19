import React from 'react';
import Link from 'next/link';

// Sample product data
const products = [
  { id: 1, name: 'Daily Power Defense', category: 'Anti-Aging', price: '$150' },
  { id: 2, name: 'Growth Factor Serum', category: 'Brightening', price: '$148' },
  { id: 3, name: 'Exfoliating Polish', category: 'Exfoliation', price: '$67' },
  { id: 4, name: 'Sunscreen + Primer', category: 'Sun Protection', price: '$68' },
];

export default function ZOSkinHealthPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">ZO Skin Health Products</h1>
      <p className="mb-8">
        We are proud to offer ZO Skin Health products, developed by renowned dermatologist Dr. Zein Obagi.
        These medical-grade skincare products deliver optimal skin health through advanced technology and potent ingredients.
      </p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.category}</p>
              <p className="font-medium">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Skin Consultation</h2>
        <p className="mb-4">
          Schedule a personalized skin consultation to determine the best ZO Skin Health products for your specific needs.
        </p>
        <Link href="/book" className="text-blue-600 hover:underline">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}
