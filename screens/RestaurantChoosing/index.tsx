import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { TourGuideZone, useTourGuideController } from "rn-tourguide";
import { Image, Text, View } from "tamagui";

const RestaurantChoosing = ({ setTooltipType }) => {
  const {
    canStart, // a boolean indicate if you can start tour guide
    start, // a function to start the tourguide
    stop, // a function  to stopping it
    eventEmitter, // an object for listening some events
  } = useTourGuideController();

  // Can start at mount 🎉
  // you need to wait until everything is registered 😁
  React.useEffect(() => {
    if (canStart) {
      // 👈 test if you can start otherwise nothing will happen
      start();
    }
  }, [canStart]); // 👈 don't

  React.useEffect(() => {
    setTooltipType("RestaurantChoosing");
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <Text color="black" fontSize={25} marginBottom={33}>
        Выберите заведение
      </Text>
      <TourGuideZone
        zone={1}
        text={
          "Нажмите сюда для того что бы переключиться в меню нашей кондитерской"
        }
        borderRadius={16}
      >
        <View
          style={styles.card}
          onPress={() => {
            setTooltipType("Main");
            navigation.navigate("OptionChoosing");
          }}
        >
          <View style={styles.cardDescr}>
            <Text color="black" fontSize={20}>
              Рестораны и кафе
            </Text>
            <View style={styles.cardDescrLogo}>
              <Image
                source={require("../../assets/img/restaurants/item1.png")}
                style={{ width: 38, height: 38 }}
              />
              <View marginLeft={10}>
                <Image
                  source={require("../../assets/img/restaurants/item2.png")}
                  style={{ width: 38, height: 38 }}
                />
              </View>
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/img/restaurants/bg1.png")}
              style={{ width: 130, height: 100 }}
            />
          </View>
        </View>
      </TourGuideZone>

      <View style={styles.divider}></View>
      <TourGuideZone
        zone={2}
        text={
          "Нажмите сюда для того что бы переключиться в меню нашей кондитерской"
        }
        borderRadius={16}
      >
        <View style={styles.card}>
          <View style={styles.cardDescr}>
            <Text color="black" fontSize={20}>
              Кондитерская
            </Text>
            <View style={styles.cardDescrLogo}>
              <Image
                source={require("../../assets/img/restaurants/item3.png")}
                style={{ width: 38, height: 38 }}
              />
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/img/restaurants/bg2.png")}
              style={{ width: 130, height: 100 }}
            />
          </View>
        </View>
      </TourGuideZone>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    margin: "auto",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 18,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 19,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  cardDescr: {
    display: "flex",
    flexDirection: "column",
  },
  cardDescrLogo: {
    display: "flex",
    flexDirection: "row",
    marginTop: 12,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#EEEEEE",
    marginVertical: 22,
  },
});

export default RestaurantChoosing;
