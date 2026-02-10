"use client";


import { useRef, useEffect, useState } from 'react';
import { Target, Heart, Zap, Users, Award, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '4+', label: 'Years of Experience' },
  { value: '800+', label: 'Active Customers' },
  { value: '30M+', label: 'Messages Sent' },
  { value: '99%', label: 'Uptime' },
];

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'We prioritize our customers success above everything else. Your growth is our mission.',
  },
  {
    icon: Heart,
    title: 'Passionate Innovation',
    description: 'We are constantly pushing boundaries to create better solutions for WhatsApp automation.',
  },
  {
    icon: Zap,
    title: 'Efficiency Matters',
    description: 'Every feature we build aims to save you time and help you scale faster.',
  },
  {
    icon: Users,
    title: 'Inclusive Design',
    description: 'Our platform is designed for everyone, from small businesses to enterprise teams.',
  },
];

const team = [
  {
    name: 'Mahesh Kumar',
    role: 'Founder & CEO',
    image: '/testimonial-3.jpg',
    linkedin: 'https://www.linkedin.com/in/maheshwhatspilot/',
  },
  {
    name: 'Nazim Khurshid',
    role: 'Head of Product',
    image: '/testimonial-4.jpg',
    linkedin: 'https://www.linkedin.com/in/nazim-khurshid/',
  },
  {
    name: 'Afzal Ahmed',
    role: 'Lead Developer',
    image: '/testimonial-3.jpg',
    linkedin: 'https://www.linkedin.com/in/md-afzal-0381061a1/',
  },
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transforming Business Communication{' '}
                <span className="gradient-text">Since 2021</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2021, WhatsPilot.io was born out of a passion for revolutionizing how businesses communicate. 
                In a world where instant, direct communication is key, we recognized the untapped potential of 
                WhatsApp as a powerful marketing tool.
              </p>
              <p className="text-gray-600 mb-8">
                Our vision was clear: to create a platform that empowers businesses of all sizes to harness 
                the power of WhatsApp for their marketing needs. Today, we serve 800+ businesses across India 
                and beyond, helping them automate their communication and scale their operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/register">
                  <Button className="btn-primary gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="/contact">
                  <Button className="btn-secondary">Contact Us</Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/hero-dashboard.jpg" 
                  alt="WhatsPilot.io Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4+</p>
                    <p className="text-xs text-gray-500">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-card"
              >
                <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="section-padding mb-20">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600">
              Our core values shape everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-whatsapp-green/30 hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-whatsapp-green/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-whatsapp-green" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding mb-20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">WhatsPilot.io?</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Fast support with average response time under 5 minutes',
                  'Stable API response with 99% uptime guarantee',
                  'Reasonable pricing with flexible plans',
                  'User-friendly UX designed for non-technical users',
                  'Regular feature updates based on customer feedback',
                  'India-focused with local payment options',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-whatsapp-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-whatsapp-green/5 border border-whatsapp-green/10">
                    <Globe className="w-8 h-8 text-whatsapp-green mb-3" />
                    <p className="font-bold text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Cities Covered</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <Users className="w-8 h-8 text-whatsapp-green mb-3" />
                    <p className="font-bold text-gray-900">50+</p>
                    <p className="text-sm text-gray-600">Team Members</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <Zap className="w-8 h-8 text-whatsapp-green mb-3" />
                    <p className="font-bold text-gray-900">30M+</p>
                    <p className="text-sm text-gray-600">Messages Sent</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-whatsapp-green/5 border border-whatsapp-green/10">
                    <Award className="w-8 h-8 text-whatsapp-green mb-3" />
                    <p className="font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding mb-20 bg-gray-50/50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet the People Behind WhatsPilot.io
            </h2>
            <p className="text-gray-600">
              A passionate team dedicated to revolutionizing business communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp-green text-sm hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-3xl gradient-bg p-8 lg:p-12 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                We're always looking for talented individuals who are passionate about 
                building great products.
              </p>
              <a href="/contact">
                <Button className="bg-white text-whatsapp-green hover:bg-gray-100 gap-2">
                  View Open Positions
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
