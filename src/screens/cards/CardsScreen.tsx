import {
  Breadcrumbs,
  Card,
  CardContent,
  CardImage,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./CardsScreen.css";

const CardsScreen = () => {
  return (
    <Screen className="cards-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Cards" }]} />
          <h1>Cards</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <div className="cards-screen-grid">
          <Stack gap="1">
            <Card>
              <CardContent>
                <h3>Default card</h3>
                <p>Cards group related content and actions in a single container.</p>
              </CardContent>
            </Card>
          </Stack>

          <Stack gap="1">
            <Card>
              <CardImage>
                <img alt="placeholder image" src="/assets/images/placeholder/01.png" />
              </CardImage>
              <CardContent>
                <h3>Card with image</h3>
                <p>Cards group related content and actions in a single container.</p>
              </CardContent>
            </Card>
          </Stack>
        </div>
      </ScreenContent>
    </Screen>
  );
};

export { CardsScreen };
