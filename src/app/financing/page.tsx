import React from 'react';
import Link from 'next/link';

export default function FinancingPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Financing Options</h1>
      <p className="mb-8">
        We believe that everyone deserves access to quality aesthetic treatments. 
        That's why we offer flexible financing options to help make your treatments more affordable.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">CareCredit</h2>
          <p className="mb-4">
            CareCredit is a healthcare credit card designed for your health and wellness needs.
            It's a way to pay for the costs of many treatments and procedures and allows you to make 
            convenient monthly payments.
          </p>
          <a href="https://www.carecredit.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Learn more about CareCredit
          </a>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">In-House Payment Plans</h2>
          <p className="mb-4">
            We offer flexible in-house payment plans for select treatments. 
            Our team will work with you to create a payment schedule that fits your budget.
          </p>
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact us for details
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Financing FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">How do I apply for financing?</h3>
            <p>You can apply during your consultation or contact our office for assistance.</p>
          </div>
          <div>
            <h3 className="font-medium">Is there a credit check?</h3>
            <p>CareCredit requires a credit check, while our in-house options may have more flexible requirements.</p>
          </div>
          <div>
            <h3 className="font-medium">What treatments can be financed?</h3>
            <p>Most of our treatments can be financed. Please contact us for specific details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}