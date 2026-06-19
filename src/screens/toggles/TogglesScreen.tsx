import {
  Breadcrumbs,
  Stack,
  Toggle,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
} from "@src/components";
import "./TogglesScreen.css";

const TogglesScreen = () => {
  return (
    <Screen className="toggles-screen">
      <ScreenContent>
        <Breadcrumbs items={[{ label: "Components" }, { label: "Toggles" }]} />

        <h1>Toggles</h1>

        <Stack direction="row" gap="1">
          <Toggle label="Off" />
          <Toggle label="On" defaultChecked />
          <Toggle label="Disabled" disabled />
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { TogglesScreen };
