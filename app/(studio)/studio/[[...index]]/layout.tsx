import Header from "@/app/(site)/components/common/header";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
