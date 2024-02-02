import { View } from "react-native";
import { colors } from "@/utils/colors";

interface PropType {
  color?: string;
  rounded?: string;
  children: React.ReactNode;
}

const colorSet = {
  white: "#ffffff",
  pink: colors.primary[1000],
  gray: colors.primary[1200],
};

const roundedSet = {
  none: 0,
  sm: 4,
  lg: 8,
  full: "100%",
};

export default function Box({
  color = "gray",
  rounded = "sm",
  children,
}: PropType) {
  return (
    <View
      style={{
        backgroundColor: colorSet[color],
        padding: 16,
        borderRadius: roundedSet[rounded],
      }}
    >
      {children}
    </View>
  );
}
