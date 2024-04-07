import {
  AnimatableNumericValue,
  DimensionValue,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ColorPropType, getColors } from "@/utils";
import { propType } from "BoxType";

interface PropType extends propType {
  color?: ColorPropType;
}

const roundedSet = {
  none: 0,
  sm: 4,
  lg: 8,
  full: "100%",
};

export default function Box({
  color = ["neutral", 1100],
  rounded = "sm",
  width = "100%",
  height,
  children,
  onPress,
}: PropType) {
  const style: StyleProp<ViewStyle> = {
    width: width as DimensionValue,
    height: height as DimensionValue,
    backgroundColor: getColors(color),
    padding: 16,
    borderRadius: roundedSet[rounded] as AnimatableNumericValue,
  };

  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      activeOpacity={!!onPress ? 0.6 : 1}
    >
      {children}
    </TouchableOpacity>
  );
}
