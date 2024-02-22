import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { getColors } from "@/utils/colors";

const gap = 16;
const offset = 16;

interface PropType {
  children: any;
  height: string;
  onScroll?: (item: boolean) => void;
}

export default function Carousel({ children, height, onScroll }: PropType) {
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(0);

  const handleScroll = (e: any) => {
    const newPage = Math.ceil(e.nativeEvent.contentOffset.x / (width + gap));
    if (newPage !== page && onScroll) {
      onScroll(newPage > page);
    }
    setPage(newPage);
  };

  return (
    <View style={{ alignItems: "center", gap: 10 }}>
      <FlatList
        horizontal
        removeClippedSubviews
        disableIntervalMomentum
        data={children}
        overScrollMode="never"
        initialNumToRender={2}
        onScroll={handleScroll}
        decelerationRate={0.875}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - gap / 2 - 26.5}
        contentContainerStyle={{ paddingHorizontal: offset }}
        keyExtractor={(item, index) => index.toString()}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        renderItem={({ item }) => (
          <View
            style={
              {
                height: height,
                width: width - 50,
                marginHorizontal: gap / 2,
              } as any
            }
          >
            {item}
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {Array.from(Array(children.length).keys()).map((item) => (
          <View
            key={item}
            style={[
              styles.indicatorElement,
              {
                width: item === page ? 20 : 8,
                backgroundColor: getColors(
                  item === page ? ["primary", 300] : ["neutral", 600]
                ),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  indicatorElement: {
    height: 8,
    borderRadius: 10,
  },
});
