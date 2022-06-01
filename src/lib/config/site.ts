import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'Urara',
  subtitle: 'Sweet & Powerful SvelteKit Blog Template',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'William Dudley',
    photo: '/assets/profile-pic-prague-192.png',
    status: 'status',
    bio: 'Human-in-the-Loop Reinforcement Learning'
  },
  themeColor: '#3D4451'
}
