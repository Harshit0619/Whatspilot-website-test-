import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Download,
  UserPlus,
  Settings,
  Users,
  Send,
  Calendar,
  BarChart3,
  FileDown,
  Tag,
  Reply,
  Ticket,
  ListChecks,
  Megaphone,
  Bot,
  Link2,
  Sliders,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation - WhatsPilot",
  description: "Learn how to use WhatsPilot - your complete WhatsApp business automation platform.",
  alternates: {
    canonical: "https://www.whatspilot.online/docs",
  },
};

const gettingStarted = [
  {
    title: "Setup Account",
    href: "/docs/setup-account",
    icon: Settings,
    description: "Create your organization and configure your WhatsPilot workspace",
    steps: ["Sign up", "Create organization", "Add team members"],
  },
  {
    title: "Connect WhatsApp",
    href: "/docs/connect-whatsapp",
    icon: MessageSquare,
    description: "Link your WhatsApp number to start managing conversations",
    steps: ["Get QR code", "Scan with WhatsApp", "Start receiving messages"],
  },
];

const coreFeatures = [
  {
    title: "Multi-Number Inbox",
    href: "/docs/multi-number-inbox",
    icon: MessageSquare,
    description: "Manage conversations across multiple WhatsApp numbers in one unified inbox",
  },
  {
    title: "Multi-Agent Access",
    href: "/docs/multi-agent-access",
    icon: Users,
    description: "Collaborate with your team - assign and respond to chats",
  },
  {
    title: "Labels & Properties",
    href: "/docs/labels",
    icon: Tag,
    description: "Organize chats with custom labels, tags and custom properties",
  },
  {
    title: "Quick Replies",
    href: "/docs/quick-replies",
    icon: Reply,
    description: "Save time with templated responses for common questions",
  },
  {
    title: "Create Tickets",
    href: "/docs/create-tickets",
    icon: Ticket,
    description: "Turn conversations into trackable support tickets",
  },
  {
    title: "Create Tasks",
    href: "/docs/create-tasks",
    icon: ListChecks,
    description: "Create tasks and assign to team members from chats",
  },
  {
    title: "Analytics",
    href: "/docs/analytics",
    icon: BarChart3,
    description: "Track performance - response times, resolution rates and more",
  },
  {
    title: "Data Export",
    href: "/docs/data-export",
    icon: FileDown,
    description: "Export chat data, conversation history and reports",
  },
];

const messagingFeatures = [
  {
    title: "Bulk Messaging",
    href: "/docs/bulk-messaging",
    icon: Megaphone,
    description: "Send targeted broadcasts to contacts and groups",
  },
  {
    title: "Scheduled Messages",
    href: "/docs/scheduled-messages",
    icon: Calendar,
    description: "Schedule messages for later or set up recurring campaigns",
  },
  {
    title: "Automated Responses",
    href: "/docs/automation-rules",
    icon: Sliders,
    description: "Set up auto-replies, bots and workflow automations",
  },
];

const aiFeatures = [
  {
    title: "AI Summaries",
    href: "/docs/ai-summaries",
    icon: Sparkles,
    description: "AI-powered chat summaries and contextual responses",
  },
  {
    title: "AI Flagged Messages",
    href: "/docs/ai-flagged-messages",
    icon: Bot,
    description: "Automatically detect and flag important messages",
  },
];

const integrations = [
  {
    title: "Integrations",
    href: "/docs/integrations",
    icon: Link2,
    description: "Connect with HubSpot, Salesforce, Freshdesk and more",
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp-green/10 rounded-full text-whatsapp-green text-sm font-medium">
          <span className="w-2 h-2 bg-whatsapp-green rounded-full animate-pulse" />
          Documentation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Everything you need to know about
          <span className="text-whatsapp-green block mt-2">WhatsPilot</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Complete guides and documentation to help you get started and make the most of WhatsPilot's powerful features.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {gettingStarted.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-whatsapp-green hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-whatsapp-green/20 to-whatsapp-green/5 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-whatsapp-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-whatsapp-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    {item.steps.map((step, i) => (
                      <span key={step} className="flex items-center">
                        {i > 0 && <span className="w-1 h-1 bg-gray-300 rounded-full mx-1" />}
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-whatsapp-green group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </section>

      {/* Demo Video */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">See WhatsPilot in Action</h2>
          <p className="text-gray-600 mt-2">Watch this 2-minute demo to understand the platform</p>
        </div>
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <div className="aspect-video bg-gray-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/a_kKVDHgbQg"
              title="WhatsPilot Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-whatsapp-green rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Core Features</h2>
            <p className="text-gray-600">Manage your WhatsApp conversations efficiently</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-whatsapp-green hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-whatsapp-green/10 transition-colors">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-whatsapp-green transition-colors" />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-whatsapp-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Messaging Features */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Messaging Tools</h2>
            <p className="text-gray-600">Broadcast, schedule and automate your outreach</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {messagingFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* AI Features */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-purple-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI-Powered</h2>
            <p className="text-gray-600">Smart features to boost your productivity</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-50 transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-purple-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Integrations */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-orange-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>
            <p className="text-gray-600">Connect with your favorite tools</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          {integrations.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gradient-to-br from-whatsapp-green/5 to-blue-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
        <p className="text-gray-600 mt-2 mb-6">Our support team is here to help you get started</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp-green text-white font-medium rounded-lg hover:bg-whatsapp-green/90 transition-colors"
        >
          Contact Support
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}