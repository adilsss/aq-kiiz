import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, View } from "tamagui";
import ArrowBack from "../../assets/svg/arrowBack";
import TakeAwayCard from "../../components/common/TakeAwayCard";
import { dishesScrollData } from "../../static_data/dishesScrollData";
import { styles } from "./styles";

const takeAwayCards = [
  {
    logo: require("../../assets/img/restaurants/item1.png"),
    title: "Aq Anyz",
    descr: "Семейный ресторан",
    distance: 1.5,
    examples: dishesScrollData,
  },
  {
    logo: require("../../assets/img/restaurants/item2.png"),
    title: "Восточный двор",
    descr: "Ресторан",
    distance: 3,
    examples: dishesScrollData,
  },
];

const TakeAwayOptions = () => {
  const [active, setActive] = useState(null);
  const { navigate } = useNavigation();
  return (
    <View style={styles.container} onPress={() => setActive(null)}>
      <View paddingHorizontal={18} width="110%">
        <View style={styles.heading}>
          <View style={styles.back}>
            <ArrowBack />
          </View>
          <Text color="black" fontSize={25}>
            Выберите филиал
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          {takeAwayCards.map((item, idx) => (
            <View marginTop={idx > 0 ? 20 : 0}>
              <TakeAwayCard
                idx={idx}
                logo={item.logo}
                title={item.title}
                descr={item.descr}
                distance={item.distance}
                examples={item.examples}
                isActive={idx == active}
                setActive={setActive}
              />
            </View>
          ))}
        </View>
      </View>
      {active !== null && (
        <View width="100%" marginTop={220}>
          <Button
            pressStyle={{
              scale: 0.95,
              backgroundColor: "#FB631D",
              borderWidth: 0,
            }}
            fontSize={20}
            fontWeight="semi"
            backgroundColor="#FB631D"
            onPress={() => navigate("Main")}
          >
            Начать заказ
          </Button>
        </View>
      )}
    </View>
  );
};

export default TakeAwayOptions;
