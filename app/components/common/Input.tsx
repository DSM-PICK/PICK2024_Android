import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  StyleProp,
  TextStyle,
} from "react-native";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { useState } from "react";
import { colors, perfectSize as p } from "@/utils";
import { textStyle } from "./Text/constants";
import { EyeOff, EyeOn } from "@icons";
import { HiddenView } from "@layouts";
import { PropType } from "InputType";

const { size, letterSpacing, weight } = textStyle.caption[2];
const { primary, neutral, secondary, error: errorColor } = colors;
const sizes = { width: p(18) };

export default function Input({
  value,
  placeholder,
  onChange,
  name = "",
  error,
  disabled,
  password,
  multiLine,
}: PropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const styleInLine = {
    width: password ? "92%" : "100%",
    textAlignVertical: !!multiLine ? "top" : "auto",
    paddingVertical: !!multiLine ? p(11) : 0,
  } as StyleProp<TextStyle>;

  if (fontsLoaded) {
    return (
      <View
        style={[
          styles.container,
          active && styles.active,
          error && styles.error,
          disabled && styles.disabled,
        ]}
      >
        <TextInput
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          secureTextEntry={password && !visible}
          onChangeText={(text) => onChange({ text, name })}
          selectionColor={error ? errorColor[500] : primary[500]}
          placeholderTextColor={error ? errorColor[700] : neutral[500]}
          style={styleInLine}
          multiline={!!multiLine}
          numberOfLines={multiLine || 1}
        />
        <HiddenView data={password}>
          {visible ? (
            <EyeOn {...sizes} onPress={() => setVisible(!visible)} />
          ) : (
            <EyeOff {...sizes} onPress={() => setVisible(!visible)} />
          )}
        </HiddenView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: p(16),
    paddingVertical: p(Platform.OS === "ios" ? 10 : 5),
    borderRadius: p(4),
    borderWidth: p(1),
    width: "100%",
    backgroundColor: neutral[900],
    borderColor: neutral[900],
  },
  active: {
    backgroundColor: "white",
    borderColor: secondary[500],
  },
  disabled: {
    backgroundColor: neutral[800],
    borderColor: neutral[800],
  },
  error: {
    backgroundColor: errorColor[900],
    borderColor: errorColor[500],
  },
  textStyle: {
    color: neutral[50],
    fontSize: p(size),
    letterSpacing: p(letterSpacing),
    fontFamily: weight as any,
  },
});
