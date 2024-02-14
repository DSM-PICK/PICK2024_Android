import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Text as NativeText } from "react-native";
import { getColors } from "@/utils/colors";
import { textStyle } from "./sets";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";

type Color = (string | number)[];

interface PropType {
  type: string;
  size?: number | string;
  color?: Color;
  weight?: "B" | "M" | "R";
  children: React.ReactNode;
  hidden?: boolean;
  onPress?: () => void;
}

export default function Text({
  type,
  size = 1,
  color = ["neutral", 50],
  weight,
  children,
  hidden,
  onPress,
}: PropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });

  const {
    weight: fontFamily,
    size: textSize,
    letterSpacing,
    lineHeight,
  } = textStyle[type][size.toString()];

  const style: any = {
    fontFamily: weight ? fontFamily[weight] : fontFamily,
    fontSize: textSize,
    letterSpacing: letterSpacing,
    color: color && getColors(color),
    lineHeight: lineHeight,
  };

  if (fontsLoaded && !hidden) {
    if (onPress) {
      return (
        <TouchableWithoutFeedback
          onPress={onPress}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <NativeText style={style}>{children}</NativeText>
        </TouchableWithoutFeedback>
      );
    } else {
      return <NativeText style={style}>{children}</NativeText>;
    }
  }
}
