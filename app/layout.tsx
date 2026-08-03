import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Moxit Shah | Software Developer & AI Engineer",
  description:
    "Portfolio of Moxit Shah - Software Developer specializing in AI Integration (Django/Gemini), Mobile App Development (Flutter), and Network Cybersecurity.",
  keywords: [
    "Moxit Shah",
    "Software Developer",
    "AI Integration",
    "Django",
    "Gemini AI",
    "Flutter",
    "Network Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Moxit Shah" }],
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
