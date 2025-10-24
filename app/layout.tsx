import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://isyourdayok.com'),
  title: {
    default: 'IsYourDayOk - Mental Health On-Chain | Track Mood, Journal & Earn NFTs',
    template: '%s | IsYourDayOk'
  },
  description: 'Track your mental health journey on Base blockchain. Log moods, journal daily, meditate, and earn NFT achievements. Built on Base L2 with verified on-chain streaks and rewards.',
  keywords: [
    'mental health',
    'blockchain',
    'Base L2',
    'NFT achievements',
    'mood tracking',
    'journaling app',
    'meditation',
    'web3',
    'on-chain',
    'mental wellness',
    'crypto rewards',
    'Base blockchain',
    'Farcaster',
    'digital wellness',
    'streak tracking'
  ],
  authors: [{ name: 'IsYourDayOk Team' }],
  creator: 'IsYourDayOk',
  publisher: 'IsYourDayOk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://isyourdayok.com',
    siteName: 'IsYourDayOk',
    title: 'IsYourDayOk - Mental Health On-Chain | Track, Journal & Earn NFTs',
    description: 'Track your mental health journey on Base blockchain. Log moods, journal daily, meditate, and earn NFT achievements with verified on-chain streaks.',
    images: [
      {
        url: '/icons/IsYourDayOkfinal.png',
        width: 1200,
        height: 630,
        alt: 'IsYourDayOk - Mental Health On-Chain',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IsYourDayOk - Mental Health On-Chain',
    description: 'Track your mental health journey on Base. Earn NFT achievements for streaks. Built on Base L2.',
    images: ['/icons/IsYourDayOkfinal.png'],
    creator: '@isyourdayok',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'IsYourDayOk',
    description: 'Track your mental health journey on Base blockchain. Log moods, journal daily, meditate, and earn NFT achievements.',
    url: 'https://isyourdayok.com',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Mood tracking',
      'Daily journaling',
      'Guided meditation',
      'NFT achievements',
      'On-chain verification',
      'Blockchain rewards'
    ],
    keywords: 'mental health, blockchain, Base L2, NFT achievements, mood tracking, journaling, meditation',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
