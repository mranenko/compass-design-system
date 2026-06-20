import { useState } from "react";
import {
  Breadcrumbs,
  Chip,
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
import "./ChipsScreen.css";

const code = `<Chip>Default</Chip>
<Chip color="primary">Primary</Chip>
<Chip color="secondary">Secondary</Chip>
<Chip color="danger">Danger</Chip>
<Chip color="success">Success</Chip>
<Chip color="info">Info</Chip>`;

const ChipsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="chips-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Chips" }]} />
          <Stack gap="0125">
            <h1>Chips</h1>
            <p>Compact labels for tags, statuses, and categories.</p>
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
          <Stack direction="row" gap="0375">
            <Chip>Default</Chip>
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary">Secondary</Chip>
            <Chip color="danger">Danger</Chip>
            <Chip color="success">Success</Chip>
            <Chip color="info">Info</Chip>
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { ChipsScreen };
