"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState, useRef } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  content: string;
}

interface BlogPostPageClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(content: string): TOCItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level });
  }

  return headings;
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
      <div
        className="h-full bg-whatsapp-green transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function TableOfContents({ headings }: { headings: TOCItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-32 self-start max-h-[calc(100vh-10rem)] overflow-y-auto">
      <div className="pr-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          On this page
        </h4>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-sm py-1 border-l-2 pl-3 transition-all duration-200 ${
                  activeId === heading.id
                    ? "border-whatsapp-green text-whatsapp-green font-medium"
                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Share:
      </span>
      <div className="flex gap-2">
        {shareLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
            aria-label={`Share on ${social.name}`}
          >
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

function AuthorBio({ author }: { author: string }) {
  return (
    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-whatsapp-green/10 flex items-center justify-center flex-shrink-0">
          <User className="w-8 h-8 text-whatsapp-green" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{author}</h4>
          <p className="text-sm text-gray-600 mb-3">
            Writing about WhatsApp automation, business communication, and
            customer engagement strategies.
          </p>
          <Link
            href="/blog"
            className="text-sm font-medium text-whatsapp-green hover:text-whatsapp-dark transition-colors"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogPostPageClient({
  post,
  relatedPosts,
}: BlogPostPageClientProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeadings(extractHeadings(post.content));
  }, [post.content]);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll("h1, h2, h3");
      elements.forEach((el) => {
        const text = el.textContent?.trim() || "";
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        el.id = id;
      });
    }
  }, [headings]);

  return (
    <>
      <ReadingProgress />

      <article className="pt-28 pb-20 bg-white min-h-screen">
        {/* Hero Image */}
        <div className="relative h-64 lg:h-80 mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 section-padding">
            <div className="container-wide">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-wide">
            <div className="lg:flex lg:gap-12">
              {/* Main Content */}
              <div className="flex-1 max-w-3xl">
                {/* Category */}
                <span className="inline-block px-3 py-1 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100">
                  <span className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-whatsapp-green/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-whatsapp-green" />
                    </div>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div
                  ref={contentRef}
                  className="prose prose-xl max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24 prose-headings:font-semibold
                    prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8 prose-h1:leading-tight
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-snug
                    prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:leading-snug
                    prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-7 prose-p:text-lg
                    prose-a:text-whatsapp-green prose-a:no-underline hover:prose-a:text-whatsapp-dark prose-a:font-medium
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-ul:marker:text-whatsapp-green prose-ul:my-6
                    prose-ol:marker:text-whatsapp-green prose-ol:my-6
                    prose-li:text-gray-600 prose-li:mb-3 prose-li:leading-7
                    prose-blockquote:border-l-4 prose-blockquote:border-whatsapp-green prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-blockquote:my-8 prose-blockquote:leading-7
                    prose-code:bg-gray-100 prose-code:text-whatsapp-dark prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-gray-900 prose-pre:rounded-xl prose-pre:my-8 prose-pre:leading-relaxed
                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                    prose-hr:border-gray-200 prose-hr:my-12
                    prose-table:border prose-table:border-gray-200 prose-table:rounded-xl prose-table:overflow-hidden
                    prose-th:bg-gray-50 prose-th:text-gray-900 prose-th:font-semibold prose-th:px-5 prose-th:py-4
                    prose-td:px-5 prose-td:py-4 prose-td:text-gray-600 prose-td:border-t prose-td:border-gray-100 prose-td:leading-7
                    prose-tr:hover:bg-gray-50 prose-tr:transition-colors"
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 py-6 border-t border-b border-gray-100">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>

                {/* Author Bio */}
                <AuthorBio author={post.author} />

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Related Articles
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {relatedPosts.slice(0, 3).map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                        >
                          <div className="h-32 overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4">
                            <span className="text-xs font-medium text-whatsapp-green">
                              {relatedPost.category}
                            </span>
                            <h4 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2 group-hover:text-whatsapp-green transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              {relatedPost.date}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog CTA */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-whatsapp-green/5 to-white border border-whatsapp-green/20">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Enjoyed this article?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Explore more insights about WhatsApp automation and customer
                    engagement.
                  </p>
                  <Link href="/blog">
                    <Button className="btn-primary">
                      Browse All Articles
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents headings={headings} />
              </aside>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
