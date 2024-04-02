import { constants as T } from "TextType";
import { stringObj } from "CommonType";

const defaultSpace = 0.15;

const textWeight: stringObj = {
  M: "NotoSans_500Medium",
  B: "NotoSans_700Bold",
  R: "NotoSans_400Regular",
};

export const textStyle: T.textStyleType = {
  heading: {
    "1": {
      size: 64,
      letterSpacing: -1.5,
      weight: textWeight.M,
      lineHeight: 66,
    },
    "2": {
      size: 56,
      letterSpacing: -0.5,
      weight: textWeight.M,
      lineHeight: 58,
    },
    "3": {
      size: 48,
      letterSpacing: 0,
      weight: textWeight.M,
      lineHeight: 50,
    },
    "4": {
      size: 42,
      letterSpacing: 0,
      weight: textWeight.M,
      lineHeight: 44,
    },
    "5": {
      size: 32,
      letterSpacing: 0,
      weight: textWeight.M,
      lineHeight: 30,
    },
    "6": {
      size: 24,
      letterSpacing: defaultSpace,
      lineHeight: 28,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
  },
  subTitle: {
    "1": {
      size: 20,
      lineHeight: 24,
      letterSpacing: defaultSpace,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
    "2": {
      size: 18,
      lineHeight: 24,
      letterSpacing: defaultSpace,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
        R: textWeight.R,
      },
    },
    "3": {
      size: 16,
      lineHeight: 22,
      letterSpacing: defaultSpace,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
    "4": {
      size: 14,
      lineHeight: 20,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
  },
  body: {
    "1": {
      size: 16,
      lineHeight: 20,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
    "2": {
      size: 14,
      lineHeight: 18,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
    "3": {
      size: 12,
      lineHeight: 16,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
  },
  caption: {
    "1": {
      size: 16,
      lineHeight: 20,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
    "2": {
      size: 12,
      lineHeight: 16,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
    "3": {
      size: 10,
      lineHeight: 14,
      letterSpacing: defaultSpace,
      weight: textWeight.R,
    },
  },
  label: {
    "1": {
      size: 16,
      lineHeight: 20,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
    "2": {
      size: 12,
      lineHeight: 16,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
  },
  button: {
    L: {
      size: 20,
      lineHeight: 24,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
    M: {
      size: 18,
      lineHeight: 22,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
    S: {
      size: 16,
      lineHeight: 20,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
    ES: {
      size: 12,
      lineHeight: 16,
      letterSpacing: defaultSpace,
      weight: textWeight.M,
    },
  },
};
