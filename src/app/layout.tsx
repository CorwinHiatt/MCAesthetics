import Header from './components/layout/Header';
// import AccessibilityControls from './components/features/AccessibilityControls';
// import Footer from './components/layout/Footer';
// import AboutPage from './about/page';
import Footer2 from './components/layout/Footer2';
import Carousel from './components/features/Carousel';
import Script from 'next/script'; // <-- New import for GA script optimization

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
      <head>
        {/* Google Tag Manager (gtag.js) - Optimized with next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TRFZPTHGLB"
          strategy="afterInteractive"
          async // Added for better loading behavior
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TRFZPTHGLB', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white">
        {/* Header includes AccessibilityControls (ensure it's added there) */}
        <Header /> {/* Ensure this points to Header2 or the updated component with fixed position and beige background */}
        {/* If AccessibilityControls is not in Header, you can uncomment the line below to add it directly */}
        {/* <AccessibilityControls /> */}
        {/* <AboutPage/> */}
         
        {/* <Navbar /> */}

        <main className="mainContent" style={{ marginTop: '180px' }}>{children}</main>

        <Carousel />
        <Footer2 />
      </body>
    </html>
  );
}
