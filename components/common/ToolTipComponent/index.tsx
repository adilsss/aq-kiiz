import React from "react";
import { useTourGuideController } from "rn-tourguide";
import { Text, View } from "tamagui";
import CloseIcon from "../../../assets/svg/closeIcon";

const TooltipComponent = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
}) => {
  const { stop } = useTourGuideController();
  return (
    <View maxWidth={288} bottom={15} width="100%">
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
          onPress={() => stop()}
        >
          <Text color="white" fontSize={20} fontWeight="bold" marginRight={13}>
            Закрыть
          </Text>
          <CloseIcon />
        </View>
      </View>
      <Text color="white" fontSize={20} fontWeight="bold">
        Нажмите сюда для того что бы переключиться в меню нашей кондитерской
      </Text>
    </View>
  );
};

export default TooltipComponent;
