import { SectionLink } from "./SectionLink";

const HERO_STATS = [
  {
    value: "Canada-wide",
    label: "Partnering with professional teams from coast to coast"
  },
  {
    value: "Privacy-first",
    label: "Delivering compliant, client-trusted digital experiences"
  },
  {
    value: "Rapid delivery",
    label: "Collaborative sprints that ship value in weeks"
  }
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero-gradient text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25)_0%,rgba(0,31,63,0)_55%)]" />
      <div className="container-responsive relative flex flex-col gap-16 py-28 sm:py-36 xl:flex-row xl:items-center xl:gap-20">
        <div className="mx-auto flex-1 max-w-2xl text-center xl:mx-0 xl:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-inset ring-white/40 sm:text-sm">
            Serving clients across Canada
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
            Empowering professionals with smarter software.
          </h1>
          <p className="mt-6 text-base text-white/80 sm:text-lg">
            Shosh Technologies partners with ambitious firms to design privacy-first digital
            experiences and SaaS platforms that keep teams moving securely—wherever your practice is based.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 lg:items-center lg:justify-start">
            <SectionLink
              section="contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg transition hover:bg-brand-accent hover:text-white"
            >
              Book a discovery call
            </SectionLink>
            <SectionLink
              section="services"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore our services
            </SectionLink>
          </div>
        </div>
        <div className="mx-auto flex flex-1 max-w-2xl flex-col gap-6 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur xl:mx-0">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90 sm:text-lg">
            Trusted by modern professionals
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur"
              >
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className="text-sm text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/70">
            We build resilient, compliant platforms that empower legal, financial, and professional
            services teams across Canada.
          </p>
        </div>
      </div>
    </section>
  );
}
