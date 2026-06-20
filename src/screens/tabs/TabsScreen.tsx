import { useState } from "react";
import {
  Breadcrumbs,
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
import "./TabsScreen.css";

const tabs = [
  { label: "Overview", content: "Overview content goes here." },
  { label: "Activity", content: "Activity content goes here." },
  { label: "Settings", content: "Settings content goes here." },
];

const code = `const [activeTab, setActiveTab] = useState("Overview");

<TabGroup>
  {tabs.map((tab) => (
    <Tab
      key={tab.label}
      active={tab.label === activeTab}
      onClick={() => setActiveTab(tab.label)}
    >
      {tab.label}
    </Tab>
  ))}
</TabGroup>

{tabs.map((tab) => (
  <TabContent key={tab.label} active={tab.label === activeTab}>
    {tab.content}
  </TabContent>
))}`;

const TabsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");
  const [activeDemoTab, setActiveDemoTab] = useState(tabs[0].label);

  return (
    <Screen className="tabs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Tabs" }]} />
          <Stack gap="0125">
            <h1>Tabs</h1>
            <p>Switch between related views within the same context.</p>
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
          <TabGroup>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                active={tab.label === activeDemoTab}
                onClick={() => setActiveDemoTab(tab.label)}
              >
                {tab.label}
              </Tab>
            ))}
          </TabGroup>

          {tabs.map((tab) => (
            <TabContent key={tab.label} active={tab.label === activeDemoTab}>
              {tab.content}
            </TabContent>
          ))}
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { TabsScreen };
