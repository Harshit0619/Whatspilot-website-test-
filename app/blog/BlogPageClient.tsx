"use client";


import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'whatsapp-shared-inbox-task-management',
    title: 'How WhatsApp Shared Inbox + Task Management Improves Indian Support Operations',
    excerpt: 'Learn how WhatsApp Shared Inbox and task management transform Indian support operations. Discover how WhatsApp Automation helps teams collaborate efficiently and handle customer queries faster.',
    image: '/blog-1.jpg',
    category: 'WhatsApp Automation',
    tags: ['support', 'whatsapp'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'whatsapp-crm-vs-email-engagement',
    title: 'Why WhatsApp CRM Is Better Than Email for Indian Customer Engagement',
    excerpt: 'Discover why WhatsApp CRM outperforms email for Indian customer engagement. Learn how WhatsApp Automation and the best WhatsApp CRM tools drive better results for businesses.',
    image: '/blog-2.jpg',
    category: 'App Integrations',
    tags: ['whatsapp', 'crm'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '4 min read',
  },
  {
    id: 3,
    slug: 'automatic-assignment-whatsapp-conversations',
    title: 'Automatic Assignment of WhatsApp Conversations to Multiple Agents',
    excerpt: 'Learn how automatic assignment of WhatsApp conversations to multiple agents improves response time, team efficiency, and customer satisfaction with WhatsApp Automation.',
    image: '/blog-3.jpg',
    category: 'Support',
    tags: ['marketing', 'whatsapp'],
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '6 min read',
  },
  {
    id: 4,
    slug: 'slack-whatsapp-integration-workflows',
    title: 'Slack + WhatsApp Integration Workflows That Indian Teams Must Try',
    excerpt: 'Discover must-try Slack + WhatsApp integration workflows for Indian teams. Learn how WhatsApp Automation can streamline communication and boost productivity.',
    image: '/blog-4.jpg',
    category: 'App Integrations',
    tags: ['whatsapp', 'automation'],
    author: 'WhatsPilot Team',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 5,
    slug: 'whatsapp-crm-integration-guide',
    title: 'The Ultimate Guide to Integrating WhatsApp With Your CRM for Indian Businesses',
    excerpt: 'Learn how Indian businesses can integrate WhatsApp with their CRM using WhatsApp Automation and the best WhatsApp CRM tools for better customer management.',
    image: '/blog-5.jpg',
    category: 'Support',
    tags: ['support', 'chatbot'],
    author: 'WhatsPilot Team',
    date: 'Feb 8, 2026',
    readTime: '7 min read',
  },
  {
    id: 6,
    slug: 'whatsapp-bots-for-faqs',
    title: 'How Indian Service Businesses Use WhatsApp Bots to Handle FAQs Automatically',
    excerpt: 'Learn how Indian service businesses use WhatsApp Automation and WhatsApp Bots to handle FAQs automatically, improve response time, and enhance customer satisfaction.',
    image: '/blog-6.jpg',
    category: 'Support',
    tags: ['support', 'chatbot'],
    author: 'WhatsPilot Team',
    date: 'Feb 8, 2026',
    readTime: '5 min read',
  },
];

const categories = ['All', 'WhatsApp Automation', 'App Integrations', 'Support', 'Marketing'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WhatsApp Marketing{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-gray-600">
              Tips, trends, and best practices for WhatsApp automation and customer engagement.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'btn-primary' : 'btn-secondary'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-whatsapp-green text-white text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-whatsapp-green transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tag className="w-3 h-3 text-gray-400" />
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-xs text-gray-500">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-whatsapp-green">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
