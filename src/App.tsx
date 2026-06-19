import { Route, Routes } from "react-router-dom";
import "../lib/styles/index.css";
import {
  ButtonsScreen,
  CardsScreen,
  ChipsScreen,
  DashboardScreen,
  InputsScreen,
  NotificationsScreen,
  SelectsScreen,
  TogglesScreen,
} from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />
      <Route path="/components/buttons" element={<ButtonsScreen />} />
      <Route path="/components/cards" element={<CardsScreen />} />
      <Route path="/components/chips" element={<ChipsScreen />} />
      <Route path="/components/inputs" element={<InputsScreen />} />
      <Route path="/components/notifications" element={<NotificationsScreen />} />
      <Route path="/components/selects" element={<SelectsScreen />} />
      <Route path="/components/toggles" element={<TogglesScreen />} />

      {/* <Route path="/foundations" element={<FoundationsPage />} />
      <Route path="/foundations/colors" element={<ColorsPage />} />
      <Route path="/foundations/iconography" element={<IconographyPage />} />
      <Route path="/foundations/tokens" element={<TokensPage />} />
      <Route path="/foundations/typography" element={<TypographyPage />} /> */}

      <Route path="*" element={<DashboardScreen />} />
    </Routes>
  )
}

export { App };
