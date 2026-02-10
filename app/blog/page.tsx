import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog - WhatsPilot.io",
  description: "Learn about WhatsApp automation, business communication tips, marketing strategies, and industry insights on the WhatsPilot.io blog.",
  keywords: ["blog", "whatsapp tips", "business communication", "marketing", "automation"],
  openGraph: {
    title: "Blog - WhatsPilot.io",
    description: "WhatsApp automation tips and business communication insights",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
