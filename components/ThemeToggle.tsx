"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { cn } from "../lib/utils";

export function ThemeToggle({
  className
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-brand-navy shadow-sm transition-all hover:bg-brand-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-brand-accent",
        className
      )}
    >
      <span className="sr-only">Toggle color theme</span>
      <svg
        className={cn(
          "absolute h-5 w-5 transition-transform duration-500",
          mounted && theme === "light" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4.5a1 1 0 0 1 1 1v1.75a1 1 0 0 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm7.5-2.25a1 1 0 0 1-1 1h-1.75a1 1 0 0 1 0-2H18.5a1 1 0 0 1 1 1Zm-12.75 0a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.75a1 1 0 0 1 1 1Zm10.19 5.94a1 1 0 0 1-1.41 0l-1.24-1.24a1 1 0 0 1 1.41-1.41l1.24 1.23a1 1 0 0 1 0 1.42ZM7.71 7.71a1 1 0 0 1-1.41 0L5.06 6.47a1 1 0 1 1 1.41-1.41l1.24 1.23a1 1 0 0 1 0 1.42Zm-1.41 9.88a1 1 0 0 1 1.41 0l1.24 1.24a1 1 0 0 1-1.41 1.41l-1.24-1.23a1 1 0 0 1 0-1.42ZM17.53 5.06a1 1 0 1 1 1.41 1.41l-1.24 1.24a1 1 0 0 1-1.41-1.42l1.24-1.23ZM12 19a1 1 0 0 1 1 1v1.75a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1Z" />
      </svg>
      <svg
        className={cn(
          "absolute h-5 w-5 transition-transform duration-500",
          mounted && theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21.752 15.002a.75.75 0 0 0-.966-.86 6.72 6.72 0 0 1-2.056.324 6.75 6.75 0 1 1 0-13.5 6.72 6.72 0 0 1 2.056.324.75.75 0 0 0 .966-.86 9 9 0 1 0 0 13.572Z" />
      </svg>
    </button>
  );
}
