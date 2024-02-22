import { FlatList } from "react-native";
import { View } from "react-native";
import { getColors } from "@/utils/colors";
import Text from "./Text";
import { debounce } from "@/utils/debounce";

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
  const handleScroll = (e) => {
    const index = Math.ceil(e.nativeEvent.contentOffset.y / interval);
    debounce(() => {
      onScroll(items[index], id);
    }, 200);
  };

  return (
    <View
      style={{
        width: "30%",
        height: 101,
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
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        overScrollMode="never"
        renderItem={({ item }) => (
          <View
            style={{ marginVertical: 10, alignItems: "center" }}
            onStartShouldSetResponder={(): boolean => true}
          >
            <Text type={["subTitle", 3, "M"]}>{item}</Text>
          </View>
        )}
        maxToRenderPerBatch={6}
        removeClippedSubviews
        snapToInterval={interval}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
