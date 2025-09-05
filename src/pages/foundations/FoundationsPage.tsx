import "./FoundationsPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../components";

const FoundationsPage = () => {
  return (
    <Page className="foundations-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System" title="Foundations" />
      </TextGroup>
    </Page>
  )
};

export { FoundationsPage };
