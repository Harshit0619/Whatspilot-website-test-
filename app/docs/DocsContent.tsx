"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import {
  BookOpen,
  MessageSquare,
  Users,
  Send,
  Calendar,
  BarChart3,
  Settings,
  FileDown,
  HeadphonesIcon,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const docsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          icon: BookOpen,
        },
        {
          title: "Setup Account",
          href: "/docs/setup-account",
          icon: Settings,
        },
        {
          title: "Connect WhatsApp",
          href: "/docs/connect-whatsapp",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Core Features",
      items: [
        {
          title: "Multi-Number Inbox",
          href: "/docs/multi-number-inbox",
          icon: MessageSquare,
        },
        {
          title: "Multi-Agent Access",
          href: "/docs/multi-agent-access",
          icon: Users,
        },
        {
          title: "Labels & Properties",
          href: "/docs/labels",
          icon: FileDown,
        },
        {
          title: "Quick Replies",
          href: "/docs/quick-replies",
          icon: MessageSquare,
        },
        {
          title: "Analytics",
          href: "/docs/analytics",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "Messaging",
      items: [
        {
          title: "Bulk Messaging",
          href: "/docs/bulk-messaging",
          icon: Send,
        },
        {
          title: "Scheduled Messages",
          href: "/docs/scheduled-messages",
          icon: Calendar,
        },
        {
          title: "Automation Rules",
          href: "/docs/automation-rules",
          icon: Settings,
        },
      ],
    },
    {
      title: "AI Features",
      items: [
        {
          title: "AI Summaries",
          href: "/docs/ai-summaries",
          icon: Sparkles,
        },
        {
          title: "AI Flagged Messages",
          href: "/docs/ai-flagged-messages",
          icon: Sparkles,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Help Center",
          href: "/contact",
          icon: HeadphonesIcon,
        },
      ],
    },
  ],
};

export function DocsSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp-green rounded-full shadow-lg flex items-center justify-center text-white"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-16 inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 lg:translate-x-0",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:block"
      )}>
        <div className="sticky top-0 p-6 bg-white">
          {/* Mobile Close Button */}
<button
            onClick={() => setMobileMenuOpen(false)}
            className='lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900'
          >
            <X className='w-5 h-5' />
          </button>

          <Link href='/' className='flex items-center gap-2 group mb-6'>
            <Logo showDotIo={false} />
          </Link>

          <nav className='space-y-6'>
            {docsConfig.sidebarNav.map((section) => (
              <div key={section.title}>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">
                  {section.title}
                </h4>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-whatsapp-green/10 text-whatsapp-green shadow-sm"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          )}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 mt-4 border-t border-gray-100">
          <Link
            href="/contact"
            className="flex items-center gap-3 px-3 py-3 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <HeadphonesIcon className="w-4 h-4" />
            <span>Need help?</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 pt-16">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>
    </div>
  );
}