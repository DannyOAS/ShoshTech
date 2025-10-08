import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_POSTS, getBlogPostBySlug } from "../../../lib/content";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  const url = `https://www.shoshtech.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Shosh Technologies Insights`,
    description: post.description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      siteName: "Shosh Technologies Inc.",
      locale: "en_CA",
      publishedTime: new Date(post.date).toISOString()
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white dark:bg-gray-950">
      <div className="container-responsive section-padding mx-auto max-w-3xl space-y-10">
        <header className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            {post.hero.eyebrow}
          </span>
          <h1 className="text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {post.date} • {post.readingTime}
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300">{post.description}</p>
        </header>

        <div className="space-y-10 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-semibold text-brand-navy dark:text-white">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <footer className="space-y-6 rounded-3xl border border-brand-accent/15 bg-brand-light/60 p-6 text-center text-sm text-brand-navy shadow-soft dark:border-brand-accent/20 dark:bg-gray-900/70 dark:text-gray-200">
          <p>
            Have a use-case you want to explore?{" "}
            <Link
              href="/#contact"
              className="font-semibold text-brand-accent hover:text-brand-navy dark:hover:text-brand-accent"
            >
              Book a discovery call.
            </Link>
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent px-5 py-3 font-semibold text-brand-navy hover:bg-brand-accent hover:text-white dark:text-white"
          >
            Back to insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12l7.5-7.5m10.5 7.5H3" />
            </svg>
          </Link>
        </footer>
      </div>
    </article>
  );
}
