import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { getColors, getToday } from "@/utils";
import { Text } from "@commonents";
import Subject from "./Subject";
import { Box } from "@layouts";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { todayTimeTable } from "@/api/schedule/timetable";

const { month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export default function TimeTable() {
  const { data: tableData } = useQuery({
    queryKey: queryKeys.timeTable,
    queryFn: todayTimeTable,
    select: (res) => {
      return res?.data.timetables;
    },
  });

  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type={["label", 1]}>시간표</Text>
          <Text type={["body", 2]} color={["neutral", 300]}>
            {today}
          </Text>
        </View>
        <View>
          <FlatList
            overScrollMode="never"
            contentContainerStyle={{ gap: 10 }}
            data={tableData}
            ListEmptyComponent={() => (
              <Text type={["body", 2]}>시간표가 없습니다</Text>
            )}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Subject
                index={index + 1}
                name={item.subject_name}
                icon={
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: getColors(["neutral", 100]),
                    }}
                  />
                }
              />
            )}
          />
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingBottom: 30,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
