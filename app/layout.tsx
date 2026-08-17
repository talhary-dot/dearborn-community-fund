import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dearborn Community Fund | Arts, Culture & Community Enrichment",
  description:
    "The Dearborn Community Fund (DCF) is a 501(c)(3) nonprofit dedicated to enriching life in Dearborn through creative philanthropic partnerships, youth public art apprentice programs, gallery exhibitions, and cultural festivals.",
  keywords: [
    "Dearborn Community Fund",
    "Pockets of Perception",
    "Dearborn Arts",
    "Padzieski Art Gallery",
    "Ford Community and Performing Arts Center",
    "Mayor's Arts Awards",
    "Youth in Arts Festival",
    "Dearborn Michigan Nonprofit",
  ],
  authors: [{ name: "Dearborn Community Fund" }],
  openGraph: {
    title: "Dearborn Community Fund | Arts, Culture & Community Enrichment",
    description:
      "Cultivating vibrant arts, culture, youth apprenticeships, and community connection across Dearborn, Michigan.",
    siteName: "Dearborn Community Fund",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-canvas text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
