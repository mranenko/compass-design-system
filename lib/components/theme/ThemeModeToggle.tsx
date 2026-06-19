import { Moon, Sun } from "@phosphor-icons/react";
import { useHtmlAttribute } from "./useHtmlAttribute";
import "./ThemeModeToggle.css";

const ThemeModeToggle = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useHtmlAttribute(
    "data-mode",
    prefersDark ? "dark" : "light",
  );
  const next = mode === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-mode-toggle"
      type="button"
      onClick={() => setMode(next)}
      aria-label={`Switch to ${next} mode`}
    >
      {next === "dark" ? <Moon weight="fill" /> : <Sun weight="fill" />}
    </button>
  );
};

export { ThemeModeToggle };
