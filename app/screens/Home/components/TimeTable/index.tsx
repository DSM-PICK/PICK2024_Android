import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { timeTableData } from "@/tmpData";
import { getToday } from "@/utils";
import { Text } from "@commonents";
import Subject from "./Subject";
import { Box } from "@layouts";

const { month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export default function TimeTable() {
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
            data={timeTableData}
            keyExtractor={(item) => item.index.toString()}
            renderItem={({ item }) => (
              <Subject index={item.index} name={item.name} icon={item.icon} />
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
