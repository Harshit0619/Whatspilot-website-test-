import { redirect } from "next/navigation";
import { getLocationPublicSlugs } from "@/lib/locations";

export async function generateStaticParams() {
  const slugs = getLocationPublicSlugs("all");
  return slugs.map((slug) => ({ slug }));
}

export default async function LocationRootRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/services/${slug}`);
}
