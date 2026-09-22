"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "@/components/ui/theme-provider";
import styles from "./theme-toggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const actionLabel = theme === null
    ? "Theme loading"
    : `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      className={styles.themeToggle}
      type="button"
      aria-label={actionLabel}
      title={actionLabel}
      disabled={theme === null}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </button>
  );
}
