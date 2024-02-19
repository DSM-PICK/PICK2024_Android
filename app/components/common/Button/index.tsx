import { TouchableOpacity, StyleSheet } from "react-native";
import { ColorPropType } from "@/utils/colors";
import { getColors } from "@/utils/colors";
import { sizeSet } from "./sets";
import Text from "../Text";

type sizeType = "full" | "extraLarge" | "large" | "medium" | "small";

interface PropType {
  size: sizeType;
  onPress: () => void;
  color: ColorPropType;
  children: React.ReactNode;
  disabled?: boolean;
  fontColor?: ColorPropType;
  fontType?: [string, number | string];
}

export default function Button({
  size,
  onPress,
  color,
  children,
  disabled,
  fontColor = ["primary", 1000],
  fontType = ["button", sizeSet[size][1]],
}: PropType) {
  const style = {
    width: sizeSet[size][0],
    backgroundColor: getColors(disabled ? ["neutral", 600] : color),
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text type={fontType[0]} size={fontType[1]} color={fontColor}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 13,
    borderRadius: 8,
    alignItems: "center",
  },
});
