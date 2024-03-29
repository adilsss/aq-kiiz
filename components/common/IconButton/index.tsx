import React from "react";
import { Button, Paragraph, Text, View, styled } from "tamagui";

interface IconButtonProps {
  icon: string;
  text: string;
  propsFunction: () => void;
}

const TButton = styled(Button, {
  name: "TButton",
  backgroundColor: "#FFFFFF3D",
  width: "100%",
  paddingTop: 20,
  paddingBottom: 20,
  height: 64,
  color: "#FFFFFF",
  fontSize: 20,
  fontWeight: "700",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  propsFunction,
}) => {
  return (
    <TButton
      onPress={() => propsFunction()}
      width="100%"
      pressStyle={{
        scale: 0.95,
        backgroundColor: "#FFFFFF3D",
        borderWidth: 0,
      }}
    >
      <Paragraph marginTop={4} fontSize={26}>
        {icon}
      </Paragraph>
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text
          fontFamily="Gilroy-Bold"
          width={100}
          fontSize={20}
          fontWeight="bold"
        >
          {text}
        </Text>
      </View>
    </TButton>
  );
};

export default IconButton;
