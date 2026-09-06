import type { Metadata } from "next";
import { Geist, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.drdivyasharma.com/#website",
        "url": "https://www.drdivyasharma.com",
        "name": "Dr. Divya Sharma Skin & Hair Solutions",
        "description": "Gold Medalist Dermatologist in Bangalore offering advanced laser and medical skin treatments in Whitefield.",
        "publisher": {
          "@id": "https://www.drdivyasharma.com/#clinic"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.drdivyasharma.com/skin-concerns?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "DermatologyClinic",
        "@id": "https://www.drdivyasharma.com/#clinic",
        "name": "Dr. Divya Sharma Skin & Hair Solutions",
        "url": "https://www.drdivyasharma.com",
        "logo": "https://www.drdivyasharma.com/logo.svg",
        "image": "https://www.drdivyasharma.com/dr-divya.png",
        "telephone": "+91-9620638388",
        "email": "info@drdivyasharma.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "AECS Layout, ITPL Main Road",
          "addressLocality": "Whitefield, Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560037",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9698,
          "longitude": 77.7126
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "20:00"
          }
        ],
        "founder": {
          "@type": "Person",
          "name": "Dr. Divya Sharma",
          "jobTitle": "Senior Dermatologist & Dermatosurgeon",
          "honorificPrefix": "Dr.",
          "alumniOf": "Gold Medalist Medical Graduate, MD (Skin)"
        }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://www.drdivyasharma.com/#sitenav",
        "name": "Primary Site Navigation",
        "hasPart": [
          {
            "@type": "WebPage",
            "name": "Aesthetics & Lasers",
            "url": "https://www.drdivyasharma.com/aesthetics-skin-care",
            "description": "US-FDA approved laser skin treatments, chemical peels, and scar removal."
          },
          {
            "@type": "WebPage",
            "name": "Medical Dermatology",
            "url": "https://www.drdivyasharma.com/medical-dermatology",
            "description": "Clinical care for acne, keloids, eczema, psoriasis, and dermatitis."
          },
          {
            "@type": "WebPage",
            "name": "Keloid & Scar Reduction",
            "url": "https://www.drdivyasharma.com/keloids",
            "description": "Intralesional therapies, laser scar remodeling, and preventive care."
          },
          {
            "@type": "WebPage",
            "name": "Hair & Scalp Solutions",
            "url": "https://www.drdivyasharma.com/hair-scalp-problems",
            "description": "Dandruff control, hair fall recovery, and GFC hair restoration."
          },
          {
            "@type": "WebPage",
            "name": "Pediatric Dermatology",
            "url": "https://www.drdivyasharma.com/newborn-pediatric-dermatology",
            "description": "Newborn skin care, cradle cap, diaper rash, and childhood eczema."
          },
          {
            "@type": "WebPage",
            "name": "About Dr. Divya Sharma",
            "url": "https://www.drdivyasharma.com/dr-divya-sharma",
            "description": "Meet MBBS Gold Medalist and Senior Dermatologist Dr. Divya Sharma."
          },
          {
            "@type": "WebPage",
            "name": "Book Appointment Online",
            "url": "https://www.drdivyasharma.com/book-an-appointment",
            "description": "Schedule a consultation with Dr. Divya Sharma in Whitefield Bangalore."
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.drdivyasharma.com/#clinical-process",
        "name": "Evidence-Based Clinical Dermatology & Laser Consultation Process",
        "description": "A 4-step structured clinical protocol from root-cause dermoscopy to US-FDA laser intervention and barrier restoration led by Dr. Divya Sharma.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Diagnostic Root-Cause Mapping",
            "text": "High-resolution polarized dermoscopy and follicle densitometry to uncover cellular triggers, sebum composition, and vascular patterns."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Zero-Steroid Medical Ethics",
            "text": "Strict medical protocols rejecting steroid dependence, prescribing targeted ceramide lipid complexes and bio-peptides for sustained remission."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "US-FDA Cleared Suite Precision",
            "text": "Fractional CO2 scar remodeling, Q-Switched Nd:YAG pigment clearance, and triple-chilling in-motion laser hair reduction calibrated for Indian skin."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Barrier Rehabilitation & Follow-up",
            "text": "Structured monitoring, lipid barrier restoration maintenance, and proactive lifestyle protocols to ensure lasting skin and scalp health."
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
