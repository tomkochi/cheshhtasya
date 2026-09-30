import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { getOther } from "@/sanity/utils/fetchOther";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cheshhtasya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cheshhtasya | Interior Design & Branding",
    template: "%s | Cheshhtasya",
  },

  description:
    "Discover transformative interior design and branding expertise with Cheshhtasya. From innovative renovations to meticulous signage solutions, our team crafts spaces that resonate. Experience the fusion of creativity and functionality. Contact us today!",

  applicationName: "Cheshhtasya",

  authors: [{ name: "Cheshhtasya" }],
  creator: "Cheshhtasya",
  publisher: "Cheshhtasya",

  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

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
    url: siteUrl,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getOther();
  const otherData = (data as any[]).filter((d) => d._type === "other")[0];
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="grow">{children}</div>
          <Footer data={otherData} />
        </div>
      </body>
    </html>
  );
}
