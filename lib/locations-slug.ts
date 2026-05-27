export const MARKETING_SLUG_PREFIX = "whatsapp-marketing-automations-in-";
export const SCHEDULING_SLUG_PREFIX = "whatsapp-message-scheduling-in-";

export type LocationVariant = "marketing" | "scheduling";

export function toMarketingLocationSlug(slug: string): string {
  if (slug.startsWith(MARKETING_SLUG_PREFIX)) {
    return slug;
  }

  return `${MARKETING_SLUG_PREFIX}${slug}`;
}

export function toSchedulingLocationSlug(slug: string): string {
  if (slug.startsWith(SCHEDULING_SLUG_PREFIX)) {
    return slug;
  }

  return `${SCHEDULING_SLUG_PREFIX}${slug}`;
}

export function fromPublicLocationSlug(slug: string): string {
  if (slug.startsWith(MARKETING_SLUG_PREFIX)) {
    return slug.slice(MARKETING_SLUG_PREFIX.length);
  }

  if (slug.startsWith(SCHEDULING_SLUG_PREFIX)) {
    return slug.slice(SCHEDULING_SLUG_PREFIX.length);
  }

  return slug;
}

export function getLocationVariantFromSlug(slug: string): LocationVariant {
  if (slug.startsWith(SCHEDULING_SLUG_PREFIX)) {
    return "scheduling";
  }

  return "marketing";
}

export function getServiceLabel(variant: LocationVariant): string {
  return variant === "scheduling"
    ? "WhatsApp Message Scheduling"
    : "WhatsApp Marketing & Automations";
}

export function replaceLocationServiceLabel(
  text: string,
  variant: LocationVariant,
): string {
  const label = getServiceLabel(variant);
  return text.replace(/WhatsApp Marketing & Automations/g, label);
}
