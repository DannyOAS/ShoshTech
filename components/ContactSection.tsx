import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-responsive max-w-4xl">
        <div className="rounded-3xl border border-brand-accent/15 bg-brand-light/60 p-8 shadow-soft dark:border-brand-accent/20 dark:bg-gray-900/70">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-brand-navy dark:text-white">
            Let’s explore how we can partner together
          </h2>
          <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
            Share a bit about your project and we’ll follow up within two business days to schedule
            a discovery call.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
