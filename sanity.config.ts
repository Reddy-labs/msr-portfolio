import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import post from './sanity/schemas/post';

export default defineConfig({
  basePath: '/studio',
  projectId: '39xtkmss', // <-- Must match the one above
  dataset: 'production',
  title: 'Portfolio Studio',
  schema: { types: [post] },
  plugins: [structureTool()],
});
