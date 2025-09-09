// app/layout.tsx

import NewHeader from './components/layout/NewHeader';
import Footer2 from './components/layout/Footer2';
import Carousel from './components/features/Carousel';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  /* … your existing metadata … */
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicons & Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon_io/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />

        {/* Preconnect & Preload Font */}
        <link rel="preconnect" href="https://r2cdn.perplexity.ai" crossOrigin="" />
        <link
          rel="preload"
          href="https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Google Analytics (deferred via next/script) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z090FBSXB2"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z090FBSXB2');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white" suppressHydrationWarning>
        <NewHeader />
        <main className="mainContent" style={{ marginTop: '180px' }}>
          {children}
        </main>
        <Carousel />
        <Footer2 />
        <Analytics />
      </body>
    </html>
  );
}
