import { View } from "react-native";
import { colorSet, roundedSet } from "./sets";

type colorType = "white" | "pink" | "gray";
type roundType = "none" | "sm" | "lg" | "full";

interface PropType {
  color?: colorType;
  rounded?: roundType;
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
}

export default function Box({
  color = "gray",
  rounded = "sm",
  width = "100%",
  height,
  children,
}: PropType) {
  return (
    <View
      style={
        {
          width: width,
          height: height && height,
          backgroundColor: colorSet[color],
          padding: 16,
          borderRadius: roundedSet[rounded],
        } as any
      }
    >
      {children}
    </View>
  );
}
