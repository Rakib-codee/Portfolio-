
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newTheme);
    
    if (newTheme === "light") {
      // Light mode - Clean, minimal, high contrast
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#0f0f0f");
      root.style.setProperty("--card", "#f8f9fa");
      root.style.setProperty("--card-border", "#e2e8f0");
      root.style.setProperty("--muted", "#4a5568");
      root.style.setProperty("--accent", "#0891b2");
      root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.08)");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#0f0f0f";
    } else {
      // Dark mode
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#f5f5f5");
      root.style.setProperty("--card", "#171717");
      root.style.setProperty("--card-border", "#262626");
      root.style.setProperty("--muted", "#a3a3a3");
      root.style.setProperty("--accent", "#06b6d4");
      root.style.setProperty("--shadow", "rgba(0, 0, 0, 0.3)");
      document.body.style.backgroundColor = "#0a0a0a";
      document.body.style.color = "#f5f5f5";
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
