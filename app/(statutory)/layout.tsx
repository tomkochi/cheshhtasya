import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { getOther } from "@/sanity/utils/fetchOther";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.cheshhtasya.com"; // change to actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cheshhtasya | Interior Design & Branding",
    template: "%s | Cheshhtasya",
  },

  description:
    "Discover transformative interior design and branding expertise with Cheshhtasya. From innovative renovations to meticulous signage solutions, we craft spaces that resonate.",

  applicationName: "Cheshhtasya",

  authors: [
    {
      name: "Cheshhtasya",
    },
  ],

  creator: "Cheshhtasya",
  publisher: "Cheshhtasya",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Cheshhtasya",
    title: "Cheshhtasya | Interior Design & Branding",
    description:
      "Transformative interior design, renovations, branding and signage solutions by Cheshhtasya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cheshhtasya – Interior Design & Branding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cheshhtasya | Interior Design & Branding",
    description:
      "Transformative interior design, renovations, branding and signage solutions by Cheshhtasya.",
    images: ["/og-image.jpg"],
  },
};