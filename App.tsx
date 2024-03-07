import React from "react";

import { TamaguiProvider, createFont, createTamagui } from "@tamagui/core";
import "@tamagui/core/reset.css";

import { config } from "@tamagui/config";
import TakeAwayOptions from "./screens/TakeAwayOptions";

const fontFace = {
  normal: { normal: "Gilroy-Medium" },
  bold: { normal: "Gilroy-Bold" },
  300: { normal: "Gilroy-Light" },
  700: { normal: "Gilroy-Bold" },
};

const headingFont = createFont({
  size: config.fonts.heading.size,
  lineHeight: config.fonts.heading.lineHeight,
  weight: config.fonts.heading.weight,
  letterSpacing: config.fonts.heading.letterSpacing,
  face: fontFace,
});

const bodyFont = createFont({
  size: config.fonts.body.size,
  lineHeight: config.fonts.body.lineHeight,
  weight: config.fonts.body.weight,
  letterSpacing: config.fonts.body.letterSpacing,
  face: fontFace,
});

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* <Greetings /> */}
      {/* <Onboarding /> */}
      {/* <RestaurantChoosing /> */}
      {/* <OptionChoosing /> */}
      <TakeAwayOptions />
    </TamaguiProvider>
  );
};
export default App;
