import React from "react";

import { View } from "@tamagui/core";

import { LinearGradient } from "@tamagui/linear-gradient";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { YStack } from "tamagui";
import SvgComponent from "../../assets/svg/entry-logo";
import IconButton from "../../components/common/IconButton";
import { languageSelectors } from "../../static_data/languageSelectors";

const Greetings = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.top}>
      <LinearGradient
        fullscreen={true}
        style={styles.top}
        colors={["#FF8933", "#FF6B00", "#FFB800"]}
      >
        <View marginBottom={120}>
          <SvgComponent />
        </View>
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
    marginBottom: 40,
  },
});

export default Greetings;
