import "./TokensPage.scss";

import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../../components";

const TokensPage = () => {
  return (
    <Page className="tokens-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System / Foundations" title="Tokens" />
      </TextGroup>
    </Page>
  )
};

export { TokensPage };
