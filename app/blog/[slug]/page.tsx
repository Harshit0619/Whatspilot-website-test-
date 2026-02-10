import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";

const blogPosts = [
  {
    id: 1,
    slug: "whatsapp-shared-inbox-task-management",
    title: "How WhatsApp Shared Inbox + Task Management Improves Indian Support Operations",
    excerpt: "Learn how WhatsApp Shared Inbox and task management transform Indian support operations. Discover how WhatsApp Automation helps teams collaborate efficiently.",
    image: "/blog-1.jpg",
    category: "WhatsApp Automation",
    tags: ["support", "whatsapp", "automation", "shared-inbox"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "whatsapp-crm-vs-email-engagement",
    title: "Why WhatsApp CRM Is Better Than Email for Indian Customer Engagement",
    excerpt: "Discover why WhatsApp CRM outperforms email for Indian customer engagement. Learn how WhatsApp Automation drives better results.",
    image: "/blog-2.jpg",
    category: "App Integrations",
    tags: ["whatsapp", "crm", "email", "engagement"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    slug: "automatic-assignment-whatsapp-conversations",
    title: "Automatic Assignment of WhatsApp Conversations to Multiple Agents",
    excerpt: "Learn how automatic assignment improves response time and team efficiency with WhatsApp Automation.",
    image: "/blog-3.jpg",
    category: "Support",
    tags: ["marketing", "whatsapp", "automation"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    slug: "ecommerce-customer-communication-trends",
    title: "10 E-commerce Customer Communication Trends in India for 2026",
    excerpt: "Stay ahead with these 10 e-commerce customer communication trends in India for 2026 powered by WhatsApp Automation.",
    image: "/blog-4.jpg",
    category: "App Integrations",
    tags: ["ecommerce", "whatsapp", "trends"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "8 min read",
  },
  {
    id: 5,
    slug: "whatsapp-business-api-guide",
    title: "WhatsApp Business API: Complete Guide for Indian Businesses",
    excerpt: "Everything you need to know about WhatsApp Business API for your Indian business. A comprehensive guide.",
    image: "/blog-5.jpg",
    category: "WhatsApp Automation",
    tags: ["api", "whatsapp", "business"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "10 min read",
  },
  {
    id: 6,
    slug: "chatbot-automation-benefits",
    title: "5 Ways Chatbot Automation Can Transform Your Customer Support",
    excerpt: "Discover how chatbot automation can revolutionize your customer support operations and improve efficiency.",
    image: "/blog-6.jpg",
    category: "Support",
    tags: ["chatbot", "automation", "support"],
    author: "WhatsPilot Team",
    date: "Feb 9, 2026",
    readTime: "5 min read",
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | WhatsPilot.io Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient slug={params.slug} />;
}
