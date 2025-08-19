import Navigation from '../app/components/Navigation'
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | MC Aesthetics',
    default: 'MC Aesthetics | Professional Aesthetic Treatments',
  },
  description: 'Professional aesthetic treatments and services for enhancing your natural beauty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navigation />
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-indigo-600">MC Aesthetics</h1>
            {/* Navigation will go here */}
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-gray-50 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-gray-500 text-center">© {new Date().getFullYear()} MC Aesthetics. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
