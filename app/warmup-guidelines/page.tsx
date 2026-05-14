import type { Metadata } from "next";
import WarmupGuidelinesClient from "./WarmupGuidelinesClient";

export const metadata: Metadata = {
  title: "Warmup Guidelines - WhatsPilot",
  description:
    "Learn how to warm up your WhatsApp number properly for better deliverability, reduced spam flags, and long-term sender health.",
  keywords: ["whatsapp warmup", "number warmup", "sender reputation", "whatsapp deliverability", "bulk messaging"],
  alternates: {
    canonical: "https://www.whatspilot.online/warmup-guidelines",
  },
};

export default function WarmupGuidelinesPage() {
  return <WarmupGuidelinesClient />;
}
