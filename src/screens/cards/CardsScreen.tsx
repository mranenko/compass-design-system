import {
  Breadcrumbs,
  Card,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
} from "@src/components";
import "./CardsScreen.css";

const CardsScreen = () => {
  return (
    <Screen className="cards-screen">
      <ScreenContent>
        <Breadcrumbs items={[{ label: "Components" }, { label: "Cards" }]} />

        <h1>Cards</h1>

        <Stack direction="row" gap="1">
          <Card>
            <h3>Card title</h3>
            <p>Cards group related content and actions in a single container.</p>
          </Card>
          <Card>
            <h3>Another card</h3>
            <p>Use them to build dashboards, lists, and detail layouts.</p>
          </Card>
        </Stack>
      </ScreenContent>
    </Screen>
  );
};

export { CardsScreen };
