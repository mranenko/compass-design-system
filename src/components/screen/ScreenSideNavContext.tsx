import { createContext, useContext, useState } from "react";

interface ScreenSideNavContextValue {
  isSideNavOpen: boolean
  toggleSideNav: () => void
};

const ScreenSideNavContext = createContext<ScreenSideNavContextValue | undefined>(undefined);

const ScreenSideNavProvider = ({ children }: { children: React.ReactNode }) => {
  // Default to open on desktop (>= 40rem) and hidden on mobile.
  const [isSideNavOpen, setIsSideNavOpen] = useState(
    () => window.matchMedia("(min-width: 40rem)").matches,
  );
  const toggleSideNav = () => setIsSideNavOpen((open) => !open);

  return (
    <ScreenSideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </ScreenSideNavContext.Provider>
  );
};

const useScreenSideNav = () => {
  const context = useContext(ScreenSideNavContext);
  if (!context) {
    throw new Error("useScreenSideNav must be used within a ScreenSideNavProvider");
  }
  return context;
};

export { ScreenSideNavProvider, useScreenSideNav };
