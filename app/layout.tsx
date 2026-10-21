import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = "https://portfolio-moxit.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Moxit Shah | Software Developer & AI Engineer",
  description:
    "Portfolio of Moxit Shah - Software Developer specializing in AI Integration (Django/Gemini), Mobile App Development (Flutter), and Network Cybersecurity.",
  keywords: [
    "Moxit Shah",
    "Software Developer",
    "AI Engineer",
    "AI Integration",
    "Django",
    "Gemini AI",
    "Flutter",
    "Java",
    "Spring Boot",
    "REST API",
    "Network Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Moxit Shah", url: siteUrl }],
  creator: "Moxit Shah",
  publisher: "Moxit Shah",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/moxit-logo-sm.png", type: "image/png", sizes: "128x128" },
      { url: "/images/moxit-logo.png", type: "image/png", sizes: "936x936" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Moxit Shah Portfolio",
    title: "Moxit Shah | Software Developer & AI Engineer",
    description:
      "Software Developer specializing in AI Integration (Django/Gemini), Mobile App Development (Flutter), and Network Cybersecurity. Explore projects, experience, and certifications.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moxit Shah - Software Developer & AI Engineer Portfolio",
        type: "image/png",
      },
      {
        url: "/images/og-square.png",
        width: 800,
        height: 800,
        alt: "Moxit Shah Logo - Personal Brand",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moxit Shah | Software Developer & AI Engineer",
    description:
      "Software Developer specializing in AI Integration, Flutter, and Network Cybersecurity.",
    images: ["/images/og-image.png"],
    creator: "@MoxitShah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
