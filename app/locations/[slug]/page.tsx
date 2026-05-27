import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageClient from "./LocationPageClient";
import { getLocationBySlug, getLocationPublicSlugs } from "@/lib/locations";
import {
  getLocationVariantFromSlug,
  getKeywordsForVariant,
  replaceLocationServiceLabel,
} from "@/lib/locations-slug";

export async function generateStaticParams() {
  const slugs = getLocationPublicSlugs('all');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  const variant = getLocationVariantFromSlug(slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  const title = replaceLocationServiceLabel(location.title, variant);
  const description = replaceLocationServiceLabel(location.excerpt, variant);
  const variantKeywords = getKeywordsForVariant(variant);

  return {
    title: `${title} | WhatsPilot`,
    description,
    keywords: [
      "whatsapp automation",
      location.slug,
      "whatsapp marketing",
      "india",
      ...variantKeywords,
    ],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `https://www.whatspilot.online/locations/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  const variant = getLocationVariantFromSlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationPageClient location={location} variant={variant} />;
}
