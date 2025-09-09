// app/layout.tsx

import NewHeader from './components/layout/NewHeader';
import Footer2 from './components/layout/Footer2';
import Carousel from './components/features/Carousel';
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "MC Aesthetics McMinnville - Luxury Skin Care & Anti-Aging Expertise",
    template: "%s | MC Aesthetics McMinnville",
  },
  description: "Experience unparalleled skin care at MC Aesthetics in McMinnville, Oregon. Specializing in wrinkle reducers, dermal fillers, CoolPeel CO2 Laser, and bespoke aesthetic treatments.",
  keywords: "MC Aesthetics McMinnville, luxury skin care Oregon, anti-aging expertise, dermal fillers, wrinkle reducers, CoolPeel laser, facial rejuvenation, premium aesthetics McMinnville",
  metadataBase: new URL("https://mc-aesthetics.vercel.app/"),
  openGraph: {
    title: "MC Aesthetics McMinnville - Elevate Your Beauty",
    description: "Indulge in premium aesthetic treatments at MC Aesthetics in McMinnville, OR. From fillers to CoolPeel laser, unveil your radiant skin with us!",
    images: [
      {
        url: "/images/shadowMain.png",
        width: 1200,
        height: 630,
        alt: "MC Aesthetics McMinnville - Shadowed Elegance in Luxury Skin Care and Anti-Aging Treatments",
      },
    ],
    url: "/",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Aesthetics McMinnville - Elevate Your Beauty",
    description: "Indulge in premium aesthetic treatments at MC Aesthetics in McMinnville, OR. Unveil radiant skin with us!",
    images: ["/images/shadowMain.png"],
  },
  icons: {
    apple: [
      { url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/favicon_io/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
    icon: "/images/favicon_io/favicon.ico",
  },
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

        {/* Favicons */}
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

        {/* Preload CSS then load stylesheet */}
        <link rel="preload" href="/_next/static/css/3fa3c81f7107dbf2.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/3fa3c81f7107dbf2.css" />
        <link rel="preload" href="/_next/static/css/0d0514e18f0a015e.css" as="style" />
        <link rel="stylesheet" href="/_next/static/css/0d0514e18f0a015e.css" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z090FBSXB2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z090FBSXB2', { 'send_page_view': false });
            `,
          }}
        />
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
