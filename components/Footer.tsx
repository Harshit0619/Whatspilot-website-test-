'use client';

import Link from 'next/link';
import { Twitter, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from './Logo';

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Integrations', href: '/features' },
    { name: 'API', href: '/features' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/features' },
    { name: 'Help Center', href: '/faq' },
    { name: 'Community', href: '/blog' },
    { name: 'Templates', href: '/features' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/whatspilot' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/whatspilot/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/whatspilot' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/whatspilot/' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      {/* Main Footer */}
      <div className="section-padding py-16 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/">
                <Logo />
              </Link>
              
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Transform your WhatsApp into a powerful business automation platform. 
                Connect, engage, and scale with ease.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-white border-gray-200"
                  />
                  <Button className="btn-primary px-4">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-whatsapp-green hover:border-whatsapp-green hover:shadow-md transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Product */}
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

                {/* Company */}
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

                {/* Resources */}
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

                {/* Legal */}
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <a href="tel:+919289450550" className="flex items-center gap-2 hover:text-whatsapp-green transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 92894 50550
                </a>
                <a href="mailto:support@whatspilot.io" className="flex items-center gap-2 hover:text-whatsapp-green transition-colors">
                  <Mail className="w-4 h-4" />
                  support@whatspilot.io
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  India
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Help Desk: <span className="text-whatsapp-green font-medium">+91 92894 50550</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="section-padding py-4">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <p className="text-gray-400">
                © {new Date().getFullYear()} WhatsPilot.io. All rights reserved.
              </p>
              <p className="text-gray-500">
                Made with ❤️ in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
