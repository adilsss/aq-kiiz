import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Image, Text } from "tamagui";
import QuotesNext from "../../assets/svg/quotes-next";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/onboarding/plov.png")}
        style={{ width: 450, height: 450 }}
      />
      <View paddingHorizontal={28} marginBottom={67}>
        <View>
          <Text color="black" fontSize={25} fontWeight="bold">
            Добро пожаловать в Aqkiiz!
          </Text>
          <Text color="black" fontSize={20} textAlign="center" mt={22}>
            Начните ваше гастрономическое путешествие вместе с нашими блюдами
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            pressStyle={{
              scale: 0.95,
              backgroundColor: "#FFFFFF3D",
              borderWidth: 0,
            }}
            transparent={true}
            color="#FB631D"
            paddingHorizontal={30}
            fontSize={20}
          >
            Пропустить
          </Button>
          <Button
            pressStyle={{
              scale: 0.95,
              backgroundColor: "#FB631D",
              borderWidth: 0,
            }}
            iconAfter={QuotesNext}
            paddingHorizontal={30}
            backgroundColor="#FB631D"
            fontSize={20}
          >
            Далее
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 49,
  },
});

export default Onboarding;
