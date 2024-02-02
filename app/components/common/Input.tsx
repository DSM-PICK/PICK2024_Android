import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "@/utils/colors";
import { textStyle } from "@/utils/texts";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import EyeOff from "@icons/eyeOff.svg";
import EyeOn from "@assets/icons/eyeOn.svg";

type ChangeEventType = {
  text: string;
  name: string;
};

interface PropType {
  disabled?: boolean;
  value: string;
  onChange: ({ text, name }: ChangeEventType) => void;
  placeholder: string;
  name?: string;
  error?: boolean;
  password?: boolean;
}

const { size, letterSpacing, weight } = textStyle.caption[2];
const { neutral, secondary, error } = colors;
const sizes = { width: 18 };

export default function Input({
  disabled,
  value,
  onChange,
  placeholder,
  name = "",
  error,
  password,
}: PropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  if (fontsLoaded) {
    return (
      <View
        style={[
          styles.container,
          styles.field,
          active && styles.active,
          disabled && styles.disabled,
          error && styles.error,
        ]}
      >
        <TextInput
          onChangeText={(text) => onChange({ text, name })}
          value={value}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor={error ? colors.error[700] : colors.neutral[500]}
          selectionColor={error ? colors.error[500] : colors.primary[500]}
          style={[
            textStyle,
            {
              width: password ? "92%" : "100%",
            },
          ]}
          secureTextEntry={password && !visible}
        />
        {password && (
          <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
            {visible ? <EyeOn {...sizes} /> : <EyeOff {...sizes} />}
          </TouchableWithoutFeedback>
        )}
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
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    width: "100%",
  },
  field: {
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
    backgroundColor: error[900],
    borderColor: error[500],
  },
  textStyle: {
    color: neutral[50],
    fontSize: size,
    letterSpacing: letterSpacing,
    fontFamily: weight as any, // 임시 오류 제거용 any
  },
});
