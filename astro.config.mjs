import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://taniageuna.com',
  output: 'server',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
  ],
  adapter: vercel({
    webAnalytics: { enabled: import.meta.env.ENV === 'production' },
  }),
});
