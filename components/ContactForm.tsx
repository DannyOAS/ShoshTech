"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";

import { CONTACT_FORM_ENDPOINT } from "../lib/constants";

type SubmissionState = "idle" | "loading" | "success" | "error" | "unconfigured";

const isConfigured = CONTACT_FORM_ENDPOINT && !CONTACT_FORM_ENDPOINT.includes("your-form-id");

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>(isConfigured ? "idle" : "unconfigured");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!isConfigured) {
        setStatus("unconfigured");
        setErrorMessage("Contact form endpoint is not configured. Please update the environment variable.");
        return;
      }

      const form = event.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        setStatus("loading");
        setErrorMessage(null);

        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Unable to send message");
        }

        form.reset();
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again or email us directly."
        );
      }
    },
    []
  );

  const ctaLabel = useMemo(() => {
    switch (status) {
      case "loading":
        return "Sending...";
      default:
        return "Send message";
    }
  }, [status]);

  const resetFormState = useCallback(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-navy dark:text-gray-200">
            Name<span className="text-brand-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm transition focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-brand-navy dark:text-gray-200">
            Email<span className="text-brand-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm transition focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-navy dark:text-gray-200">
          How can we help?<span className="text-brand-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your product vision, timelines, and what success looks like."
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
      </div>
      <input type="hidden" name="_subject" value="Website inquiry – Shosh Technologies" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent disabled:cursor-not-allowed disabled:opacity-75"
          disabled={status === "loading" || status === "unconfigured"}
        >
          {status === "success" ? "Message sent!" : ctaLabel}
        </button>
        {status === "success" && (
          <button
            type="button"
            onClick={resetFormState}
            className="inline-flex items-center justify-center rounded-full border border-brand-accent px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-accent hover:text-white dark:text-white"
          >
            Send another message
          </button>
        )}
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        By submitting this form you consent to receive communications about your inquiry. We
        respect your privacy and will never share your details.
      </p>
      {status === "success" && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-900/40 dark:text-emerald-200">
          Thanks! Your message is on its way. Our team will follow up within two business days.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-900/60 dark:bg-rose-900/40 dark:text-rose-200">
          {errorMessage} You can also email{" "}
          <a href="mailto:hello@shoshtech.com" className="font-semibold underline">
            hello@shoshtech.com
          </a>
          .
        </p>
      )}
      {status === "unconfigured" && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700 dark:border-amber-900/60 dark:bg-amber-900/40 dark:text-amber-200">
          The contact form endpoint has not been set. Update the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` variable in your environment to enable submissions.
        </p>
      )}
    </form>
  );
}
