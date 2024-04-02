import {
  AnimatableNumericValue,
  DimensionValue,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ColorPropType, getColors, perfectSize as p } from "@/utils";
import { propType } from "BoxType";
import { layout } from "@/constants";

interface PropType extends propType {
  color?: ColorPropType;
}

const { roundedSet } = layout.box;

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
