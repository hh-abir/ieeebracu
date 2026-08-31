import type { Metadata } from "next";
import { Source_Serif_4, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });
const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IEEE BRAC University Student Branch",
  description: "Advancing Technology for Humanity — IEEE BRAC University Student Branch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
