import React from "react";
import { useTourGuideController } from "rn-tourguide";
import { Button, Text, View } from "tamagui";
import CurvedLine from "../../../assets/svg/curvedLine";

const TooltipComponentRest = ({ isFirstStep, handleNext }) => {
  const { stop } = useTourGuideController();
  return (
    <>
      {isFirstStep ? (
        <View width="100%" display="flex">
          <View bottom={25}>
            <View left={150}>
              <CurvedLine />
            </View>
            <View marginLeft={23}>
              <Text
                maxWidth={288}
                color="white"
                fontSize={20}
                fontWeight="bold"
                marginRight={13}
              >
                Перейдите в меню наших ресторанов и кафе, и насладитесь
                изысканными блюдами восточной и европейской кухни
              </Text>
            </View>
            <Button
              height={64}
              borderRadius={10}
              fontSize={20}
              marginTop={40}
              backgroundColor="black"
              onPress={() => handleNext()}
            >
              Далее
            </Button>
          </View>
        </View>
      ) : (
        <View
          top={260}
          width="100%"
          height={500}
          position="relative"
          display="flex"
        >
          <View width="100%" display="flex" position="absolute">
            <View marginLeft={23}>
              <Text
                maxWidth={288}
                color="white"
                fontSize={20}
                fontWeight="bold"
                marginRight={13}
              >
                Перейдите в меню нашей кондитерской и насладитесь нашими
                десертами и другой продукцией!
              </Text>
            </View>
            <Button
              height={64}
              borderRadius={10}
              fontSize={20}
              marginTop={40}
              backgroundColor="#FB631D"
              onPress={() => stop()}
            >
              Закрыть
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

export default TooltipComponentRest;
