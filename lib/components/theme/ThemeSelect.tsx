import { CaretDown } from "@phosphor-icons/react";
import { useHtmlAttribute } from "./useHtmlAttribute";
import "./ThemeSelect.css";

const ThemeSelect = () => {
  const [theme, setTheme] = useHtmlAttribute("data-theme", "tourmaline");

  return (
    <div className="theme-select">
      <select
        className="theme-select-input"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        aria-label="Theme"
      >
        <option value="tourmaline">Tourmaline</option>
        <option value="amethyst">Amethyst</option>
      </select>
      <CaretDown className="theme-select-caret" weight="bold" aria-hidden />
    </div>
  );
};

export { ThemeSelect };
