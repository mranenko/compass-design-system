import "./DashboardPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../components";

const DashboardPage = () => {
  return (
    <Page className="dashboard-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System" title="Dashboard" />
        <p>
          This design system was created for a learning management system (LMS) and includes two
          color themes, each with light and dark modes. Any and all parts of this design system can
          be changed or expanded, or used as provided here.
        </p>
      </TextGroup>
    </Page>
  )
};

export { DashboardPage };
