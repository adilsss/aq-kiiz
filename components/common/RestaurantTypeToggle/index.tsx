import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import { Stack, Text } from "tamagui";
import CafeToggle from "../../../assets/svg/cafeToggle";
import RestaurantToggle from "../../../assets/svg/restaurantToggle";

const RestaurantTypeToggle = ({ focused, isTooltip }) => {
  const [toggleValue, setToggleValue] = useState(false);
  return (
    <Stack
      alignItems="center"
      zIndex={9999}
      padding={isTooltip ? 7 : 0}
      backgroundColor={"white"}
      borderRadius={isTooltip ? 10 : 0}
      top={25}
    >
      <Toggle
        value={toggleValue}
        onPress={(newState) => setToggleValue(newState)}
        leftTitle={<RestaurantToggle />}
        rightTitle={<CafeToggle />}
        trackBar={{
          activeBackgroundColor: "#000",
          inActiveBackgroundColor: "#000",
          borderActiveColor: "#86c3d7",
          borderInActiveColor: "#1c1c1c",
          width: 80,
          height: 37,
        }}
        thumbButton={{
          width: 37,
          height: 37,
          activeBackgroundColor: "#FB631D",
          inActiveBackgroundColor: "#FB631D",
        }}
      />
      <Text
        marginTop={3}
        fontWeight={focused ? "bold" : "normal"}
        color={focused ? "#FB631D" : "black"}
      >
        Рестораны
      </Text>
    </Stack>
  );
};

export default RestaurantTypeToggle;
