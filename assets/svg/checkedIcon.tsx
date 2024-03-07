import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function CheckedIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="12" fill="#FB631D" />
      <Path
        d="M5.7583 11.7462L9.83123 15.8192L17.9762 7.67328"
        stroke="white"
        strokeWidth="1.92"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
