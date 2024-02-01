type WeightType =
  | string
  | {
      M?: string;
      B?: string;
      R?: string;
    };

interface TextStyleType {
  [key: string]: {
    [key: string]: {
      size: number;
      letterSpacing: number;
      weight: WeightType;
    };
  };
}

const defaultHeight: number = 0.15;

const textWeight: { M: string; B: string; R: string } = {
  M: "NotoSans_500Medium",
  B: "NotoSans_700Bold",
  R: "NotoSans_400Regular",
};

export const textStyle: TextStyleType = {
  heading: {
    "1": {
      size: 64,
      letterSpacing: -1.5,
      weight: textWeight.M,
    },
    "2": {
      size: 56,
      letterSpacing: -0.5,
      weight: textWeight.M,
    },
    "3": {
      size: 48,
      letterSpacing: 0,
      weight: textWeight.M,
    },
    "4": {
      size: 42,
      letterSpacing: 0,
      weight: textWeight.M,
    },
    "5": {
      size: 32,
      letterSpacing: 0,
      weight: textWeight.M,
    },
    "6": {
      size: 24,
      letterSpacing: defaultHeight,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
  },
  subTitle: {
    "1": {
      size: 20,
      letterSpacing: defaultHeight,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
    "2": {
      size: 18,
      letterSpacing: defaultHeight,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
        R: textWeight.R,
      },
    },
    "3": {
      size: 16,
      letterSpacing: defaultHeight,
      weight: {
        M: textWeight.M,
        B: textWeight.B,
      },
    },
    "4": {
      size: 14,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
  },
  body: {
    "1": {
      size: 16,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
    "2": {
      size: 14,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
    "3": {
      size: 12,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
  },
  caption: {
    "1": {
      size: 16,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
    "2": {
      size: 12,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
    "3": {
      size: 10,
      letterSpacing: defaultHeight,
      weight: textWeight.R,
    },
  },
  label: {
    "1": {
      size: 16,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
    "2": {
      size: 12,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
  },
  button: {
    L: {
      size: 20,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
    M: {
      size: 18,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
    S: {
      size: 16,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
    ES: {
      size: 12,
      letterSpacing: defaultHeight,
      weight: textWeight.M,
    },
  },
};
