import React, { useState } from "react";

import { TamaguiProvider, createFont, createTamagui } from "@tamagui/core";
import "@tamagui/core/reset.css";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { config } from "@tamagui/config";
import { TourGuideProvider } from "rn-tourguide";
import ProfileIcon from "./assets/svg/profileIcon";
import RestaurantTypeToggle from "./components/common/RestaurantTypeToggle";
import TooltipComponent from "./components/common/ToolTipComponent";
import TooltipComponentRest from "./components/common/TooltipComponentRest";
import Greetings from "./screens/Greetings";
import Main from "./screens/Main";
import Onboarding from "./screens/Onboarding";
import OptionChoosing from "./screens/OptionChoosing";
import Profile from "./screens/Profile";
import RestaurantChoosing from "./screens/RestaurantChoosing";
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

const Tab = createBottomTabNavigator();

const App = () => {
  const [tooltipType, setTooltipType] = useState("Main");
  const [isTooltip, setIsTooltip] = useState(true);

  return (
    <TourGuideProvider
      preventOutsideInteraction
      {...{
        borderRadius: 16,
        padding: 10,
        backdropColor: "rgba(0, 0, 0, 0.7)",
        tooltipComponent:
          tooltipType == "Main" ? TooltipComponent : TooltipComponentRest,
      }}
    >
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
              options={() => ({
                tabBarStyle: {
                  display: "none",
                },
                tabBarButton: () => null,
              })}
              name="Greetings"
              component={() => <Greetings />}
            />
            <Tab.Screen
              options={() => ({
                tabBarStyle: {
                  display: "none",
                },
                tabBarButton: () => null,
              })}
              name="Onboarding"
              component={() => <Onboarding />}
            />

            <Tab.Screen
              options={() => ({
                tabBarStyle: {
                  display: "none",
                },
                tabBarButton: () => null,
              })}
              name="RestaurantChoosing"
              component={() => (
                <RestaurantChoosing setTooltipType={setTooltipType} />
              )}
            />

            <Tab.Screen
              options={() => ({
                tabBarStyle: {
                  display: "none",
                },
                tabBarButton: () => null,
              })}
              name="OptionChoosing"
              component={() => <OptionChoosing />}
            />
            <Tab.Screen
              options={() => ({
                tabBarStyle: {
                  display: "none",
                },
                tabBarButton: () => null,
              })}
              name="TakeAwayOptions"
              component={() => <TakeAwayOptions />}
            />

            <Tab.Screen
              name="Main"
              component={() => (
                <Main
                  isTooltip={isTooltip}
                  setIsTooltip={setIsTooltip}
                  tooltipType={"Main"}
                  setTooltipType={setTooltipType}
                />
              )}
              options={{
                title: "",
                tabBarIcon: ({ size, focused, color }) => {
                  return (
                    <>
                      {/* {tooltipType == "Main" ? (
                        <TourGuideZone
                          zone={3}
                          text={
                            "Нажмите сюда для того что бы переключиться в меню нашей кондитерской"
                          }
                          borderRadius={16}
                        >
                          <RestaurantTypeToggle
                            isTooltip={isTooltip}
                            focused={focused}
                          />
                        </TourGuideZone>
                      ) : (
                        <RestaurantTypeToggle
                          isTooltip={isTooltip}
                          focused={focused}
                        />
                      )} */}
                      <RestaurantTypeToggle
                        isTooltip={isTooltip}
                        focused={focused}
                      />
                    </>
                  );
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
          </Tab.Navigator>
        </NavigationContainer>
      </TamaguiProvider>
    </TourGuideProvider>
  );
};
export default App;
