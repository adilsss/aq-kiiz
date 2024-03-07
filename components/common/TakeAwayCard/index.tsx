import React from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Image, Text, View } from "tamagui";
import CheckedIcon from "../../../assets/svg/checkedIcon";
import { dishesScrollDataType } from "../../../static_data/dishesScrollData";
import { styles } from "./styles";

interface TakeAwayCardProps {
  logo: any;
  title: string;
  descr: string;
  distance: number;
  examples: dishesScrollDataType[];
  isActive: boolean;
  idx: number;
  setActive: any;
}

const TakeAwayCard: React.FC<TakeAwayCardProps> = ({
  logo,
  title,
  descr,
  distance,
  examples,
  isActive,
  idx,
  setActive,
}) => {
  return (
    <View
      borderWidth={isActive ? 1 : 0}
      borderColor={isActive ? "#FF6B00" : "none"}
      style={styles.takeAwayCard}
      onPress={() => setActive(idx)}
    >
      <View style={styles.takeAwayCardTitle}>
        <Image source={logo} style={{ width: 60, height: 60 }} />
        <View style={styles.info}>
          <View style={styles.title}>
            <Text color="black" fontSize={20}>
              {title}
            </Text>
            <View style={styles.checkIcon}>{isActive && <CheckedIcon />}</View>
          </View>
          <View style={styles.bottomTxt}>
            <Text color="black" fontSize={15}>
              {descr}
            </Text>

            <Text color="#FB631D" fontSize={13} marginRight={7}>
              {distance} км
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.dishExamples}>
        <ScrollView horizontal={true}>
          {examples.map((item: any, idx) => (
            <View marginLeft={idx > 0 ? 7 : 0} style={styles.dishExampleCard}>
              <Text
                maxWidth={79}
                fontSize={10}
                color="black"
                fontWeight="bold"
                marginTop={7}
                marginLeft={9}
              >
                {item.title}
              </Text>
              <View style={styles.dishImg}>
                <ImageBackground
                  source={item.src}
                  resizeMode="contain"
                  style={styles.image}
                ></ImageBackground>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TakeAwayCard;
