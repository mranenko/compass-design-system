import { NavLink } from "react-router-dom";
import "./ScreenSideNav.css";

const ScreenSideNav = () => {
  return (
    <nav className="screen-side-nav">
      <NavLink to="/" end className="screen-side-nav-link">
        Dashboard
      </NavLink>
      <NavLink to="/components/buttons" className="screen-side-nav-link">
        Buttons
      </NavLink>
      <NavLink to="/components/cards" className="screen-side-nav-link">
        Cards
      </NavLink>
      <NavLink to="/components/chips" className="screen-side-nav-link">
        Chips
      </NavLink>
      <NavLink to="/components/inputs" className="screen-side-nav-link">
        Inputs
      </NavLink>
      <NavLink to="/components/notifications" className="screen-side-nav-link">
        Notifications
      </NavLink>
      <NavLink to="/components/selects" className="screen-side-nav-link">
        Selects
      </NavLink>
      <NavLink to="/components/toggles" className="screen-side-nav-link">
        Toggles
      </NavLink>
    </nav>
  );
};

export { ScreenSideNav };
