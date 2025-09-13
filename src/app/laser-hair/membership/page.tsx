import type { Metadata } from 'next';
import LaserMembershipClient from './LaserMembershipClient';

export const metadata: Metadata = {
  title: "Laser Hair Removal Membership McMinnville | Save with MC Aesthetics",
  description: "Join our Laser Hair Removal Membership at MC Aesthetics in McMinnville, OR. Save on Elysion treatments with exclusive plans for lasting smoothness. Sign up now!",
  keywords: "laser hair removal membership McMinnville, Elysion hair removal plan Oregon, hair removal subscription Yamhill County, MC Aesthetics membership",
  metadataBase: new URL("https://www.mcaestheticsclinic.com/"),
  openGraph: {
    title: "Laser Hair Removal Membership in McMinnville | MC Aesthetics",
    description: "Save on silky, hair-free skin with our Laser Hair Removal Membership at MC Aesthetics, McMinnville. Exclusive Elysion treatment plans await!",
    images: [
      {
        url: "/images/laserLegs.jpg",
        width: 800,
        height: 400,
        alt: "Laser Hair Removal Membership Benefits with Elysion at MC Aesthetics McMinnville",
      },
    ],
    url: "https://www.mcaestheticsclinic.com/laser-hair/membership",
    type: "website",
    siteName: "MC Aesthetics McMinnville",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Hair Removal Membership in McMinnville | MC Aesthetics",
    description: "Get lasting smoothness with our Laser Hair Removal Membership at MC Aesthetics, McMinnville. Affordable Elysion plans for you!",
    images: ["/images/laserLegs.jpg"],
  },
};

export default function LaserMembershipPage() {
  return <LaserMembershipClient />;
}
