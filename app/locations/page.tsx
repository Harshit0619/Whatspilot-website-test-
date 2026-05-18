import type { Metadata } from "next";
import LocationsPageClient from "./LocationsPageClient";
import { getAllLocations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations - WhatsPilot",
  description: "WhatsApp Marketing & Automation services available across India. Find your city and start transforming your business communication.",
  keywords: ["locations", "whatsapp automation", "india", "cities", "whatsapp marketing"],
  openGraph: {
    title: "Locations - WhatsPilot",
    description: "WhatsApp automation services across India",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatspilot.online/locations",
  },
};

export default async function LocationsPage() {
  const allLocations = getAllLocations();

  return <LocationsPageClient initialLocations={allLocations} />;
}
