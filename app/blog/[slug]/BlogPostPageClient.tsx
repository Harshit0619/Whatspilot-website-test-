"use client";


import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'whatsapp-shared-inbox-task-management',
    title: 'How WhatsApp Shared Inbox + Task Management Improves Indian Support Operations',
    excerpt: 'Learn how WhatsApp Shared Inbox and task management transform Indian support operations. Discover how WhatsApp Automation helps teams collaborate efficiently.',
    image: '/blog-1.jpg',
    category: 'WhatsApp Automation',
    tags: ['support', 'whatsapp', 'automation', 'shared-inbox'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '5 min read',
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced business environment, customer support teams in India face unique challenges. High volumes of queries, multiple communication channels, and the need for quick response times make efficient support operations critical. This is where WhatsApp Shared Inbox combined with task management comes into play.</p>
      
      <h2>What is a WhatsApp Shared Inbox?</h2>
      <p>A WhatsApp Shared Inbox allows multiple team members to access and manage WhatsApp conversations from a single dashboard. Instead of having WhatsApp tied to individual phones, businesses can centralize all customer communications, making it easier to collaborate and ensure no message goes unanswered.</p>
      
      <h2>Benefits for Indian Support Teams</h2>
      <p><strong>1. Improved Response Times</strong></p>
      <p>With a shared inbox, any available team member can respond to customer queries immediately. This eliminates bottlenecks caused by individual agents being busy or offline.</p>
      
      <p><strong>2. Better Collaboration</strong></p>
      <p>Team members can see conversation history, add internal notes, and assign tasks to each other. This ensures everyone is on the same page and customers receive consistent responses.</p>
      
      <p><strong>3. Enhanced Accountability</strong></p>
      <p>Task management features allow managers to assign specific queries to agents, set priorities, and track resolution times. This creates accountability and helps identify areas for improvement.</p>
      
      <h2>Implementing WhatsApp Automation</h2>
      <p>WhatsApp Automation takes your shared inbox to the next level. You can set up auto-replies for common queries, schedule follow-up messages, and create workflows that automatically assign conversations based on keywords or customer type.</p>
      
      <h2>Conclusion</h2>
      <p>For Indian businesses looking to scale their customer support operations, investing in a WhatsApp Shared Inbox with task management capabilities is a game-changer. It not only improves efficiency but also enhances customer satisfaction through faster, more coordinated responses.</p>
    `,
  },
  {
    id: 2,
    slug: 'whatsapp-crm-vs-email-engagement',
    title: 'Why WhatsApp CRM Is Better Than Email for Indian Customer Engagement',
    excerpt: 'Discover why WhatsApp CRM outperforms email for Indian customer engagement. Learn how WhatsApp Automation drives better results.',
    image: '/blog-2.jpg',
    category: 'App Integrations',
    tags: ['whatsapp', 'crm', 'email', 'engagement'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '4 min read',
    content: `
      <h2>The Shift in Customer Communication</h2>
      <p>Email has long been the standard for business communication, but times are changing. In India, WhatsApp has become the preferred channel for personal and increasingly, business communication. With over 500 million users in India alone, WhatsApp presents an unprecedented opportunity for businesses to connect with customers.</p>
      
      <h2>Higher Open Rates</h2>
      <p>WhatsApp messages boast an impressive 98% open rate compared to email's average of 20%. This means your messages are almost guaranteed to be seen, making every communication count.</p>
      
      <h2>Faster Response Times</h2>
      <p>The average response time for WhatsApp is under 5 minutes, while email responses can take hours or even days. This immediacy creates better customer experiences and faster issue resolution.</p>
      
      <h2>Personal Touch</h2>
      <p>WhatsApp feels more personal and conversational than email. Customers are more likely to engage with messages that feel like they're from a friend rather than a corporate entity.</p>
      
      <h2>Rich Media Support</h2>
      <p>WhatsApp supports images, videos, documents, and voice messages, allowing for richer, more engaging communication compared to text-only emails.</p>
    `,
  },
  {
    id: 3,
    slug: 'automatic-assignment-whatsapp-conversations',
    title: 'Automatic Assignment of WhatsApp Conversations to Multiple Agents',
    excerpt: 'Learn how automatic assignment improves response time and team efficiency with WhatsApp Automation.',
    image: '/blog-3.jpg',
    category: 'Support',
    tags: ['marketing', 'whatsapp', 'automation'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '6 min read',
    content: `
      <h2>The Challenge of Manual Assignment</h2>
      <p>As your business grows, manually assigning WhatsApp conversations to team members becomes increasingly difficult. Messages can be overlooked, response times suffer, and customer satisfaction drops.</p>
      
      <h2>How Automatic Assignment Works</h2>
      <p>Automatic assignment uses intelligent rules to distribute incoming conversations among your team. You can set up assignment based on:</p>
      <ul>
        <li>Agent availability and workload</li>
        <li>Customer type or priority</li>
        <li>Keywords in the message</li>
        <li>Time of day</li>
        <li>Language preferences</li>
      </ul>
      
      <h2>Benefits for Your Team</h2>
      <p><strong>1. Balanced Workload</strong></p>
      <p>Ensure no agent is overwhelmed while others are idle. Automatic distribution keeps workloads fair and manageable.</p>
      
      <p><strong>2. Faster First Response</strong></p>
      <p>Conversations are assigned instantly, eliminating delays caused by manual routing.</p>
      
      <p><strong>3. Specialized Support</strong></p>
      <p>Route technical queries to technical staff and sales inquiries to your sales team automatically.</p>
    `,
  },
];

interface BlogPostPageProps {
  slug: string;
}

export default function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="section-padding">
          <div className="container-wide text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="btn-primary">Back to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 lg:h-96 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 section-padding">
          <div className="container-wide">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Category */}
            <span className="inline-block px-3 py-1 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-li:text-gray-600 prose-ul:marker:text-whatsapp-green"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share:
              </span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Related Posts CTA */}
            <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Want to learn more?</h3>
              <p className="text-gray-600 mb-4">
                Explore more articles about WhatsApp automation and customer engagement.
              </p>
              <Link href="/blog">
                <Button className="btn-primary">Browse All Articles</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
