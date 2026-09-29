// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brianjia.com',

  integrations: [
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});