import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy - WhatsPilot",
  description:
    "WhatsPilot Privacy Policy - Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "privacy", "terms"],
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
