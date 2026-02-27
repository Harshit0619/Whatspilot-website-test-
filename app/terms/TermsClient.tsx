"use client";

import { CheckCircle2, Mail, Shield, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p className="text-gray-600">
        Welcome to WhatsPilot! By accessing or using our services, you agree to comply with and be bound 
        by the following terms and conditions. Please review them carefully. If you do not agree with 
        these terms, you should not use our services. WhatsPilot is operated by Voidnet ("Company", 
        "we", "us", or "our").
      </p>
    ),
  },
  {
    title: "2. Definitions",
    content: (
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Service:</h4>
          <p className="text-gray-600">
            Refers to the WhatsPilot application and its associated features, including but not limited 
            to WhatsApp automation, bulk messaging, chatbot services, and API integrations.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">User:</h4>
          <p className="text-gray-600">
            Any individual or entity that accesses or uses the Service, including but not limited to 
            customers, trial users, and visitors.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Content:</h4>
          <p className="text-gray-600">
            Any information, text, graphics, photos, videos, audio, or other materials uploaded, 
            downloaded, or appearing on the Service.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Account:</h4>
          <p className="text-gray-600">
            A registered user account on WhatsPilot that provides access to our Services.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "3. Eligibility",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          To use WhatsPilot, you must meet the following eligibility requirements:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
          <li>Be at least 18 years old</li>
          <li>Have the legal capacity to enter into binding agreements</li>
          <li>Not be prohibited from using our services under applicable laws</li>
          <li>Provide accurate and complete registration information</li>
        </ul>
        <p className="text-gray-600 mt-2">
          By using our services, you represent and warrant that you meet these eligibility requirements.
        </p>
      </div>
    ),
  },
  {
    title: "4. User Responsibilities",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Account Security:</h4>
          <p className="text-gray-600">
            You are solely responsible for maintaining the confidentiality of your account information, 
            including your password. You agree to immediately notify us of any unauthorized use of 
            your account or any other breach of security.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Lawful Use:</h4>
          <p className="text-gray-600">
            You agree to use the Service in compliance with all applicable laws and regulations, 
            including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 mt-2">
            <li>Telecom laws and regulations</li>
            <li>Data protection and privacy laws</li>
            <li>Anti-spam laws (including IT Act 2000 and TRAI regulations in India)</li>
            <li>Consumer protection laws</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities:</h4>
          <p className="text-gray-600">You agree NOT to engage in any of the following activities:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 mt-2">
            <li>Sending unsolicited messages (spam)</li>
            <li>Harassment, defamation, or abusive communications</li>
            <li>Distributing malware, viruses, or other harmful software</li>
            <li>Hacking, scanning, or attempting to breach security measures</li>
            <li>Using the service for illegal purposes</li>
            <li>Impersonating any person or entity</li>
            <li>Violating the rights of others</li>
            <li>Reselling or redistributing our services without authorization</li>
            <li>Exceeding message limits or attempting to bypass restrictions</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "5. Privacy Policy",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          Your privacy is important to us. Please review our{" "}
          <Link href="/privacy" className="text-whatsapp-green hover:underline font-medium">
            Privacy Policy
          </Link>{" "}
          to understand how we collect, use, and protect your personal information. By using our 
          Services, you consent to the collection and use of information as described in our Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          All content and materials available on WhatsPilot, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Text, graphics, and website design</li>
          <li>Code, algorithms, and software</li>
          <li>Logos, trademarks, and brand identities</li>
          <li>Product names, service names, and slogans</li>
          <li>Database contents and configurations</li>
        </ul>
        <p className="text-gray-600 mt-3">
          Are the intellectual property of Voidnet and are protected by applicable copyright, 
          trademark, and other intellectual property laws. Unauthorized use of any materials may 
          violate these laws and result in legal action.
        </p>
      </div>
    ),
  },
  {
    title: "7. User-Generated Content",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Ownership:</h4>
          <p className="text-gray-600">
            Users retain full ownership of the content they upload to the Service, including messages, 
            templates, contacts, and other data you provide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">License:</h4>
          <p className="text-gray-600">
            By uploading content to WhatsPilot, you grant us a worldwide, non-exclusive, royalty-free 
            license to use, copy, modify, reproduce, display, and distribute your content solely for 
            the purpose of operating and providing the Service to you.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Content Responsibility:</h4>
          <p className="text-gray-600">
            You represent and warrant that you own or have the necessary rights to the content you 
            upload, and that such content does not infringe upon the intellectual property rights or 
            other rights of any third party.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "8. Payment Terms",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Subscription Plans:</h4>
          <p className="text-gray-600">
            WhatsPilot offers various subscription plans with different features and limits. Pricing 
            details are available on our{" "}
            <Link href="/pricing" className="text-whatsapp-green hover:underline font-medium">
              Pricing page
            </Link>
            . Subscription fees are billed in advance and are non-refundable except as explicitly 
            stated in our Refund Policy.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Payment Processing:</h4>
          <p className="text-gray-600">
            Payments are securely processed through third-party payment processors (Razorpay, PhonePe). 
            We do not store your complete payment card details on our servers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Taxes:</h4>
          <p className="text-gray-600">
            All prices are exclusive of applicable taxes (including GST). You are responsible for 
            paying all taxes associated with your use of the Service.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "9. Service Levels",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          We strive to maintain high service availability but do not guarantee uninterrupted access. 
          The Service may be temporarily unavailable due to:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Scheduled maintenance</li>
          <li>Emergency repairs</li>
          <li>Server or network issues</li>
          <li>Force majeure events</li>
          <li>Issues beyond our reasonable control</li>
        </ul>
        <p className="text-gray-600 mt-2">
          We will make reasonable efforts to provide advance notice of planned maintenance and 
          restore service as quickly as possible.
        </p>
      </div>
    ),
  },
  {
    title: "10. Termination",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          We reserve the right to terminate or suspend your account and access to the Service, 
          without prior notice or liability, for conduct that we believe:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray2">
          <li>Violates-600 ml- these Terms of Service</li>
          <li>Is harmful to other users or third parties</li>
          <li>Is illegal or fraudulent</li>
          <li>Threatens the security or integrity of our platform</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Upon termination, your right to use the Service immediately ceases. All provisions of 
          these Terms which by their nature should survive termination shall survive.
        </p>
      </div>
    ),
  },
  {
    title: "11. Disclaimers",
    content: (
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <p className="text-gray-600">
            The Service is provided "as is" and "as available" without any warranties 
            of any kind, either express or implied, including but not limited to:
          </p>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-7">
          <li>Implied warranties of merchantability</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement</li>
          <li>Performance or results</li>
        </ul>
        <p className="text-gray-600 mt-2 ml-7">
          We do not guarantee that the Service will be uninterrupted, secure, or free of errors, 
          bugs, or viruses.
        </p>
      </div>
    ),
  },
  {
    title: "12. Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          In no event shall Voidnet, its directors, employees, partners, or agents be liable for 
          any indirect, incidental, special, consequential, or punitive damages, including without 
          limitation:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
          <li>Loss of profits, revenue, or business opportunities</li>
          <li>Loss of data or information</li>
          <li>Cost of replacement services</li>
          <li>Personal injury or property damages</li>
        </ul>
        <p className="text-gray-600 mt-2">
          Our total liability shall not exceed the amount paid by you for the Service in the 
          twelve (12) months preceding the claim.
        </p>
      </div>
    ),
  },
  {
    title: "13. Indemnification",
    content: (
      <p className="text-gray-600">
        You agree to indemnify, defend, and hold harmless Voidnet and its officers, directors, 
        employees, and agents from and against any claims, liabilities, damages, losses, costs, 
        or expenses (including reasonable legal fees) arising out of or related to your use of 
        the Service, your content, or your violation of these Terms.
      </p>
    ),
  },
  {
    title: "14. Governing Law",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          These terms shall be governed and construed in accordance with the laws of India, 
          without regard to its conflict of law provisions.
        </p>
        <p className="text-gray-600">
          Any disputes arising under or related to these Terms shall be subject to the exclusive 
          jurisdiction of the courts located in Bangalore, Karnataka, India.
        </p>
      </div>
    ),
  },
  {
    title: "15. Changes to Terms",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
          If a revision is material, we will provide at least 30 days' notice prior to any new 
          terms taking effect.
        </p>
        <p className="text-gray-600">
          Your continued use of the Service after such changes constitutes acceptance of the new Terms.
        </p>
      </div>
    ),
  },
  {
    title: "16. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-gray-600">
          If you have any questions about these Terms, please contact us:
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

export default function TermsClient() {
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
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Last Updated: February 2026
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using WhatsPilot. By accessing or using our 
              services, you agree to be bound by these terms and conditions.
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
              Questions About Our Terms?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help clarify any questions you may have.
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
