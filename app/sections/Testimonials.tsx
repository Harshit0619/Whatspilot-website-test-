"use client";


import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Khushi Rajput',
    role: 'Owner',
    company: 'Beauty Brand',
    image: '/testimonial-1.jpg',
    content: 'In the fast-paced world of small business, efficiency and effectiveness in communication can be the key to success. WhatsPilot is an invaluable tool that caters specifically to the needs of small businesses. It is the best feature of whatsapp for sending bulk texts at a time. I would highly recommend it for all.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tanya Shah',
    role: 'Owner',
    company: 'Jewellery Brand',
    image: '/testimonial-2.jpg',
    content: 'WhatsPilot is so much helpful and we use it daily for our products marketing and sending details. Thanks to the entire team who made this amazing app. It has completely transformed how we communicate with our customers.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ravi Mehta',
    role: 'Digital Marketer',
    company: 'Freelance',
    image: '/testimonial-3.jpg',
    content: 'One of the best and easiest UI in the industry. Very fast and unlimited messages. The automation features have saved me countless hours. Highly recommended for any digital marketer looking to scale their outreach.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Kushal Gupta',
    role: 'CEO',
    company: 'Techmantra',
    image: '/testimonial-4.jpg',
    content: 'In the fast-paced world of small business, efficiency and effectiveness in communication can be the key to success. WhatsPilot is an invaluable tool that caters specifically to the needs of small businesses. The ROI we have seen since implementing WhatsPilot.io has been incredible.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-whatsapp-green/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-whatsapp-green/5 blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by{' '}
              <span className="gradient-text">800+ Businesses</span>
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers have to say about their experience with WhatsPilot.io.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Main Testimonial Card */}
            <div className="relative bg-gray-50 rounded-3xl p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Image */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -inset-3 rounded-2xl border-2 border-whatsapp-green/20 -z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-gray-200 hover:border-whatsapp-green hover:text-whatsapp-green transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-whatsapp-green'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-gray-200 hover:border-whatsapp-green hover:text-whatsapp-green transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {[
              { value: '800+', label: 'Active Customers' },
              { value: '99%', label: 'Satisfaction Rate' },
              { value: '30M+', label: 'Messages Sent' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <p className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
