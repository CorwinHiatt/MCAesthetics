// app/fonts.ts
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],     // adjust weights as needed
  display: 'swap',
  preload: true,
});
