import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Animated, View } from "react-native";
import { Text } from "tamagui";
import RestaurantTypeToggle from "../RestaurantTypeToggle";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { navigate } = useNavigation();
  const linePosition = useRef(new Animated.Value(0)).current;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const totalTabs = state.routes.length;
  const tabWidth = 100; // Adjust as needed

  const translateX = linePosition.interpolate({
    inputRange: [0, totalTabs - 1],
    outputRange: [0, (totalTabs - 1) * tabWidth],
  });

  console.log(state.routes);
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        height: 80,
      }}
    >
      {/* {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            key={route.name}
          >
            <RestaurantTypeToggle />
            <Text style={{ color: isFocused ? "#007AFF" : "#ccc" }}>
              <Text>Тест</Text>
            </Text>
          </TouchableOpacity>
        );
      })} */}
      <RestaurantTypeToggle />
      <Text onPress={() => navigate("Profile")} color="black">
        DOnw
      </Text>
    </View>
  );
};

export default CustomTabBar;
