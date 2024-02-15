import { TouchableOpacity, StyleSheet } from "react-native";
import { getColors } from "@/utils/colors";
import { colorSet, sizeSet } from "./sets";
import Text from "../Text";

type sizeType = "full" | "extraLarge" | "large" | "medium" | "small";

interface PropType {
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
  color: (string | number)[];
  fontColor?: (string | number)[];
  size: sizeType;
}

export default function Button({
  disabled,
  children,
  color,
  fontColor,
  size,
  onPress,
}: PropType) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: sizeSet[size][0],
          backgroundColor: getColors(color),
        },
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        type="button"
        size={sizeSet[size][1]}
        color={!!fontColor ? fontColor : ["primary", 1000]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    paddingTop: 13,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: getColors(["neutral", 600]),
  },
});
