import "../lib/styles/index.scss";

import { Route, Routes } from "react-router-dom";

import {
  CardPage,
  ColorsPage,
  ComponentsPage,
  DashboardPage,
  FoundationsPage,
  IconographyPage,
  TokensPage,
  TypographyPage,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        <Route path="/foundations" element={<FoundationsPage />} />
        <Route path="/foundations/colors" element={<ColorsPage />} />
        <Route path="/foundations/iconography" element={<IconographyPage />} />
        <Route path="/foundations/tokens" element={<TokensPage />} />
        <Route path="/foundations/typography" element={<TypographyPage />} />

        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/cards" element={<CardPage />} />

        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export { App };
