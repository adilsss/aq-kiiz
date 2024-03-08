import React from "react";

import { TamaguiProvider, createFont, createTamagui } from "@tamagui/core";
import "@tamagui/core/reset.css";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { config } from "@tamagui/config";
import ProfileIcon from "./assets/svg/profileIcon";
import RestaurantTypeToggle from "./components/common/RestaurantTypeToggle";
import Main from "./screens/Main";
import OptionChoosing from "./screens/OptionChoosing";
import Profile from "./screens/Profile";

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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Tab.Navigator
          //tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            header: () => null,
            contentStyle: { backgroundColor: "white" },
            tabBarActiveTintColor: "#FB631D",
            tabBarInactiveTintColor: "#000",
            tabBarStyle: {
              height: 90,
              borderWidth: 2,
              paddingHorizontal: 60,
            },
            tabBarItemStyle: {},
          }}
          tabBarOptions={{
            labelStyle: {
              fontSize: 15,
              marginTop: 10,
            },
          }}
        >
          <Tab.Screen
            name="Рестораны"
            component={Main}
            options={{
              title: "",
              tabBarIcon: ({ size, focused, color }) => {
                return <RestaurantTypeToggle focused={focused} />;
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            options={{
              title: "",
              tabBarIcon: ({ size, focused, color }) => {
                return <ProfileIcon focused={focused} />;
              },
            }}
            component={Profile}
          />
          <Tab.Screen
            options={() => ({
              tabBarStyle: {
                display: "none",
              },
              tabBarButton: () => null,
            })}
            name="OptionChoosing"
            component={OptionChoosing}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
};
export default App;
