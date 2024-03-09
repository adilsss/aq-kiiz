import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Text, XStack, YStack } from "tamagui";
import CloseIcon from "../../assets/svg/closeIcon";
import CategoryItem from "../../components/common/CategoryItem";
import DeliveryTypeSwitcher from "../../components/common/DeliveryTypeSwitcher";
import DishItem from "../../components/common/DishItem";
import InputIconLeft from "../../components/common/InputIconLeft";
import StoriesItem from "../../components/common/StoriesItem";
import TakeAwayLocationItem from "../../components/common/TakeAwayLocationItem";
import { categories } from "../../static_data/categories";
import { stories } from "../../static_data/stories";
import { styles } from "./styles";

const Main = ({ setTooltipType, tooltipType, isTooltip, setIsTooltip }) => {
  const [deliveryType, setDeliveryType] = useState("delivery");
  const [activeCategory, setactiveCategory] = useState(0);
  // const [isTooltip, setIsTooltip] = useState(true);

  return (
    <ScrollView style={styles.container} position="relative">
      {isTooltip && (
        <View
          position="absolute"
          maxWidth={288}
          bottom={10}
          left={30}
          width="100%"
          zIndex={9999}
        >
          <TouchableOpacity onPress={() => setIsTooltip(false)}>
            <View alignItems="flex-end" width="100%">
              <View
                borderRadius={40}
                backgroundColor="#00000045"
                height={44}
                alignItems="center"
                justifyContent="center"
                maxWidth={141}
                width="100%"
                flexDirection="row"
                paddingLeft={10}
                paddingRight={10}
                bottom={10}
              >
                <Text
                  color="white"
                  fontSize={20}
                  fontWeight="bold"
                  marginRight={13}
                >
                  Закрыть
                </Text>
                <CloseIcon />
              </View>
            </View>
            <Text color="white" fontSize={20} fontWeight="bold">
              Нажмите сюда для того что бы переключиться в меню нашей
              кондитерской
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
            <DishItem />
          </YStack>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Main;
