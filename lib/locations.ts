import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  fromPublicLocationSlug,
  toMarketingLocationSlug,
  toSchedulingLocationSlug,
  toGroupManagementLocationSlug,
  toChatbotSoftwareLocationSlug,
  toApiProviderLocationSlug,
  toBulkSenderLocationSlug,
  toLeadGenerationLocationSlug,
  toBusinessApiLocationSlug,
  toCampaignSoftwareLocationSlug,
} from './locations-slug';

const locationsDirectory = path.join(process.cwd(), 'content/locations');

export interface LocationItem {
  slug: string;
  title: string;
  excerpt: string;
  stats: {
    projects: string;
    clients: string;
    successRate: string;
  };
  features: string[];
  whyChoose: {
    title: string;
    desc: string;
  }[];
  approach: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  content: string;
}

export function getLocationSlugs(): string[] {
  const fileNames = fs.readdirSync(locationsDirectory);
  return fileNames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace(/\.md$/, ''));
}

export function getLocationPublicSlugs(
  variant:
    | 'marketing'
    | 'scheduling'
    | 'group-management'
    | 'chatbot-software'
    | 'api-provider'
    | 'bulk-sender'
    | 'lead-generation'
    | 'business-api'
    | 'campaign-software'
    | 'all'
    | 'both' = 'both',
): string[] {
  const rawSlugs = getLocationSlugs();

  if (variant === 'marketing') {
    return rawSlugs.map(toMarketingLocationSlug);
  }

  if (variant === 'scheduling') {
    return rawSlugs.map(toSchedulingLocationSlug);
  }

  if (variant === 'group-management') {
    return rawSlugs.map(toGroupManagementLocationSlug);
  }

  if (variant === 'chatbot-software') {
    return rawSlugs.map(toChatbotSoftwareLocationSlug);
  }

  if (variant === 'api-provider') {
    return rawSlugs.map(toApiProviderLocationSlug);
  }

  if (variant === 'bulk-sender') {
    return rawSlugs.map(toBulkSenderLocationSlug);
  }

  if (variant === 'lead-generation') {
    return rawSlugs.map(toLeadGenerationLocationSlug);
  }

  if (variant === 'business-api') {
    return rawSlugs.map(toBusinessApiLocationSlug);
  }

  if (variant === 'campaign-software') {
    return rawSlugs.map(toCampaignSoftwareLocationSlug);
  }

  if (variant === 'all') {
    return rawSlugs.flatMap((slug) => [
      toMarketingLocationSlug(slug),
      toSchedulingLocationSlug(slug),
      toGroupManagementLocationSlug(slug),
      toChatbotSoftwareLocationSlug(slug),
      toApiProviderLocationSlug(slug),
      toBulkSenderLocationSlug(slug),
      toLeadGenerationLocationSlug(slug),
      toBusinessApiLocationSlug(slug),
      toCampaignSoftwareLocationSlug(slug),
    ]);
  }

  return rawSlugs.flatMap((slug) => [
    toMarketingLocationSlug(slug),
    toSchedulingLocationSlug(slug),
  ]);
}

export function getLocationBySlug(slug: string): LocationItem | null {
  const rawSlug = fromPublicLocationSlug(slug);
  const fullPath = path.join(locationsDirectory, `${rawSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<LocationItem, 'content'>),
    content,
  };
}

export function getAllLocations(): LocationItem[] {
  const slugs = getLocationSlugs();
  return slugs
    .map(slug => getLocationBySlug(slug))
    .filter((loc): loc is LocationItem => loc !== null);
}
