import { Dimensions, FlatList, PixelRatio } from "react-native";
import { View } from "react-native";
import { getColors } from "@/utils/colors";
import Text from "./Text";
import { debounce } from "@/utils/debounce";
import { useState } from "react";

interface PropType {
  items: (string | number)[];
  interval: number;
  onScroll: (selected: string | number, id: string | number) => void;
  id?: string | number;
}

export default function ScrollPicker({
  items,
  interval,
  onScroll,
  id,
}: PropType) {
  const [height, setHeight] = useState(undefined);

  const handleScroll = (e) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.y / interval);
    if (!!items[index]) {
      debounce(() => {
        onScroll(items[index], id);
      }, 200);
    }
  };

  return (
    <View
      style={{
        width: "30%",
        height: 102,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          zIndex: 1,
          height: 40,
          position: "absolute",
          borderTopColor: getColors(["primary", 500]),
          borderBottomColor: getColors(["primary", 500]),
          borderTopWidth: 2,
          borderBottomWidth: 2,
          width: "100%",
        }}
        pointerEvents="none"
      />
      <FlatList
        onScroll={handleScroll}
        data={items}
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        overScrollMode="never"
        renderItem={({ item }) => (
          <View
            onLayout={(e) => {
              const { height: _height } = e.nativeEvent.layout;
              height !== _height && setHeight(_height);
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
        maxToRenderPerBatch={6}
        removeClippedSubviews
        snapToInterval={height || 0}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
