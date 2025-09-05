import "./styles/index.scss";

import { Route, Routes } from "react-router-dom";

import {
  ComponentsPage,
  DashboardPage,
  FoundationsPage,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export { App };
