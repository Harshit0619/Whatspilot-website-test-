"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, CalendarClock, Users, Bot, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuresData, iconMap } from "../feature-data";

const iconComponents = {
  MessageSquare: CalendarClock, // This is a placeholder, actual mapping below
};

interface FeaturePageClientProps {
  slug: string;
}

export default function FeaturePageClient({ slug }: FeaturePageClientProps) {
  const feature = featuresData.find(f => f.slug === slug);
  
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

  if (!feature) {
    return (
      <div className="pt-28 pb-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Feature not found</h1>
          <Link href="/features" className="text-whatsapp-green hover:underline">
            Back to all features
          </Link>
        </div>
      </div>
    );
  }

  const FeatureIcon = iconMap[feature.icon];

  // Get other features for related section
  const relatedFeatures = featuresData.filter(f => f.id !== feature.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Feature
            </span>
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <FeatureIcon className="w-10 h-10" style={{ color: feature.color }} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {feature.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {feature.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.whatspilot.online">
                <Button className="btn-primary gap-2">
                  Start Free Trial
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

      {/* Benefits Section */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-gray-600">
              Discover how {feature.title} can transform your business communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {feature.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-whatsapp-green/30 transition-all duration-500 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <CheckCircle2 className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-gray-600">
              Set up {feature.title.toLowerCase()} in minutes, not hours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {feature.howItWorks.map((step, index, arr) => (
              <div
                key={step.step}
                className={`flex gap-6 lg:gap-8 mb-0 last:mb-0 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg"
                    style={{ backgroundColor: feature.color }}
                  >
                    {step.step}
                  </div>
                  {index < arr.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mx-6 my-2" />
                  )}
                </div>
                <div className="flex-1 py-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
                Use Cases
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Perfect for Every Scenario
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you are in e-commerce, SaaS, or services, {feature.title.toLowerCase()} adapts to your needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {feature.useCases.map((useCase, index) => (
                  <div
                    key={useCase}
                    className={`p-4 rounded-xl bg-gray-50 border border-gray-100 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.color }}
                      />
                      <span className="text-gray-700 text-sm">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp-green/10 to-whatsapp-green/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <FeatureIcon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">Powerful automation at your fingertips</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Link
                  href={`/features/${feature.slug}`}
                  className="inline-flex items-center gap-2 text-whatsapp-green font-medium hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
              Works with Your Favorite Tools
            </h2>
            <p className="text-gray-600">
              Connect {feature.title.toLowerCase()} with 50+ popular apps and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {feature.integrations.map((integration, index) => (
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

          <div className="text-center mt-12">
            <a
              href="/features"
              title="View all integrations for WhatsApp marketing automation"
              className="inline-flex items-center gap-2 text-whatsapp-green font-medium hover:underline"
            >
              View All 50+ Integrations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Other Features
            </h2>
            <p className="text-gray-600">
              Discover more ways to automate and scale your WhatsApp communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedFeatures.map((relatedFeature, index) => {
              const RelatedIcon = iconMap[relatedFeature.icon];
              return (
                <Link
                  key={relatedFeature.id}
                  href={`/features/${relatedFeature.slug}`}
                  title={`Learn about ${relatedFeature.title}`}
                  className={`group p-6 rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:border-whatsapp-green/30 transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${relatedFeature.color}15` }}
                    >
                      <RelatedIcon
                        className="w-6 h-6"
                        style={{ color: relatedFeature.color }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-whatsapp-green transition-colors">
                      {relatedFeature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedFeature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl gradient-bg p-8 lg:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Start your 5-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://app.whatspilot.online">
                  <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="/pricing">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                  >
                    View Pricing
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
