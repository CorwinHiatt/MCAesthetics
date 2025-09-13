import type { Metadata } from 'next';
import MembershipClient from './MembershipClient';

export const metadata: Metadata = {
  title: "MC Aesthetics Membership Club | McMinnville, OR Skin Care",
  description: "Join the MC Aesthetics Membership Club in McMinnville, OR for monthly beauty credits, discounts, and priority skin care services. Start glowing today!",
  keywords: "MC Aesthetics membership, McMinnville skin care club, Yamhill County aesthetics membership, laser hair removal discounts, beauty bank McMinnville",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "MC Aesthetics Membership Club | McMinnville, OR",
    description: "Invest in your beauty with MC Aesthetics Membership Club in McMinnville. Get monthly credits and exclusive discounts on skin care!",
    images: [
      {
        url: "/images/membership.jpg",
        width: 400,
        height: 300,
        alt: "MC Aesthetics Radiance in McMinnville",
      },
    ],
    url: "https://www.mcaestheticsclinic.com/membership",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Aesthetics Membership Club | McMinnville, OR",
    description: "Join MC Aesthetics in McMinnville for beauty credits and discounts on skin care and laser treatments. Sign up now!",
    images: ["/images/membership.jpg"],
  },
};

export default function MembershipPage() {
  return <MembershipClient />;
}
