import React from "react";
import { Button, Image, Text, View } from "tamagui";
import { styles } from "./styles";

const TakeAwayLocationItem = () => {
  return (
    <View style={styles.takeAwayCard}>
      <View style={styles.takeAwayCardTitle}>
        <Image
          source={require("../../../assets/img/restaurants/item1.png")}
          style={{ width: 38, height: 38 }}
        />
        <View style={styles.info}>
          <View style={styles.title}>
            <Text color="black" fontSize={20} fontFamily="Gilroy-Medium">
              Aq Anyz
            </Text>
          </View>
          <View style={styles.bottomTxt}>
            <Text color="black" fontSize={15} fontFamily="Gilroy-Light">
              Семейный ресторан
            </Text>
          </View>
        </View>
      </View>
      <Button
        backgroundColor="#FFE7DC"
        color="#FB631D"
        height={37}
        pressStyle={{
          scale: 0.95,
          backgroundColor: "white",
          borderWidth: 0,
        }}
        fontFamily="Gilroy-Medium"
      >
        Изменить
      </Button>
    </View>
  );
};

export default TakeAwayLocationItem;
