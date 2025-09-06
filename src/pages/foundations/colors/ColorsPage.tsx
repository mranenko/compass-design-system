import "./ColorsPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../../components";

const ColorsPage = () => {
  return (
    <Page className="colors-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System / Foundations" title="Colors" />
      </TextGroup>
    </Page>
  )
};

export { ColorsPage };
