import { useState } from "react";
import {
  Breadcrumbs,
  Stack,
  Tab,
  TabContent,
  TabGroup,
} from "@lib/components";
import {
  CodeBlock,
  Screen,
  ScreenContent,
  ScreenMainHeader,
} from "@src/components";
import "./TypographyScreen.css";

const fontFamilies = [
  { name: "Montserrat Alternates", token: "--font-family-title" },
  { name: "Lexend", token: "--font-family-text" },
  { name: "Geist Mono", token: "--font-family-mono" },
];

const code = `:root {
  /* font families */
  --font-family-title: "Montserrat Alternates", sans-serif;
  --font-family-text: "Lexend", sans-serif;
  --font-family-mono: "Geist Mono", monospace;

  /* regular font properties */
  --font-size-regular: 1rem;
  --font-weight-regular: 400;
  --line-height-regular: 1.62;
  --letter-spacing-regular: 2%;

  /* regular font properties */
  --font-size-small: .875rem;
  --letter-spacing-small: 2%;

  /* caption font properties */
  --font-size-caption: .75rem;
  --letter-spacing-caption: 6%;
}
`;

const TypographyScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");

  return (
    <Screen className="typography-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Foundations" }, { label: "Typography" }]} />
          <Stack gap="0125">
            <h1>Typography</h1>
            <p>Type families and scale that keep text legible and consistent.</p>
          </Stack>

          <TabGroup>
            <Tab active={activeTab === "Examples"} onClick={() => setActiveTab("Examples")}>
              Examples
            </Tab>
            <Tab active={activeTab === "Code"} onClick={() => setActiveTab("Code")}>
              Code
            </Tab>
          </TabGroup>
        </ScreenContent>
      </ScreenMainHeader>

      <ScreenContent>
        <TabContent active={activeTab === "Examples"} padding="0">
          <Stack gap="15" width="full">
            <Stack gap="075" width="full">
              <h3>Font families</h3>
              <div className="typography-screen-grid">
                {fontFamilies.map(({ name, token }) => (
                  <Stack key={token} gap="025">
                    <span
                      className="typography-screen-family-sample"
                      style={{ fontFamily: `var(${token})` }}
                    >
                      Aa
                    </span>
                    <Stack gap="0125">
                      <span className="typography-screen-name">{name}</span>
                      <code className="typography-screen-token">{token}</code>
                    </Stack>
                  </Stack>
                ))}
              </div>
            </Stack>

            <Stack gap="075">
              <h3>Type scale</h3>
              <Stack gap="05">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </Stack>
            </Stack>

            <Stack gap="075">
              <h3>Body text</h3>
              <Stack gap="05">
                <Stack gap="0125">
                  <span className="typography-screen-regular">
                    Sixty zippers were quickly picked from the woven jute bag.
                  </span>
                  <span className="caption">Regular</span>
                </Stack>

                <Stack gap="0125">
                  <span className="typography-screen-small">
                    Sixty zippers were quickly picked from the woven jute bag.
                  </span>
                  <span className="caption">Small</span>
                </Stack>

                <Stack gap="0125">
                  <span className="typography-screen-caption">
                    Sixty zippers were quickly picked from the woven jute bag.
                  </span>
                  <span className="caption">Caption</span>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </TabContent>

        <TabContent active={activeTab === "Code"} padding="0">
          <CodeBlock>{code}</CodeBlock>
        </TabContent>
      </ScreenContent>
    </Screen>
  );
};

export { TypographyScreen };
