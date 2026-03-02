import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing - WhatsPilot",
  description:
    "Choose the perfect WhatsPilot plan for your business. Affordable pricing plans with powerful features for WhatsApp automation.",
  keywords: ["pricing", "whatsapp automation pricing", "plans", "subscription"],
  openGraph: {
    title: "Pricing - WhatsPilot",
    description: "Affordable WhatsApp automation pricing plans",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatspilot.online/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
