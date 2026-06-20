import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./DashboardScreen.css";

const components = [
  { name: "Breadcrumbs", href: "/components/breadcrumbs", description: "Show the user's location within a navigational hierarchy." },
  { name: "Buttons", href: "/components/buttons", description: "Trigger actions with primary, secondary, and default styles." },
  { name: "Cards", href: "/components/cards", description: "Group related content and actions in a single container." },
  { name: "Chips", href: "/components/chips", description: "Compact labels for tags, statuses, and categories." },
  { name: "Inputs", href: "/components/inputs", description: "Single-line text fields for collecting user input." },
  { name: "Notifications", href: "/components/notifications", description: "Surface contextual messages with status colours." },
  { name: "Selects", href: "/components/selects", description: "Choose a single option from a dropdown list." },
  { name: "Tabs", href: "/components/tabs", description: "Switch between related views within the same context." },
  { name: "Toggles", href: "/components/toggles", description: "Switch a single setting on or off." },
];

const DashboardScreen = () => {
  return (
    <Screen className="dashboard-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Stack gap="0125">
            <h1>Dashboard</h1>
            <p>
              Compass is a design system created for a learning management system. It
              includes two colour themes: tourmaline and amethyst, each available in
              a light and a dark mode.
            </p>
          </Stack>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent gap="2">
        <h2>Components</h2>

        <div className="dashboard-screen-component-card-grid">
          {components.map((component) => (
            <Link key={component.name} to={component.href} className="dashboard-gallery-link">
              <Card className="dashboard-gallery-card">
                <CardContent>
                  <h3>{component.name}</h3>
                  <p>{component.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </ScreenContent>
    </Screen>
  );
};

export { DashboardScreen };
