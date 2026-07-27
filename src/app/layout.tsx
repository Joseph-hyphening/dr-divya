import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drdivyasharma.com'),
  title: {
    default: "Dr. Divya Sharma | Gold Medalist Dermatologist in Bangalore",
    template: "%s | Dr. Divya Sharma Dermatology"
  },
  description: "Dr. Divya Sharma, MBBS (Gold Medalist), MD (Skin), is Bangalore's leading dermatologist offering US-FDA approved laser treatments for acne, hair loss, pigmentation & pediatric skin care in Whitefield.",
  keywords: [
    "Dr Divya Sharma",
    "Dermatologist in Bangalore",
    "Skin Specialist Whitefield",
    "Best Dermatologist Bangalore",
    "Laser Hair Removal Bangalore",
    "Acne Scar Treatment Bangalore",
    "Psoriasis Specialist",
    "Pediatric Dermatologist Bangalore",
    "Hair Loss GFC Treatment",
    "Chemical Peels Bangalore"
  ],
  authors: [{ name: "Dr. Divya Sharma" }],
  creator: "Dr. Divya Sharma Skin & Hair Solutions",
  publisher: "Dr. Divya Sharma Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Dr. Divya Sharma | Award-Winning Dermatologist in Bangalore",
    description: "12+ Years of Clinical Mastery, US-FDA Approved Laser Tech, and Gold Medalist Care in Whitefield, Bangalore.",
    url: "https://www.drdivyasharma.com",
    siteName: "Dr. Divya Sharma Dermatology",
    images: [
      {
        url: "/dr-divya.png",
        width: 1200,
        height: 630,
        alt: "Dr. Divya Sharma - Award-Winning Dermatologist Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Divya Sharma | Gold Medalist Dermatologist Bangalore",
    description: "Pioneering medical & aesthetic dermatology with US-FDA approved lasers in Whitefield, Bangalore.",
    images: ["/dr-divya.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
