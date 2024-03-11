import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "tamagui";

interface DeliveryOptionButtonProps {
  icon: ReactNode;
  text: string;
}

const DeliveryOptionButton: React.FC<DeliveryOptionButtonProps> = ({
  icon,
  text,
}) => {
  return (
    <View>
      <View style={styles.deliveryOption}>
        {icon}
        <Text
          marginTop={20}
          fontSize={20}
          color="black"
          fontFamily="Gilroy-Medium"
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveryOption: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    paddingVertical: 46,
  },
});

export default DeliveryOptionButton;
