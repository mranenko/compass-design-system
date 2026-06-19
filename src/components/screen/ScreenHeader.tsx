import {
  Stack,
  ThemeModeToggle,
  ThemeSelect,
} from "@lib/components";
import "./ScreenHeader.css";

const ScreenHeader = () => {
  return (
    <header className="screen-header">
      <h3>Compass Design System</h3>
      <Stack direction="row" gap="1">
        <ThemeSelect />
        <ThemeModeToggle />
      </Stack>
    </header>
  );
};

export { ScreenHeader };
