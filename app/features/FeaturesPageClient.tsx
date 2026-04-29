"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Workflow, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuresData, iconMap } from "./feature-data";

export default function FeaturesPageClient() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Features
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for{" "}
              <span className="gradient-text">WhatsApp Automation</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Everything you need to automate and scale your WhatsApp
              communication. From bulk messaging to AI-powered chatbots, we've
              got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a href="https://app.whatspilot.online">
                   <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                     Get Started
                     <ArrowRight className="w-4 h-4" />
                   </Button>
                 </a>
              <a href="/pricing">
                <Button className="btn-secondary">View Pricing</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {featuresData.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon];
              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.slug}`}
                  title={`Learn more about ${feature.title}`}
                  className={`group p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-whatsapp-green/30 hover:shadow-lg transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <FeatureIcon
                        className="w-6 h-6"
                        style={{ color: feature.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-whatsapp-green transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-whatsapp-green">
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Integrations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Connect with Your Favorite Tools
            </h2>
            <p className="text-gray-600">
              WhatsPilot integrates seamlessly with 50+ popular apps and
              platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Zapier", description: "Connect with 5000+ apps" },
              { name: "Shopify", description: "E-commerce automation" },
              { name: "WordPress", description: "Website integration" },
              { name: "Google Sheets", description: "Data synchronization" },
              { name: "Slack", description: "Team notifications" },
              { name: "HubSpot", description: "CRM integration" },
              { name: "WooCommerce", description: "Store automation" },
              { name: "Pabbly", description: "Workflow automation" },
            ].map((integration, index) => (
              <div
                key={integration.name}
                className="p-4 lg:p-6 rounded-xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-whatsapp-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {integration.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent border border-whatsapp-green/10">
              <Shield className="w-10 h-10 text-whatsapp-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Anti-Ban Protection
              </h3>
              <p className="text-gray-600 text-sm">
                Our advanced algorithms ensure your WhatsApp account stays safe
                with rate limiting and smart sending patterns.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent border border-whatsapp-green/10">
              <Workflow className="w-10 h-10 text-whatsapp-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Visual Workflow Builder
              </h3>
              <p className="text-gray-600 text-sm">
                Create complex automation workflows with our drag-and-drop
                builder. No coding required.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent border border-whatsapp-green/10">
              <Globe className="w-10 h-10 text-whatsapp-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Multi-Language Support
              </h3>
              <p className="text-gray-600 text-sm">
                Communicate with customers in their preferred language. Support
                for 50+ languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl gradient-bg p-8 lg:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                 Get started instantly. No credit card required.
               </p>
               <a href="https://app.whatspilot.online">
                  <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                   Get Started
                   <ArrowRight className="w-4 h-4" />
                 </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
