'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  scrollY: number;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Refund Policy', href: '/refund' },
];

export default function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isScrolled = scrollY > 50;

  useEffect(() => {
    if (scrollY > lastScrollY && scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="gradient-bg-animated text-white text-center py-2.5 px-4 text-sm font-medium">
          <span>Now Hiring: Are You A Driven And Motivated Developer? </span>
          <Link href="/contact" className="underline hover:no-underline ml-1">
            Join our Team
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isVisible ? 'translate-y-11' : 'translate-y-0'
        } ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding">
          <div className="container-wide">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center gap-2 group"
              >
                <Logo />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 hover:text-whatsapp-green ${
                      pathname === link.href
                        ? 'text-whatsapp-green'
                        : isScrolled
                        ? 'text-gray-700'
                        : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-whatsapp-green rounded-full" />
                    )}
                  </Link>
                ))}
                
                {/* Legal Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 hover:text-whatsapp-green ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}>
                    Legal
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {legalLinks.map((link) => (
                      <DropdownMenuItem key={link.name} asChild>
                        <Link href={link.href} className="cursor-pointer">
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  href="/login"
                  className={`text-sm font-medium transition-colors duration-300 hover:text-whatsapp-green ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  Login
                </Link>
                <a 
                  href="https://cal.com/whatspilot/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary gap-2">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" className="transform -rotate-12">
                      <path d="M3 16L28 4L19 28L15 18L3 16Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    Book Demo
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="section-padding py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-whatsapp-green'
                    : 'text-gray-700 hover:text-whatsapp-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/login"
                className="block py-2 text-base font-medium text-gray-700 hover:text-whatsapp-green"
              >
                Login
              </Link>
              <a 
                href="https://cal.com/whatspilot/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full btn-primary">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" className="transform -rotate-12 mr-2">
                    <path d="M3 16L28 4L19 28L15 18L3 16Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  Book Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
