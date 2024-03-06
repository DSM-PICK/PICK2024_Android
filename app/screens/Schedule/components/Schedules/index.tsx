import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { ScheduleBox } from "./ScheduleBox";
import { scheduleData } from "@/tmpData";
import { Calendar } from "@commonents";
import { getToday } from "@/utils";

const { year, month } = getToday();

export default function Schedules() {
  const [date, setDate] = useState([year, month]);

  return (
    <View style={styles.container}>
      <Calendar
        picks={scheduleData.map((i) => i.date)}
        onMove={({ year, month }) => setDate([year, month])}
      />
      <FlatList
        data={scheduleData}
        overScrollMode="never"
        initialNumToRender={2}
        contentContainerStyle={{ gap: 15 }}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <ScheduleBox item={item} date={date} />}
      />
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
