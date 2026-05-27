export const MARKETING_SLUG_PREFIX = "whatsapp-marketing-automations-in-";
export const SCHEDULING_SLUG_PREFIX = "whatsapp-message-scheduling-in-";
export const GROUP_MANAGEMENT_SLUG_PREFIX = "whatsapp-group-management-tool-in-";
export const ADVANCED_ANALYSIS_SLUG_PREFIX = "advanced-analysis-in-";

export type LocationVariant =
  | "marketing"
  | "scheduling"
  | "group-management"
  | "advanced-analysis";

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

export function toGroupManagementLocationSlug(slug: string): string {
  if (slug.startsWith(GROUP_MANAGEMENT_SLUG_PREFIX)) {
    return slug;
  }

  return `${GROUP_MANAGEMENT_SLUG_PREFIX}${slug}`;
}

export function toAdvancedAnalysisLocationSlug(slug: string): string {
  if (slug.startsWith(ADVANCED_ANALYSIS_SLUG_PREFIX)) {
    return slug;
  }

  return `${ADVANCED_ANALYSIS_SLUG_PREFIX}${slug}`;
}

export function fromPublicLocationSlug(slug: string): string {
  if (slug.startsWith(MARKETING_SLUG_PREFIX)) {
    return slug.slice(MARKETING_SLUG_PREFIX.length);
  }

  if (slug.startsWith(SCHEDULING_SLUG_PREFIX)) {
    return slug.slice(SCHEDULING_SLUG_PREFIX.length);
  }

  if (slug.startsWith(GROUP_MANAGEMENT_SLUG_PREFIX)) {
    return slug.slice(GROUP_MANAGEMENT_SLUG_PREFIX.length);
  }

  if (slug.startsWith(ADVANCED_ANALYSIS_SLUG_PREFIX)) {
    return slug.slice(ADVANCED_ANALYSIS_SLUG_PREFIX.length);
  }

  return slug;
}

export function getLocationVariantFromSlug(slug: string): LocationVariant {
  if (slug.startsWith(SCHEDULING_SLUG_PREFIX)) {
    return "scheduling";
  }

  if (slug.startsWith(GROUP_MANAGEMENT_SLUG_PREFIX)) {
    return "group-management";
  }

  if (slug.startsWith(ADVANCED_ANALYSIS_SLUG_PREFIX)) {
    return "advanced-analysis";
  }

  return "marketing";
}

export function getServiceLabel(variant: LocationVariant): string {
  switch (variant) {
    case "scheduling":
      return "WhatsApp Message Scheduling";
    case "group-management":
      return "WhatsApp Group Management Tool";
    case "advanced-analysis":
      return "Advanced Analysis";
    default:
      return "WhatsApp Marketing & Automations";
  }
}

export function replaceLocationServiceLabel(
  text: string,
  variant: LocationVariant,
): string {
  const label = getServiceLabel(variant);
  return text.replace(/WhatsApp Marketing & Automations/g, label);
}

export function getKeywordsForVariant(variant: LocationVariant): string[] {
  switch (variant) {
    case "scheduling":
      return [
        "Schedule WhatsApp Messages",
        "schedule send whatsapp",
        "whatsapp message scheduler",
        "whatsapp timed message",
        "schedule a message in whatsapp",
        "can i schedule a message in whatsapp",
      ];
    case "group-management":
      return [
        "group management",
        "team task management",
        "team communication",
        "whatsapp group management tool",
      ];
    case "advanced-analysis":
      return [
        "campaign performance",
        "marketing performance",
        "user engagement metrics",
        "real time tracking",
      ];
    default:
      return [];
  }
}
