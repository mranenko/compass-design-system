import { useState } from "react";
import {
  Breadcrumbs,
  Card,
  CardContent,
  CardImage,
  Stack,
  Tab,
  TabContent,
  TabGroup,
} from "@lib/components";
import {
  CodeBlock,
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./CardsScreen.css";

const code = `<Card>
  <CardContent>
    <h3>Default card</h3>
    <p>Cards group related content and actions in a single container.</p>
  </CardContent>
</Card>

<Card>
  <CardImage>
    <img alt="placeholder image" src="/assets/images/placeholder/01.png" />
  </CardImage>
  <CardContent>
    <h3>Card with image</h3>
    <p>Cards group related content and actions in a single container.</p>
  </CardContent>
</Card>`;

const CardsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="cards-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Cards" }]} />
          <Stack gap="0125">
            <h1>Cards</h1>
            <p>Group related content and actions in a single container.</p>
          </Stack>

          <TabGroup>
            <Tab active={activeTab === "Examples"} onClick={() => setActiveTab("Examples")}>
              Examples
            </Tab>
            <Tab active={activeTab === "Code"} onClick={() => setActiveTab("Code")}>
              Code
            </Tab>
          </TabGroup>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <TabContent active={activeTab === "Examples"} padding="0">
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
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { CardsScreen };
