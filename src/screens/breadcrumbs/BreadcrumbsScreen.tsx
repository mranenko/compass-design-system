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
import "./BreadcrumbsScreen.css";

const code = `<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components/breadcrumbs" },
    { label: "Breadcrumbs" },
  ]}
/>

<Breadcrumbs
  items={[
    { label: "Components" },
    { label: "Breadcrumbs" },
  ]}
/>`;

const BreadcrumbsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="breadcrumbs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Breadcrumbs" }]} />
          <Stack gap="0125">
            <h1>Breadcrumbs</h1>
            <p>Show the user's location within a navigational hierarchy.</p>
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
          <Stack direction="column" gap="1">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components/breadcrumbs" },
                { label: "Breadcrumbs" },
              ]}
            />

            <Breadcrumbs
              items={[
                { label: "Components" },
                { label: "Breadcrumbs" },
              ]}
            />
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"}>
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { BreadcrumbsScreen };
