import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { debounce } from "@/utils/debounce";
import { getColors } from "@/utils/colors";
import { Text } from "@/components/common";

const hitSlop = { top: 20, bottom: 20, right: 20, left: 20 };

interface PropType {
  items: (string | number)[];
  onScroll: (selected: string | number, id: string | number) => void;
  id?: string | number;
}

export default function ScrollPicker({ items, onScroll, id }: PropType) {
  const [height, setHeight] = useState(undefined);
  const [before, setBefore] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.y / height);
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
      <View style={styles.listContainer} pointerEvents="none" />
      <FlatList
        onScroll={handleScroll}
        data={items}
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        overScrollMode="never"
        hitSlop={hitSlop}
        renderItem={({ item, index }) => (
          <View
            onLayout={(e) => {
              const { height: _height } = e.nativeEvent.layout;
              if (index === 0) {
                height !== _height && setHeight(_height);
              }
            }}
          >
            <View
              style={{ marginVertical: 10, alignItems: "center" }}
              onStartShouldSetResponder={(): boolean => true}
            >
              <Text type={["subTitle", 3, "M"]}>{item}</Text>
            </View>
          </View>
        )}
        removeClippedSubviews
        snapToInterval={height || 0}
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
});
