import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Calendar, Text } from "@commonents";
import Menu from "../Meal/components/Menu";
import { queryKeys } from "@/constants";
import { mealAtDate } from "@/api";
import { getToday } from "@/utils";
import { Layout } from "@layouts";

const { year, month, date: _date } = getToday();

export const Meal = () => {
  const [date, setDate] = useState({ year, month, date: _date });

  const dateFn = ({ year, month, date }) => {
    setDate({ year, month, date });
  };

  const { data: mealData } = useQuery({
    queryKey: [queryKeys.meal, date],
    queryFn: () => mealAtDate(date),
    select: (res) => {
      const meals = res?.data.meals;
      return Object.entries(meals);
    },
    placeholderData: (prev) => prev,
  });

  const selected = `${date.month}월 ${date.date}일 급식`;

  return (
    <Layout name="급식">
      <View style={styles.container}>
        <Calendar onSelect={dateFn} />
        <Text type={["subTitle", 3, "M"]}>{selected}</Text>
        <FlatList
          overScrollMode="never"
          contentContainerStyle={{
            gap: 10,
          }}
          data={mealData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <Menu menu={item} />}
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
