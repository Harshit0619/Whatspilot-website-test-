"use client";

import Link from 'next/link';
import { Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen flex items-center">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp-green/10 border border-whatsapp-green/20 mb-8">
            <Search className="w-5 h-5 text-whatsapp-green" />
            <span className="text-sm font-medium text-whatsapp-green">
              404 Error
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text mb-6">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button 
                size="lg"
                className="btn-primary gap-2 px-8 py-6 text-lg font-semibold"
              >
                Go Home
              </Button>
            </Link>
            <a 
              href="mailto:support@whatspilot.online"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="btn-secondary gap-2 px-8 py-6 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
