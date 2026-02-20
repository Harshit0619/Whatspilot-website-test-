import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WhatsPilot - WhatsApp Business Automation Platform",
  description:
    "Transform your WhatsApp into a powerful business automation platform. Connect, engage, and scale with ease using WhatsPilot's intelligent automation tools.",
  keywords: [
    "whatsapp",
    "automation",
    "business",
    "messaging",
    "marketing",
    "crm",
  ],
  openGraph: {
    title: "WhatsPilot - WhatsApp Business Automation Platform",
    description:
      "Transform your WhatsApp into a powerful business automation platform",
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
      <body className="antialiased">
        <NavigationWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
