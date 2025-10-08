const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" }
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/shoshtech", icon: "github" }
];

const ICONS = {
  linkedin: (
    <path
      d="M8.5 10.75V19M11.25 19v-4.25a2.25 2.25 0 1 1 4.5 0V19M5.5 8.25v.01M6 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 4.5H3.75A1.75 1.75 0 0 0 2 13.75v3.5A1.75 1.75 0 0 0 3.75 19H6a1.75 1.75 0 0 0 1.75-1.75v-3.5A1.75 1.75 0 0 0 6 12Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  github: (
    <path
      d="M9 19c-4 1.5-4-2-6-2m12 4v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1s-1.18-.35-3.91 1.48a13.32 13.32 0 0 0-7 0C4.27.65 3.09 1 3.09 1A5.07 5.07 0 0 0 3 4.77a5.44 5.44 0 0 0-1.5 3.79c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 7 18.13V21"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy py-10 text-sm text-white">
      <div className="container-responsive flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-base font-semibold uppercase tracking-widest">
            Shosh Technologies Inc.
          </p>
          <p className="text-xs text-white/70">
            © 2025 Shosh Technologies Inc. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-white transition hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-accent hover:text-brand-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="h-5 w-5"
              >
                {ICONS[social.icon as keyof typeof ICONS]}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
