import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { calcDate, get, getToday } from "@/utils";
import { path, queryKeys } from "@/constants";
import { Calendar, Text } from "@commonents";
import { MenuItem } from "./components";
import { Layout } from "@layouts";

const { year, month, date: _date } = getToday();

export const Meal = () => {
  const [date, setDate] = useState({ year, month, date: _date });

  const { data: mealData } = useQuery({
    queryKey: [queryKeys.meal, date],
    queryFn: () => get(`${path.meal}/date?date=${calcDate(date)}`),
    select: (res) => Object.entries(res?.data?.meals),
    placeholderData: (prev) => prev,
  });

  return (
    <Layout name="급식">
      <View style={styles.container}>
        <Calendar
          onSelect={({ year, month, date }) => setDate({ year, month, date })}
        />
        <Text type={["subTitle", 3, "M"]}>
          {date.month}월 {date.date}일 급식
        </Text>
        <FlatList
          overScrollMode="never"
          contentContainerStyle={{
            gap: 10,
          }}
          data={mealData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <MenuItem menu={item as [string, string[]]} />
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    gap: 10,
    paddingBottom: "6%",
  },
});
