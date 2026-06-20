import {
  Breadcrumbs,
  Stack,
} from "@lib/components";
import {
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./BreadcrumbsScreen.css";

const BreadcrumbsScreen = () => {
  return (
    <Screen className="breadcrumbs-screen">
      <ScreenMainHeader>
        <ScreenContent gap="05">
          <Breadcrumbs items={[{ label: "Components" }, { label: "Breadcrumbs" }]} />
          <h1>Breadcrumbs</h1>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
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
      </ScreenContent>
    </Screen>
  );
};

export { BreadcrumbsScreen };
