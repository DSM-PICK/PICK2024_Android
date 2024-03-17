import { Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { debounce, getColors, useToast } from "@/utils";
import * as _ from "@/assets/toastIcons";
import { HiddenView } from "@layouts";
import { Text } from "@commonents";

export default function ToastManager() {
  const { type, message, show, stop } = useToast();
  const pos = useRef(new Animated.Value(50)).current;

  const Component = _[type];

  const showT = () => {
    Animated.timing(pos, {
      toValue: 15,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      if (type !== "waiting") {
        debounce(stop, 1000);
      }
    });
  };

  const hideT = () => {
    Animated.timing(pos, {
      toValue: -45,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    show ? showT() : hideT();
  }, [show, type]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: pos,
            },
          ],
        },
      ]}
    >
      <HiddenView data={type !== ""}>
        <Component color={getColors(["neutral", 300])} />
      </HiddenView>

      <Text type={["subTitle", 3, "M"]} color={["neutral", 300]}>
        {message}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: getColors(["neutral", 1100]),
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "center",
    elevation: 3,
  },
});
