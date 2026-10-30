export const SITE = {
  name: 'Agbaeze Jennifer Chioma',
  short: 'JC',
  description:
    'Personal website of Agbaeze Jennifer Chioma: a Computer Science student writing about AI, web development and the future of work.',
};

// REPLACE with the real Jenuix Creatives URL. Until you do, the buttons show "link coming soon".
export const JENUIX_URL = 'REPLACE_WITH_JENUIX_URL';

// Shown in the footer and the Get in Touch button. Leave '' to hide.
export const EMAIL = '';

// Only entries with a real url are displayed. Leave url '' to hide.
export const SOCIALS = [
  { label: 'GitHub', icon: 'github', url: '' },
  { label: 'LinkedIn', icon: 'linkedin', url: '' },
  { label: 'X', icon: 'x', url: '' },
  { label: 'Instagram', icon: 'instagram', url: '' },
];

// Only fill in options you can really use. Empty ones are hidden. Never put bank details in code.
export const SUPPORT = [
  { label: 'Buy Me a Coffee', icon: 'coffee', url: '' },
  { label: 'PayPal', icon: 'wallet', url: '' },
  { label: 'Bank Transfer', icon: 'landmark', url: '' },
  { label: 'Other', icon: 'heart', url: '' },
];

// Keep false until the newsletter is connected (Phase 3).
export const NEWSLETTER_LIVE = false;

export const isReady = (url: string) => !!url && !url.includes('REPLACE');