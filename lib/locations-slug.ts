export const MARKETING_SLUG_PREFIX = "whatsapp-marketing-automations-in-";
export const SCHEDULING_SLUG_PREFIX = "whatsapp-message-scheduling-in-";
export const GROUP_MANAGEMENT_SLUG_PREFIX = "whatsapp-group-management-tool-in-";
export const CHATBOT_SOFTWARE_SLUG_PREFIX = "whatsapp-chatbot-software-in-";
export const API_PROVIDER_SLUG_PREFIX = "whatsapp-api-provider-in-";
export const BULK_SENDER_SLUG_PREFIX = "bulk-whatsapp-sender-in-";
export const LEAD_GENERATION_SLUG_PREFIX = "whatsapp-lead-generation-tool-in-";
export const BUSINESS_API_SLUG_PREFIX = "whatsapp-business-api-in-";
export const CAMPAIGN_SOFTWARE_SLUG_PREFIX = "whatsapp-campaign-software-in-";
export const LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX = "advanced-analysis-in-";

export type LocationVariant =
  | "marketing"
  | "scheduling"
  | "group-management"
  | "chatbot-software"
  | "api-provider"
  | "bulk-sender"
  | "lead-generation"
  | "business-api"
  | "campaign-software";

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

export function toChatbotSoftwareLocationSlug(slug: string): string {
  if (slug.startsWith(CHATBOT_SOFTWARE_SLUG_PREFIX)) {
    return slug;
  }

  return `${CHATBOT_SOFTWARE_SLUG_PREFIX}${slug}`;
}

export function toApiProviderLocationSlug(slug: string): string {
  if (slug.startsWith(API_PROVIDER_SLUG_PREFIX)) {
    return slug;
  }

  return `${API_PROVIDER_SLUG_PREFIX}${slug}`;
}

export function toBulkSenderLocationSlug(slug: string): string {
  if (slug.startsWith(BULK_SENDER_SLUG_PREFIX)) {
    return slug;
  }

  return `${BULK_SENDER_SLUG_PREFIX}${slug}`;
}

export function toLeadGenerationLocationSlug(slug: string): string {
  if (slug.startsWith(LEAD_GENERATION_SLUG_PREFIX)) {
    return slug;
  }

  return `${LEAD_GENERATION_SLUG_PREFIX}${slug}`;
}

export function toBusinessApiLocationSlug(slug: string): string {
  if (slug.startsWith(BUSINESS_API_SLUG_PREFIX)) {
    return slug;
  }

  return `${BUSINESS_API_SLUG_PREFIX}${slug}`;
}

export function toCampaignSoftwareLocationSlug(slug: string): string {
  if (slug.startsWith(CAMPAIGN_SOFTWARE_SLUG_PREFIX)) {
    return slug;
  }

  return `${CAMPAIGN_SOFTWARE_SLUG_PREFIX}${slug}`;
}

export function toLegacyAdvancedAnalysisSlug(slug: string): string {
  if (slug.startsWith(LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX)) {
    return slug;
  }

  return `${LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX}${slug}`;
}

export function isLegacyAdvancedAnalysisSlug(slug: string): boolean {
  return slug.startsWith(LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX);
}

export function fromLegacyAdvancedAnalysisSlug(slug: string): string {
  return slug.startsWith(LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX)
    ? slug.slice(LEGACY_ADVANCED_ANALYSIS_SLUG_PREFIX.length)
    : slug;
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

  if (slug.startsWith(CHATBOT_SOFTWARE_SLUG_PREFIX)) {
    return slug.slice(CHATBOT_SOFTWARE_SLUG_PREFIX.length);
  }

  if (slug.startsWith(API_PROVIDER_SLUG_PREFIX)) {
    return slug.slice(API_PROVIDER_SLUG_PREFIX.length);
  }

  if (slug.startsWith(BULK_SENDER_SLUG_PREFIX)) {
    return slug.slice(BULK_SENDER_SLUG_PREFIX.length);
  }

  if (slug.startsWith(LEAD_GENERATION_SLUG_PREFIX)) {
    return slug.slice(LEAD_GENERATION_SLUG_PREFIX.length);
  }

  if (slug.startsWith(BUSINESS_API_SLUG_PREFIX)) {
    return slug.slice(BUSINESS_API_SLUG_PREFIX.length);
  }

  if (slug.startsWith(CAMPAIGN_SOFTWARE_SLUG_PREFIX)) {
    return slug.slice(CAMPAIGN_SOFTWARE_SLUG_PREFIX.length);
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

  if (slug.startsWith(CHATBOT_SOFTWARE_SLUG_PREFIX)) {
    return "chatbot-software";
  }

  if (slug.startsWith(API_PROVIDER_SLUG_PREFIX)) {
    return "api-provider";
  }

  if (slug.startsWith(BULK_SENDER_SLUG_PREFIX)) {
    return "bulk-sender";
  }

  if (slug.startsWith(LEAD_GENERATION_SLUG_PREFIX)) {
    return "lead-generation";
  }

  if (slug.startsWith(BUSINESS_API_SLUG_PREFIX)) {
    return "business-api";
  }

  if (slug.startsWith(CAMPAIGN_SOFTWARE_SLUG_PREFIX)) {
    return "campaign-software";
  }

  return "marketing";
}

export function getServiceLabel(variant: LocationVariant): string {
  switch (variant) {
    case "scheduling":
      return "WhatsApp Message Scheduling";
    case "group-management":
      return "WhatsApp Group Management Tool";
    case "chatbot-software":
      return "WhatsApp chatbot software";
    case "api-provider":
      return "WhatsApp API provider";
    case "bulk-sender":
      return "Bulk WhatsApp sender";
    case "lead-generation":
      return "WhatsApp lead generation tool";
    case "business-api":
      return "WhatsApp Business API";
    case "campaign-software":
      return "WhatsApp campaign software";
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
    case "chatbot-software":
      return ["WhatsApp chatbot software"];
    case "api-provider":
      return ["WhatsApp API provider"];
    case "bulk-sender":
      return ["Bulk WhatsApp sender"];
    case "lead-generation":
      return ["WhatsApp lead generation tool"];
    case "business-api":
      return ["WhatsApp Business API"];
    case "campaign-software":
      return ["WhatsApp campaign software"];
    default:
      return [];
  }
}
