import {
  Stack,
  ThemeModeToggle,
  ThemeSelect,
} from "@lib/components";
import { NavLink } from "react-router-dom";
import "./ScreenHeader.css";

const ScreenHeader = () => {
  return (
    <header className="screen-header">
      <NavLink to="/">
        <h3>Compass Design System</h3>
      </NavLink>

      <Stack direction="row" gap="05">
        <ThemeSelect />
        <ThemeModeToggle />
      </Stack>
    </header>
  );
};

export { ScreenHeader };
