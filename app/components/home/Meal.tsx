import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { getToday } from "@/utils/getToday";
import { mealData } from "@/tmpData";
import Text from "../common/Text";
import Box from "../common/Box";
import Menu from "../meal/Menu";

const { month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export default function Meal() {
  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type={["label", 1]}>급식</Text>
          <Text type={["body", 3]} color={["neutral", 300]}>
            {today}
          </Text>
        </View>
        <View>
          <FlatList
            data={mealData}
            overScrollMode="never"
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Menu time={item.time} menu={item.menu} />
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
