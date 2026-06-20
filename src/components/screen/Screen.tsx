import { useEffect } from "react";
import { ScreenFooter } from "./ScreenFooter";
import { ScreenHeader } from "./ScreenHeader";
import { ScreenSideNav } from "./ScreenSideNav";
import { ScreenSideNavProvider } from "./ScreenSideNavContext";
import "./Screen.css";

interface ScreenProps {
  children: React.ReactNode
  className?: string
};

const Screen = ({ children, className = "" }: ScreenProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <ScreenSideNavProvider>
      <div className={`screen ${className}`}>
        <ScreenHeader />

        <div className="screen-body">
          <ScreenSideNav />

          <main className="screen-main">
            {children}
          </main>
        </div>

        <ScreenFooter />
      </div>
    </ScreenSideNavProvider>
  );
};

export { Screen };
