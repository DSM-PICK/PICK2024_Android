import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { ColorPropType } from "@/utils/colors";
import { getColors } from "@/utils/colors";
import { sizeSet } from "./sets";
import Text from "../Text";
import React from "react";

type sizeType =
  | "custom"
  | "full"
  | "extraLarge"
  | "large"
  | "medium"
  | "small"
  | "auto";

interface PropType {
  id: string;
  size: sizeType;
  onPress: (e: GestureResponderEvent, id?: string) => void;
  color: ColorPropType;
  children: string;
  disabled?: boolean;
  fontColor?: ColorPropType;
  customSize?: string | number;
  fontType?: [string, number | string];
}

export default function Button({
  id,
  size,
  customSize,
  onPress,
  color,
  children,
  disabled,
  fontColor = ["primary", 1000],
  fontType = ["button", sizeSet[size][1]],
}: PropType) {
  const style = {
    width: size !== "custom" ? sizeSet[size][0] : customSize,
    backgroundColor: getColors(disabled ? ["neutral", 600] : color),
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style as any,
        { minWidth: children.length * 15 },
      ]}
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
