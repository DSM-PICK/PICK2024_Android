import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { textStyle } from "@/components/common/Text/sets";
import { EyeOff, EyeOn } from "@/assets/icons";
import { colors } from "@/utils/colors";

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
const { primary, neutral, secondary, error: errorColor } = colors;
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
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          onChangeText={(text) => onChange({ text, name })}
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          secureTextEntry={password && !visible}
          selectionColor={error ? errorColor[500] : primary[500]}
          placeholderTextColor={error ? errorColor[700] : neutral[500]}
          style={[
            {
              width: password ? "92%" : "100%",
            },
          ]}
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
    backgroundColor: errorColor[900],
    borderColor: errorColor[500],
  },
  textStyle: {
    color: neutral[50],
    fontSize: size,
    letterSpacing: letterSpacing,
    fontFamily: weight as any, // 임시 오류 제거용 any
  },
});
