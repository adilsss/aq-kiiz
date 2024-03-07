import { LinearGradient } from "@tamagui/linear-gradient";
import React from "react";
import { ImageBackground } from "react-native";
import { Text, View } from "tamagui";
import { styles } from "./styles";

interface StoriesItemProps {
  img: any;
  title: string;
}

const StoriesItem: React.FC<StoriesItemProps> = ({ img, title }) => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={["#FB921D", "#FBBD1D"]}
    >
      <ImageBackground
        source={img}
        resizeMode="cover"
        borderRadius={10}
        style={styles.innerContainer}
      >
        <View paddingHorizontal={10} marginBottom={5}>
          <Text fontSize={16} fontWeight="bold">
            {title}
          </Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default StoriesItem;
