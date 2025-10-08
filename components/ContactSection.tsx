import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-responsive grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-soft dark:border-gray-800 dark:bg-gray-900/80">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">Our office</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Shosh Technologies Inc.
              <br />
              100 King Street West, Suite 5600
              <br />
              Toronto, Ontario, M5X 1C9
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Prefer email?{" "}
              <a href="mailto:hello@shoshtech.com" className="font-semibold text-brand-accent">
                hello@shoshtech.com
              </a>
            </p>
          </div>
          <div className="h-72 overflow-hidden rounded-3xl border border-gray-200 shadow-soft dark:border-gray-800">
            <iframe
              title="Shosh Technologies Toronto office map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5209260552005!2d-79.38074522371201!3d43.64869147110233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d1df75f1d9%3A0x71b295df1c548d0!2s100%20King%20St%20W%2C%20Toronto%2C%20ON%20M5X%201A9!5e0!3m2!1sen!2sca!4v1714760400000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
