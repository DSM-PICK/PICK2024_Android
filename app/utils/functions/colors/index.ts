import { ColorPropType } from "@/types/color";
import { colors } from "./constant";
export * from "./constant";

export const getColors = (color: ColorPropType) => {
  return color ? colors[color[0]][color[1]] : undefined;
};
