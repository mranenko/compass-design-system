import { useState } from "react";
import {
  Breadcrumbs,
  Stack,
  Tab,
  TabContent,
  TabGroup,
  Toggle,
} from "@lib/components";
import {
  CodeBlock,
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./TogglesScreen.css";

const code = `<Toggle label="Off" />
<Toggle label="On" defaultChecked />
<Toggle label="Disabled" disabled />`;

const TogglesScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="toggles-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Toggles" }]} />
          <Stack gap="0125">
            <h1>Toggles</h1>
            <p>Switch a single setting on or off.</p>
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
        <TabContent active={activeTab === "Examples"}>
          <Stack direction="row" gap="1">
            <Toggle label="Off" />
            <Toggle label="On" defaultChecked />
            <Toggle label="Disabled" disabled />
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"}>
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { TogglesScreen };
