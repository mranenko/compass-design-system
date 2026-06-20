import { useState } from "react";
import {
  Breadcrumbs,
  Button,
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
import "./ButtonsScreen.css";

const code = `<Button>Default button</Button>
<Button background="primary">Primary button</Button>
<Button background="secondary">Secondary button</Button>`;

const ButtonsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="buttons-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Buttons" }]} />
          <Stack gap="0125">
            <h1>Buttons</h1>
            <p>Trigger actions with primary, secondary, and default styles.</p>
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
          <Stack direction="row" gap="1">
            <Button>Default button</Button>
            <Button background="primary">Primary button</Button>
            <Button background="secondary">Secondary button</Button>
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { ButtonsScreen };
