import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "FujiTourGuide.com | 1-Day Mount Fuji Luxury Tour",
  description:
    "Experience an unforgettable 1-day Mount Fuji journey with FujiTourGuide.com. Enjoy premium Toyota Vellfire & Alphard vehicles, expert guides, and curated itineraries.",
  openGraph: {
    title: "FujiTourGuide.com | 1-Day Mount Fuji Luxury Tour",
    description:
      "Indulge in a luxurious one-day Mount Fuji escape with private Toyota Vellfire & Alphard transport and bilingual guides.",
    url: "https://fujitourguide.com",
    siteName: "Fuji Tour Guide",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
