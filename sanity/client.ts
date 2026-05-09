import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'paste-your-real-id-here', // <-- e.g. "a1b2c3d4"
  dataset: 'production',
  apiVersion: '2024-05-09',
  useCdn: false,
});
