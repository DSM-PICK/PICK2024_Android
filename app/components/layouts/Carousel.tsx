import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import { PropType } from "CarouselType";
import { getColors } from "@/utils";

const gap = 16;
const offset = 16;

export default function Carousel({
  children,
  height,
  onScroll,
  first,
}: PropType) {
  const testRef: React.Ref<FlatList<any>> = useRef(null);
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(0);

  const handleScroll = (e: any) => {
    const newPage = Math.ceil(e.nativeEvent.contentOffset.x / (width + gap));
    if (newPage !== page && onScroll) {
      onScroll(newPage);
    }
    setPage(newPage);
  };

  const styleInLine = {
    height: height as DimensionValue,
    width: width - 50,
    marginHorizontal: gap / 2,
  } as StyleProp<ViewStyle>;

  const Renderor = ({ item }) => <View style={styleInLine}>{item}</View>;

  return (
    <View style={styles.container}>
      <FlatList
        ref={testRef}
        horizontal
        removeClippedSubviews
        disableIntervalMomentum
        data={children}
        overScrollMode="never"
        onScroll={handleScroll}
        decelerationRate={0.875}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - gap / 2 - 26.5}
        contentContainerStyle={{ paddingHorizontal: offset }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={Renderor}
        onLayout={(event) => {
          setWidth(event.nativeEvent.layout.width);
          // 자동 스크롤 버그로 임시 비활성화
          // if (first) {
          //   setTimeout(() => {
          //     testRef.current.scrollToIndex({
          //       animated: false,
          //       index: first,
          //       viewPosition: 0.5,
          //     });
          //   }, 100);
          // }
        }}
        // onScrollToIndexFailed={(error) => {
        //   console.log(error);
        //   setTimeout(() => {
        //     testRef.current.scrollToIndex({
        //       animated: false,
        //       index: first,
        //       viewPosition: 0.5,
        //     });
        //   }, 100);
        // }}
      />
      <View style={styles.indicatorContainer}>
        {Array.from(Array(children?.length).keys()).map((item) => (
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
  container: {
    alignItems: "center",
    gap: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  indicatorElement: {
    height: 8,
    borderRadius: 10,
  },
});
