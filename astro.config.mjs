import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import partytown from "@astrojs/partytown";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://anedac.es',
  // Write here your website url
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      experimentalThemes: {
        light: 'vitesse-light',
        dark: 'material-theme-palenight'
      },
      wrap: true
    },
    drafts: true
  }), sitemap(), tailwind(), partytown(), critters()]
});