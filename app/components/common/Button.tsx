import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { ColorPropType } from "@/types/color";
import { getColors } from "@/utils/colors";
import { Text } from "@/components/common";

type sizeType =
  | "custom"
  | "full"
  | "extraLarge"
  | "large"
  | "medium"
  | "small"
  | "auto";

interface PropType {
  size: sizeType;
  children: string;
  color: ColorPropType;
  onPress: (e?: GestureResponderEvent, id?: string) => void;
  id?: string;
  disabled?: boolean;
  fontColor?: ColorPropType;
  customSize?: string | number;
  fontType?: [string, number | string];
}

const sizes: { [key: string]: string[] } = {
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
    minWidth: children.length * 15,
  } as any;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled}
      activeOpacity={0.6}
      onPress={(e) => onPress(e, id)}
    >
      <Text type={fontType} color={fontColor}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});
