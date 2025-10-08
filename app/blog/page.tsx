import Link from "next/link";
import type { Metadata } from "next";

import { BLOG_POSTS } from "../../lib/content";

export const metadata: Metadata = {
  title: "Insights from Shosh Technologies | Blog",
  description:
    "Articles and playbooks from Shosh Technologies that help professional services teams ship secure, client-loved software.",
  alternates: {
    canonical: "https://www.shoshtech.com/blog"
  }
};

export default function BlogIndexPage() {
  return (
    <div className="container-responsive section-padding space-y-12">
      <header className="space-y-4 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
          Insights
        </span>
        <h1 className="text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
          Guidance for privacy-first professional services teams
        </h1>
        <p className="max-w-2xl text-base text-gray-700 dark:text-gray-300">
          Explore how we build resilient SaaS products, modernize legacy workflows, and craft analytics
          programs that help boutique firms move faster with confidence.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="card flex flex-col border border-gray-200 dark:border-gray-800">
            <div className="text-xs uppercase tracking-widest text-brand-accent">
              {post.date} • {post.readingTime}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-brand-navy dark:text-white">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
            <div className="mt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-navy dark:hover:text-brand-accent"
              >
                Read article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m17.25 8.25 3.75 3.75L17.25 15.75M21 12h-18" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <footer className="rounded-3xl border border-brand-accent/15 bg-brand-light/60 p-8 text-center text-sm text-brand-navy shadow-soft dark:border-brand-accent/20 dark:bg-gray-900/70 dark:text-gray-200">
        Looking for a specific topic?{" "}
        <Link href="/#contact" className="font-semibold text-brand-accent hover:text-brand-navy dark:hover:text-brand-accent">
          Start a conversation with our team.
        </Link>
      </footer>
    </div>
  );
}
