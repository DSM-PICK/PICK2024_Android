import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { useState } from "react";
import { debounce, getColors } from "@/utils";
import { PropType } from "ScrollPickerType";
import { hitSlop } from "@/constants";
import { Text } from "@commonents";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";

export default function ScrollPicker({ items, onScroll, id }: PropType) {
  const [before, setBefore] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.y / 40);
    if (index !== before) {
      setBefore(index);
      impactAsync(ImpactFeedbackStyle.Medium);
    }
    if (!!items[index]) {
      debounce(() => {
        onScroll(items[index], id);
      }, 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.listContainer]} pointerEvents="none" />
      <FlatList
        onScroll={handleScroll}
        data={items}
        style={styles.flatListElement}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        overScrollMode="never"
        hitSlop={hitSlop}
        renderItem={({ item }) => (
          <View
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onStartShouldSetResponder={(): boolean => true}
          >
            <Text type={["subTitle", 3, "M"]}>{item}</Text>
          </View>
        )}
        removeClippedSubviews
        decelerationRate="normal"
        snapToInterval={40}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 101,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  listContainer: {
    zIndex: 1,
    height: 40,
    position: "absolute",
    borderTopColor: getColors(["primary", 500]),
    borderBottomColor: getColors(["primary", 500]),
    borderTopWidth: 2,
    borderBottomWidth: 2,
    width: "100%",
  },
  flatListElement: {
    width: "100%",
    height: "100%",
  },
});
