"use client";

import { useRef, useEffect, useState } from "react";
import {
  MessageSquare,
  CalendarClock,
  Users,
  Bot,
  LayoutTemplate,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Bulk Messaging",
    slug: "bulk-messaging",
    description:
      "Send personalized messages to thousands of contacts with one click. Schedule campaigns and track delivery in real-time.",
    color: "#25d366",
  },
  {
    icon: CalendarClock,
    title: "Schedule Messages",
    slug: "schedule-messages",
    description:
      "Plan and automate message delivery at the perfect time. Set up recurring messages and never miss an opportunity.",
    color: "#128c7e",
  },
  {
    icon: Users,
    title: "WhatsApp Groups",
    slug: "whatsapp-groups",
    description:
      "Manage group communications and broadcasts efficiently. Extract members and send targeted messages.",
    color: "#075e54",
  },
  {
    icon: Bot,
    title: "Chatbot Automation",
    slug: "chatbot-automation",
    description:
      "AI-powered responses that engage customers 24/7. Set up auto-replies and handle FAQs automatically.",
    color: "#25d366",
  },
  {
    icon: LayoutTemplate,
    title: "Template Library",
    slug: "template-library",
    description:
      "Pre-designed message templates for every scenario. Create, save, and reuse your best-performing messages.",
    color: "#128c7e",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "Track delivery, opens, and engagement in real-time. Get insights to optimize your messaging strategy.",
    color: "#075e54",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 },
    );

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to automate and scale your WhatsApp
              communication. Our whatsapp marketing software includes everything
              from basic automation to advanced campaign tools in one powerful
              platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                data-index={index}
                className={`feature-card group relative p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-7 h-7 transition-colors duration-300"
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-whatsapp-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Link */}
                <a
                  href={`/features/${feature.slug}`}
                  title={
                    feature.title === "Bulk Messaging"
                      ? "Explore Bulk Messaging features - Send WhatsApp promotional messages at scale"
                      : feature.title === "Schedule Messages"
                        ? "Discover message scheduling - How to schedule WhatsApp messages automatically"
                        : feature.title === "WhatsApp Groups"
                          ? "Manage WhatsApp groups efficiently - Extract members and send bulk messages"
                          : feature.title === "Chatbot Automation"
                            ? "AI chatbot automation for WhatsApp - 24/7 customer support with auto-replies"
                            : feature.title === "Template Library"
                              ? "WhatsApp message templates library - 100+ pre-designed templates for marketing"
                              : feature.title === "Analytics Dashboard"
                                ? "Track WhatsApp campaign performance - Real-time analytics and delivery reports"
                                : `Learn more about ${feature.title}`
                  }
                  aria-label={
                    feature.title === "Bulk Messaging"
                      ? "Explore Bulk Messaging"
                      : feature.title === "Schedule Messages"
                        ? "Discover Scheduling"
                        : feature.title === "WhatsApp Groups"
                          ? "Manage Groups"
                          : feature.title === "Chatbot Automation"
                            ? "Try Chatbot Automation"
                            : feature.title === "Template Library"
                              ? "Browse Templates"
                              : feature.title === "Analytics Dashboard"
                                ? "View Analytics"
                                : "Learn more about features"
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {feature.title === "Bulk Messaging"
                    ? "Explore Bulk Messaging"
                    : feature.title === "Schedule Messages"
                      ? "Discover Scheduling"
                      : feature.title === "WhatsApp Groups"
                        ? "Manage Groups"
                        : feature.title === "Chatbot Automation"
                          ? "Try Chatbot Automation"
                          : feature.title === "Template Library"
                            ? "Browse Templates"
                            : feature.title === "Analytics Dashboard"
                              ? "View Analytics"
                              : "Learn more"}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900">
                  Ready to get started?
                </p>
                <p className="text-sm text-gray-600">
                  Explore all features and integrations
                </p>
              </div>
              <a
                href="/features"
                title="View all features of our WhatsApp marketing platform - Including bulk messaging, scheduling, and chatbots"
                aria-label="View All Features"
              >
                <button
                  className="btn-primary gap-2 whitespace-nowrap"
                  aria-label="View All Features"
                >
                  View All Features
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
