import "./FoundationsPage.scss";

import { NavLink } from "react-router-dom";

import {
  Card,
  CardContent,
} from "../../../lib/components";
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

        <NavLink title="Colors" to="/foundations/colors">
          <Card>
            <CardContent>
              <h4>Colors</h4>
            </CardContent>
          </Card>
        </NavLink>

        <NavLink title="Colors" to="/foundations/typography">
          <Card>
            <CardContent>
              <h4>Typography</h4>
            </CardContent>
          </Card>
        </NavLink>

        <NavLink title="Colors" to="/foundations/iconography">
          <Card>
            <CardContent>
              <h4>Iconography</h4>
            </CardContent>
          </Card>
        </NavLink>

        <NavLink title="Colors" to="/foundations/tokens">
          <Card>
            <CardContent>
              <h4>Tokens</h4>
            </CardContent>
          </Card>
        </NavLink>
      </TextGroup>
    </Page>
  )
};

export { FoundationsPage };
