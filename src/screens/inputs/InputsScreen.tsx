import {
  Breadcrumbs,
  Input,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./InputsScreen.css";

const InputsScreen = () => {
  return (
    <Screen className="inputs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Inputs" }]} />
          <h1>Inputs</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
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
