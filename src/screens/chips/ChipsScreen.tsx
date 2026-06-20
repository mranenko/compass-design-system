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
          <Chip>Default</Chip>
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="danger">Danger</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="info">Info</Chip>
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { ChipsScreen };
