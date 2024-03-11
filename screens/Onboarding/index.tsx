import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Animated as RNAnimated,
  useWindowDimensions,
  View,
} from "react-native";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import Animated, {
  RollInRight,
  RotateInDownRight,
} from "react-native-reanimated";
import { Button, Image, Text } from "tamagui";
import QuotesNext from "../../assets/svg/quotes-next";
import { INTRO_DATA } from "../../static_data/onboarding";
import { styles } from "./styles";

interface ItemProps {
  key: string;
  title: string;
  description: string;
  img: any;
  width: number;
  height: number;
  index: number;
}

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { width } = useWindowDimensions();
  const scrollX = React.useRef(new RNAnimated.Value(0)).current;
  const keyExtractor = React.useCallback((item: ItemProps) => item.img, []);
  let flatListRef = React.useRef<any>(null);

  const { navigate } = useNavigation();

  const onViewRef = React.useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  });

  const gotoNextPage = () => {
    if (activeIndex + 1 < INTRO_DATA.length) {
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };

  const checkLastSlide = () => {
    if (activeIndex !== 2) {
      gotoNextPage();
    } else {
      navigate("RestaurantChoosing");
    }
  };

  const RenderItem = React.useCallback(
    ({ item, index }: { item: ItemProps }) => {
      return (
        <Animated.View
          entering={RollInRight}
          exiting={RotateInDownRight}
          style={{ transform: [{ rotate: "360deg" }] }}
        >
          <View style={[styles.container80, { width: width }]}>
            <View style={styles.imageContainer}>
              <Image
                source={item.img}
                style={{ width: item.width, height: item.height }}
              />
            </View>
          </View>
        </Animated.View>
      );
    },
    [width]
  );

  return (
    <View style={[styles.container]}>
      <View>
        <View style={styles.dotContainer}>
          <ExpandingDot
            data={INTRO_DATA}
            expandingDotWidth={24}
            scrollX={scrollX}
            inActiveDotColor={"#D9D9D9"}
            activeDotColor={"#FF6B00"}
            inActiveDotOpacity={0.7}
            dotStyle={styles.dotStyles}
            containerStyle={styles.constainerStyles}
          />
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        data={INTRO_DATA}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onScroll={RNAnimated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        style={styles.flatList}
        pagingEnabled
        horizontal
        decelerationRate={"normal"}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
      />

      <View paddingHorizontal={28} marginBottom={67}>
        <View>
          <Text
            color="black"
            fontSize={25}
            fontWeight="bold"
            fontFamily="Gropled-Bold"
            textAlign="center"
          >
            {INTRO_DATA[activeIndex].title}
          </Text>
          <Text
            fontFamily="Gilroy-Light"
            color="black"
            fontWeight="400"
            fontSize={20}
            textAlign="center"
            mt={22}
          >
            {INTRO_DATA[activeIndex].description}
          </Text>
        </View>
      </View>
      <View paddingHorizontal={28} style={styles.buttons}>
        <Button
          pressStyle={{
            scale: 0.95,
            backgroundColor: "#FFFFFF3D",
            borderWidth: 0,
          }}
          fontFamily="Gilroy-Medium"
          transparent={true}
          color="#FB631D"
          height={54}
          paddingHorizontal={30}
          paddingVertical={15}
          fontSize={20}
          onPress={() => navigate("RestaurantChoosing")}
        >
          Пропустить
        </Button>
        <Button
          pressStyle={{
            scale: 0.95,
            backgroundColor: "#FB631D",
            borderWidth: 0,
          }}
          fontFamily="Gilroy-Medium"
          iconAfter={QuotesNext}
          paddingHorizontal={30}
          backgroundColor="#FB631D"
          fontSize={20}
          height={54}
          paddingVertical={15}
          onPress={() => checkLastSlide()}
        >
          Далее
        </Button>
      </View>
    </View>
  );
};

export default Onboarding;
