import { colors } from "../colors";

export const getColors = (color: (string | number)[]) => {
  return color ? colors[color[0]][color[1]] : undefined;
};
