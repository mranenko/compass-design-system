import {
  Breadcrumbs,
  Notification,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./NotificationsScreen.css";

const NotificationsScreen = () => {
  return (
    <Screen className="notifications-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Notifications" }]} />
          <h1>Notifications</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
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
      </ScreenContent>
    </Screen>
  );
};

export { NotificationsScreen };
