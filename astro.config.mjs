import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';


export default defineConfig({
  site: 'https://adhd-blog-kappa.vercel.app',
  integrations: [mdx()],
});
