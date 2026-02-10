"use client";

import { useRef, useEffect, useState } from 'react';
import { 
  MessageSquare, 
  CalendarClock, 
  Users, 
  Bot, 
  LayoutTemplate, 
  BarChart3,
  Zap,
  Shield,
  Workflow,
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const mainFeatures = [
  {
    icon: MessageSquare,
    title: 'Bulk Messaging',
    description: 'Send personalized messages to thousands of contacts with one click. Our advanced bulk messaging system supports variables, scheduling, and delivery tracking.',
    benefits: [
      'Personalized messages with variables',
      'Schedule campaigns in advance',
      'Real-time delivery tracking',
      'Import contacts from CSV/Excel',
    ],
    color: '#25d366',
  },
  {
    icon: CalendarClock,
    title: 'Message Scheduling',
    description: 'Plan and automate message delivery at the perfect time. Set up recurring messages and never miss an opportunity to engage with your audience.',
    benefits: [
      'Schedule one-time or recurring messages',
      'Timezone-aware delivery',
      'Campaign calendar view',
      'Auto-resend failed messages',
    ],
    color: '#128c7e',
  },
  {
    icon: Users,
    title: 'WhatsApp Group Management',
    description: 'Manage group communications and broadcasts efficiently. Extract members, send targeted messages, and automate group interactions.',
    benefits: [
      'Group member extraction',
      'Bulk group messaging',
      'Auto-reply in groups',
      'Group analytics',
    ],
    color: '#075e54',
  },
  {
    icon: Bot,
    title: 'AI-Powered Chatbot',
    description: 'Intelligent responses that engage customers 24/7. Set up auto-replies, handle FAQs, and qualify leads automatically.',
    benefits: [
      'Keyword-based auto-replies',
      'AI-powered responses',
      'Lead qualification',
      'Multi-language support',
    ],
    color: '#25d366',
  },
  {
    icon: LayoutTemplate,
    title: 'Template Library',
    description: 'Pre-designed message templates for every scenario. Create, save, and reuse your best-performing messages.',
    benefits: [
      '100+ ready-to-use templates',
      'Custom template creation',
      'Template categories',
      'A/B testing support',
    ],
    color: '#128c7e',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track delivery, opens, and engagement in real-time. Get insights to optimize your messaging strategy.',
    benefits: [
      'Real-time delivery stats',
      'Engagement metrics',
      'Campaign performance',
      'Exportable reports',
    ],
    color: '#075e54',
  },
];

const integrations = [
  { name: 'Zapier', description: 'Connect with 5000+ apps' },
  { name: 'Shopify', description: 'E-commerce automation' },
  { name: 'WordPress', description: 'Website integration' },
  { name: 'Google Sheets', description: 'Data synchronization' },
  { name: 'Slack', description: 'Team notifications' },
  { name: 'HubSpot', description: 'CRM integration' },
  { name: 'WooCommerce', description: 'Store automation' },
  { name: 'Pabbly', description: 'Workflow automation' },
];

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
              Powerful Features for{' '}
              <span className="gradient-text">WhatsApp Automation</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Everything you need to automate and scale your WhatsApp communication. 
              From bulk messaging to AI-powered chatbots, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register">
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

      {/* Main Features Grid */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 lg:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-whatsapp-green/30 hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon 
                      className="w-6 h-6"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-whatsapp-green transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-whatsapp-green flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
              WhatsPilot.io integrates seamlessly with 50+ popular apps and platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="p-4 lg:p-6 rounded-xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-whatsapp-green" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{integration.name}</h4>
                <p className="text-xs text-gray-500">{integration.description}</p>
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
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anti-Ban Protection</h3>
              <p className="text-gray-600 text-sm">
                Our advanced algorithms ensure your WhatsApp account stays safe with rate limiting and smart sending patterns.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent border border-whatsapp-green/10">
              <Workflow className="w-10 h-10 text-whatsapp-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visual Workflow Builder</h3>
              <p className="text-gray-600 text-sm">
                Create complex automation workflows with our drag-and-drop builder. No coding required.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-transparent border border-whatsapp-green/10">
              <Globe className="w-10 h-10 text-whatsapp-green mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Language Support</h3>
              <p className="text-gray-600 text-sm">
                Communicate with customers in their preferred language. Support for 50+ languages.
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
                Start your 5-day free trial today. No credit card required.
              </p>
              <a href="/register">
                <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                  Start Free Trial
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
