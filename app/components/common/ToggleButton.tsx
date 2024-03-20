import { Animated, Pressable, StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { getColors, perfectSize as p } from "@/utils";
import { PropType } from "ToggleType";
import { Text } from "@commonents";

export default function ToggleButton({ items, onPress }: PropType) {
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const widthBySize: `${number}%` = `${100 / items.length}%`;

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
            width: widthBySize,
          },
        ]}
      />

      <View style={styles.buttonContainer}>
        {items.map((item, index) => (
          <Pressable
            key={index}
            style={[styles.buttonElement, { width: widthBySize }]}
            onPress={() => handlePress(index, item)}
          >
            <Text type={["body", 2]}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: p(7),
    height: p(46),
    borderRadius: p(200),
    backgroundColor: getColors(["primary", 1000]),
  },
  barElement: {
    height: "100%",
    borderRadius: p(100),
    backgroundColor: "white",
  },
  buttonContainer: {
    margin: p(7),
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
