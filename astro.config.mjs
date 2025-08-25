// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";
import critters from "astro-critters";
import font from "astro-font";

import { remarkReadingTime } from './src/utils/readTime.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://anedac.es',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight'
        },
        wrap: true
      },
      drafts: true
    }),
    sitemap(),
    tailwind(),
    partytown(),
    critters(),
    font({
      config: [
        {
          name: 'Manrope',
          src: [
            {
              path: 'public/fonts/Manrope-Regular.woff2',
              weight: '400',
              style: 'normal',
            },
            {
              path: 'public/fonts/Manrope-Bold.woff2',
              weight: '700',
              style: 'normal',
            },
          ],
          preload: true,
          display: 'swap',
          fallback: 'sans-serif',
        },
      ],
    }),
  ],

  // ========================================================== //
  // =================== AÑADE ESTA SECCIÓN =================== //
  // ========================================================== //
  vite: {
    ssr: {
      noExternal: ['astro-font']
    }
  }
});