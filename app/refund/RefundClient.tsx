"use client";

import { CheckCircle2, Mail, XCircle, FileText, HelpCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p className="text-gray-600">
        At WhatsPilot, we strive to provide reliable and high-quality WhatsApp SaaS services. 
        This Refund Policy outlines the terms and conditions governing all payments made for 
        our Service. By purchasing or using our Service, you agree to this policy.
      </p>
    ),
  },
  {
    title: "2. No Refund Policy",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600 font-medium">
            All payments made to WhatsPilot are non-refundable.
          </p>
        </div>
        <p className="text-gray-600 ml-7">
          Once a subscription, license, or service has been purchased, no refunds, cancellations, 
          or credits will be issued, regardless of usage or circumstances, except where required 
          by applicable law.
        </p>
      </div>
    ),
  },
  {
    title: "3. Non-Refundable Items",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">The following items are strictly non-refundable:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
          <li>
            <strong>Subscription plans</strong> (monthly, annually) - once activated, cannot be refunded
          </li>
          <li>
            <strong>One-time setup fees</strong> and activation charges
          </li>
          <li>
            <strong>Add-ons and premium features</strong> - purchased add-ons are final
          </li>
          <li>
            <strong>Usage-based charges</strong> and message credits
          </li>
          <li>
            <strong>Third-party service costs</strong> - any fees paid to third-party services 
            through our platform
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Service Availability",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          While we make every effort to ensure uninterrupted service, temporary downtime or 
          technical issues may occur:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
          <li>Refunds will NOT be provided for service interruptions</li>
          <li>We may offer service credits at our sole discretion</li>
          <li>We may offer subscription extensions for extended outages</li>
          <li>Service credits are subject to approval and may vary case-by-case</li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. Exclusions",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600 font-medium">Refunds will NOT be granted for:</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-7">
          <li>Change of mind after purchase</li>
          <li>Lack of usage of the service</li>
          <li>Dissatisfaction based on expectations</li>
          <li>Business decisions (shutting down or pivoting)</li>
          <li>Account suspension due to violations</li>
          <li>Account termination for policy violations</li>
          <li>Feature requests not being available</li>
          <li>Payment disputes without prior contact</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. Before Purchasing",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          We encourage all prospective customers to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
          <li>
            Review our{" "}
            <Link href="/features" className="text-whatsapp-green hover:underline font-medium">
              Features page
            </Link>{" "}
            to understand available functionality
          </li>
          <li>Contact us with any questions before making a purchase</li>
          <li>Take advantage of our free trial</li>
          <li>Test with basic plans before upgrading</li>
        </ul>
      </div>
    ),
  },
  {
    title: "7. Billing Issues",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          If you believe there has been a billing error:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
          <li>
            Contact our support at{" "}
            <span className="font-medium text-gray-900">support@whatspilot.online</span> within 7 days 
            of the charge
          </li>
          <li>Provide detailed information about the issue</li>
          <li>Allow 5-7 business days for investigation</li>
          <li>We will review and respond with our findings</li>
        </ol>
        <p className="text-gray-600 mt-3">
          Initiating a chargeback without contacting us first may result in immediate 
          account suspension.
        </p>
      </div>
    ),
  },
  {
    title: "8. Cancellation",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          While we do not offer refunds, you may cancel your subscription at any time:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
          <li>Log into your account settings</li>
          <li>Navigate to Subscription/Billing</li>
          <li>Click "Cancel Subscription"</li>
          <li>Follow the confirmation steps</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Your subscription will remain active until the end of your current billing period.
        </p>
      </div>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          If you have questions regarding billing or refunds:
        </p>
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-whatsapp-green" />
            <span>Email: support@whatspilot.online</span>
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          We typically respond within 24-48 business hours.
        </p>
      </div>
    ),
  },
];

export default function RefundClient() {
  return (
    <div className="pt-8 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-whatsapp-green/5 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-whatsapp-green/5 blur-3xl" />
        </div>
        
        <div className="relative section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Billing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: February 2026
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read our refund policy carefully. All payments are non-refundable unless 
              required by applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding -mt-10 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-1">Important Notice</h3>
              <p className="text-amber-700 text-sm">
                All purchases are final and non-refundable. Please review our features and 
                contact us with any questions before purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            {sections.map((section, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-whatsapp-green" />
                  {section.title}
                </h2>
                <div className="text-gray-600 pl-7">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-whatsapp-green/10 to-whatsapp-dark/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have Questions Before Purchasing?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team to learn more about our features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Contact Support
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
