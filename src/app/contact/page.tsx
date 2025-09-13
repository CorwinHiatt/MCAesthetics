import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact MC Aesthetics | McMinnville, OR Skin Care & Laser Treatments",
  description: "Get in touch with MC Aesthetics in McMinnville, OR for skin care and laser hair removal. Call, email, or visit us today!",
  keywords: "contact MC Aesthetics, McMinnville skin care, Yamhill County aesthetics, laser hair removal contact, McMinnville OR aesthetics clinic",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "Contact MC Aesthetics in McMinnville, OR",
    description: "Reach out to MC Aesthetics for expert skin care and laser treatments in McMinnville. We’re here to help!",
    images: [
      {
        url: "/images/contactPhoto.png",
        width: 800,
        height: 400,
        alt: "Welcoming Image at MC Aesthetics in McMinnville",
      },
    ],
    url: "https://www.mcaestheticsclinic.com/contact",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MC Aesthetics in McMinnville, OR",
    description: "Need skin care or laser treatments? Contact MC Aesthetics in McMinnville for personalized care!",
    images: ["/images/contactPhoto.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
