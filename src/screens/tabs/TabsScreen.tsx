import { useState } from "react";
import {
  Breadcrumbs,
  Tab,
  TabContent,
  TabGroup,
} from "@lib/components";
import {
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

const TabsScreen = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <Screen className="tabs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Tabs" }]} />
          <h1>Tabs</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
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
        ))}
      </ScreenContent>
    </Screen>
  );
};

export { TabsScreen };
