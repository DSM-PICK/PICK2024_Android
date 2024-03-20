import { FlatList } from "react-native-gesture-handler";
import { Image, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { getColors } from "@/utils";
import { Carousel } from "@layouts";
import { Text } from "@commonents";
import Subject from "./Subject";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { weekTimeTable } from "@/api/schedule/timetable";
import * as I from "@/assets/tableIcons";

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

export default function TimeTables() {
  const [_date, _setDate] = useState([0, 0, 0]);
  const isFirst = useRef(true);

  const { data: tableData } = useQuery({
    queryKey: [queryKeys.timeTable, "schedule"],
    queryFn: weekTimeTable,
    select: (res) => {
      return res?.data;
    },
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
          {_date[0]}월 {_date[1]}일 ({days[_date[2]]})
        </Text>
      </View>

      <Carousel height="100%" onScroll={handleScroll}>
        {tableData?.map((item, index) => {
          return (
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
                  icon={
                    <Image
                      source={
                        I[item.subject_name.replaceAll(" ", "")] ||
                        I["웹프로그래밍"]
                      }
                    />
                  }
                />
              )}
            />
          );
        })}
      </Carousel>
    </View>
  );
}
