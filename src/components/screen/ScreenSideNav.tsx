import { NavLink } from "react-router-dom";
import { useScreenSideNav } from "./ScreenSideNavContext";
import "./ScreenSideNav.css";

const ScreenSideNav = () => {
  const { isSideNavOpen } = useScreenSideNav();

  return (
    <nav
      className={`screen-side-nav ${isSideNavOpen ? "" : "screen-side-nav--closed"}`}
      inert={!isSideNavOpen}
    >
      <NavLink to="/" end className="screen-side-nav-link">Dashboard</NavLink>

      <h6 className="screen-side-nav-section-title">Components</h6>
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
