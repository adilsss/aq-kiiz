import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Text, View } from "tamagui";
import ArrowBack from "../../assets/svg/arrowBack";
import Delivery from "../../assets/svg/deliveryIcon";
import TakeAway from "../../assets/svg/takeawayIcon";
import DeliveryOptionButton from "../../components/common/DeliveryOptionButton";
import { styles } from "./styles";

const OptionChoosing = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View
          style={styles.back}
          onPress={() => navigate("RestaurantChoosing")}
        >
          <ArrowBack />
        </View>
        <Text color="black" fontSize={25}>
          Выберите опцию
        </Text>
      </View>
      <View style={styles.cards}>
        <View onPress={() => navigate("Main")}>
          <DeliveryOptionButton icon={<Delivery />} text="Доставка" />
        </View>
        <View onPress={() => navigate("TakeAwayOptions")}>
          <DeliveryOptionButton icon={<TakeAway />} text="Самовывоз" />
        </View>
      </View>
    </View>
  );
};

export default OptionChoosing;
