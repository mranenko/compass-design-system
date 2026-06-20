import { useState } from "react";
import {
  Breadcrumbs,
  Input,
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
import "./InputsScreen.css";

const code = `<Input placeholder="Placeholder" />
<Input defaultValue="With a value" />
<Input placeholder="Disabled" disabled />`;

const InputsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="inputs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Inputs" }]} />
          <Stack gap="0125">
            <h1>Inputs</h1>
            <p>Single-line text fields for collecting user input.</p>
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
            <Input placeholder="Placeholder" />
            <Input defaultValue="With a value" />
            <Input placeholder="Disabled" disabled />
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"}>
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { InputsScreen };
