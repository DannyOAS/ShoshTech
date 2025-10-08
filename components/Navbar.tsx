"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/#home");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = "";
      };
    }
    document.documentElement.style.overflow = "";
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        threshold: 0.45
      }
    );

    NAV_ITEMS.forEach((item) => {
      const id = item.href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href?: string) => {
    if (href) {
      setActiveSection(href);
      if (typeof window !== "undefined" && href.startsWith("/#")) {
        const id = href.split("#")[1];
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur dark:bg-gray-950/90"
          : "bg-transparent"
      )}
    >
      <div className="container-responsive flex items-center justify-between py-4">
        <a
          href="/#home"
          className="flex items-center gap-3 text-lg font-semibold uppercase tracking-widest text-brand-navy dark:text-white"
          onClick={() => handleNavClick("/#home")}
        >
          <span className="sr-only">Shosh Technologies</span>
          <Logo className="h-10 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-accent dark:hover:text-brand-accent",
                activeSection === item.href
                  ? "text-brand-accent"
                  : "text-gray-700 dark:text-gray-200"
              )}
              aria-current={activeSection === item.href ? "page" : undefined}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 lg:gap-4">
          <ThemeToggle />
          <button
            type="button"
            className="hidden h-11 items-center justify-center rounded-full border border-brand-accent px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:inline-flex dark:text-white"
            onClick={() => handleNavClick("/#contact")}
          >
            Start a Project
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-navy transition hover:bg-brand-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent lg:hidden dark:border-gray-700 dark:text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                isMenuOpen ? "rotate-45" : ""
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-gray-200 bg-white/95 shadow-sm backdrop-blur transition-all duration-200 lg:hidden dark:border-gray-800 dark:bg-gray-950/95",
          isMenuOpen ? "block opacity-100" : "hidden opacity-0"
        )}
      >
        <nav className="container-responsive flex flex-col gap-4 pb-6 pt-4" aria-label="Primary mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg border border-gray-200 bg-white/80 px-4 py-3 text-base font-medium transition hover:bg-brand-accent hover:text-white dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-100 dark:hover:bg-brand-accent",
                activeSection === item.href
                  ? "border-brand-accent text-brand-accent dark:text-brand-accent"
                  : "text-brand-navy"
              )}
              aria-current={activeSection === item.href ? "page" : undefined}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            onClick={() => handleNavClick("/#contact")}
          >
            Start a Project
          </button>
        </nav>
      </div>
    </header>
  );
}
