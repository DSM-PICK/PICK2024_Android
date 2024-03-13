import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import Menu from "@/screens/Meal/components/Menu";
import { queryKeys } from "@/constants";
import { getToday } from "@/utils";
import { Text } from "@commonents";
import { mealAtDate } from "@/api";
import { Box } from "@layouts";

const { year, month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export default function Meal() {
  const Renderor = ({ item }) => (
    <Menu menu={item.filter((i: string) => i !== "")} />
  );

  const { data: mealData } = useQuery({
    queryKey: queryKeys.meal,
    queryFn: () => mealAtDate({ year, month, date }),
    select: (res) => {
      const meals = res?.data.meals;
      return Object.entries(meals);
    },
  });

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
