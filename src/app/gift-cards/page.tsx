import React from 'react';
import Link from 'next/link';

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Gift Cards</h1>
      <p className="mb-8">
        Give the gift of beauty and relaxation with our personalized gift cards.
        Perfect for birthdays, anniversaries, holidays, or just to show someone you care.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">$50 Gift Card</h2>
          <p className="mb-4">Perfect for smaller treatments or products</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Purchase
          </button>
        </div>
        
        <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">$100 Gift Card</h2>
          <p className="mb-4">Ideal for most single treatments</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Purchase
          </button>
        </div>
        
        <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">$200 Gift Card</h2>
          <p className="mb-4">Perfect for premium treatments or packages</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Purchase
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">Custom Gift Cards</h2>
        <p className="mb-4">
          Need a specific amount? We can create custom gift cards for any value.
          Contact us directly or visit our location to purchase a custom gift card.
        </p>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact us for custom gift cards
        </Link>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Gift Card FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">How long are gift cards valid?</h3>
            <p>Our gift cards are valid for one year from the date of purchase.</p>
          </div>
          <div>
            <h3 className="font-medium">Can gift cards be used for any service?</h3>
            <p>Yes, gift cards can be applied to any service or product we offer.</p>
          </div>
          <div>
            <h3 className="font-medium">Can I purchase a gift card online?</h3>
            <p>Yes, you can purchase digital gift cards through our website or physical gift cards in our clinic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}