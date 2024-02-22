import { TouchableOpacity, StyleSheet } from "react-native";
import { ColorPropType } from "@/utils/colors";
import { getColors } from "@/utils/colors";
import { sizeSet } from "./sets";
import Text from "../Text";

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
  customSize?: string | number;
  onPress: () => void;
  color: ColorPropType;
  children: React.ReactNode;
  disabled?: boolean;
  fontColor?: ColorPropType;
  fontType?: [string, number | string];
}

export default function Button({
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
      style={[styles.container, style as any]}
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onPress}
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
