export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-responsive grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy ring-1 ring-brand-accent/30 dark:bg-gray-900 dark:text-brand-accent">
            About Shosh Technologies
          </span>
          <h2 className="text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
            Building privacy-first SaaS platforms for modern professionals
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Founded in Toronto, Shosh Technologies Inc. partners with small firms and professional
            services teams to craft custom software that balances usability with uncompromising data
            protection. Every product we deliver is designed to unlock efficiency while respecting
            the privacy expectations of your clients.
          </p>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            We combine thoughtful design, robust engineering, and a deep understanding of Canadian
            regulatory requirements so your organization can adopt new technology with confidence.
          </p>
          <div className="rounded-2xl border border-brand-accent/15 bg-brand-light/60 p-6 text-sm text-brand-navy shadow-sm dark:border-brand-accent/20 dark:bg-gray-900/70 dark:text-gray-100">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
              Mission
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Empower professionals with secure, intuitive software that elevates the caliber of
              service they deliver to their own clients.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-soft dark:border-gray-800 dark:bg-gray-900/90">
          <h3 className="text-base font-semibold uppercase tracking-widest text-brand-navy dark:text-brand-accent">
            Leadership
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            <div>
              <p className="text-xl font-semibold text-brand-navy dark:text-white">
                Daniel Sarpong
              </p>
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Founder & Principal Consultant
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Daniel leads every engagement with a focus on strategy, delivery excellence, and long-term
              partnerships. His experience spans SaaS implementation, digital transformation, and
              compliance-centered solutions for legal and professional service organizations.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-brand-accent">
                Product strategy
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-brand-accent">
                Security-first delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1 text-brand-accent">
                Client advocacy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
