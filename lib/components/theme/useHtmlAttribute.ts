import { useState } from "react";

/**
 * Tracks a value in React state and mirrors it to an attribute on <html> when it
 * changes. Initial state reads the live <html> attribute so a freshly-mounted
 * control (e.g. on another page) reflects the current choice; it falls back to
 * `fallback` when unset, where the default is owned by CSS (color-scheme /
 * [data-theme]). Survives in-app navigation, but not a full reload — by design.
 */
const useHtmlAttribute = (attr: string, fallback: string) => {
  const [value, setValue] = useState(
    () => document.documentElement.getAttribute(attr) ?? fallback,
  );

  const update = (next: string) => {
    document.documentElement.setAttribute(attr, next);
    setValue(next);
  };

  return [value, update] as const;
};

export { useHtmlAttribute };
