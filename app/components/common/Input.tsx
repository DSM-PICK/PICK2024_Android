import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { useState } from "react";
import { textStyle } from "./Text/constants";
import { EyeOff, EyeOn } from "@icons";
import { HiddenView } from "@layouts";
import { colors } from "@/utils";

type ChangeEventType = {
  text: string;
  name: string;
};

interface PropType {
  value: string;
  placeholder: string;
  onChange: ({ text, name }: ChangeEventType) => void;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  password?: boolean;
  multiLine?: number;
}

const { size, letterSpacing, weight } = textStyle.caption[2];
const { primary, neutral, secondary, error: errorColor } = colors;
const sizes = { width: 18 };

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

  const style = {
    width: password ? "92%" : "100%",
    textAlignVertical: !!multiLine ? "top" : "auto",
    paddingVertical: !!multiLine ? 11 : 0,
  } as any;

  if (fontsLoaded) {
    return (
      <View
        style={[
          disabled && styles.disabled,
          error && styles.error,
          styles.container,
          active && styles.active,
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
          style={style}
          multiline={!!multiLine}
          numberOfLines={multiLine || 1}
        />
        <HiddenView data={password}>
          {/* <TouchableWithoutFeedback onPress={() => setVisible(!visible)}> */}
          {visible ? (
            <EyeOn {...sizes} onPress={() => setVisible(!visible)} />
          ) : (
            <EyeOff {...sizes} onPress={() => setVisible(!visible)} />
          )}
          {/* </TouchableWithoutFeedback> */}
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
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === "ios" ? 10 : 5,
    borderRadius: 4,
    borderWidth: 1,
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
    fontSize: size,
    letterSpacing: letterSpacing,
    fontFamily: weight as any,
  },
});
