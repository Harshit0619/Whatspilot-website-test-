export const LOCATION_SLUG_PREFIX = "whatsapp-marketing-automations-in-";

export function toPublicLocationSlug(slug: string): string {
  if (slug.startsWith(LOCATION_SLUG_PREFIX)) {
    return slug;
  }

  return `${LOCATION_SLUG_PREFIX}${slug}`;
}

export function fromPublicLocationSlug(slug: string): string {
  if (slug.startsWith(LOCATION_SLUG_PREFIX)) {
    return slug.slice(LOCATION_SLUG_PREFIX.length);
  }

  return slug;
}
