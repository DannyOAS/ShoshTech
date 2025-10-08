import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://www.shoshtech.com";
const siteTitle = "Shosh Technologies Inc. | Privacy-first Software & SaaS from Toronto";
const siteDescription =
  "Shosh Technologies Inc. builds privacy-first software platforms and SaaS products for professionals, delivering secure, user-friendly solutions from Toronto, Canada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Shosh Technologies",
    "Toronto software development",
    "Canadian SaaS",
    "privacy-first software",
    "legal tech",
    "professional services technology"
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Shosh Technologies Inc.",
    locale: "en_CA",
    type: "website"
  },
  alternates: {
    canonical: siteUrl
  },
  authors: [{ name: "Shosh Technologies Inc." }],
  category: "technology",
  creator: "Shosh Technologies Inc."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="pt-24">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
