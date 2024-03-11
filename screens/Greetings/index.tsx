import React from "react";

import { View } from "@tamagui/core";

import { LinearGradient } from "@tamagui/linear-gradient";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { YStack } from "tamagui";
import SvgComponent from "../../assets/svg/entry-logo";
import IconButton from "../../components/common/IconButton";
import { languageSelectors } from "../../static_data/languageSelectors";

import Animated, {
  BounceInDown,
  useSharedValue,
} from "react-native-reanimated";

const Greetings = () => {
  const { navigate } = useNavigation();
  const width = useSharedValue(100);

  return (
    <View style={styles.top}>
      <LinearGradient
        fullscreen={true}
        style={styles.top}
        colors={["#FF8933", "#FF6B00", "#FFB800"]}
      >
        <Animated.View entering={BounceInDown} exiting={BounceInDown}>
          <View marginBottom={120}>
            <SvgComponent />
          </View>
        </Animated.View>

        <Animated.View
          style={styles.view}
          entering={BounceInDown.delay(1000)}
          exiting={BounceInDown}
        >
          <View style={styles.view}>
            <YStack space="$3">
              {languageSelectors.map((item) => (
                <IconButton
                  propsFunction={() => navigate("Onboarding")}
                  icon={item.emoji}
                  text={item.text}
                />
              ))}
            </YStack>
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    margin: "auto",
  },
  view: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "column-reverse",
    marginBottom: 25,
  },
});

export default Greetings;
