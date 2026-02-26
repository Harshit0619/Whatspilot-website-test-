import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeaturePageClient from "./FeaturePageClient";
import { getFeatureBySlug, featuresData } from "../feature-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return featuresData.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Feature Not Found",
    };
  }

  return {
    title: feature.seo.title,
    description: feature.seo.description,
    keywords: feature.seo.keywords,
    openGraph: {
      title: feature.seo.title,
      description: feature.seo.description,
      type: "website",
      images: [
        {
          url: `/og/features/${feature.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: feature.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: feature.seo.title,
      description: feature.seo.description,
      images: [`/og/features/${feature.slug}.jpg`],
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return <FeaturePageClient slug={slug} />;
}
