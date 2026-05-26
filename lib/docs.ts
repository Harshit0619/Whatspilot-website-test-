export const docsSlugs = [
  'setup-account',
  'connect-whatsapp',
  'multi-number-inbox',
  'multi-agent-access',
  'bulk-messaging',
  'scheduled-messages',
  'analytics',
  'data-export',
  'labels',
  'quick-replies',
  'create-tickets',
  'create-tasks',
  'ai-flagged-messages',
  'ai-summaries',
  'automation-rules',
  'integrations',
];

const uniqueSlugs = new Set(docsSlugs);
if (uniqueSlugs.size !== docsSlugs.length) {
  const duplicates = docsSlugs.filter((slug, index) => docsSlugs.indexOf(slug) !== index);
  throw new Error(`docsSlugs contains duplicates: ${duplicates.join(', ')}`);
}
