import { getColors } from "@/utils/colors";

export const colorSet = {
  white: "#ffffff",
  pink: getColors(["primary", 1000]),
  gray: getColors(["neutral", 1000]),
};

export const roundedSet = {
  none: 0,
  sm: 4,
  lg: 8,
  full: "100%",
};
