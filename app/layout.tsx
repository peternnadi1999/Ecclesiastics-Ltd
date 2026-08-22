import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecclesiasticsltd.co.uk"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ecclesiastics Ltd | Professional Cleaning & Maintenance",
    template: "%s | Ecclesiastics Ltd",
  },
  description:
    "Professional eco-friendly cleaning, property maintenance, Airbnb resets, and post-construction cleaning for homes and businesses across the UK.",
  keywords: [
    "professional cleaning services UK",
    "house cleaning",
    "commercial cleaning",
    "Airbnb cleaning and reset",
    "post-construction cleaning",
    "property maintenance",
    "eco-friendly cleaning",
  ],
  authors: [{ name: "Ecclesiastics Ltd" }],
  creator: "Ecclesiastics Ltd",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Ecclesiastics Ltd",
    title: "Professional Cleaning & Maintenance | Ecclesiastics Ltd",
    description:
      "Reliable, eco-conscious cleaning and maintenance for homes, businesses, rental properties, and post-build spaces across the UK.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Professional cleaning services from Ecclesiastics Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning & Maintenance | Ecclesiastics Ltd",
    description:
      "Reliable, eco-conscious cleaning and maintenance for homes, businesses, rental properties, and post-build spaces across the UK.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/logo.png",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ecclesiastics Ltd",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-icon.png`,
  image: `${siteUrl}/images/hero.png`,
  description: metadata.description,
  telephone: "+447425171644",
  email: "info@ecclesiasticsltd.co.uk",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  priceRange: "££",
  serviceType: [
    "Residential cleaning",
    "Commercial cleaning",
    "Airbnb property reset",
    "Post-construction cleaning",
    "Property maintenance",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
