"use client";


import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'whatsapp-shared-inbox-task-management',
    title: 'How WhatsApp Shared Inbox + Task Management Improves Indian Support Operations',
    excerpt: 'Learn how WhatsApp Shared Inbox and task management transform Indian support operations. Discover best practices for efficient team collaboration.',
    image: '/blog-1.jpg',
    category: 'WhatsApp Automation',
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    slug: 'whatsapp-crm-vs-email-engagement',
    title: 'Why WhatsApp CRM Is Better Than Email for Indian Customer Engagement',
    excerpt: 'Discover why WhatsApp CRM outperforms email for Indian customer engagement. Learn how WhatsApp Automation drives better results.',
    image: '/blog-2.jpg',
    category: 'App Integrations',
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    slug: 'automatic-assignment-whatsapp-conversations',
    title: 'Automatic Assignment of WhatsApp Conversations to Multiple Agents',
    excerpt: 'Learn how automatic assignment of WhatsApp conversations improves response time, team efficiency, and customer satisfaction.',
    image: '/blog-3.jpg',
    category: 'Support',
    author: 'WhatsPilot Team',
    date: 'Feb 9, 2026',
    readTime: '6 min read',
    featured: false,
  },
];

export default function Blog() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative">
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
                Blog
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Latest from our{' '}
                <span className="gradient-text">Blog</span>
              </h2>
            </div>
            <Link 
              href="/blog"
              title="View all articles about WhatsApp promotional messages and marketing"
              aria-label="View All Articles"
              className="inline-flex items-center gap-2 text-whatsapp-green font-medium hover:underline"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Post */}
            <div 
              className={`lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
               <Link href={`/blog/${blogPosts[0].slug}`} title={blogPosts[0].title} aria-label={blogPosts[0].title}>
                <div className="relative h-full min-h-[400px] lg:min-h-full">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-whatsapp-green text-white text-xs font-medium mb-4">
                      {blogPosts[0].category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-whatsapp-green transition-colors">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Other Posts */}
            {blogPosts.slice(1).map((post, index) => (
              <div 
                key={post.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                 <Link href={`/blog/${post.slug}`} title={post.title} aria-label={post.title}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-whatsapp-green transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
