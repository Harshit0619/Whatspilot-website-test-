import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Clock, BookOpen } from "lucide-react";
import { docsSlugs } from "@/lib/docs";

export async function generateStaticParams() {
  return docsSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} - WhatsPilot Documentation`,
    description: `Learn how to use ${title} feature in WhatsPilot.`,
    alternates: {
      canonical: `https://www.whatspilot.online/docs/${slug}`,
    },
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/docs"
          className="flex items-center gap-1.5 text-gray-500 hover:text-whatsapp-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Documentation
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-300" />
        <span className="text-gray-900 font-medium">{title}</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            Guide
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 text-lg leading-relaxed">
          This is a placeholder page for the <strong>{title}</strong> feature documentation.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Please provide the content for this page and I will update it accordingly.
        </p>

        {/* Overview Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="p-6 bg-whatsapp-green/5 rounded-xl border border-whatsapp-green/20">
            <p className="text-gray-700 leading-relaxed">
              Describe what this feature does and why it is useful for your business. 
              Explain the key benefits and how it helps streamline your WhatsApp communication workflow.
            </p>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
          <div className="space-y-4">
            {["Step 1: Description", "Step 2: Description", "Step 3: Description"].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-whatsapp-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-whatsapp-green">{i + 1}</span>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{step}</p>
                  <p className="text-gray-500 text-sm mt-1">Detailed explanation of this step</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Tip 1", "Tip 2", "Tip 3", "Tip 4"].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-whatsapp-green rounded-full mt-2" />
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/docs/multi-number-inbox" className="p-3 bg-white border border-gray-200 rounded-lg hover:border-whatsapp-green transition-colors">
              <span className="text-sm font-medium text-gray-700">Multi-Number Inbox</span>
            </Link>
            <Link href="/docs/multi-agent-access" className="p-3 bg-white border border-gray-200 rounded-lg hover:border-whatsapp-green transition-colors">
              <span className="text-sm font-medium text-gray-700">Multi-Agent Access</span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 mt-12 border-t border-gray-200">
        <Link
          href="/docs"
          className="flex items-center gap-2 text-gray-600 hover:text-whatsapp-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Documentation</span>
        </Link>
      </div>
    </div>
  );
}