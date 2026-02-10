import type { Metadata } from "next";
import FeaturesPageClient from "./FeaturesPageClient";

export const metadata: Metadata = {
  title: "Features - WhatsPilot.io",
  description: "Discover powerful WhatsApp automation features including bulk messaging, AI chatbots, scheduling, analytics, and more to scale your business communication.",
  keywords: ["whatsapp features", "bulk messaging", "chatbot", "automation", "analytics", "scheduling"],
  openGraph: {
    title: "Features - WhatsPilot.io",
    description: "Powerful WhatsApp automation features for your business",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
