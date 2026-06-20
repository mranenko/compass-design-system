import {
  Breadcrumbs,
  Button,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./ButtonsScreen.css";

const ButtonsScreen = () => {
  return (
    <Screen className="buttons-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Buttons" }]} />
          <h1>Buttons</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <Stack direction="row" gap="1">
          <Button>Default button</Button>
          <Button background="primary">Primary button</Button>
          <Button background="secondary">Secondary button</Button>
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { ButtonsScreen };
