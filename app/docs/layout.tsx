import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { DocsSidebar } from "./DocsContent";

export const metadata: Metadata = {
  title: "Documentation - WhatsPilot",
  description: "Learn how to use WhatsPilot - your complete WhatsApp business automation platform.",
  openGraph: {
    title: "Documentation - WhatsPilot",
    description: "Learn how to use WhatsPilot - your complete WhatsApp business automation platform.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatspilot.online/docs",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo showDotIo={false} />
            </Link>
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Go to Website
            </Link>
          </div>
        </div>
      </header>
      <DocsSidebar>{children}</DocsSidebar>
    </div>
  );
}