import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { textStyle } from "../../utils/texts";
import {
  NotoSans_400Regular,
  NotoSans_500Medium,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";

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

export default function Input({
  disabled = false,
  value,
  onChange,
  placeholder,
  name = "",
  error,
  password = false,
}: PropType) {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    NotoSans_700Bold,
  });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const { size, letterSpacing, weight } = textStyle.caption["2"];

  if (fontsLoaded) {
    return (
      <View
        style={[
          styles.container,
          active && styles.active,
          !active && styles.field,
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
          style={
            {
              color: colors.neutral[50],
              fontSize: size,
              letterSpacing: letterSpacing,
              fontFamily: weight,
              width: password ? "90%" : "100%",
            } as any
          }
          secureTextEntry={password && !visible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    width: "100%",
  },
  field: {
    backgroundColor: colors.neutral[900],
    borderColor: colors.neutral[900],
  },
  active: {
    backgroundColor: "white",
    borderColor: colors.secondary[500],
  },
  disabled: {
    backgroundColor: "white",
    borderColor: colors.secondary[500],
  },
  error: {
    backgroundColor: colors.error[900],
    borderColor: colors.error[500],
  },
});
