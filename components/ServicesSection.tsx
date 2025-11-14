const ICONS = {
  "code-bracket": (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 7.5 21 12l-4.5 4.5m-9-9L3 12l4.5 4.5M14.25 6 9.75 18"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.115 19.248A7.5 7.5 0 1 1 18 10.5h-1.5"
    />
  ),
  lightbulb: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.75V21m7.5-10.5a7.5 7.5 0 0 1-11.865 6.248c-.668-.477-1.635-1.126-1.635-2.248v-1.125c0-.621.504-1.125 1.125-1.125h.375a1.125 1.125 0 0 0 1.125-1.125V9c0-2.485 2.015-4.5 4.5-4.5a4.5 4.5 0 0 1 4.5 4.5Z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.5a48.394 48.394 0 0 0-4.5.458c-.89.105-1.602.822-1.68 1.717A49.615 49.615 0 0 0 5.25 12c0 2.848.5 5.59 1.42 8.115.291.81 1.05 1.385 1.919 1.489 2.087.249 4.207.376 6.336.376 2.129 0 4.249-.127 6.336-.376.869-.104 1.628-.68 1.919-1.489A49.582 49.582 0 0 0 20.75 12c0-2.848-.5-5.59-1.42-8.115-.291-.81-1.05-1.385-1.919-1.489A48.507 48.507 0 0 0 12 2.25Z"
    />
  ),
  badge: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12c2.485 0 4.5-2.238 4.5-5S12 2 12 2s-4.5.746-4.5 5 2.015 5 4.5 5ZM5.318 9.264A21.534 21.534 0 0 0 3 17.25 2.25 2.25 0 0 0 5.25 19.5h13.5A2.25 2.25 0 0 0 21 17.25a21.533 21.533 0 0 0-2.318-8.014"
    />
  )
} as const;

type Service = {
  title: string;
  description: string;
  points: string[];
  icon: keyof typeof ICONS;
};

const SERVICES: Service[] = [
  {
    title: "Custom web & software development",
    description:
      "SaaS platforms, client portals, internal dashboards, and business tools. Built with modern tech stacks, designed to scale, secured from day one.",
    points: [
      "Full-stack web applications & APIs",
      "Multi-tenant SaaS platforms",
      "PIPEDA-compliant with Canadian data residency",
      "Security testing throughout development"
    ],
    icon: "code-bracket"
  },
  {
    title: "SaaS product strategy & delivery",
    description:
      "We transform your domain expertise into subscription-ready SaaS offerings backed by reliable infrastructure.",
    points: [
      "Roadmapping and product-market fit",
      "Multi-tenant platform engineering",
      "Observability, analytics, and SLAs"
    ],
    icon: "cloud"
  },
  {
    title: "Advisory & consulting",
    description:
      "Fractional CTO and consulting engagements that help teams modernize processes without sacrificing compliance.",
    points: [
      "Digital transformation planning",
      "Vendor evaluation & integration",
      "Data governance and risk mitigation"
    ],
    icon: "lightbulb"
  },
  {
    title: "AI Chatbots & Automation",
    description:
      "24/7 customer service, lead capture, appointment booking, and internal help desks. Custom-built for your business with Canadian data residency.",
    points: [
      "Natural language processing for your business",
      "Appointment booking & lead qualification",
      "Integration with existing systems (CRM, calendar)",
      "Bilingual support (English/French)"
    ],
    icon: "badge"
  },
  {
    title: "AODA-Compliant Websites",
    description:
      "Accessible websites for Ontario organizations. Avoid $100K/day fines while reaching 2.6M more customers. Audit existing sites or build new.",
    points: [
      "WCAG 2.0 Level AA compliance",
      "Screen reader & keyboard navigation",
      "Compliance documentation for AODA reports",
      "Staff training on maintaining accessibility"
    ],
    icon: "shield"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-brand-light dark:bg-gray-950">
      <div className="container-responsive">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-brand-navy dark:text-white sm:text-4xl">
            Strategic partners from discovery to launch
          </h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            We plug into your team to uncover the highest-impact opportunities, validate ideas with
            end-users, and ship resilient products your clients love—backed by the cybersecurity rigor your clients expect.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  {ICONS[service.icon]}
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-navy dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
