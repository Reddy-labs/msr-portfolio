import { getPostContent, getPostMetadata } from '../../../lib/posts';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import Link from 'next/link';

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug);

  return (
    <article className="mx-auto max-w-2xl space-y-8">
      <Link
        href="/writing"
        className="text-sm font-medium text-zinc-500 hover:text-zinc-900"
      >
        &larr; Back to all writing
      </Link>

      <header className="space-y-4">
        <div className="flex items-center gap-x-4 text-sm text-zinc-500">
          <time dateTime={post.data.date}>
            {new Date(post.data.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-600">
            {post.data.tag}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {post.data.title}
        </h1>
      </header>

      <div className="prose prose-zinc prose-a:text-blue-600 mt-8 leading-relaxed text-zinc-700">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}
