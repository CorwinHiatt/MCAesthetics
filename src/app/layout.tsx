
// import Navigation from './components/Navigation';
// import Navbar from './components/Navbar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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
        <Header />
         
              {/* <Navbar /> */}
          
        
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
