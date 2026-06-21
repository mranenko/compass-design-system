import { Route, Routes } from "react-router-dom";
import "../lib/styles/index.css";
import {
  BreadcrumbsScreen,
  ButtonsScreen,
  CardsScreen,
  ChipsScreen,
  ColourScreen,
  DashboardScreen,
  InputsScreen,
  NotificationsScreen,
  SelectsScreen,
  TabsScreen,
  TogglesScreen,
  TypographyScreen,
} from "./screens";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardScreen />} />

      <Route path="/components/breadcrumbs" element={<BreadcrumbsScreen />} />
      <Route path="/components/buttons" element={<ButtonsScreen />} />
      <Route path="/components/cards" element={<CardsScreen />} />
      <Route path="/components/chips" element={<ChipsScreen />} />
      <Route path="/components/inputs" element={<InputsScreen />} />
      <Route path="/components/notifications" element={<NotificationsScreen />} />
      <Route path="/components/selects" element={<SelectsScreen />} />
      <Route path="/components/tabs" element={<TabsScreen />} />
      <Route path="/components/toggles" element={<TogglesScreen />} />

      <Route path="/foundations/colour" element={<ColourScreen />} />
      <Route path="/foundations/typography" element={<TypographyScreen />} />

      <Route path="*" element={<DashboardScreen />} />
    </Routes>
  )
}

export { App };
