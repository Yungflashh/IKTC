import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ikorodu Tech Community — Building Africa's next tech generation",
    template: "%s · Ikorodu Tech Community",
  },
  description:
    "Ikorodu Tech Community (IKTC) is a home for engineers, designers, product builders and student technologists in Ikorodu and beyond. Join events, mentorship, and hands-on programs.",
  keywords: [
    "Ikorodu Tech Community",
    "IKTC",
    "Lagos tech",
    "Nigerian developers",
    "Africa tech community",
    "developer events",
    "mentorship",
    "hackathon",
  ],
  openGraph: {
    title: "Ikorodu Tech Community",
    description:
      "A home for engineers, designers and student technologists in Ikorodu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-canvas text-ink antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
