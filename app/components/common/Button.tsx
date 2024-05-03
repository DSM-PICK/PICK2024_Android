import {
  StyleSheet,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  Pressable,
} from "react-native";
import React from "react";
import { ColorPropType, getColors, perfectSize as p } from "@/utils";
import { propType } from "ButtonType";
import { Text } from "@commonents";

interface PropType extends propType {
  color: ColorPropType;
  onPress: (e?: GestureResponderEvent, id?: string) => void;
  fontColor?: ColorPropType;
}

const sizes = {
  full: ["100%", "S"],
  extraLarge: ["80%", "S"],
  large: ["60%", "L"],
  medium: ["40%", "M"],
  small: ["20%", "S"],
  auto: ["auto", "M"],
};

export default function Button({
  size,
  customSize,
  onPress,
  id,
  color,
  children,
  disabled,
  fontColor = ["primary", 1000],
  fontType = ["button", sizes[size][1]],
}: PropType) {
  const style = {
    width: size !== "custom" ? sizes[size][0] : customSize,
    backgroundColor: getColors(disabled ? ["neutral", 600] : color),
    minWidth: p(children.length * 10),
  } as StyleProp<ViewStyle>;

  return (
    <Pressable
      style={[styles.container, style]}
      disabled={disabled}
      onPress={(e) => onPress(e, id)}
    >
      <Text type={fontType} color={fontColor}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 13,
    borderRadius: 6,
    alignItems: "center",
  },
});
