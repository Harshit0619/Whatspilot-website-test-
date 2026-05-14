"use client";

import {
  TrendingUp,
  Shield,
  AlertTriangle,
  Clock,
  ExternalLink,
  MessageSquare,
  Target,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "What is Number Warmup?",
    icon: TrendingUp,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">
          Number warmup is the process of slowly increasing messaging activity on a new WhatsApp number
          before sending campaigns at scale. Think of it like introducing a new employee to the office —
          if they walk in on day one screaming promotions through a megaphone, security gets interested
          very quickly.
        </p>
        <p className="text-gray-600 font-medium">This helps:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Improve message deliverability</li>
          <li>Reduce spam detection risk</li>
          <li>Build sender reputation</li>
          <li>Stabilize messaging quality rating</li>
        </ul>
        <p className="text-gray-600">
          Platforms like{" "}
          <Link href="https://wapilot.io" className="text-whatsapp-green hover:underline font-medium">
            WhatsPilot
          </Link>{" "}
          rely heavily on healthy sender behavior for long-term campaign performance.
        </p>
      </div>
    ),
  },
  {
    title: "Before You Start",
    icon: Shield,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Use a Clean Number</h4>
          <p className="text-gray-600 mb-2">Best option:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Brand new SIM card</li>
            <li>Never used for WhatsApp before</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Avoid</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Previously banned numbers</li>
            <li>Numbers used for spam</li>
            <li>Frequently recycled virtual numbers</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Warmup Timeline",
    icon: Clock,
    content: (
      <div className="space-y-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Days 1–3</h4>
          <p className="text-gray-600 mb-2">Keep it extremely human.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-whatsapp-green/5 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-2">Recommended</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>60 to 90 messages/day</li>
                <li>Mostly manual chats</li>
                <li>Talk to real contacts</li>
                <li>Receive replies naturally</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <p className="font-medium text-red-700 mb-2">Avoid</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>Links</li>
                <li>Media spam</li>
                <li>Bulk sending</li>
                <li>Identical copy-paste messages</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Your number right now is basically a baby deer wearing roller skates. Don&apos;t make it sprint
            through a shopping mall yet.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Days 4–7</h4>
          <p className="text-gray-600 mb-2">Increase activity slowly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-whatsapp-green/5 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-2">Recommended</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>120 to 160 messages/day</li>
                <li>Start using templates carefully</li>
                <li>Add some media messages</li>
                <li>Join normal conversations</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-2">Safe Practices</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>Maintain reply ratio</li>
                <li>Keep response times natural</li>
                <li>Use varied message text</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Week 2</h4>
          <p className="text-gray-600 mb-2">Now the engine starts warming properly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-whatsapp-green/5 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-2">Recommended</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>200 to 300 messages/day</li>
                <li>Small campaign batches</li>
                <li>Use personalized variables</li>
                <li>Mix text + image + button messages</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="font-medium text-green-700 mb-2">Good Signals</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>Contacts replying</li>
                <li>People saving your number</li>
                <li>Longer conversations</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-3 mb-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-700 text-sm">Bad Signals</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                  <li>Many blocks</li>
                  <li>Spam reports</li>
                  <li>High unread ratios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Week 3+</h4>
          <p className="text-gray-600 mb-2">Scale carefully.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div className="bg-whatsapp-green/5 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-2">Recommended</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                <li>Gradual increases every few days</li>
                <li>Segment campaigns</li>
                <li>Avoid blast-style behavior</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <p className="font-medium text-red-700 mb-2">Do NOT</p>
              <p className="text-gray-600 text-sm">
                Suddenly jump from 50 messages to 5000 messages. That&apos;s the digital equivalent of
                showing up to a village fair in a fighter jet.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Best Practices for WhatsPilot",
    icon: Target,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Personalize Messages</h4>
          <p className="text-gray-600 mb-2">Avoid robotic campaigns.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-4">
              <p className="font-medium text-red-700 mb-1 text-sm">Bad</p>
              <p className="text-gray-600 text-sm italic">
                BUY NOW!!! LIMITED OFFER!!!
              </p>
            </div>
            <div className="bg-whatsapp-green/5 rounded-xl p-4">
              <p className="font-medium text-gray-900 mb-1 text-sm">Better</p>
              <p className="text-gray-600 text-sm italic">
                Hey Rahul, we thought you might like this new collection.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Use Proper Opt-ins</h4>
          <p className="text-gray-600 mb-2">Only message users who:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Filled a form</li>
            <li>Requested updates</li>
            <li>Purchased from you</li>
            <li>Explicitly consented</li>
          </ul>
          <p className="text-gray-500 text-sm mt-2">
            This matters a lot for long-term number health.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Maintain Reply Quality</h4>
          <p className="text-gray-600 mb-2">Healthy numbers usually:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Get replies</li>
            <li>Have two-way conversations</li>
            <li>Avoid being blocked</li>
          </ul>
          <p className="text-gray-500 text-sm mt-2">
            WhatsApp watches engagement patterns closely.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Avoid Spam Triggers</h4>
          <p className="text-gray-600 mb-2">High-risk behavior:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
            <li>Sending shortened links everywhere</li>
            <li>ALL CAPS messages</li>
            <li>Excessive emojis</li>
            <li>Repeated identical text</li>
            <li>Massive sudden campaigns</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Signs Your Number is Healthy",
    icon: BarChart3,
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-whatsapp-green/5 rounded-xl p-4">
            <p className="font-medium text-green-700 mb-2">Good Indicators</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
              <li>Messages deliver instantly</li>
              <li>Contacts receive messages normally</li>
              <li>Stable quality rating</li>
              <li>Replies continue increasing</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <p className="font-medium text-red-700 mb-2">Danger Signs</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
              <li>Delayed delivery</li>
              <li>One tick for long periods</li>
              <li>Sudden restrictions</li>
              <li>&ldquo;This account can no longer use WhatsApp&rdquo;</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Recommended Daily Ramp",
    icon: BarChart3,
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 font-semibold text-gray-900">Phase</th>
                <th className="py-3 px-4 font-semibold text-gray-900">Daily Messages</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Days 1–3</td>
                <td className="py-3 px-4 text-gray-600">60–90</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Days 4–7</td>
                <td className="py-3 px-4 text-gray-600">120–160</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Week 2</td>
                <td className="py-3 px-4 text-gray-600">200–300</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">Week 3+</td>
                <td className="py-3 px-4 text-gray-600">Increase gradually</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "Final Tips",
    icon: CheckCircle2,
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">
          A warmed-up number behaves like a real human-operated business account:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Conversations first</li>
          <li>Campaigns second</li>
          <li>Consistency over aggression</li>
        </ul>
        <p className="text-gray-600">
          Most numbers get flagged not because businesses send messages... but because they send messages
          like a malfunctioning toaster possessed by a marketing intern.
        </p>
        <p className="text-gray-600 font-medium">
          Use patience early. It pays off later.
        </p>
      </div>
    ),
  },
];

export default function WarmupGuidelinesClient() {
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
              Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Warmup <span className="gradient-text">Guidelines</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">Getting a fresh WhatsApp number ready for bulk messaging</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Warmup helps your number build trust with WhatsApp gradually, reducing the chances of bans,
              spam flags, and delivery issues.
            </p>
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
                  <section.icon className="w-5 h-5 text-whatsapp-green" />
                  {section.title}
                </h2>
                <div className="text-gray-600 pl-7">{section.content}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-whatsapp-green/10 to-whatsapp-dark/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Warming Up?
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with WhatsPilot and follow these guidelines for long-term sender health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
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
