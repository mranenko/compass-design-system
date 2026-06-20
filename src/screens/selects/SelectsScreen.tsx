import {
  Breadcrumbs,
  Select,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./SelectsScreen.css";

const SelectsScreen = () => {
  return (
    <Screen className="selects-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Selects" }]} />
          <h1>Selects</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <Stack direction="row" gap="1">
          <Select label="Fruit" defaultValue="apple">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
          </Select>
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { SelectsScreen };
