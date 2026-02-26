"use client";


import { useRef, useEffect, useState } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Globe, 
  FileSpreadsheet, 
  Slack, 
  Database,
  Calendar,
  Workflow
} from 'lucide-react';

const integrations = [
  { name: 'Zapier', icon: Zap, color: '#FF4A00', description: 'Connect with 5000+ apps' },
  { name: 'Shopify', icon: ShoppingBag, color: '#96BF48', description: 'E-commerce automation' },
  { name: 'WordPress', icon: Globe, color: '#21759b', description: 'Website integration' },
  { name: 'Google Sheets', icon: FileSpreadsheet, color: '#0F9D58', description: 'Data synchronization' },
  { name: 'Slack', icon: Slack, color: '#4A154B', description: 'Team notifications' },
  { name: 'HubSpot', icon: Database, color: '#FF7A59', description: 'CRM integration' },
  { name: 'Cal.com', icon: Calendar, color: '#292929', description: 'Scheduling automation' },
  { name: 'Make.com', icon: Workflow, color: '#7B68EE', description: 'Visual automation' },
];

export default function Integrations() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [radius, setRadius] = useState(225);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (orbitRef.current) {
      observer.observe(orbitRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 1024 ? 150 : 225);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #25d366 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Integrates WhatsApp with{' '}
              <span className="gradient-text">Top Tools</span>
            </h2>
             <p className="text-lg text-gray-600">
               Connect your favorite apps and automate workflows seamlessly.
               Access powerful whatsapp campaign tools from your favorite platforms.
               No coding required.
             </p>
          </div>

          {/* Orbit Animation Container */}
          <div 
            ref={orbitRef}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Center Hub */}
            <div className="absolute z-20">
              <div className="relative">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full gradient-bg flex items-center justify-center shadow-glow-lg animate-pulse-glow">
                  <span className="text-white font-bold text-xl lg:text-2xl">WB</span>
                </div>
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full gradient-bg opacity-30 animate-ping" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full border border-gray-200/50" />
            <div className="absolute w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] rounded-full border border-gray-200/30" />

            {/* Orbiting Integration Cards */}
            <div className={`absolute w-full h-full transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
              {integrations.map((integration, index) => {
                const angle = (360 / integrations.length) * index;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={integration.name}
                    className="absolute left-1/2 top-1/2 transition-all duration-700"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="group relative">
                      <div 
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white shadow-card hover:shadow-card-hover border border-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
                      >
                        <integration.icon 
                          className="w-8 h-8 lg:w-10 lg:h-10 transition-colors duration-300"
                          style={{ color: integration.color }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                        <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                          <p className="font-medium">{integration.name}</p>
                          <p className="text-xs text-gray-400">{integration.description}</p>
                        </div>
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#25d366" stopOpacity="0" />
                  <stop offset="50%" stopColor="#25d366" stopOpacity="1" />
                  <stop offset="100%" stopColor="#25d366" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Integration Grid (Mobile Fallback) */}
          <div className="lg:hidden grid grid-cols-4 gap-4 mt-8">
            {integrations.map((integration) => (
              <div 
                key={integration.name}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white shadow-card border border-gray-100"
              >
                <integration.icon 
                  className="w-6 h-6"
                  style={{ color: integration.color }}
                />
                <span className="text-xs text-gray-600 text-center">{integration.name}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/features"
              title="View all 50+ integrations for WhatsApp marketing automation"
              aria-label="View All 50+ Integrations"
              className="inline-flex items-center gap-2 text-whatsapp-green font-medium hover:underline"
            >
              View All 50+ Integrations
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
