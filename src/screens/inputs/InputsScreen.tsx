import {
  Breadcrumbs,
  Input,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
} from "@src/components";
import "./InputsScreen.css";

const InputsScreen = () => {
  return (
    <Screen className="inputs-screen">
      <ScreenContent>
        <Breadcrumbs items={[{ label: "Components" }, { label: "Inputs" }]} />

        <h1>Inputs</h1>

        <Stack direction="row" gap="1">
          <Input placeholder="Placeholder" />
          <Input defaultValue="With a value" />
          <Input placeholder="Disabled" disabled />
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { InputsScreen };
