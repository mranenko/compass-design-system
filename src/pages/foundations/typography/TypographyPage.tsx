import "./TypographyPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../../components";

const TypographyPage = () => {
  return (
    <Page className="typography-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System / Foundations" title="Typography" />
      </TextGroup>
    </Page>
  )
};

export { TypographyPage };
