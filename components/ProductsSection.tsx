import { SectionLink } from "./SectionLink";

const PRODUCTS = [
  {
    name: "Shosh Booking",
    description:
      "An end-to-end scheduling platform designed for boutique firms that need secure client intake, automated reminders, and frictionless billing.",
    highlights: [
      "Customizable intake flows",
      "Role-based access control",
      "Payments and analytics"
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75v-1.5A2.25 2.25 0 0 1 10.5 3h3a2.25 2.25 0 0 1 2.25 2.25v1.5m3 0h-12a2.25 2.25 0 0 0-2.25 2.25v8.25A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V9a2.25 2.25 0 0 0-2.25-2.25Z"
      />
    ),
    link: "https://shoshapp.com",
    cta: "Learn More"
  },
  {
    name: "Maple CaseFiles",
    description:
      "Maple CaseFiles is a cloud platform built for Canadian firms and solo lawyers. It combines a smart case tracker, secure client portal, e-signatures, automated billing, and AI-assisted contract review, all backed by Canadian data residency and PHIPA/PIPEDA compliance. We’re welcoming a limited pilot cohort with concierge setup so you can modernize client experience without new admin overhead.",
    highlights: [
      "Smart case tracker & secure client portal",
      "Built-in document signing and automated billing",
      "AI-assisted contract analysis with Canadian data residency",
      "Limited pilot with concierge onboarding support"
    ],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25H19.5m-3.75 0V9m0-3.75H12m7.5 7.5H19.5m0 0V9m0 0h-3.75m0 0V5.25M8.625 9.75l1.125 1.125L12 8.625m0 0l2.25 2.25L15.375 9.75M4.5 4.5l6.682 11.119a.75.75 0 0 0 1.296 0L19.5 4.5"
      />
    ),
    link: "https://maplecasefiles.ca",
    cta: "Learn More"
  }
];

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Products
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
            Purpose-built platforms for professional services
          </h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            Our SaaS products deliver dependable, secure workflows that help you scale without
            adding unnecessary complexity.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="card flex flex-col justify-between border-brand-accent/15"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.6}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    {product.icon}
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-brand-navy dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent"
                >
                  {product.cta}
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
