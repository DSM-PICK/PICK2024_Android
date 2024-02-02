import { TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "@/utils/colors";
import Text from "./Text";
import { getColors } from "@/utils/functions/getColors";

type customType = {
  backgroundColor?: (string | number)[];
  color?: (string | number)[];
};

interface PropType {
  disabled?: boolean;
  children: React.ReactNode;
  onPress: () => void;
  customColor?: customType;
}

export default function Button({
  disabled,
  children,
  customColor,
  onPress,
}: PropType) {
  const backgroundColor = getColors(customColor?.backgroundColor);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles.field,
        backgroundColor && { backgroundColor: backgroundColor },
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text
        type="button"
        size="S"
        color={customColor?.color ? customColor.color : ["neutral", 1000]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 6,
    borderRadius: 4,
    width: "100%",
  },
  field: {
    backgroundColor: colors.primary[200],
  },
  disabled: {
    backgroundColor: colors.neutral[600],
  },
});
