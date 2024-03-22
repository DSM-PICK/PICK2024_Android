import { create } from "react-native-pixel-perfect";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const size = {
  width: 390,
  height: 844,
};

export const perfectSize = create(size);
