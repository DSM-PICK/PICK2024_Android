import { TouchableOpacity, StyleSheet } from "react-native";
import { getColors } from "@/utils/colors";
import { colorSet, sizeSet } from "./sets";
import Text from "../Text";

type sizeType = "full" | "extraLarge" | "large" | "medium" | "small";
type colorType = "primary" | "secondary" | "tertiary";

interface PropType {
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
  color: colorType;
  size: sizeType;
}

export default function Button({
  disabled,
  children,
  color,
  size,
  onPress,
}: PropType) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: sizeSet[size][0],
          backgroundColor: getColors(colorSet[color]),
        },
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text type="button" size={sizeSet[size][1]} color={["primary", 1000]}>
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
