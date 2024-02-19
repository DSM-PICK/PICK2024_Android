import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { getToday } from "@/utils/getToday";
import { timeTableData } from "@/tmpData";
import Text from "../../common/Text";
import Box from "../../common/Box";
import Subject from "./Subject";

export default function TimeTable() {
  const { month, date, day } = getToday();

  const today = `${month}월 ${date}일 (${day})`;
  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type="label" size={1}>
            시간표
          </Text>
          <Text type="body" size={2} color={["neutral", 300]}>
            {today}
          </Text>
        </View>
        <View>
          <FlatList
            overScrollMode="never"
            contentContainerStyle={styles.listContainer}
            data={timeTableData}
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
  listContainer: {
    gap: 10,
  },
});
