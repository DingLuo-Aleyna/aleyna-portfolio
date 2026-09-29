import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      'https://dingluo-aleyna.github.io/aleyna-portfolio'
  ),
  title: 'Yunqi Wang (Aleyna) | Journalism & Digital Media',
  description:
    'Personal homepage of Yunqi Wang (Aleyna) — final-year Journalism and Digital Media student at Hong Kong Baptist University, with experience in financial journalism, data analysis, and FinTech.',
  icons: {
    // GitHub Pages 子路徑前綴（與 next.config.mjs 的 basePath 一致）
    icon: '/aleyna-portfolio/assets/image/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
