import {
  FigmaLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import "./ScreenFooter.css";

const ScreenFooter = () => {
  return (
    <footer className="screen-footer">
      <NavLink to="/">Compass Design System</NavLink>
      <nav className="screen-footer-nav">
        <NavLink target="_blank" to="https://www.figma.com/design/xZrAdG2DbluIZ1u5UhtsBB/Compass-Design-System-2.0-2026">
          <i className="icon"><FigmaLogoIcon /></i>
        </NavLink>
        <NavLink target="_blank" to="https://github.com/mranenko/compass-design-system">
          <i className="icon"><GithubLogoIcon /></i>
        </NavLink>
      </nav>      
    </footer>
  );
};

export { ScreenFooter };
