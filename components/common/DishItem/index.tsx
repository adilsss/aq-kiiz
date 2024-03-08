import React from "react";
import { ImageBackground } from "react-native";
import { Button, Text, View, XStack } from "tamagui";
import HeartIcon from "../../../assets/svg/heartIcon";
import { styles } from "./styles";

const DishItem = () => {
  return (
    <XStack style={styles.container}>
      <View style={styles.imgBlock}>
        <ImageBackground
          style={styles.img}
          source={require("../../../assets/img/dishes/item1.png")}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.like}>
          <HeartIcon />
        </View>
      </View>
      <View style={styles.infoCard}>
        <Text fontSize={20} color="black">
          Плов Свадебный
        </Text>
        <Text maxWidth={175} fontSize={11} color="#C1C1C1" marginTop={7}>
          Легендарный сытный плов из риса твердого сорта лазер с говядиной
        </Text>
        <XStack
          marginTop={10}
          marginBottom={20}
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Text fontSize={20} color="black">
            2598 ₸
          </Text>
          <Button
            backgroundColor="white"
            borderWidth={1}
            borderColor="#FB631D"
            color="#FB631D"
            height={35}
            fontSize={15}
            pressStyle={{
              scale: 0.95,
              backgroundColor: "#FFFFFF3D",
              borderWidth: 0,
            }}
          >
            В корзину
          </Button>
        </XStack>
      </View>
    </XStack>
  );
};

export default DishItem;
