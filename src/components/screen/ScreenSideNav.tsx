import {
  LegoIcon,
  PuzzlePiece,
} from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import "./ScreenSideNav.css";
import { useScreenSideNav } from "./ScreenSideNavContext";

const ScreenSideNav = () => {
  const { isSideNavOpen } = useScreenSideNav();

  return (
    <nav
      className={`screen-side-nav ${isSideNavOpen ? "" : "screen-side-nav--closed"}`}
      inert={!isSideNavOpen}
    >
      <NavLink to="/" end className="screen-side-nav-link">Dashboard</NavLink>

      <h6 className="screen-side-nav-section-title">
        <i className="icon"><LegoIcon weight="bold" /></i>
        Foundations
      </h6>
      <NavLink to="/foundations/colour" className="screen-side-nav-link">Colour</NavLink>
      <NavLink to="/foundations/typography" className="screen-side-nav-link">Typography</NavLink>

      <h6 className="screen-side-nav-section-title">
        <i className="icon"><PuzzlePiece weight="bold" /></i>
        Components
      </h6>
      <NavLink to="/components/breadcrumbs" className="screen-side-nav-link">Breadcrumbs</NavLink>
      <NavLink to="/components/buttons" className="screen-side-nav-link">Buttons</NavLink>
      <NavLink to="/components/cards" className="screen-side-nav-link">Cards</NavLink>
      <NavLink to="/components/chips" className="screen-side-nav-link">Chips</NavLink>
      <NavLink to="/components/inputs" className="screen-side-nav-link">Inputs</NavLink>
      <NavLink to="/components/notifications" className="screen-side-nav-link">Notifications</NavLink>
      <NavLink to="/components/selects" className="screen-side-nav-link">Selects</NavLink>
      <NavLink to="/components/tabs" className="screen-side-nav-link">Tabs</NavLink>
      <NavLink to="/components/toggles" className="screen-side-nav-link">Toggles</NavLink>
    </nav>
  );
};

export { ScreenSideNav };
