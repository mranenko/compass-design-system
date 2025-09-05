import "./PageSidebarNav.scss";

import { NavLink } from "react-router-dom";

import {TextGroup } from "../../../components";

const PageSidebarNav = () => {
  return (
    <>
      <div className="page-sidebar">
        <nav className="page-sidebar-nav">
          <TextGroup>
            <NavLink className="page-sidebar-nav-link" to="/">
              <h6>Introduction</h6>
            </NavLink>
          </TextGroup>

          <TextGroup>
            <NavLink className="page-sidebar-nav-link" to="/foundations">
              <h6>Foundations</h6>
            </NavLink>
          </TextGroup>

          <TextGroup>
            <NavLink className="page-sidebar-nav-link" to="/components">
              <h6>Components</h6>
            </NavLink>
          </TextGroup>
        </nav>
      </div>
    </>
  )
};

export { PageSidebarNav };
