import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import AboutPage from './about/page';
import Footer2 from './components/layout/Footer2';
import Carousel from './components/features/Carousel';

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
        {/* Google Tag Manager (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRFZPTHGLB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRFZPTHGLB');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        {/* <AboutPage/> */}
         
              {/* <Navbar /> */}
          
        
        <main>{children}</main>
        <Carousel/>
        <Footer2 />
      </body>
    </html>
  );
}