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

export const metadata: Metadata = {
  title: "Chesshtasya",
  description:
    "Discover transformative interior design and branding expertise with Cheshhtasya. From innovative renovations to meticulous signage solutions, our team crafts spaces that resonate. Experience the fusion of creativity and functionality. Contact us today!",
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
          <div className="grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
