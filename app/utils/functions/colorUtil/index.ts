import { colors } from "./constant";
export * from "./constant";

export type ColorPropType = [string, string | number];

export const getColors = (color: ColorPropType) => {
  return color ? colors[color[0]][color[1]] : undefined;
};
