import React from "react";
import { Text, View } from "tamagui";
import { styles } from "./styles";

interface DeliveryTypeSwitcherProps {
  deliveryType: string;
  setDeliveryType: (value: string) => void;
}

const DeliveryTypeSwitcher: React.FC<DeliveryTypeSwitcherProps> = ({
  deliveryType,
  setDeliveryType,
}) => {
  return (
    <View style={styles.container}>
      <View
        onPress={() => setDeliveryType("delivery")}
        style={
          deliveryType == "delivery"
            ? styles.buttonActive
            : styles.buttonInactive
        }
      >
        <Text
          color={deliveryType == "delivery" ? "white" : "black"}
          fontSize={20}
          whiteSpace="wrap"
        >
          Доставка
        </Text>
      </View>
      <View
        onPress={() => setDeliveryType("takeAway")}
        style={
          deliveryType == "takeAway"
            ? styles.buttonActive
            : styles.buttonInactive
        }
      >
        <Text
          color={deliveryType == "takeAway" ? "white" : "black"}
          fontSize={20}
          whiteSpace="nowrap"
        >
          Самовывоз
        </Text>
      </View>
    </View>
  );
};

export default DeliveryTypeSwitcher;
