import type { Metadata } from "next";
import Hero from "./sections/Hero";
import Integrations from "./sections/Integrations";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";

import FAQ from "./sections/FAQ";
import Blog from "./sections/Blog";
import CTA from "./sections/CTA";

export const metadata: Metadata = {
  title: "WhatsPilot.io - WhatsApp Business Automation Platform",
  description: "Transform your WhatsApp into a powerful business automation platform. Connect, engage, and scale with ease using WhatsPilot.io's intelligent automation tools.",
  keywords: ["whatsapp", "automation", "business", "messaging", "marketing", "crm", "customer support"],
  openGraph: {
    title: "WhatsPilot.io - WhatsApp Business Automation Platform",
    description: "Transform your WhatsApp into a powerful business automation platform",
    type: "website",
    images: [{
      url: "/hero-dashboard.jpg",
      width: 1200,
      height: 630,
      alt: "WhatsPilot.io Dashboard"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsPilot.io - WhatsApp Business Automation Platform",
    description: "Transform your WhatsApp into a powerful business automation platform",
    images: ["/hero-dashboard.jpg"]
  }
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
