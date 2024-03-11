import React from "react";
import { ImageBackground } from "react-native";
import { Text, View, YStack } from "tamagui";
import { styles } from "./styles";

interface CategoryItemProps {
  idx: number;
  title: string;
  img: any;
  isActive: boolean;
  setactiveCategory: (value: number) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  idx,
  title,
  img,
  isActive,
  setactiveCategory,
}) => {
  return (
    <YStack style={styles.categoryItem} onPress={() => setactiveCategory(idx)}>
      <View style={styles.circle}>
        <ImageBackground
          style={styles.img}
          source={img}
          resizeMode="contain"
        ></ImageBackground>
      </View>
      <Text
        fontFamily="Gilroy-Medium"
        color={isActive ? "#FB631D" : "black"}
        marginTop={14}
        fontSize={20}
      >
        {title}
      </Text>
    </YStack>
  );
};

export default CategoryItem;
