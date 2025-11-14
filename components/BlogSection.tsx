import { BLOG_POSTS } from "../lib/content";
import { SectionLink } from "./SectionLink";

export function BlogSection() {
  return (
    <section id="blog" aria-labelledby="blog-heading" className="section-padding bg-brand-light dark:bg-gray-950">
      <div className="container-responsive">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Insights
            </span>
            <h2 id="blog-heading" className="mt-3 text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
              Stay ahead with practical guidance
            </h2>
            <p className="mt-3 max-w-xl text-base text-gray-700 dark:text-gray-300">
              Articles, playbooks, and updates on the strategies we use to launch secure, resilient
              software for Canadian professional teams.
            </p>
          </div>
          <SectionLink
            section="contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-accent px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-accent hover:text-white dark:text-white"
          >
            Request blog updates
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12l-3.75 3.75M21 12H3" />
            </svg>
          </SectionLink>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="card flex flex-col border border-gray-200/70 shadow-soft dark:border-gray-800/80"
            >
              <div className="text-xs uppercase tracking-widest text-brand-navy/70 dark:text-gray-300/80">
                {post.date} • {post.readingTime}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-navy dark:text-white">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-navy dark:hover:text-brand-accent"
              >
                Read article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m17.25 8.25 3.75 3.75L17.25 15.75M21 12h-18" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
