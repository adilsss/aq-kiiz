import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Text, View } from "tamagui";

export default function ProfileIcon({ focused }) {
  return (
    <View alignItems="center" marginTop={30}>
      <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
        <Path
          d="M23.5423 26.8039C21.5663 24.5971 18.6953 23.2083 15.5 23.2083C12.3047 23.2083 9.43342 24.5971 7.45744 26.8039M15.5 29.375C7.83705 29.375 1.625 23.163 1.625 15.5C1.625 7.83705 7.83705 1.625 15.5 1.625C23.163 1.625 29.375 7.83705 29.375 15.5C29.375 23.163 23.163 29.375 15.5 29.375ZM15.5 18.5833C12.9457 18.5833 10.875 16.5127 10.875 13.9583C10.875 11.404 12.9457 9.33333 15.5 9.33333C18.0543 9.33333 20.125 11.404 20.125 13.9583C20.125 16.5127 18.0543 18.5833 15.5 18.5833Z"
          stroke={focused ? "#FB631D" : "black"}
          strokeWidth="3.08333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
      <Text
        marginTop={3}
        fontWeight={focused ? "bold" : "normal"}
        color={focused ? "#FB631D" : "black"}
      >
        Профиль
      </Text>
    </View>
  );
}
