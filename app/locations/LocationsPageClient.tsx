"use client";

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { toPublicLocationSlug } from '@/lib/locations-slug';

interface LocationItem {
  slug: string;
  title: string;
}

interface LocationsPageClientProps {
  initialLocations: LocationItem[];
}

export default function LocationsPageClient({
  initialLocations,
}: LocationsPageClientProps) {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              <MapPin className="w-3.5 h-3.5 inline mr-1" />
              Locations
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WhatsApp Marketing & Automations{' '}
              <span className="gradient-text">Locations</span>
            </h1>
            <p className="text-lg text-gray-600">
              Available in {initialLocations.length} major cities.
            </p>
          </div>

          {/* City Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {initialLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${toPublicLocationSlug(loc.slug)}`}
                className="group flex items-center justify-center gap-2 px-3 py-3 h-12 rounded-xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:border-whatsapp-green/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-whatsapp-green transition-colors flex-shrink-0 min-w-[16px]" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-whatsapp-green transition-colors truncate max-w-full">
                  {loc.title.replace('WhatsApp Marketing & Automations in ', '')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
