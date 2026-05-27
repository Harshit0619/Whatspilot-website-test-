import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageClient from "./LocationPageClient";
import { getLocationBySlug, getLocationSlugs } from "@/lib/locations";
import { toPublicLocationSlug } from "@/lib/locations-slug";

export async function generateStaticParams() {
  const slugs = getLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `${location.title} | WhatsPilot`,
    description: location.excerpt,
    keywords: ["whatsapp automation", location.slug, "whatsapp marketing", "india"],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://www.whatspilot.online/locations/${toPublicLocationSlug(location.slug)}`,
    },
    openGraph: {
      title: location.title,
      description: location.excerpt,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationPageClient location={location} />;
}
