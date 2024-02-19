export type ColorPropType = [string, string | number];

interface ColorType {
  [key: string]: {
    [key: string]: string;
  };
}

export const colors: ColorType = {
  primary: {
    "50": "#1D0D33",
    "100": "#35185C",
    "200": "#4D2485",
    "300": "#6532AD",
    "400": "#7E40D5",
    "500": "#9650FA",
    "600": "#AA71FB",
    "700": "#BE93FC",
    "800": "#D2B4FD",
    "900": "#E6D5FE",
    "1000": "#FAF6FF",
    "1200": "#F7F4F9",
  },
  secondary: {
    "50": "#130C33",
    "100": "#22175B",
    "200": "#332382",
    "300": "#4430A8",
    "400": "#563ECC",
    "500": "#684DF0",
    "600": "#856FF3",
    "700": "#A191F6",
    "800": "#BEB3F9",
    "900": "#DBD4FB",
    "1000": "#F8F6FE",
  },
  tertiary: {
    "50": "#121531",
    "100": "#212658",
    "200": "#30387D",
    "300": "#414BA2",
    "400": "#535EC6",
    "500": "#6572E9",
    "600": "#828DED",
    "700": "#A0A8F1",
    "800": "#BDC2F6",
    "900": "#DADDFA",
    "1000": "#F7F8FE",
  },
  error: {
    "50": "#410E0B",
    "100": "#601410",
    "200": "#8C1D18",
    "300": "#B3261E",
    "400": "#DC362E",
    "500": "#E46962",
    "600": "#EC928E",
    "700": "#F2B8B5",
    "800": "#F9DEDC",
    "900": "#FCEEEE",
    "1000": "#FFFBF9",
  },
  neutral: {
    "50": "#101828",
    "100": "#1D2939",
    "200": "#344054",
    "300": "#475467",
    "400": "#667085",
    "500": "#98A2B3",
    "600": "#D0D5DD",
    "700": "#E4E7EC",
    "800": "#F2F4F7",
    "900": "#F9FAFB",
    "1000": "#FCFCFD",
    "1100": "#FFFFFF",
  },
};

export const getColors = (color: ColorPropType) => {
  return color ? colors[color[0]][color[1]] : undefined;
};
