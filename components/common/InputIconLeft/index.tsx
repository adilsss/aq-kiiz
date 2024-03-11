import React from "react";
import { Input, View } from "tamagui";
import SearchingToolIcon from "../../../assets/svg/searchingTool";
import { styles } from "./styles";

const InputIconLeft = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchingTool}>
        <SearchingToolIcon />
      </View>
      <Input
        backgroundColor="white"
        borderWidth={0}
        placeholder="Поиск блюда"
        placeholderTextColor="black"
        fontSize={20}
        color="black"
        borderRadius={100}
        paddingLeft={54}
        height={50}
        fontFamily="Gilroy-Medium"
      />
    </View>
  );
};

export default InputIconLeft;
