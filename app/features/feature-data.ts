import { MessageSquare, CalendarClock, Users, Bot, LayoutTemplate, BarChart3 } from 'lucide-react';

// Icon mapping for client-side resolution
export const iconMap = {
  MessageSquare,
  CalendarClock,
  Users,
  Bot,
  LayoutTemplate,
  BarChart3,
};

export type IconName = keyof typeof iconMap;

export interface Feature {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: IconName;
  color: string;
  benefits: string[];
  howItWorks: { step: number; title: string; description: string }[];
  useCases: string[];
  integrations: { name: string; description: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const featuresData: Feature[] = [
  {
    id: 'bulk-messaging',
    title: 'Bulk Messaging',
    slug: 'bulk-messaging',
    description: 'Send personalized bulk WhatsApp messages to thousands of contacts with one click. Our bulk WhatsApp sender software makes it easy to schedule campaigns and track delivery in real-time.',
    longDescription: 'Our advanced bulk messaging system allows you to reach thousands of customers simultaneously with personalized messages. As a leading bulk WhatsApp software, we provide enterprise-grade whatsapp bulk message sender capabilities. Use variables to customize each message, schedule campaigns for optimal timing, and track delivery status in real-time. Perfect for marketing campaigns, announcements, and customer updates.',
    icon: 'MessageSquare',
    color: '#25d366',
    benefits: [
      'Personalized messages with custom variables like {name}, {order_id}',
      'Schedule campaigns in advance with timezone support',
      'Real-time delivery tracking and status updates',
      'Import contacts from CSV, Excel, or API integrations',
      'Message templates for consistent branding',
      'Delivery reports and analytics',
      'Enterprise-grade bulk WhatsApp sender with high deliverability',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Upload Contacts',
        description: 'Import your contact list via CSV, Excel, or connect your CRM. Our system automatically deduplicates and validates numbers.',
      },
      {
        step: 2,
        title: 'Create Message',
        description: 'Compose your message using our editor. Add personalization variables to make each message unique.',
      },
      {
        step: 3,
        title: 'Schedule or Send',
        description: 'Send immediately or schedule for later. Set delivery windows and rate limits for optimal deliverability.',
      },
      {
        step: 4,
        title: 'Track Results',
        description: 'Monitor delivery, reads, and replies in real-time. Export reports for analysis and optimization.',
      },
    ],
    useCases: [
      'Marketing campaigns and promotions',
      'Order confirmations and shipping updates',
      'Event invitations and reminders',
      'Customer feedback requests',
      'Holiday greetings and announcements',
      'New feature notifications',
      'Bulk WhatsApp message campaigns for product launches and multilingual audiences',
    ],
    integrations: [
      { name: 'Zapier', description: 'Connect with 5000+ apps' },
      { name: 'Google Sheets', description: 'Import contact lists' },
      { name: 'HubSpot', description: 'Sync customer data' },
      { name: 'Shopify', description: 'E-commerce notifications' },
    ],
     seo: {
       title: 'Bulk WhatsApp Message Sender Software for Easy Outreach',
       description: 'Transform outreach with bulk WhatsApp sender software! Send bulk WhatsApp messages to instantly engage customers and amplify your marketing efforts.',
       keywords: [
        'bulk messaging',
        'whatsapp broadcast',
        'mass messaging',
        'whatsapp marketing',
        'campaign messaging',
        'whatsapp promotional messages',
        'bulk whatsapp sender',
        'whatsapp blast',
        'bulk whatsapp message',
        'whatsapp bulk message sender',
        'bulk whatsapp sender software',
        'bulk whatsapp software',
      ],
    },
  },
  {
    id: 'schedule-messages',
    title: 'Schedule Messages',
    slug: 'schedule-messages',
    description: 'Plan and automate message delivery at the perfect time with our whatsapp message scheduler. Schedule WhatsApp messages in advance, schedule send whatsapp campaigns, and never miss an opportunity.',
    longDescription: 'Take control of your messaging timeline with our powerful scheduling system. This whatsapp timed message capability allows you to plan campaigns weeks in advance. You can schedule a message in WhatsApp for any future date, set up recurring messages, and ensure optimal delivery. Timezone-aware delivery means your messages arrive at the right time, wherever your customers are.',
    icon: 'CalendarClock',
    color: '#128c7e',
    benefits: [
      'Schedule one-time or recurring messages',
      'Timezone-aware delivery for global audiences',
      'Visual campaign calendar for planning',
      'Auto-resend failed messages',
      'Queue management and delivery windows',
      'Bulk schedule multiple messages at once',
      'Can I schedule a message in WhatsApp? Absolutely - our intuitive interface makes it effortless',
      'Bulk WhatsApp timed messages for coordinated multi-recipient campaigns',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Compose Message',
        description: 'Write your message and select recipients. Add personalization variables for a personalized touch.',
      },
      {
        step: 2,
        title: 'Set Schedule',
        description: 'Choose delivery date and time. Set recurrence patterns: daily, weekly, monthly, or custom intervals.',
      },
      {
        step: 3,
        title: 'Configure Options',
        description: 'Set timezone preferences, delivery windows, and auto-resend settings for maximum deliverability.',
      },
      {
        step: 4,
        title: 'Automated Delivery',
        description: 'Our system automatically sends messages at the scheduled time. Monitor status and make adjustments anytime.',
      },
    ],
    useCases: [
      'Daily reminders and notifications',
      'Weekly newsletters and updates',
      'Birthday and anniversary wishes',
      'Appointment confirmations and reminders',
      'Recurring promotional campaigns',
      'Onboarding sequences',
      'Schedule a message in WhatsApp for automated customer engagement and follow-ups',
    ],
    integrations: [
      { name: 'Google Calendar', description: 'Sync scheduled events' },
      { name: 'Zapier', description: 'Trigger from external events' },
      { name: 'Make.com', description: 'Visual workflow automation' },
      { name: 'Cal.com', description: 'Scheduling integration' },
    ],
     seo: {
       title: 'Schedule WhatsApp Messages Easily with WhatsPilot -Try Now',
       description: 'WhatsApp message scheduler at your service! Take control of your messaging with timezone-aware scheduling and recurring message options.',
       keywords: [
        'schedule whatsapp messages',
        'whatsapp automation',
        'auto send whatsapp',
        'recurring messages',
        'message scheduler',
        'whatsapp campaign tools',
        'automated messaging',
        'whatsapp marketing software',
        'schedule whatsapp messages',
        'schedule send whatsapp',
        'whatsapp message scheduler',
        'whatsapp timed message',
        'schedule a message in whatsapp',
        'can i schedule a message in whatsapp',
      ],
    },
  },
  {
    id: 'whatsapp-groups',
    title: 'WhatsApp Groups',
    slug: 'whatsapp-groups',
    description: 'Manage group communications and broadcasts efficiently. Extract members and send targeted messages.',
    longDescription: 'Harness the power of WhatsApp groups for community building and targeted broadcasts. Our group management tools let you extract members, send personalized messages to groups, and automate group interactions. Perfect for community engagement, team notifications, and cohort-based marketing.',
    icon: 'Users',
    color: '#075e54',
    benefits: [
      'Extract members from any WhatsApp group',
      'Bulk messaging to group participants',
      'Auto-reply functionality in groups',
      'Group analytics and engagement metrics',
      'Manage multiple groups from one dashboard',
      'Targeted broadcasts to group subsets',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Connect WhatsApp',
        description: 'Link your WhatsApp Business account. Grant permissions to access group information.',
      },
      {
        step: 2,
        title: 'Extract Members',
        description: 'Select groups to extract members. Our system safely collects phone numbers with opt-out compliance.',
      },
      {
        step: 3,
        title: 'Create Group Campaigns',
        description: 'Compose messages for group members. Use personalization and schedule delivery.',
      },
      {
        step: 4,
        title: 'Monitor & Engage',
        description: 'Track delivery and engagement. Set up auto-replies to handle common questions automatically.',
      },
    ],
    useCases: [
      'Customer community engagement',
      'Event participant communication',
      'Employee team updates',
      'Course cohort messaging',
      'Loyalty program notifications',
      'Product launch broadcasts',
    ],
    integrations: [
      { name: 'Zapier', description: 'Connect to CRM and databases' },
      { name: 'Google Sheets', description: 'Export group member lists' },
      { name: 'HubSpot', description: 'Sync contact segments' },
      { name: 'Make.com', description: 'Automated workflows' },
    ],
     seo: {
       title: 'Best WhatsApp Group Management Tool for Easy Control',
       description: 'Group management made easy! Unlock the potential of our WhatsApp group management tool for seamless community building and targeted broadcasts.',
       keywords: [
        'whatsapp groups',
        'group management',
        'whatsapp broadcast',
        'group messaging',
        'whatsapp community',
        'bulk group messages',
        'whatsapp marketing platform',
        'group analytics',
      ],
    },
  },
  {
    id: 'chatbot-automation',
    title: 'Chatbot Automation',
    slug: 'chatbot-automation',
    description: 'AI powered chatbots and AI driven chatbots provide 24/7 automated responses. Set up auto-replies and handle FAQs automatically.',
    longDescription: 'Provide instant, 24/7 customer support with our intelligent chatbot automation. Our AI powered chatbots and AI driven chatbots leverage advanced NLP. Train your bot with FAQs, set keyword-based responses, and use AI to handle complex conversations. Qualify leads, provide instant answers, and ensure no message goes unanswered, even outside business hours.',
    icon: 'Bot',
    color: '#25d366',
    benefits: [
      '24/7 automated customer support',
      'Keyword-based intelligent responses',
      'AI-powered conversation handling',
      'Lead qualification and routing',
      'Multi-language support',
      'Seamless human handoff',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Create Knowledge Base',
        description: 'Add FAQs, common queries, and responses. Train the bot with examples and intents.',
      },
      {
        step: 2,
        title: 'Set Rules & Triggers',
        description: 'Define when the bot should respond. Configure keywords, patterns, and fallback messages.',
      },
      {
        step: 3,
        title: 'Configure Handoff',
        description: 'Set conditions for transferring to human agents. Define escalation paths and notification rules.',
      },
      {
        step: 4,
        title: 'Monitor & Optimize',
        description: 'Review conversation logs, analyze performance, and continuously improve your bot responses.',
      },
    ],
    useCases: [
      'Customer support and FAQs',
      'Lead qualification and capture',
      'Order status inquiries',
      'Appointment scheduling',
      'Product recommendations',
      'Feedback collection',
    ],
    integrations: [
      { name: 'OpenAI', description: 'GPT-powered responses' },
      { name: 'Zapier', description: 'Connect to knowledge bases' },
      { name: 'HubSpot', description: 'CRM integration' },
      { name: 'Make.com', description: 'Complex workflow automation' },
    ],
     seo: {
       title: 'Smart AI Powered Bots with Automated Chatbot Features',
       description: 'Automated chatbot solutions with AI powered bots provide instant, around-the-clock support! Qualify leads and automate your WhatsApp communication today.',
       keywords: [
         'whatsapp chatbot',
         'chatbot automation',
         'AI chatbot',
         'ai powered chatbots',
         'ai driven chatbots',
         'auto reply whatsapp',
         'whatsapp automation',
         'customer support chatbot',
         'lead qualification',
         'whatsapp marketing tools',
       ],
    },
  },
  {
    id: 'template-library',
    title: 'Template Library',
    slug: 'template-library',
    description: 'Pre-designed WhatsApp message templates for every scenario. Create, save, and reuse your best-performing messages.',
    longDescription: 'Jumpstart your messaging with our extensive WhatsApp template library. Choose from 100+ professionally designed WhatsApp marketing templates and campaign templates for various use cases, or create and save your own. Ensure brand consistency, improve response rates, and save time with reusable message components.',
    icon: 'LayoutTemplate',
    color: '#128c7e',
    benefits: [
      '100+ ready-to-use templates',
      'Custom template creation and saving',
      'Organized by category and use case',
      'A/B testing support for optimization',
      'Brand consistency across all messages',
      'One-click personalization',
      'Build WhatsApp campaign templates that convert',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Browse Templates',
        description: 'Explore our library categorized by use case: marketing, support, notifications, and more.',
      },
      {
        step: 2,
        title: 'Customize Content',
        description: 'Edit template text, add your variables, and customize for your brand voice.',
      },
      {
        step: 3,
        title: 'Save & Organize',
        description: 'Save custom templates to your library. Organize with tags and categories for easy access.',
      },
      {
        step: 4,
        title: 'Deploy & Optimize',
        description: 'Use templates in campaigns. Track performance and A/B test to find your best performers.',
      },
    ],
    useCases: [
      'Marketing promotions and offers',
      'WhatsApp marketing template campaigns',
      'Customer onboarding sequences',
      'Support responses and resolutions',
      'Order and shipping notifications',
      'Quick deployment with WhatsApp templates',
      'Appointment confirmations',
      'Event invitations and reminders',
      'High-converting WhatsApp campaign templates',
    ],
    integrations: [
      { name: 'Google Sheets', description: 'Import variable data' },
      { name: 'Zapier', description: 'Trigger from external events' },
      { name: 'Make.com', description: 'Workflow integration' },
      { name: 'Shopify', description: 'E-commerce notifications' },
    ],
     seo: {
       title: 'Effective WhatsApp Marketing Template for Quick Campaigns',
       description: 'WhatsApp marketing templates made easy! Access 100+ ready-to-use designs and boost your campaigns while saving time with reusable components.',
       keywords: [
        'whatsapp templates',
        'whatsapp template',
        'message templates',
        'template library',
        'whatsapp marketing',
        'whatsapp marketing template',
        'reusable messages',
        'message library',
        'whatsapp campaign tools',
        'whatsapp campaign template',
        'marketing templates',
      ],
    },
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'Track delivery, opens, and engagement in real-time. Monitor campaign performance and marketing performance with comprehensive analytics.',
    longDescription: 'Get complete visibility into your WhatsApp communication with our comprehensive analytics dashboard. Track message delivery, read rates, user engagement metrics, and campaign performance in real-time tracking. Monitor marketing performance and use insights to optimize your messaging strategy and improve ROI.',
    icon: 'BarChart3',
    color: '#075e54',
    benefits: [
      'Real-time delivery and read tracking',
      'Engagement metrics and trends',
      'Campaign performance comparison',
      'Marketing performance tracking and ROI analysis',
      'User engagement metrics visualization',
      'Exportable reports (CSV, PDF)',
      'Custom date ranges and filters',
      'Team performance analytics',
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Automatic Tracking',
        description: 'All messages sent through WhatsPilot are automatically tracked. No setup required.',
      },
      {
        step: 2,
        title: 'View Dashboard',
        description: 'Access your analytics dashboard anytime. See real-time stats and historical trends.',
      },
      {
        step: 3,
        title: 'Drill Down',
        description: 'Click through to see detailed metrics per campaign, template, or contact. Identify patterns.',
      },
      {
        step: 4,
        title: 'Export & Optimize',
        description: 'Export reports for analysis. Use insights to refine messaging, timing, and targeting.',
      },
    ],
    useCases: [
      'Campaign performance analysis',
      'Marketing performance optimization',
      'User engagement metrics tracking',
      'Real-time campaign adjustments',
      'Delivery rate optimization',
      'Customer engagement tracking',
      'Team productivity monitoring',
      'ROI calculation',
      'Compliance and audit reporting',
    ],
    integrations: [
      { name: 'Google Sheets', description: 'Export data for analysis' },
      { name: 'Zapier', description: 'Push metrics to BI tools' },
      { name: 'Make.com', description: 'Automated reporting' },
      { name: 'HubSpot', description: 'Sync engagement data' },
    ],
     seo: {
       title: 'Track Campaign Performance with User Engagement Metrics',
       description: 'Campaign performance and user engagement metrics at your fingertips! Get real-time insights into WhatsApp communication with our analytics dashboard.',
       keywords: [
        'whatsapp analytics',
        'analytics dashboard',
        'message tracking',
        'delivery reports',
        'engagement metrics',
        'campaign performance',
        'marketing performance',
        'user engagement metrics',
        'real time tracking',
        'campaign analytics',
        'whatsapp marketing software',
        'performance tracking',
      ],
    },
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return featuresData.find((feature) => feature.slug === slug);
}

export function getAllSlugs(): string[] {
  return featuresData.map((feature) => feature.slug);
}
