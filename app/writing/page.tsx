import Link from 'next/link';
import { getPostMetadata } from '../../lib/posts';

export default function Writing() {
  const posts = getPostMetadata();

  return (
    <div className="mx-auto max-w-3xl space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Writing on tech, ethics, and the future.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          All of my long-form thoughts on software architecture, managing
          massive e-commerce datasets, space tech, and quantum computing,
          collected in chronological order.
        </p>
      </header>

      <div className="space-y-12">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col items-start justify-between"
            >
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/writing/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h2>
              <div className="mt-2 flex items-center gap-x-4 text-sm text-zinc-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="relative z-10 rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-600">
                  {post.tag}
                </span>
              </div>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))
        ) : (
          <p className="text-zinc-500">No posts published yet.</p>
        )}
      </div>
    </div>
  );
}
