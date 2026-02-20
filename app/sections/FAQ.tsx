"use client";


import { useState, useRef, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all our plans. If you are not satisfied with our service for any reason, simply contact our support team within 30 days of your purchase for a full refund. No questions asked.',
  },
  {
    question: 'Do I need a credit card to sign up?',
    answer: 'No, you can start your free trial without a credit card. We believe in letting you experience the full power of WhatsPilot before making any commitment. Simply sign up with your email and start automating your WhatsApp communication.',
  },
  {
    question: 'Why does my business need a chatbot?',
    answer: 'A chatbot provides 24/7 customer support, instantly responds to frequently asked questions, qualifies leads automatically, and handles multiple conversations simultaneously. This saves you time, reduces response times, and improves customer satisfaction while you focus on growing your business.',
  },
  {
    question: 'How does the bulk messaging work?',
    answer: 'Our bulk messaging feature allows you to send personalized messages to thousands of contacts at once. You can use variables like {name}, {order_id}, etc., to personalize each message. Schedule campaigns, track delivery status, and analyze performance all from one dashboard.',
  },
  {
    question: 'Can I integrate with my existing CRM?',
    answer: 'Yes, we offer integrations with popular CRMs like HubSpot, Salesforce, Zoho, and many more through Zapier, Make.com, and our REST API. You can sync contacts, track conversations, and automate workflows between WhatsPilot and your existing tools.',
  },
  {
    question: 'Is WhatsPilot compliant with WhatsApp Business API?',
    answer: 'Yes, WhatsPilot is fully compliant with WhatsApp Business API and WhatsApp Business Platform policies. We use official WhatsApp Business API for all communications, ensuring your messages are delivered reliably and your account remains in good standing.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50/50 relative">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Header */}
            <div className="lg:sticky lg:top-32">
              <span className="inline-block px-4 py-1.5 rounded-full bg-whatsapp-green/10 text-whatsapp-green text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Everything you need to know about WhatsPilot. 
                Can't find the answer you're looking for? 
                Feel free to contact our support team.
              </p>

              {/* Contact Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Still have questions?</p>
                    <p className="text-sm text-gray-600">We're here to help!</p>
                  </div>
                </div>
                <a 
                  href="/contact"
                  className="block w-full py-3 px-4 text-center rounded-xl border border-gray-200 text-gray-700 font-medium hover:border-whatsapp-green hover:text-whatsapp-green transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className={`space-y-4 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-whatsapp-green/30 shadow-lg' 
                      : 'border-gray-100 shadow-card hover:shadow-card-hover'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                  >
                    <span className={`font-semibold pr-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-whatsapp-green' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-whatsapp-green text-white rotate-180' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
