import "./ComponentsPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../components";

const ComponentsPage = () => {
  return (
    <Page className="components-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System" title="Components" />
      </TextGroup>
    </Page>
  )
};

export { ComponentsPage };
