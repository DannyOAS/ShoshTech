export const SECTION_IDS = new Set(["home", "about", "services", "products", "blog", "contact"]);
const SECTION_QUERY_PARAM = "section";

function removeLeadingHash(value: string) {
  return value.startsWith("#") ? value.slice(1) : value;
}

export function parseSectionFromHash(hash: string): string | null {
  const sectionId = removeLeadingHash(hash);
  if (!sectionId || !SECTION_IDS.has(sectionId)) {
    return null;
  }
  return sectionId;
}

export function parseSectionFromSearch(search: string): string | null {
  if (!search) {
    return null;
  }

  try {
    const params = new URLSearchParams(search);
    const sectionId = params.get(SECTION_QUERY_PARAM) ?? "";
    if (!sectionId || !SECTION_IDS.has(sectionId)) {
      return null;
    }
    return sectionId;
  } catch {
    return null;
  }
}

export function scrollToSection(sectionId: string, options?: ScrollIntoViewOptions) {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return;
  }

  if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: options?.behavior ?? "smooth" });
    return;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: options?.behavior ?? "smooth",
    block: options?.block ?? "start",
    inline: options?.inline ?? "nearest"
  });
}

export function removeHashFromUrl() {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.location.hash) {
    return;
  }

  const { pathname, search } = window.location;
  window.history.replaceState(null, "", `${pathname}${search}`);
}

export function removeSectionParamFromUrl() {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.location.search) {
    return;
  }

  try {
    const url = new URL(window.location.href);
    if (!url.searchParams.has(SECTION_QUERY_PARAM)) {
      return;
    }

    url.searchParams.delete(SECTION_QUERY_PARAM);
    const paramsString = url.searchParams.toString();
    const newSearch = paramsString ? `?${paramsString}` : "";
    const newUrl = `${url.pathname}${newSearch}${url.hash}`;
    window.history.replaceState(null, "", newUrl);
  } catch {
    // Ignore malformed URLs.
  }
}

export function navigateToSection(sectionId: string, options?: ScrollIntoViewOptions) {
  scrollToSection(sectionId, options);
  removeHashFromUrl();
  removeSectionParamFromUrl();
}
