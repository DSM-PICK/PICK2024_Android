import { getColors } from "@/utils/colors";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import Text from "./Text";

interface PropType {
  items: string[];
  onPress: (item: string) => void;
}

export const ToggleButton = ({ items, onPress }: PropType) => {
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: Math.round(
        (width / items.length - (9 - items.length) + 0.25 * items.length) *
          selected
      ),
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [animation, selected]);

  const handlePress = (index: number, item: string) => {
    setSelected(index);
    onPress(item);
  };

  return (
    <View
      style={styles.container}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View
        style={[
          styles.barElement,
          {
            transform: [{ translateX: animation }],
            width: `${100 / items.length}%`,
          },
        ]}
      />

      <View style={styles.buttonContainer}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            style={[styles.buttonElement, { width: `${100 / items.length}%` }]}
            onPress={() => handlePress(index, item)}
          >
            <Text type="body" size={2}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 7,
    height: 46,
    borderRadius: 200,
    backgroundColor: getColors(["primary", 1000]),
  },
  barElement: {
    height: "100%",
    borderRadius: 100,
    backgroundColor: "white",
  },
  buttonContainer: {
    margin: 7,
    width: "100%",
    height: "100%",
    position: "absolute",
    flexDirection: "row",
  },
  buttonElement: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});