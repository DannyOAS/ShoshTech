"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  const applyTheme = useCallback((themeValue: Theme) => {
    if (typeof window === "undefined") {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(themeValue);
    root.style.colorScheme = themeValue;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolveTheme = (matches: boolean) => (matches ? "dark" : "light");
    const updateTheme = (matches: boolean) => {
      const resolvedTheme = resolveTheme(matches);
      setThemeState(resolvedTheme);
      applyTheme(resolvedTheme);
    };

    updateTheme(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      updateTheme(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [applyTheme]);

  const setTheme = useCallback(
    (themeValue: Theme) => {
      setThemeState(themeValue);
      applyTheme(themeValue);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme
    }),
    [setTheme, theme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
