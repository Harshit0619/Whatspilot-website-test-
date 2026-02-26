"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dashboardRef.current) return;

      const rect = dashboardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = (e.clientY - centerY) / 50;
      const rotateY = (centerX - e.clientX) / 50;

      dashboardRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${Math.max(-5, Math.min(5, rotateX))}deg) 
        rotateY(${Math.max(-5, Math.min(5, rotateY))}deg)
        translateZ(20px)
      `;
    };

    const handleMouseLeave = () => {
      if (!dashboardRef.current) return;
      dashboardRef.current.style.transform = `
        perspective(1000px) 
        rotateX(2deg) 
        rotateY(-2deg)
        translateZ(0px)
      `;
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      hero.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener("mousemove", handleMouseMove);
        hero.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-whatsapp-green/10 animate-float" />
        <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-whatsapp-green/15 animate-float-slow animation-delay-300" />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-whatsapp-green/10 animate-float animation-delay-500" />
        <div className="absolute top-20 right-1/3 w-8 h-8 rounded-full bg-whatsapp-green/20 animate-float-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp-green/10 border border-whatsapp-green/20 animate-slide-up">
                <Sparkles className="w-4 h-4 text-whatsapp-green" />
                <span className="text-sm font-medium text-whatsapp-dark">
                  WhatsApp Automation Made Simple
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-up animation-delay-100">
                  WhatsApp Automation
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up animation-delay-200">
                  <span className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-medium">
                    with
                  </span>{" "}
                  <span className="gradient-text">WhatsPilot</span>
                </h1>
              </div>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 animate-slide-up animation-delay-300">
                Connect any WhatsApp Number. No Code Required. Automate your
                business communication with our comprehensive whatsapp marketing
                platform and scale effortlessly.
              </p>

              {/* Trust Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up animation-delay-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/testimonial-${i}.jpg`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by <strong className="text-gray-900">800+</strong>{" "}
                  brands
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up animation-delay-500">
                <a
                  href="https://app.whatspilot.online"
                  title="Start your free trial of the WhatsApp marketing platform"
                  aria-label="Start Free Trial"
                >
                  <Button
                    size="lg"
                    className="btn-primary gap-2 w-full sm:w-auto"
                    aria-label="Start Free Trial"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a
                  href="https://calendly.com/dummy"
                  title="Book a demo to learn about WhatsApp marketing tools"
                  aria-label="Book Demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-secondary gap-2 w-full sm:w-auto"
                    aria-label="Book Demo"
                  >
                    <Play className="w-4 h-4" />
                    Book Demo
                  </Button>
                </a>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up animation-delay-600">
                {[
                  "No Credit Card Required",
                  "5-Day Free Trial",
                  "24/7 Support",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-1.5 text-sm text-gray-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-whatsapp-green" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard */}
            <div
              ref={dashboardRef}
              className="relative transition-transform duration-200 ease-out"
              style={{
                transform: "perspective(1000px) rotateX(2deg) rotateY(-2deg)",
              }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-whatsapp-green/20 to-whatsapp-dark/20 rounded-3xl blur-2xl opacity-60" />

                {/* Dashboard Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                  <img
                    src="/hero-dashboard.jpg"
                    alt="WhatsPilot Dashboard"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">98.5%</p>
                      <p className="text-xs text-gray-500">Delivery Rate</p>
                    </div>
                  </div>
                </div>

                {/* Floating Messages Card */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float-slow animation-delay-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-whatsapp-light flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-whatsapp-green" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">30K+</p>
                      <p className="text-xs text-gray-500">
                        Messages Sent Daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
