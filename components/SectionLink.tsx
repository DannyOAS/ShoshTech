"use client";

import { useRouter, usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

import { navigateToSection, SECTION_IDS } from "../lib/sectionNavigation";

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  section: string;
  href?: string;
};

export function SectionLink({ section, href, onClick, ...props }: SectionLinkProps) {
  const targetHref =
    href ?? (section === "home" ? "/" : `/?section=${encodeURIComponent(section)}`);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

    if (isModifiedClick) {
      onClick?.(event);
      return;
    }

    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (!SECTION_IDS.has(section)) {
      return;
    }

    const isOnHomePage = !pathname || pathname === "/";

    event.preventDefault();

    if (isOnHomePage) {
      navigateToSection(section);
      return;
    }

    const destination = section === "home" ? "/" : `/?section=${section}`;
    router.push(destination);
  };

  return <a {...props} href={targetHref} onClick={handleClick} />;
}
