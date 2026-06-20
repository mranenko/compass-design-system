import { useState } from "react";
import {
  Breadcrumbs,
  Notification,
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
import "./NotificationsScreen.css";

const code = `<Notification title="Heads up">
  A default notification uses a neutral border.
</Notification>
<Notification status="info" title="Did you know?">
  Selects support keyboard navigation.
</Notification>
<Notification status="success" title="Saved">
  Your changes have been saved.
</Notification>
<Notification status="danger" title="Something went wrong">
  We couldn't save your changes.
</Notification>`;

const NotificationsScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="notifications-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Notifications" }]} />
          <Stack gap="0125">
            <h1>Notifications</h1>
            <p>Surface contextual messages with status colours.</p>
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
          <Stack direction="column" gap="1" width="full">
            <Notification title="Heads up">
              A default notification uses a neutral border.
            </Notification>
            <Notification status="info" title="Did you know?">
              Selects support keyboard navigation.
            </Notification>
            <Notification status="success" title="Saved">
              Your changes have been saved.
            </Notification>
            <Notification status="danger" title="Something went wrong">
              We couldn't save your changes.
            </Notification>
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { NotificationsScreen };
