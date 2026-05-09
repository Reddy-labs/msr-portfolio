import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostMetadata() {
  // Check if directory exists, if not, return empty array
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '1970-01-01',
        excerpt: data.excerpt || '',
        tag: data.tag || 'Uncategorized',
      };
    });

  // Sort posts by date in descending order
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostContent(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}
