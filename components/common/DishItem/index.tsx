import React from "react";
import { ImageBackground } from "react-native";
import { Button, Text, View, XStack } from "tamagui";
import HeartIcon from "../../../assets/svg/heartIcon";
import { styles } from "./styles";

interface DishItem {
  title: string;
  descr: string;
  price: number;
  img: any;
}

const DishItem: React.FC<DishItem> = ({ title, descr, price, img }) => {
  return (
    <XStack style={styles.container}>
      <View style={styles.imgBlock}>
        <ImageBackground
          style={styles.img}
          source={img}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.like}>
          <HeartIcon />
        </View>
      </View>
      <View style={styles.infoCard}>
        <Text fontSize={20} color="black" fontFamily="Gilroy-Medium">
          {title}
        </Text>
        <Text
          maxWidth={175}
          fontSize={11}
          color="#C1C1C1"
          marginTop={7}
          fontFamily="Gilroy-Medium"
        >
          {descr}
        </Text>
        <XStack
          marginTop={10}
          marginBottom={20}
          alignItems="center"
          justifyContent="space-between"
          width="60%"
        >
          <Text fontSize={20} color="black" fontFamily="Gilroy-Medium">
            {price} ₸
          </Text>
          <Button
            fontFamily="Gilroy-Medium"
            backgroundColor="white"
            maxWidth={100}
            paddingHorizontal={12}
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
