import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Text } from "@commonents";
import { ScheduleBox } from "./ScheduleBox";
import { queryKeys } from "@/constants";
import { getSchedule } from "@/api";
import { getToday } from "@/utils";

const { year, month } = getToday();

export default function Schedules() {
  const [date, setDate] = useState([year, month]);

  const { data: scheData, isLoading } = useQuery({
    queryKey: [queryKeys.schedule, date],
    queryFn: () => getSchedule(date[0], date[1]),
    select: (res) => res?.data,
    placeholderData: (prev) => prev,
  });

  return (
    <View style={styles.container}>
      <Calendar
        picks={scheData?.map((i) => i.day)}
        onMove={({ year, month }) => setDate([year, month])}
      />
      {isLoading ? (
        <Text type={["body", 1]}>불러오고 있습니다.</Text>
      ) : (
        <FlatList
          data={scheData}
          ListEmptyComponent={() => (
            <Text type={["body", 1]}>일정이 없습니다.</Text>
          )}
          overScrollMode="never"
          initialNumToRender={2}
          contentContainerStyle={{ gap: 15 }}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <ScheduleBox item={item} date={date} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    gap: 15,
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
});
