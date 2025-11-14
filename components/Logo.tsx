"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { cn } from "../lib/utils";

export function Logo({
  className
}: {
  className?: string;
}) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/assets/Shosh-logo.png"
        alt="Shosh Technologies logo"
        width={140}
        height={40}
        priority
        className="h-10 w-auto transition-opacity duration-300"
      />
      <span className="text-base font-medium text-brand-navy dark:text-white sm:text-lg">
        Shosh Technologies Inc.
      </span>
    </div>
  );
}
