"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ],
  company: [
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/whatspilot" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/whatspilot/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/whatspilot",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/whatspilot/",
  },
];

function FooterSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 lg:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 lg:p-0"
      >
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <ChevronDown
          className={`w-5 h-5 lg:hidden text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <ul
        className={`space-y-3 overflow-hidden transition-all duration-300 lg:overflow-visible ${
          isOpen ? "max-h-40 pb-3" : "max-h-0 lg:max-h-none lg:pb-0"
        }`}
      >
        {children}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer */}
      <div className="section-padding py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block">
                <Logo />
              </Link>

              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Transform your WhatsApp into a powerful business automation
                platform. Connect, engage, and scale with ease.
              </p>

              <p className="text-sm font-semibold text-whatsapp-green">
                A Product of Aiclex Technologies
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Subscribe to our newsletter
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white border-gray-200 h-10 sm:h-11"
                  />
                  <Button className="btn-primary px-4 sm:w-auto w-full h-10 sm:h-11">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-10 min-h-10 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-whatsapp-green hover:border-whatsapp-green hover:shadow-md transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              {/* Mobile: Collapsible Accordion Style */}
              <div className="lg:hidden space-y-1">
                <FooterSection title="Product" defaultOpen={true}>
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </FooterSection>
                <FooterSection title="Company" defaultOpen={true}>
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </FooterSection>
                <FooterSection title="Resources" defaultOpen={true}>
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </FooterSection>
                <FooterSection title="Legal" defaultOpen={true}>
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </FooterSection>
              </div>

              {/* Desktop: Grid Layout */}
              <div className="hidden lg:grid grid-cols-4 gap-8 lg:gap-12">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-whatsapp-green transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-white border-t border-gray-100">
        <div className="section-padding py-4">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <a
                  href="tel:+918130367983"
                  className="flex items-center gap-2 hover:text-whatsapp-green transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 81303 67983</span>
                </a>
                <a
                  href="mailto:support@whatspilot.online"
                  className="flex items-center gap-2 hover:text-whatsapp-green transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate max-w-[180px]">support@whatspilot.online</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>India</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 whitespace-nowrap">
                Help Desk:{" "}
                <span className="text-whatsapp-green font-medium">
                  +91 81303 67983
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="section-padding py-4">
          <div className="container-wide">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-sm text-center sm:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} WhatsPilot. All rights reserved.
              </p>
              <p className="text-gray-500">A Product of Aiclex Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
