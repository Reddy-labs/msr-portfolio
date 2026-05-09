import Link from 'next/link';
import { getPostMetadata } from '../lib/posts';

export default function Home() {
  const recentPosts = getPostMetadata().slice(0, 3); // Grab the 3 most recent posts

  return (
    <div className="space-y-24">
      <section className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-zinc-900">
          Building scalable systems. <br className="hidden sm:block" />{' '}
          Exploring the future.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
          I'm a Software Developer specializing in system design and
          architecture for massive e-commerce datasets at Optmyzr. Beyond my day
          job, I explore and write at the intersection of AI development,
          environmental sustainability, ethical governance, and quantum
          technologies.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/experience"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-zinc-800"
          >
            View Experience
          </Link>
          <Link
            href="/writing"
            className="rounded-full px-6 py-3 text-sm font-medium border border-zinc-300 text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Read My Writing
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Recent Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all posts &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-zinc-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-zinc-100 px-3 py-1.5 font-medium text-zinc-600">
                    {post.tag}
                  </span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-4 text-lg font-semibold leading-6 text-zinc-900 group-hover:text-zinc-600">
                    <Link href={`/writing/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-600">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <p className="text-zinc-500">No posts published yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
