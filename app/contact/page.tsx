import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us - WhatsPilot",
  description:
    "Get in touch with WhatsPilot. We're here to help with any questions about WhatsApp business automation.",
  keywords: ["contact", "whatsapp automation", "support", "help"],
  openGraph: {
    title: "Contact Us - WhatsPilot",
    description: "Get in touch with WhatsPilot",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatspilot.online/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
