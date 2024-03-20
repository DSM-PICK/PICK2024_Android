import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { debounce, getColors, perfectSize as p } from "@/utils";
import { PropType } from "ScrollPickerType";
import { hitSlop } from "@/constants";
import { Text } from "@commonents";

export default function ScrollPicker({ items, onScroll, id }: PropType) {
  const [before, setBefore] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.y / p(40));
    if (index !== before) {
      setBefore(index);
      Haptics.selectionAsync();
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
          paddingVertical: p(30),
        }}
        overScrollMode="never"
        hitSlop={hitSlop}
        renderItem={({ item }) => (
          <View
            style={{
              height: p(40),
              justifyContent: "center",
              alignItems: "center",
            }}
            onStartShouldSetResponder={(): boolean => true}
          >
            <Text type={["subTitle", 3, "M"]}>{item}</Text>
          </View>
        )}
        removeClippedSubviews
        snapToInterval={p(40)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: p(101),
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  listContainer: {
    zIndex: 1,
    height: p(40),
    position: "absolute",
    borderTopColor: getColors(["primary", 500]),
    borderBottomColor: getColors(["primary", 500]),
    borderTopWidth: p(2),
    borderBottomWidth: p(2),
    width: "100%",
  },
  flatListElement: {
    width: "100%",
    height: "100%",
  },
});
