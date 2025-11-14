const ICONS = {
  "shield-check": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.5a48.394 48.394 0 0 0-4.5.458c-.89.105-1.602.822-1.68 1.717A49.615 49.615 0 0 0 5.25 12c0 2.848.5 5.59 1.42 8.115.291.81 1.05 1.385 1.919 1.489 2.087.249 4.207.376 6.336.376 2.129 0 4.249-.127 6.336-.376.869-.104 1.628-.68 1.919-1.489A49.582 49.582 0 0 0 20.75 12c0-2.848-.5-5.59-1.42-8.115-.291-.81-1.05-1.385-1.919-1.489A48.507 48.507 0 0 0 12 2.25Z"
    />
  ),
  "document-check": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v13.5c0 .621.504 1.125 1.125 1.125h6.75c.621 0 1.125-.504 1.125-1.125V15.75a1.875 1.875 0 0 1 1.875-1.875H16.5a1.875 1.875 0 0 1 1.875 1.875v1.125c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H10.125Zm-7.5 15h6.75c.621 0 1.125-.504 1.125-1.125V3.375c0-.621-.504-1.125-1.125-1.125h-4.5c-.621 0-1.125.504-1.125 1.125v13.5c0 .621.504 1.125 1.125 1.125Zm7.5-13.5 3.75 3.75v-3.75h-3.75Z"
    />
  ),
  "users": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  )
} as const;

type WhyChooseCard = {
  title: string;
  description: string;
  icon: keyof typeof ICONS;
};

const WHY_CHOOSE_CARDS: WhyChooseCard[] = [
  {
    title: "Security Isn't Bolted On—It's Built In",
    description:
      "Most dev shops build first, worry about security later. We're different: our developers also do penetration testing. Result: Your application is secure from day one—no costly retrofits, no data breaches, no surprises. We've built 12 healthcare platforms handling 100K+ patient records with zero security incidents.",
    icon: "shield-check"
  },
  {
    title: "Canadian Compliance Without the Headaches",
    description:
      "Need PIPEDA compliance for health data? AODA accessibility for Ontario customers? We've done it dozens of times. Your data stays in Canada, your site meets legal requirements, and you avoid $100K/day fines. We handle the complex compliance stuff so you don't have to.",
    icon: "document-check"
  },
  {
    title: "Direct Access to Developers",
    description:
      "No layers of account managers. You work directly with the developers building your product. Quick decisions, clear communication, no bureaucracy. We're a small team that moves decisively with focused attention on your project.",
    icon: "users"
  }
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Why Choose ShoshTech
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
            Why Choose ShoshTech for Your Next Build?
          </h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            We're not your typical development shop. Here's what makes us different.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {WHY_CHOOSE_CARDS.map((card) => (
            <article key={card.title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {ICONS[card.icon]}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-navy dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}