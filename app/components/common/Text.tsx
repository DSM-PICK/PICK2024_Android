import { Text as NativeText } from "react-native";
import { textStyle } from "@/utils/texts";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { getColors } from "@/utils/functions/getColors";

type Color = (string | number)[];

interface TextPropType {
  type: string;
  size?: number | string;
  color?: Color;
  children: React.ReactNode;
}

const defaultColor = ["neutral", 50];

export default function Text({
  type,
  size = 1,
  color = defaultColor,
  children,
}: TextPropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });

  const {
    weight,
    size: textSize,
    letterSpacing,
  } = textStyle[type][size.toString()];

  const style: any = {
    fontFamily: weight,
    fontSize: textSize,
    letterSpacing: letterSpacing,
    color: getColors(color),
  };

  if (fontsLoaded) {
    return <NativeText style={style}>{children}</NativeText>;
  }
}
