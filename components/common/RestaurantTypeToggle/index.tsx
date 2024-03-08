import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import { Text, View } from "tamagui";
import CafeToggle from "../../../assets/svg/cafeToggle";
import RestaurantToggle from "../../../assets/svg/restaurantToggle";

const RestaurantTypeToggle = ({ focused }) => {
  const [toggleValue, setToggleValue] = useState(false);
  return (
    <View alignItems="center" marginTop={30}>
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
    </View>
  );
};

export default RestaurantTypeToggle;
