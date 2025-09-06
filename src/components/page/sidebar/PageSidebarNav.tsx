import "./PageSidebarNav.scss";

import { NavLink } from "react-router-dom";

const PageSidebarNav = () => {
  return (
    <>
      <div className="page-sidebar">
        <nav className="page-sidebar-nav">
          <div className="flex-column gap-1">
            <NavLink className="page-sidebar-nav-link" to="/">
              <h6>Introduction</h6>
            </NavLink>
          </div>

          <div className="flex-column gap-1">
            <NavLink title="Foundations" to="/foundations">
              <h6>Foundations</h6>
            </NavLink>

            <div className="page-sidebar-nav-links">
              <NavLink className="page-sidebar-nav-link" title="Colors" to="/foundations/colors">
                └ Colors
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Typography" to="/foundations/typography">
                └ Typography
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="TypogIconographyraphy" to="/foundations/iconography">
                └ Iconography
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Tokens" to="/foundations/tokens">
                └ Tokens
              </NavLink>
            </div>
          </div>

          <div className="flex-column gap-1">
            <NavLink className="page-sidebar-nav-link" to="/components">
              <h6>Components</h6>
            </NavLink>

            <div className="page-sidebar-nav-links">
              <NavLink className="page-sidebar-nav-link" title="Alerts" to="/components">
                └ Alerts
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Buttons" to="/components">
                └ Buttons
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Cards" to="/components/cards">
                └ Cards
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Inputs" to="/components">
                └ Inputs
              </NavLink>
              <NavLink className="page-sidebar-nav-link" title="Tags" to="/components">
                └ Tags
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
};

export { PageSidebarNav };
