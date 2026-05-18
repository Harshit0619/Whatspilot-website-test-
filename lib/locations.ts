import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export function getLocationBySlug(slug: string): LocationItem | null {
  const fullPath = path.join(locationsDirectory, `${slug}.md`);

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
