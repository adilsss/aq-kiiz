import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { XStack } from "tamagui";
import CategoryItem from "../../components/common/CategoryItem";
import DeliveryTypeSwitcher from "../../components/common/DeliveryTypeSwitcher";
import InputIconLeft from "../../components/common/InputIconLeft";
import StoriesItem from "../../components/common/StoriesItem";
import { categories } from "../../static_data/categories";
import { stories } from "../../static_data/stories";
import { styles } from "./styles";

const Main = () => {
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [activeCategory, setactiveCategory] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View paddingHorizontal={18}>
        <DeliveryTypeSwitcher
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
        />
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
      </View>
    </SafeAreaView>
  );
};

export default Main;
