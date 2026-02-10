import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing - WhatsPilot.io",
  description: "Choose the perfect WhatsPilot.io plan for your business. Affordable pricing plans with powerful features for WhatsApp automation.",
  keywords: ["pricing", "whatsapp automation pricing", "plans", "subscription"],
  openGraph: {
    title: "Pricing - WhatsPilot.io",
    description: "Affordable WhatsApp automation pricing plans",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
