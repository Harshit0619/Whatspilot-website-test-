"use client";

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import {
  toMarketingLocationSlug,
  toSchedulingLocationSlug,
  toGroupManagementLocationSlug,
  toAdvancedAnalysisLocationSlug,
} from '@/lib/locations-slug';

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
          {/* Areas We Serve */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              WhatsPilot delivers WhatsApp automation, messaging, and growth tools
              across India. Explore our service locations to find tailored support
              for your city.
            </p>
          </div>

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
                href={`/services/${toMarketingLocationSlug(loc.slug)}`}
                className="group flex items-center justify-center gap-2 px-3 py-3 h-12 rounded-xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:border-whatsapp-green/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-whatsapp-green transition-colors flex-shrink-0 min-w-[16px]" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-whatsapp-green transition-colors truncate max-w-full">
                  {loc.title.replace('WhatsApp Marketing & Automations in ', '')}
                </span>
              </Link>
            ))}
          </div>

          {/* Message Scheduling Section */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                WhatsApp Message Scheduling{' '}
                <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-base text-gray-600">
                Available in {initialLocations.length} major cities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {initialLocations.map((loc) => (
                <Link
                  key={`schedule-${loc.slug}`}
                  href={`/services/${toSchedulingLocationSlug(loc.slug)}`}
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

          {/* Group Management Section */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                WhatsApp Group Management Tool{' '}
                <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-base text-gray-600">
                Available in {initialLocations.length} major cities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {initialLocations.map((loc) => (
                <Link
                  key={`group-${loc.slug}`}
                  href={`/services/${toGroupManagementLocationSlug(loc.slug)}`}
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


          {/* Advanced Analysis Section */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Advanced Analysis{' '}
                <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-base text-gray-600">
                Available in {initialLocations.length} major cities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {initialLocations.map((loc) => (
                <Link
                  key={`analysis-${loc.slug}`}
                  href={`/services/${toAdvancedAnalysisLocationSlug(loc.slug)}`}
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
    </div>
  );
}
