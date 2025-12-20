import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter with a few common weights and expose a CSS variable for fallbacks
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "Omar | Full-Stack Developer — Laravel, Node.js, Next.js",
  description: "Omar is a Full-Stack Developer building scalable web apps with Laravel, Node.js, and Next.js.",
  openGraph: {
    title: 'Omar | Full-Stack Developer',
    description: 'I build scalable web applications using Laravel, Node.js and Next.js.',
    url: 'https://your-site.example',
    siteName: 'Omar — Developer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omar — Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar | Full-Stack Developer',
    description: 'I build scalable web applications using Laravel, Node.js and Next.js.',
    creator: '@your_twitter',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}
