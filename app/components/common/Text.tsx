import { Text as NativeText } from "react-native";
import { textStyle } from "../../utils/texts";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import * as colors from "../../utils/colors";

interface TextProps {
  type: string;
  size?: number | string;
  color?: {
    type: string;
    number: number | string;
  };
  children: React.ReactNode;
}

const defaultColor = {
  type: "neutral",
  number: 50,
};

export default function Text({
  type,
  size = 1,
  color = defaultColor,
  children,
}: TextProps) {
  let [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });

  // 타입 오류 발생
  // console.log( > colors[color.type] < [color.number.toString()]);
  // 이 부분을 고쳐서 style에 color 값으로 넣어야 함
  console.log(colors[color.type][color.number.toString()]);

  const data = textStyle[type][size.toString()];

  const style: any = {
    fontFamily: data.weight,
    fontSize: data.size,
    lineHeight: data.lineHeight,
  };

  if (fontsLoaded) {
    return <NativeText style={style}>{children}</NativeText>;
  }
}
