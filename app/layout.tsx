import type { Metadata } from "next";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import Script from "next/script";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.whatspilot.online"),
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
  icons: {
    icon: "/favicon.svg",
  },
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
        <ClientLayout>{children}</ClientLayout>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HLK8NNMKZ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HLK8NNMKZ');
          `}
        </Script>
      </body>
    </html>
  );
}