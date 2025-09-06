import "./CardPage.scss";

import {
  Card,
  CardContent,
} from "../../../../lib/components";
import {
  EyebrowTitle,
  Page,
  TextGroup,
} from "../../../components";

const CardPage = () => {
  return (
    <Page className="card-page">
      <TextGroup>
        <EyebrowTitle eyebrow="Compass Design System / Components" title="Cards" />

        <Card>
          <CardContent>
            <h4>Card Title (default)</h4>
          </CardContent>
        </Card>
      </TextGroup>
    </Page>
  )
};

export { CardPage };
