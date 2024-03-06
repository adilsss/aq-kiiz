import React from "react";
import { View } from "react-native";
import { Text } from "tamagui";
import ArrowBack from "../../assets/svg/arrowBack";
import Delivery from "../../assets/svg/deliveryIcon";
import TakeAway from "../../assets/svg/takeawayIcon";
import DeliveryOptionButton from "../../components/common/DeliveryOptionButton";
import { styles } from "./styles";

const OptionChoosing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.back}>
          <ArrowBack />
        </View>
        <Text color="black" fontSize={25}>
          Выберите опцию
        </Text>
      </View>
      <View style={styles.cards}>
        <DeliveryOptionButton icon={<Delivery />} text="Доставка" />
        <DeliveryOptionButton icon={<TakeAway />} text="Самовывоз" />
      </View>
    </View>
  );
};

export default OptionChoosing;
