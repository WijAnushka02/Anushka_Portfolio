import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full glass cursor-pointer transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-[var(--color-highlight)]" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--color-primary)]" />
      )}
    </button>
  );
};
