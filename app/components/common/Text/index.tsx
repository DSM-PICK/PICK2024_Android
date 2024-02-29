import { Text as NativeText, StyleProp, TextStyle } from "react-native";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ColorPropType } from "@/types/color";
import { getColors } from "@/utils/colors";
import { textStyle } from "./constants";
import { hitSlop } from "@/constants";

type WeightType = "B" | "M" | "R";
type PropTypeType = (string | number)[] | [string, string | number, WeightType];

interface PropType {
  type: PropTypeType;
  children: React.ReactNode;
  hidden?: boolean;
  onPress?: () => void;
  color?: ColorPropType;
}

export default function Text({
  type,
  children,
  hidden,
  onPress,
  color = ["neutral", 50],
}: PropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });
  const [_type, _size, _weight] = type;

  const {
    weight: fontFamily,
    size: textSize,
    letterSpacing,
    lineHeight,
  } = textStyle[_type][_size];

  const style: StyleProp<TextStyle> = {
    fontFamily: _weight ? fontFamily[_weight] : fontFamily,
    fontSize: textSize,
    letterSpacing: letterSpacing,
    color: color && getColors(color),
    lineHeight: lineHeight,
  };

  if (fontsLoaded && !hidden) {
    if (onPress) {
      return (
        <TouchableWithoutFeedback onPress={onPress} hitSlop={hitSlop}>
          <NativeText style={style}>{children}</NativeText>
        </TouchableWithoutFeedback>
      );
    } else {
      return <NativeText style={style}>{children}</NativeText>;
    }
  }
}
