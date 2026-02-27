"use client";

import { CheckCircle2, Mail, Shield, FileText, Lock, Eye, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Personal Information You Provide:</h4>
          <p className="text-gray-600 mb-3">
            We collect the following personal data you voluntarily provide:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Business Details (if provided)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Payment Data:</h4>
          <p className="text-gray-600">
            If you purchase any services, we may collect your payment details, which are securely processed by PhonePe & Razorpay. 
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Social Media Login Data:</h4>
          <p className="text-gray-600 mb-2">If you sign up using your Google account, we access your:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Name</li>
            <li>Email Address</li>
            <li>Profile Photo (if shared)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2. Information Collected Automatically",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          When you access WhatsPilot, we automatically collect:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>IP Address</li>
          <li>Browser Type & Device Info</li>
          <li>Operating System</li>
          <li>Language Preferences</li>
          <li>Location (approximate)</li>
          <li>Referring URLs</li>
          <li>Usage statistics</li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-2">
        <p className="text-gray-600">We use your data to:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Manage your account and authentication</li>
          <li>Deliver and improve our services</li>
          <li>Process payments</li>
          <li>Communicate with you (emails, WhatsApp)</li>
          <li>Comply with applicable laws</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Data Sharing",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">We may share your data:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>During a merger or business transfer</li>
          <li>With payment processors (Phonepe, Razorpay)</li>
          <li>With service providers bound by confidentiality</li>
        </ul>
        <p className="text-gray-600 font-medium mt-2">
          We never sell your personal data.
        </p>
      </div>
    ),
  },
  {
    title: "5. Cookies & Tracking",
    content: (
      <div className="space-y-2">
        <p className="text-gray-600">We use cookies, pixels, and similar tech to:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Authenticate sessions</li>
          <li>Improve user experience</li>
          <li>Track marketing performance</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. Data Retention",
    content: (
      <div className="space-y-2">
        <p className="text-gray-600">We retain your data:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>For as long as your account is active</li>
          <li>Up to 12 months after inactivity, unless legally required longer</li>
        </ul>
        <p className="text-gray-600 mt-2">
          On request, we will delete or anonymize your data securely.
        </p>
      </div>
    ),
  },
  {
    title: "7. Data Security",
    content: (
      <div className="space-y-2">
        <p className="text-gray-600">
          We implement industry-standard measures like:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>End-to-end encryption</li>
          <li>Role-based access control</li>
          <li>Secure server infrastructure</li>
        </ul>
        <p className="text-gray-600 mt-2">
          However, no online system is 100% secure. Use our services at your own discretion.
        </p>
      </div>
    ),
  },
  {
    title: "8. Your Privacy Rights",
    content: (
      <div className="space-y-2">
        <p className="text-gray-600">Depending on your location, you may:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Access your data</li>
          <li>Rectify errors</li>
          <li>Delete your data</li>
          <li>Restrict or object to processing</li>
          <li>Withdraw consent</li>
          <li>File a complaint with your national data authority</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Indian users may file complaints with the Data Protection Board of India under the DPDP Act.
        </p>
      </div>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p className="text-gray-600">
        We do not knowingly collect data from users under 18. If such data is detected, we will promptly delete it and deactivate associated accounts.
      </p>
    ),
  },
  {
    title: "10. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          If you have questions about this policy, or wish to exercise your rights:
        </p>
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-whatsapp-green" />
            <span>Email: support@whatspilot.online</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicyClient() {
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
              Privacy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: February 2026
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At WhatsPilot, we respect your privacy and are committed to protecting your personal information. 
              This policy outlines how we collect, use, store, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding -mt-10 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-whatsapp-green/5 border border-whatsapp-green/20 rounded-2xl p-6 flex items-start gap-4">
            <Shield className="w-6 h-6 text-whatsapp-green flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Your Data is Protected</h3>
              <p className="text-gray-600 text-sm">
                We never sell your personal data. Your information is encrypted and securely stored. 
                We comply with DPDP Act 2023 and international data protection standards.
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
              Questions About Your Privacy?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how we protect your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
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
