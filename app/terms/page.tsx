import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions - WhatsPilot",
  description:
    "WhatsPilot Terms and Conditions - Read our terms of service for using our WhatsApp automation platform.",
  keywords: ["terms", "terms and conditions", "terms of service", "legal"],
};

export default function TermsPage() {
  return <TermsClient />;
}
