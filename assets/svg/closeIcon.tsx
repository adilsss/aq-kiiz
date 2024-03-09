import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function CloseIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M13 13L7.00002 7.00002M7.00002 7.00002L1 1M7.00002 7.00002L13 1M7.00002 7.00002L1 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
