"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={
        theme === null
          ? "Theme loading"
          : `Current theme: ${theme}. Switch to ${theme === "dark" ? "light" : "dark"} theme`
      }
      disabled={theme === null}
      onClick={toggleTheme}
    >
      {theme === null ? "Theme" : `${theme === "dark" ? "Dark" : "Light"} mode`}
    </button>
  );
}
