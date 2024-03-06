import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Calendar, Text } from "@commonents";
import Menu from "../Meal/components/Menu";
import { mealData } from "@/tmpData";
import { getToday } from "@/utils";
import { Layout } from "@layouts";

const { year, month, date: _date } = getToday();

export const Meal = () => {
  const [date, setDate] = useState([year, month]);
  const [selected, setSelected] = useState(`${month}월 ${_date}일`);

  const dateFn = ({ month, date }) => {
    setSelected(`${month}월 ${date}일`);
  };

  return (
    <Layout name="급식">
      <View style={styles.container}>
        <Calendar
          onSelect={dateFn}
          onMove={({ year, month }) => {
            setDate([year, month]);
          }}
        />
        <Text type={["subTitle", 3, "M"]}>{selected} 급식</Text>
        <FlatList
          overScrollMode="never"
          contentContainerStyle={{
            gap: 10,
          }}
          data={mealData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Menu time={item.time} menu={item.menu} />}
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
