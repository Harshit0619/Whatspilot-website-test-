"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
  BarChart3,
  Users,
  Target,
  MessageCircle,
  Bot,
  Send,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  getServiceLabel,
  replaceLocationServiceLabel,
  type LocationVariant,
} from "@/lib/locations-slug";

interface LocationItem {
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

interface LocationPageClientProps {
  location: LocationItem;
  variant: LocationVariant;
}

const featureIcons = [Bot, Send, Shield, MessageCircle];
const whyChooseIcons = [MessageCircle, Zap, MessageCircle, Users, Target];

function OtherServices() {
  const services = [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Application Development", href: "/services/application-development" },
    { name: "Brand Development", href: "/services/brand-development" },
    { name: "Google Ads & Meta", href: "/services/google-ads-meta" },
    { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service.name}>
              <Link
                href={service.href}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-whatsapp-green transition-colors group"
              >
                <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover:text-whatsapp-green transition-colors" />
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/contact">
        <Button className="btn-primary w-full">
          Get a Free Quote
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  );
}

function HowWeWork() {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      desc: "We dive deep into your business model, market, and goals to understand your unique needs.",
    },
    {
      number: "2",
      title: "Strategy",
      desc: "Our team crafts a tailored roadmap, selecting the right channels and technologies for growth.",
    },
    {
      number: "3",
      title: "Execution",
      desc: "We bring the plan to life with precision development, creative design, and targeted marketing.",
    },
    {
      number: "4",
      title: "Scale & Optimize",
      desc: "Continuous monitoring and data-driven optimizations to ensure sustained growth and ROI.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
          How We Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Proven Process
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <span className="text-5xl font-bold text-whatsapp-green/10 absolute top-4 right-4">
              {step.number.padStart(2, "0")}
            </span>
            <div className="w-12 h-12 rounded-xl bg-whatsapp-green/10 flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-whatsapp-green">
                {step.number.padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LocationPageClient({
  location,
  variant,
}: LocationPageClientProps) {
  const serviceLabel = getServiceLabel(variant);
  const locationTitle = replaceLocationServiceLabel(location.title, variant);
  const locationExcerpt = replaceLocationServiceLabel(location.excerpt, variant);
  const locationContent = replaceLocationServiceLabel(location.content, variant);
  const locationName = locationTitle.replace(`${serviceLabel} in `, "");
  const locationFaqs = location.faqs.map((faq) => ({
    q: replaceLocationServiceLabel(faq.q, variant),
    a: replaceLocationServiceLabel(faq.a, variant),
  }));

  return (
    <article className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero */}
      <div className="section-padding">
        <div className="container-wide">
          <div className="flex items-center pt-16 mb-8 relative">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-whatsapp-green transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <span className="absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 inline mr-1" />
              {locationName}
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              {locationTitle}
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {locationExcerpt}
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="section-padding py-10">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-white border border-whatsapp-green/20">
                <BarChart3 className="w-6 h-6 text-whatsapp-green mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">{location.stats.projects}</p>
                <p className="text-sm text-gray-600">Projects in {locationName}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-white border border-whatsapp-green/20">
                <Users className="w-6 h-6 text-whatsapp-green mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">{location.stats.clients}</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-white border border-whatsapp-green/20">
                <Target className="w-6 h-6 text-whatsapp-green mx-auto mb-2" />
                <p className="text-3xl font-bold text-gray-900">{location.stats.successRate}</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="section-padding">
        <div className="container-wide">
          <div className="lg:flex lg:gap-12">
            {/* Main */}
            <div className="flex-1 max-w-3xl">
              {/* Overview */}
              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none
                  prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                  prose-a:text-whatsapp-green prose-a:no-underline
                  prose-strong:text-gray-900"
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {locationContent}
                  </ReactMarkdown>
                </div>
              </section>

              {/* Key Features */}
              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {location.features.map((feature, index) => {
                    const Icon = featureIcons[index % featureIcons.length];
                    return (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <div className="w-10 h-10 rounded-lg bg-whatsapp-green/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-whatsapp-green" />
                        </div>
                        <p className="text-sm font-medium text-gray-900 pt-1.5">{feature}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Why Choose */}
              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Why Choose WhatsPilot for {serviceLabel} in {locationName}?
                </h2>
                <div className="space-y-6">
                  {location.whyChoose.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-full bg-whatsapp-green text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Our Approach */}
              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
                <div className="space-y-4">
                  {location.approach.map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-whatsapp-green/5 to-white border border-whatsapp-green/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-whatsapp-green text-white flex items-center justify-center flex-shrink-0 text-lg font-bold">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions in {locationName}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {locationFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-whatsapp-green">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                <OtherServices />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-padding mt-10">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-whatsapp-green/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-whatsapp-green/5 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Grow in {locationName}?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let&apos;s discuss how {serviceLabel} can help your business in {locationName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="btn-primary !px-8 !py-3.5 text-base">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a
                  href="tel:+918130367983"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-white border border-gray-600 hover:border-whatsapp-green hover:text-whatsapp-green transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +91 81303 67983
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="section-padding">
        <div className="container-wide">
          <HowWeWork />
        </div>
      </div>
    </article>
  );
}
