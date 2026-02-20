"use client";

import { useRef, useEffect, useState } from 'react';
import { MapPin, Clock, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobPostings: JobPosting[] = [
  {
    id: 'senior-frontend-dev',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team and help build the next generation of our WhatsApp automation platform. You will be responsible for leading the development of our user-facing features and ensuring an exceptional user experience.',
    requirements: [
      '5+ years of professional frontend development experience',
      'Expert-level knowledge of React, TypeScript, and modern CSS frameworks (Tailwind CSS)',
      'Strong understanding of Next.js and its ecosystem',
      'Experience with state management (Redux, Zustand, or similar)',
      'Proficiency in performance optimization and accessibility',
      'Excellent problem-solving and communication skills',
      'Experience mentoring junior developers',
      'Portfolio of past projects (GitHub or live sites)',
    ],
    responsibilities: [
      'Lead frontend development initiatives and architecture decisions',
      'Collaborate with designers and backend engineers to deliver features',
      'Write clean, maintainable, and well-documented code',
      'Review code and mentor junior team members',
      'Optimize applications for maximum speed and scalability',
      'Stay up-to-date with emerging frontend technologies and best practices',
    ],
  },
  {
    id: 'senior-backend-dev',
    title: 'Senior Backend Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'We are seeking a talented Senior Backend Developer to join our engineering team. You will be building robust, scalable backend systems for our WhatsApp automation platform, handling millions of messages and ensuring high reliability.',
    requirements: [
      '5+ years of professional backend development experience',
      'Expert-level Node.js and TypeScript/JavaScript',
      'Strong experience with RESTful APIs and GraphQL',
      'Proficiency with databases (PostgreSQL, MongoDB, Redis)',
      'Experience with message queues (RabbitMQ, Kafka, etc.)',
      'Knowledge of containerization (Docker) and cloud platforms (AWS)',
      'Understanding of microservices architecture',
      'Excellent problem-solving and debugging skills',
    ],
    responsibilities: [
      'Design and implement scalable backend services and APIs',
      'Build and maintain database schemas and data pipelines',
      'Ensure system reliability, scalability, and performance',
      'Collaborate with frontend engineers to integrate APIs',
      'Write unit and integration tests',
      'Participate in code reviews and technical documentation',
      'Monitor and resolve production issues',
      'Mentor junior backend developers',
    ],
  },
  {
    id: 'business-development',
    title: 'Business Development Manager',
    department: 'Business',
    location: 'Remote / India',
    type: 'Full-time',
    description: 'We are looking for a driven Business Development Manager to help expand our customer base and drive revenue growth. You will be responsible for identifying new business opportunities, building partnerships, and managing the sales pipeline.',
    requirements: [
      '3+ years of business development or sales experience in SaaS/Tech',
      'Proven track record of meeting or exceeding sales targets',
      'Excellent communication and negotiation skills',
      'Strong understanding of B2B sales processes',
      'Experience with CRM tools (HubSpot, Salesforce, etc.)',
      'Ability to work independently and in a team environment',
      'Strong research and analytical skills',
      'Customer-focused mindset',
    ],
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Generate leads through research, networking, and outreach',
      'Manage the sales pipeline from prospecting to closing',
      'Build and maintain relationships with potential clients',
      'Prepare and deliver sales presentations and proposals',
      'Negotiate contracts and close deals',
      'Collaborate with marketing and product teams',
      'Analyze sales data and market trends to inform strategy',
    ],
  },
];

export default function CareersPage() {
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
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Careers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="gradient-text">Growing Team</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We're building the future of WhatsApp marketing, and we need talented, passionate people to help us get there. 
              Explore open positions below and find your next adventure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Remote-first culture
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Competitive compensation
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                5-day free trial... just kidding, unlimited growth!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={sectionRef} className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600">
              Find the role that's right for you and apply today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {jobPostings.map((job, index) => (
              <div
                key={job.id}
                className={`bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 lg:p-8">
                  {/* Department Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-whatsapp-green/10 text-whatsapp-green">
                      {job.department}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h3>

                  {/* Job Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Requirements Preview */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Requirements:</p>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-whatsapp-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="line-clamp-1">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <a href="mailto:careers@whatspilot.online?subject=Application for {job.title}">
                    <Button className="w-full btn-primary gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-whatsapp-green/5 border border-whatsapp-green/10">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Remote-First</h3>
                <p className="text-sm text-gray-600">
                  Work from anywhere. We trust you to deliver great work, no matter where you are.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-whatsapp-green/5 border border-whatsapp-green/10">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Competitive Pay</h3>
                <p className="text-sm text-gray-600">
                  We offer market-leading salaries, equity, and benefits to attract the best talent.
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-whatsapp-green/5 border border-whatsapp-green/10">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Mindset</h3>
                <p className="text-sm text-gray-600">
                  Fast-paced environment with unlimited opportunities to learn and advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl gradient-bg p-8 lg:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Don't See a Fit?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <a href="mailto:careers@whatspilot.online">
                <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
