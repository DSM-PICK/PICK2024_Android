import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import Menu from "@/screens/Meal/components/Menu";
import { mealData } from "@/tmpData";
import { getToday } from "@/utils";
import { Text } from "@commonents";
import { Box } from "@layouts";

const { month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export default function Meal() {
  const Renderor = ({ item }) => <Menu time={item.time} menu={item.menu} />;

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
            overScrollMode="never"
            data={mealData}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={Renderor}
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
