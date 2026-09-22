"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const storageKey = "portfolio-theme";
const mediaQuery = "(prefers-color-scheme: dark)";
const themeChangeEvent = "portfolio-theme-change";
const ThemeContext = createContext<ThemeContextValue | null>(null);

let fallbackChoice: Theme | null = null;

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored === "light" || stored === "dark" ? stored : fallbackChoice;
  } catch {
    return fallbackChoice;
  }
}

function getTheme(): Theme {
  return (
    getStoredTheme() ??
    (window.matchMedia(mediaQuery).matches ? "dark" : "light")
  );
}

function subscribeToTheme(onChange: () => void) {
  const systemTheme = window.matchMedia(mediaQuery);
  systemTheme.addEventListener("change", onChange);
  window.addEventListener("storage", onChange);
  window.addEventListener(themeChangeEvent, onChange);

  return () => {
    systemTheme.removeEventListener("change", onChange);
    window.removeEventListener("storage", onChange);
    window.removeEventListener(themeChangeEvent, onChange);
  };
}

function setTheme(theme: Theme) {
  try {
    localStorage.setItem(storageKey, theme);
    fallbackChoice = null;
  } catch {
    fallbackChoice = theme;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => null);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(getTheme() === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
