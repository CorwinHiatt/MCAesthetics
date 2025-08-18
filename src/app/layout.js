export const metadata = {
  title: 'MCA Next.js App',
  description: 'Restored Next.js application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
