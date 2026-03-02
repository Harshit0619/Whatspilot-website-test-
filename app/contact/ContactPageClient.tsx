"use client";

import { useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 81303 67983",
    href: "tel:+918130367983",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@whatspilot.online",
    href: "mailto:support@whatspilot.online",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat, 10:00 AM - 7:00 PM",
    href: null,
  },
];

export default function ContactPageClient() {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      {/* We're Here to Help - Prominent Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white mb-20 p-4">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We're Here to Help
            </h2>
            <p className="text-lg text-gray-600">
              At WhatsPilot, we pride ourselves on providing exceptional customer support. 
              Whether you're exploring our platform or already a customer, our team is ready to assist you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-whatsapp-green/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pre-Sales Inquiries
              </h3>
              <p className="text-gray-600">
                Not sure which plan fits your business needs? Our sales team can help you understand 
                WhatsPilot's features and find the perfect solution for your WhatsApp marketing strategy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-whatsapp-green/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Facing issues with WhatsApp automation, message scheduling, or chatbot setup? 
                Our technical support team provides step-by-step guidance to resolve your concerns quickly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-whatsapp-green/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Billing & Account
              </h3>
              <p className="text-gray-600">
                Questions about subscriptions, upgrades, or account management? 
                Reach out for assistance with payments, plan changes, or account settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div
              className={`rounded-2xl lg:rounded-3xl bg-white border border-gray-100 shadow-card p-6 lg:p-8 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-whatsapp-green/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-whatsapp-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary h-12 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-whatsapp-green/30 hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-whatsapp-green/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-whatsapp-green" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-semibold text-gray-900 hover:text-whatsapp-green transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-gray-900">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-whatsapp-green to-green-600 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Prefer WhatsApp?
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Chat with us directly on WhatsApp for quick support and
                      inquiries.
                    </p>
                    <a
                      href="https://wa.me/918130367983"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-whatsapp-green rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div
            ref={formRef}
            className="relative rounded-3xl bg-gray-50 p-8 lg:p-12 text-center overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Need Immediate Support?
              </h2>
              <p className="text-gray-600 mb-8">
                Check out our frequently asked questions or reach out to our
                dedicated support team.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://app.whatspilot.online" className="block">
                  <Button className="btn-primary gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Open Support Ticket
                  </Button>
                </a>
                <a href="/pricing" className="block">
                  <Button className="btn-secondary" variant="outline">
                    View Pricing
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-whatsapp-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-whatsapp-green/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
