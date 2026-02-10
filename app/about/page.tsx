import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - WhatsPilot.io",
  description: "Learn about WhatsPilot.io, our mission to transform business communication through WhatsApp automation, and the team behind the platform.",
  keywords: ["about", "company", "mission", "team", "whatsapp automation"],
  openGraph: {
    title: "About Us - WhatsPilot.io",
    description: "Learn about WhatsPilot.io and our mission",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
