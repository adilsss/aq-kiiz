import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Text, XStack, YStack } from "tamagui";
import CategoryItem from "../../components/common/CategoryItem";
import DeliveryTypeSwitcher from "../../components/common/DeliveryTypeSwitcher";
import DishItem from "../../components/common/DishItem";
import InputIconLeft from "../../components/common/InputIconLeft";
import StoriesItem from "../../components/common/StoriesItem";
import TakeAwayLocationItem from "../../components/common/TakeAwayLocationItem";
import { categories } from "../../static_data/categories";
import { dishes } from "../../static_data/dishes";
import { stories } from "../../static_data/stories";
import { styles } from "./styles";

const Main = ({ setTooltipType, tooltipType, setIsTooltipMain }) => {
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [activeCategory, setactiveCategory] = useState(0);

  return (
    <ScrollView style={styles.container} position="relative">
      <View paddingHorizontal={18}>
        <DeliveryTypeSwitcher
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
        />
        {deliveryType == "takeAway" && (
          <View marginTop={5}>
            <TakeAwayLocationItem />
          </View>
        )}
        <View style={styles.divider}></View>
        <InputIconLeft />
        <ScrollView horizontal={true} marginTop={40}>
          <XStack gap={12}>
            {stories.map((item) => (
              <StoriesItem img={item.src} title={item.title} />
            ))}
          </XStack>
        </ScrollView>
        <ScrollView horizontal={true} marginTop={40}>
          <XStack gap={12}>
            {categories.map((item, idx) => (
              <CategoryItem
                idx={idx}
                img={item.src}
                title={item.title}
                isActive={idx == activeCategory}
                setactiveCategory={setactiveCategory}
              />
            ))}
          </XStack>
        </ScrollView>
        <ScrollView marginTop={56}>
          <YStack>
            {dishes.map((item, idx) => (
              <>
                {idx > 0 && (
                  <Text
                    marginBottom={22}
                    fontFamily="Gropled-Bold"
                    color="black"
                    fontSize={25}
                  >
                    {item.category}
                  </Text>
                )}

                <YStack gap={14}>
                  {item.items.map((dish) => (
                    <DishItem
                      title={dish.title}
                      descr={dish.descr}
                      price={dish.price}
                      img={dish.img}
                    />
                  ))}
                </YStack>
                {idx !== dishes.length - 1 && (
                  <View style={styles.divider}></View>
                )}
              </>
            ))}
          </YStack>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Main;
