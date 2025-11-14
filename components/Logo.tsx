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
    <Image
      src="/assets/Shosh-logo.png"
      alt="Shosh Technologies logo"
      width={140}
      height={40}
      priority
      className={cn("h-10 w-auto transition-opacity duration-300", className)}
    />
  );
}
