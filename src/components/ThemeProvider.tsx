
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
      // Light mode - Warm, inviting, professional
      root.style.setProperty("--background", "#fafafa");
      root.style.setProperty("--foreground", "#18181b");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--card-border", "#e4e4e7");
      root.style.setProperty("--muted", "#71717a");
      root.style.setProperty("--accent", "#0891b2");
      root.style.setProperty("--shadow", "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)");
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#18181b";
    } else {
      // Dark mode - Rich, immersive
      root.style.setProperty("--background", "#09090b");
      root.style.setProperty("--foreground", "#fafafa");
      root.style.setProperty("--card", "#18181b");
      root.style.setProperty("--card-border", "#27272a");
      root.style.setProperty("--muted", "#a1a1aa");
      root.style.setProperty("--accent", "#06b6d4");
      root.style.setProperty("--shadow", "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)");
      document.body.style.backgroundColor = "#09090b";
      document.body.style.color = "#fafafa";
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
