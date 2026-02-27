import type { Metadata } from "next";
import RefundClient from "./RefundClient";

export const metadata: Metadata = {
  title: "Refund Policy - WhatsPilot",
  description:
    "WhatsPilot Refund Policy - Learn about our no-refund policy for subscription and services.",
  keywords: ["refund policy", "refund", "billing", "cancellation", "terms"],
};

export default function RefundPage() {
  return <RefundClient />;
}
