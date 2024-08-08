import { FlatList } from "react-native-gesture-handler";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { path, queryKeys } from "@/constants";
import { Carousel } from "@layouts";
import { Text } from "@commonents";
import Subject from "./Subject";
import { get, getToday } from "@/utils";

const days = ["월", "화", "수", "목", "금"];
const times = [
  "08:40 ~ 09:30",
  "09:40 ~ 10:30",
  "10:40 ~ 11:30",
  "11:40 ~ 12:30",
  "13:30 ~ 14:20",
  "14:30 ~ 15:20",
  "15:30 ~ 16:20",
];

const { dayNum: today } = getToday();

export default function TimeTables() {
  const [_date, _setDate] = useState([0, 0, 0]);
  const [month, date, day] = _date;
  const isFirst = useRef(true);

  const { data: tableData } = useQuery({
    queryKey: [queryKeys.timeTable, "schedule"],
    queryFn: () => get(`${path.timeTable}/week`),
    select: (res) => res?.data,
  });

  useEffect(() => {
    if (tableData && isFirst) {
      isFirst.current = false;
      const tmp = tableData[0]?.date.split("-").splice(1, 2).map(Number);
      _setDate([...tmp, 0]);
    }
  }, [tableData]);

  const handleScroll = (item: number) => {
    const tmp = tableData[item]?.date.split("-").splice(1, 2).map(Number);
    _setDate([...tmp, item]);
  };

  return (
    <View style={{ height: "80%" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text type={["subTitle", 3, "M"]}>
          {month}월 {date}일 ({days[day]})
        </Text>
      </View>
      <Carousel
        height="100%"
        onScroll={handleScroll}
        first={today !== 6 && today !== 0 ? today - 1 : 0}
      >
        {tableData?.map((item: any, index: number) => (
          <FlatList
            initialNumToRender={1}
            key={index}
            style={{ height: "100%" }}
            data={item?.timetables}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Subject
                index={index + 1}
                name={item.subject_name}
                duration={times[index]}
                icon={item.image}
              />
            )}
          />
        ))}
      </Carousel>
    </View>
  );
}
