import type { Metadata } from "next";
import CareersPageClient from './CareersPageClient';

export const metadata: Metadata = {
  title: "Careers - WhatsPilot",
  description: "Join the WhatsPilot team and help revolutionize WhatsApp business communication. Explore open positions and career opportunities.",
  keywords: ["careers", "jobs", "hiring", "whatsapp", "automation"],
  alternates: {
    canonical: "https://www.whatspilot.online/careers",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
