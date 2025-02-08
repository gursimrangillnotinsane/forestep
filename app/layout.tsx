import type { Metadata } from "next";
import { Domine, Fira_Sans_Condensed } from "next/font/google";

import "./globals.css";

import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.css";
import "../public/css/layers.css";
import "../public/css/style.css";
import "../public/css/animate.css";

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
});

const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-sans-condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "ForeStep Infotech | We build solutions",
  description: "Foretech Infotech is a software development company, we build affordable software and websites for businesses and individuals ",
  keywords: "Forestep Infotech, software development, web development, mobile app development, software development company, software development company in Canada, software development company in Alberta, software development company in Edmonton",
  openGraph: {
    title: "Forestep Infotech - Software Development Company",
    description: "We build high-quality software solutions for businesses and individuals.",
    // url: "https://forestepinfotech.com",
    type: "website",
    images: [
      {
        url: "https://forestepinfotech.com/og-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Forestep Infotech - Software Development Company",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Forestep Infotech - Software Development Company",
    description: "We build high-quality software solutions for businesses and individuals.",
    images: ["https://forestepinfotech.com.com/og-image.jpg"], // Replace with actual image URL
  },
  robots: {
    index: true,  // Allow search engine indexing
    follow: true, // Allow following links
  },
  // Canonical URL (for SEO)
  alternates: {
    // canonical: "https://forestepinfotech.com",
  },
  icons: {
    icon: "/favicon.ico", // Standard favicon
    apple: "/apple-touch-icon.png", // Add your Apple touch icon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <script src="js/wow.js"></script> */}
      </head>
      <body
        className={`${domine.variable} ${firaSansCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
