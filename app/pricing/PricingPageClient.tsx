"use client";

import { useState, useRef, useEffect } from "react";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import useAutoCurrency from "@/hooks/useAutoCurrency";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 1599,
    yearlyPrice: 1499,
    monthlyPriceUSD: 14,
    yearlyPriceUSD: 13,
    description: "Perfect for small businesses getting started",
    features: [
      "30,000 messages/month",
      "20,000 contacts",
      "100 templates",
      "1 WhatsApp connection",
      "1 workflow",
      "WhatsApp Chatbot",
      "Bulk messaging",
      "Schedule messages",
      "Access WhatsApp Chats",
      "Access WhatsApp Groups",
      "1 App integration",
      "API access",
    ],
    notIncluded: [
      "Priority support",
      "Custom onboarding",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    monthlyPrice: 3999,
    yearlyPrice: 3333,
    monthlyPriceUSD: 35,
    yearlyPriceUSD: 31,
    description: "Best for growing businesses",
    features: [
      "Unlimited messages",
      "40,000 contacts",
      "300 templates",
      "3 WhatsApp connections",
      "5 workflows",
      "WhatsApp Chatbot",
      "Bulk messaging",
      "Schedule messages",
      "WA group schedule",
      "WA group listener",
      "Access WhatsApp Chats",
      "Access WhatsApp Groups",
      "3 App integrations",
      "API access",
      "Priority support",
    ],
    notIncluded: ["Custom onboarding", "Dedicated account manager"],
    cta: "Start Free Trial",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    icon: Crown,
    monthlyPrice: 9999,
    yearlyPrice: 8999,
    monthlyPriceUSD: 99,
    yearlyPriceUSD: 89,
    description: "For large-scale operations",
    features: [
      "Unlimited messages",
      "50,000 contacts",
      "500 templates",
      "5 WhatsApp connections",
      "10 workflows",
      "WhatsApp Chatbot",
      "Bulk messaging",
      "Schedule messages",
      "WA group schedule",
      "WA group listener",
      "Access WhatsApp Chats",
      "Access WhatsApp Groups",
      "10 App integrations",
      "API access",
      "Dedicated support",
      "Custom onboarding",
      "Dedicated account manager",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will get immediate access to new features. When downgrading, changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens after my free trial ends?",
    answer:
      "After your 5-day free trial, you can choose to subscribe to any of our plans. If you decide not to continue, your account will be downgraded to a limited free version.",
  },
  {
    question:
      "Do you offer discounts for nonprofits or educational institutions?",
    answer:
      "Yes, we offer special discounts for registered nonprofits, educational institutions, and NGOs. Contact our sales team for more information.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, and bank transfers for Indian customers. International customers can pay via credit card or PayPal.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { currency } = useAutoCurrency();

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
      <section className="section-padding mb-16">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that fits your business needs. All plans include a
              5-day free trial.
            </p>

            {/* Billing Toggle - Pill Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-full">
                <button
                  type="button"
                  onClick={() => setIsYearly(false)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    !isYearly
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setIsYearly(true)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isYearly
                      ? "bg-whatsapp-green text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Yearly
                </button>
              </div>
              {isYearly && (
                <span className="px-3 py-1 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                } ${
                  plan.popular
                    ? "bg-white shadow-xl border-2 border-whatsapp-green scale-105 lg:scale-110 z-10"
                    : "bg-white shadow-card border border-gray-100 hover:shadow-card-hover"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-medium shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        plan.popular ? "gradient-bg" : "bg-gray-100"
                      }`}
                    >
                      <plan.icon
                        className={`w-5 h-5 ${plan.popular ? "text-white" : "text-gray-600"}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-medium text-gray-500">
                        {currency === "INR" ? "₹" : "$"}
                      </span>
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {isYearly
                          ? (currency === "INR"
                              ? plan.yearlyPrice.toLocaleString()
                              : plan.yearlyPriceUSD.toLocaleString())
                          : (currency === "INR"
                              ? plan.monthlyPrice.toLocaleString()
                              : plan.monthlyPriceUSD.toLocaleString())}
                      </span>
                      <span className="text-gray-500">/month</span>
                      <span className="text-sm font-medium text-gray-500 ml-2">
                        ({currency === "INR" ? "INR" : "USD"})
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed annually ({currency === "INR" ? "₹" : "$"}
                        {currency === "INR"
                          ? (plan.yearlyPrice * 12).toLocaleString()
                          : (plan.yearlyPriceUSD * 12).toLocaleString()}
                        /year)
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  {plan.cta === "Start Free Trial" ||
                  plan.cta === "Get Started" ? (
                    <a href="https://app.whatspilot.online" className="block">
                      <Button
                        className={`w-full mb-8 ${
                          plan.popular ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  ) : plan.cta === "Contact Sales" ? (
                    <a href="/contact" className="block">
                      <Button
                        className={`w-full mb-8 ${
                          plan.popular ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {plan.cta}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      className={`w-full mb-8 ${
                        plan.popular ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  )}

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-900 mb-3">
                      What's included:
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular
                              ? "text-whatsapp-green"
                              : "text-gray-400"
                          }`}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.length > 0 && (
                      <>
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-400 mb-2">
                            Not included:
                          </p>
                          {plan.notIncluded.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 opacity-50"
                            >
                              <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full border-2 border-gray-300" />
                              <span className="text-sm text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl gradient-bg p-8 lg:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need a Custom Plan?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Contact our sales team for custom pricing tailored to your
                specific needs.
              </p>
              <a href="/contact">
                <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                  Contact Sales
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
