import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'RL',
  subtitle: 'Reinforcement learning with humans in mind',
  lang: 'en-GB',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'William Dudley',
    photo: '/assets/profile-pic-prague-192.png',
    bio: 'Human-in-the-Loop Reinforcement Learning'
  },
  themeColor: '#3D4451'
}
