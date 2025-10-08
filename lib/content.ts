export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  hero: {
    eyebrow: string;
  };
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "privacy-first-saas",
    title: "Designing Privacy-First SaaS for Professional Services",
    description:
      "A practical blueprint for delivering software that delights users while upholding client confidentiality expectations.",
    date: "April 12, 2025",
    readingTime: "6 min read",
    hero: {
      eyebrow: "Product Strategy"
    },
    sections: [
      {
        heading: "Start with client trust assumptions",
        body: [
          "Professional services clients expect discretion, so every feature should be filtered through the lens of what data is exposed, to whom, and why. Map out touchpoints where sensitive information is surfaced and build contextual consent controls from the beginning."
        ]
      },
      {
        heading: "Embed compliance into the delivery lifecycle",
        body: [
          "Maintain a shared compliance checklist spanning discovery to launch. That list should include encryption expectations, audit log coverage, data residency requirements, and retention policies. Automate regression tests to validate these controls before each release."
        ]
      },
      {
        heading: "Communicate privacy value to end users",
        body: [
          "Privacy-forward UX is more than legal text. Use inline education, frictionless data export options, and transparent change histories so your customers can reassure their own clients."
        ]
      }
    ]
  },
  {
    slug: "modernize-legacy-workflows",
    title: "How to Modernize Legacy Workflows Without Disrupting Clients",
    description:
      "A rollout framework that helps teams adopt new tooling while keeping client service consistent and reliable.",
    date: "March 28, 2025",
    readingTime: "5 min read",
    hero: {
      eyebrow: "Delivery Playbooks"
    },
    sections: [
      {
        heading: "Prioritize the highest-friction workflow",
        body: [
          "Interview client-facing staff to surface the task that causes the most rework or delays. Replacing one painful workflow quickly builds momentum and trust for broader change."
        ]
      },
      {
        heading: "Run parallel pilots with safety nets",
        body: [
          "Stand up a closed beta with real data, document rollback steps, and appoint a client advocate to capture edge cases. This lets you tune the experience before opening the gates."
        ]
      },
      {
        heading: "Invest in change communications",
        body: [
          "Internal enablement resources, frequent stand-ups, and plain-language client updates are key. Offer quick reference guides and an escalation path so no client interaction gets stuck."
        ]
      }
    ]
  },
  {
    slug: "operational-analytics-boutique-firms",
    title: "Operational Analytics for Boutique Firms",
    description:
      "Turn day-to-day data into leading indicators that help lean teams make faster, smarter decisions.",
    date: "March 2, 2025",
    readingTime: "4 min read",
    hero: {
      eyebrow: "Data & Insights"
    },
    sections: [
      {
        heading: "Define a focused metrics stack",
        body: [
          "Select a small set of metrics tied to utilization, client satisfaction, and revenue velocity. Each metric should have an owner, a refresh cadence, and clear actions when thresholds are met."
        ]
      },
      {
        heading: "Instrument your tools for visibility",
        body: [
          "Configure data exports from booking platforms, CRMs, and billing systems. Use lightweight ETL tools to normalize the data so dashboards stay trustworthy and easy to maintain."
        ]
      },
      {
        heading: "Close the loop with retrospectives",
        body: [
          "Schedule quarterly reviews to evaluate which metrics drove better decisions. Treat analytics as an evolving product that should adapt alongside your firm’s offerings."
        ]
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
