import { useEffect, useState } from "react";
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
import "./ColourScreen.css";

const accentColours = [
  { name: "Primary", token: "--color-primary" },
  { name: "Secondary", token: "--color-secondary" },
  { name: "Danger", token: "--color-danger" },
  { name: "Success", token: "--color-success" },
  { name: "Info", token: "--color-info" },
];

const surfaceColours = [
  { name: "Background light", token: "--color-background-neutral-light" },
  { name: "Background default", token: "--color-background-neutral-default" },
  { name: "Background dark", token: "--color-background-neutral-dark" },
  { name: "Border neutral", token: "--color-border-neutral" },
];

const foregroundColours = [
  { name: "Foreground strong", token: "--color-foreground-strong" },
  { name: "Foreground default", token: "--color-foreground-default" },
  { name: "Foreground subtle", token: "--color-foreground-subtle" },
];

const scaleSteps = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
];

type PaletteScale = { name: string; family: string };

const themeScales: Record<string, PaletteScale[]> = {
  tourmaline: [
    { name: "Tourmaline", family: "tourmaline" },
    { name: "Larimar", family: "larimar" },
  ],
  amethyst: [
    { name: "Amethyst", family: "amethyst" },
    { name: "Iolite", family: "iolite" },
  ],
};

const paletteScales = [
  { name: "Garnet", family: "garnet" },
  { name: "Emerald", family: "emerald" },
  { name: "Tanzanite", family: "tanzanite" },
  { name: "Quartz", family: "quartz" },
  { name: "Onyx", family: "onyx" },
];

const useActiveTheme = () => {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? "tourmaline",
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme ?? "tourmaline");
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return theme;
};

const code = `:root,
[data-theme="tourmaline"] {
  /* primary & secondary */
  --color-primary: light-dark(var(--color-tourmaline-140), var(--color-tourmaline-50));
  --color-secondary: light-dark(var(--color-larimar-40), var(--color-larimar-120));

  /* status */
  --color-danger: light-dark(var(--color-garnet-110), var(--color-garnet-50));
  --color-success: light-dark(var(--color-emerald-140), var(--color-emerald-60));
  --color-info: light-dark(var(--color-tanzanite-120), var(--color-tanzanite-50));

  /* surfaces */
  --color-background-neutral-light: light-dark(var(--color-quartz-10), var(--color-onyx-140));
  --color-background-neutral-default: light-dark(var(--color-quartz-20), var(--color-onyx-150));
  --color-background-neutral-dark: light-dark(var(--color-quartz-30), var(--color-onyx-160));
  --color-border-neutral: light-dark(var(--color-quartz-40), var(--color-onyx-130));

  /* foregrounds */
  --color-foreground-strong: light-dark(var(--color-onyx-160), var(--color-quartz-10));
  --color-foreground-default: light-dark(var(--color-onyx-140), var(--color-quartz-30));
  --color-foreground-subtle: light-dark(var(--color-onyx-110), var(--color-quartz-50));
}
  
[data-theme="amethyst"] {
  --color-primary: light-dark(var(--color-amethyst-120), var(--color-amethyst-50));
  --color-secondary: light-dark(var(--color-iolite-40), var(--color-iolite-100));
}
  
[data-mode="light"] { color-scheme: light; }
[data-mode="dark"] { color-scheme: dark; }
`;

const ColourScreen = () => {
  const [activeTab, setActiveTab] = useState("Examples");
  const activeTheme = useActiveTheme();

  const scales = [
    ...(themeScales[activeTheme] ?? themeScales.tourmaline),
    ...paletteScales,
  ];

  return (
    <Screen className="colour-screen">
      <ScreenMainHeader>
        <ScreenContent gap="1">
          <Breadcrumbs items={[{ label: "Foundations" }, { label: "Colour" }]} />
          <Stack gap="0125">
            <h1>Colour</h1>
            <p>Semantic colour tokens that respond to theme and mode automatically.</p>
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
              <h3>Primary, secondary, and status colours</h3>
              <div className="colour-screen-grid">
                {accentColours.map(({ name, token }) => (
                  <Stack key={token} gap="025">
                    <div className="colour-screen-swatch" style={{ background: `var(${token})` }} />
                    <Stack gap="0125">
                      <span className="colour-screen-name">{name}</span>
                      <code className="colour-screen-token">{token}</code>
                    </Stack>
                  </Stack>
                ))}
              </div>
            </Stack>

            <Stack gap="075" width="full">
              <h3>Surfaces</h3>
              <div className="colour-screen-grid">
                {surfaceColours.map(({ name, token }) => (
                  <Stack key={token} gap="025">
                    <div
                      className="colour-screen-swatch colour-screen-swatch--bordered"
                      style={{ background: `var(${token})` }}
                    />
                    <Stack gap="0125">
                      <span className="colour-screen-name">{name}</span>
                      <code className="colour-screen-token">{token}</code>
                    </Stack>
                  </Stack>
                ))}
              </div>
            </Stack>

            <Stack gap="075" width="full">
              <h3>Foregrounds</h3>
              <div className="colour-screen-grid">
                {foregroundColours.map(({ name, token }) => (
                  <Stack key={token} gap="025">
                    <div className="colour-screen-swatch" style={{ background: `var(${token})` }} />
                    <Stack gap="0125">
                      <span className="colour-screen-name">{name}</span>
                      <code className="colour-screen-token">{token}</code>
                    </Stack>
                  </Stack>
                ))}
              </div>
            </Stack>

            <Stack gap="075" width="full">
              <h3>Palette scale</h3>
              <p>Each base colour exposes a 10 (lightest) → 160 (darkest) scale.</p>
              {scales.map(({ name, family }) => (
                <Stack key={family} gap="025" width="full">
                  <span className="colour-screen-name">{name}</span>
                  <div className="colour-screen-scale">
                    {scaleSteps.map((step) => {
                      const borderStep =
                        step <= 30 ? 40 : step >= 140 ? 130 : null;

                      return (
                      <div
                        key={step}
                        className="colour-screen-scale-step"
                        title={`--color-${family}-${step}`}
                      >
                        <div
                          className="colour-screen-scale-swatch"
                          style={{
                            background: `var(--color-${family}-${step})`,
                            ...(borderStep
                              ? { border: `1px solid var(--color-${family}-${borderStep})` }
                              : {}),
                          }}
                        />
                        <span>{step}</span>
                      </div>
                      );
                    })}
                  </div>
                </Stack>
              ))}
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

export { ColourScreen };
