import {
  Breadcrumbs,
  Chip,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
} from "@src/components";
import "./ChipsScreen.css";

const ChipsScreen = () => {
  return (
    <Screen className="chips-screen">
      <ScreenContent>
        <Breadcrumbs items={[{ label: "Components" }, { label: "Chips" }]} />

        <h1>Chips</h1>

        <Stack direction="row" gap="0375">
          <Chip>One</Chip>
          <Chip>Two</Chip>
          <Chip>Three</Chip>
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { ChipsScreen };
