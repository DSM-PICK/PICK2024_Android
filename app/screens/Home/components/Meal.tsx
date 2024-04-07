import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { MenuItem } from "@/screens/Meal/components";
import { path, queryKeys } from "@/constants";
import { get, getToday } from "@/utils";
import { Text } from "@commonents";
import { Box } from "@layouts";

const { fullDay, fullDayShort } = getToday();

export default function Meal() {
  const { data: mealData } = useQuery({
    queryKey: queryKeys.meal,
    queryFn: () => get(`${path.meal}/date?date=${fullDay}`),
    select: (res) => Object.entries(res?.data?.meals),
  });

  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type={["label", 1]}>급식</Text>
          <Text type={["body", 3]} color={["neutral", 300]}>
            {fullDayShort}
          </Text>
        </View>
        <View>
          <FlatList
            overScrollMode="never"
            data={mealData}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <MenuItem menu={item as [string, string[]]} />
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
