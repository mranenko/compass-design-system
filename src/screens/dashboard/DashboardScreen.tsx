import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./DashboardScreen.css";

const DashboardScreen = () => {
  return (
    <Screen className="dashboard-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <h1>Dashboard</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <p>
          Compass is a design system created for a learning management system. It
          includes two colour themes: tourmaline and amethyst, each available in
          a light and a dark mode.
        </p>
      </ScreenContent>
    </Screen>
  );
};

export { DashboardScreen };
