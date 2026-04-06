import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Oddlly — Engineering at Scale, Delivered with Intelligence",
  description: "From Code to Cloud — Secured, Automated, Optimized. DevOps, DevSecOps, Platform Engineering, SRE, and AI-Native operations consulting.",
  keywords: ["DevOps", "DevSecOps", "Platform Engineering", "SRE", "Cloud Operations", "Kubernetes", "MLOps", "AIOps"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
