import "./PageSidebarNav.scss";

import { NavLink } from "react-router-dom";

const PageSidebarNav = () => {
  return (
    <>
      <div className="page-sidebar">
        <nav className="page-sidebar-nav">
          <NavLink className="page-sidebar-nav-link" to="/">Introduction</NavLink>
          <NavLink className="page-sidebar-nav-link" to="/foundations">Foundations</NavLink>
          <NavLink className="page-sidebar-nav-link" to="/components">Components</NavLink>
        </nav>
      </div>
    </>
  )
};

export { PageSidebarNav };
