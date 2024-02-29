import { ColorPropType } from "@/types/color";
import { colors } from "./contant";

export const getColors = (color: ColorPropType) => {
  return color ? colors[color[0]][color[1]] : undefined;
};
