import {
  TextIndentIcon,
  TextOutdentIcon,
} from "@phosphor-icons/react";
import { useScreenSideNav } from "./ScreenSideNavContext";
import "./ScreenMainHeader.css";

interface ScreenMainHeaderProps {
  children: React.ReactNode
  className?: string
};

const ScreenMainHeader = ({ children, className = "" }: ScreenMainHeaderProps) => {
  const { isSideNavOpen, toggleSideNav } = useScreenSideNav();

  return (
    <div className={`screen-main-header ${className}`}>
      <button
        aria-label="Toggle side menu"
        aria-expanded={isSideNavOpen}
        className="screen-main-header-nav-toggle"
        onClick={toggleSideNav}
        type="button"
      >
        {isSideNavOpen ? <TextOutdentIcon weight="bold" /> : <TextIndentIcon weight="bold" />}
      </button>

      {children}
    </div>
  );
};

export { ScreenMainHeader };
