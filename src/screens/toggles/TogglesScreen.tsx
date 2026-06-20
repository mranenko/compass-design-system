import {
  Breadcrumbs,
  Stack,
  Toggle,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./TogglesScreen.css";

const TogglesScreen = () => {
  return (
    <Screen className="toggles-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Toggles" }]} />
          <h1>Toggles</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
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
