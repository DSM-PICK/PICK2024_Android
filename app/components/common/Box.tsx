import { View } from "react-native";
import { getColors } from "@/utils/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

type colorType = (string | number)[];
type roundType = "none" | "sm" | "lg" | "full";

interface PropType {
  color?: colorType | string;
  rounded?: roundType;
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  onPress?: () => void;
}

export const roundedSet = {
  none: 0,
  sm: 4,
  lg: 8,
  full: "100%",
};

export default function Box({
  color = "white",
  rounded = "sm",
  width = "100%",
  height,
  children,
  onPress,
}: PropType) {
  if (onPress) {
    return (
      <TouchableOpacity
        style={
          {
            width: width,
            height: height && height,
            backgroundColor:
              color === "white" ? "white" : getColors(color as colorType),
            padding: 16,
            borderRadius: roundedSet[rounded],
          } as any
        }
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={
          {
            width: width,
            height: height && height,
            backgroundColor:
              color === "white" ? "white" : getColors(color as colorType),
            padding: 16,
            borderRadius: roundedSet[rounded],
          } as any
        }
      >
        {children}
      </View>
    );
  }
}
