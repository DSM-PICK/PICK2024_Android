import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { useState } from "react";
import { moreTimeTableData } from "@/tmpData";
import { getToday, days } from "@/utils";
import { Carousel } from "@layouts";
import { Text } from "@commonents";
import Subject from "./Subject";

const { year, month, date, day } = getToday();

export default function TimeTables() {
  const [_date, _setDate] = useState([year, month, date, day]);

  const handleScroll = (item: boolean) => {
    if (item) {
      const tmp = new Date(
        Number(_date[0]),
        Number((_date[1] as number) - 1),
        Number((_date[2] as number) + 1)
      );
      _setDate([
        tmp.getFullYear(),
        tmp.getMonth() + 1,
        tmp.getDate(),
        days[tmp.getDay()],
      ]);
    } else {
      const tmp = new Date(
        Number(_date[0]),
        Number((_date[1] as number) - 1),
        Number((_date[2] as number) - 1)
      );
      _setDate([
        tmp.getFullYear(),
        tmp.getMonth() + 1,
        tmp.getDate(),
        days[tmp.getDay()],
      ]);
    }
  };

  return (
    <View style={{ height: "80%" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text type={["subTitle", 3, "M"]}>
          {_date[1]}월 {_date[2]}일 ({_date[3]})
        </Text>
      </View>

      <Carousel height="100%" onScroll={handleScroll}>
        {moreTimeTableData.map((item, index) => {
          return (
            <FlatList
              initialNumToRender={1}
              key={index}
              style={{ height: "100%" }}
              data={item}
              keyExtractor={(item) => item.index.toString()}
              renderItem={({ item }) => (
                <Subject
                  index={item.index}
                  name={item.name}
                  duration={item.duration}
                  icon={item.icon}
                />
              )}
            />
          );
        })}
      </Carousel>
    </View>
  );
}
