import type { Metadata } from "next";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";

import FAQ from "./sections/FAQ";
import Blog from "./sections/Blog";
import CTA from "./sections/CTA";

export const metadata: Metadata = {
  title: "Boost Your WhatsApp Marketing with WhatsPilot Automation & Tools",
  description:
    "Use WhatsApp marketing tools to engage your audience! Deliver impactful WhatsApp promotional messages that elevate customer interaction and sales.",
  keywords: [
    "whatsapp",
    "automation",
    "business",
    "messaging",
    "marketing",
    "crm",
    "customer support",
    "whatsapp promotional messages",
    "whatsapp marketing tools",
    "whatsapp marketing software",
    "whatsapp marketing platform",
    "whatsapp campaign tools",
  ],
  openGraph: {
    title: "Boost Your WhatsApp Marketing with WhatsPilot Automation & Tools",
    description:
      "Use WhatsApp marketing tools to engage your audience! Deliver impactful WhatsApp promotional messages that elevate customer interaction and sales.",
    type: "website",
    images: [
      {
        url: "/hero-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "WhatsPilot Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your WhatsApp Marketing with WhatsPilot Automation & Tools",
    description:
      "Use WhatsApp marketing tools to engage your audience! Deliver impactful WhatsApp promotional messages that elevate customer interaction and sales.",
    images: ["/hero-dashboard.jpg"],
  },
  alternates: {
    canonical: "https://www.whatspilot.online/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Integrations />
      <Features />
      <Pricing />
      <FAQ />
      <Blog />
      <CTA />
    </>
  );
}
