import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { useState } from "react";
import { getColors } from "@/utils/colors";

const gap = 16;
const offset = 16;

export default function Carousel({ children, height }) {
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(0);

  const handleScroll = (e: any) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (width + gap));
    setPage(newPage);
  };

  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <FlatList
        horizontal
        pagingEnabled
        disableIntervalMomentum
        decelerationRate={0.875}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        data={children}
        onScroll={handleScroll}
        contentContainerStyle={{
          paddingHorizontal: offset,
        }}
        keyExtractor={(item, index) => index.toString()}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        renderItem={({ item }) => (
          <View
            style={{
              height: height,
              width: width - 50,
              marginHorizontal: gap / 2,
            }}
          >
            {item}
          </View>
        )}
        snapToInterval={width - gap / 2 - 26.5}
      />
      <View style={{ flexDirection: "row", gap: 5 }}>
        {Array.from(Array(children.length).keys()).map((item) => (
          <View
            key={item}
            style={{
              width: item === page ? 20 : 8,
              height: 8,
              borderRadius: 10,
              backgroundColor: getColors(
                item === page ? ["primary", 300] : ["neutral", 600]
              ),
            }}
          />
        ))}
      </View>
    </View>
  );
}
