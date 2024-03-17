import { create } from "react-native-pixel-perfect";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const size = {
  width: width - (390 - width),
  height: height - (844 - height),
};

export const perfectSize = create(size);
