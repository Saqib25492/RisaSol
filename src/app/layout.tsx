import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/particlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RISA Solutions",
  description:
    "Empowering businesses with intelligent supply chain solutions for the modern economy. Discover how Risa Solutions streamlines, optimizes, and transforms your supply chain.",
  keywords: [
    "Supply Chain",
    "Logistics",
    "Business Intelligence",
    "AI",
    "Risa Solutions",
    "Automation",
    "Operations",
    "Enterprise Solutions",
  ],
  authors: [{ name: "Risa Solutions", url: "https://risasol.com" }],
  creator: "Risa Solutions",
  openGraph: {
    title: "Risa Solutions | Intelligent Supply Chain Solutions",
    description:
      "Empowering businesses with intelligent supply chain solutions for the modern economy.",
    url: "https://risasol.com",
    siteName: "Risa Solutions",
    images: [
      {
        url: "/icon.png", // Place your Open Graph image in /public
        width: 1200,
        height: 630,
        alt: "Risa Solutions logo and dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticlesBackground variant="subtle" />
        <Navigation />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
