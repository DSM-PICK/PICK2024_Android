import Calendar from "@/components/common/Calendar";
import Layout from "@/components/common/Layout";
import Text from "@/components/common/Text";
import Menu from "@/components/meal/Menu";
import { mealData } from "@/tmpData";
import { getToday } from "@/utils/getToday";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

// 얘도 한번 구조 손봐야 함
// 뷰 구조하고 스타일링 코드가 조금 이상해

export const Meal = () => {
  const { year, month, date } = getToday();
  const [selected, setSelected] = useState(`${month}월 ${date}일`);

  const testF = ({ month, date }) => {
    setSelected(`${month}월 ${date}일`);
  };

  return (
    <Layout name="급식">
      <View style={styles.container}>
        <Calendar onPress={testF} />
        <Text type="subTitle" size={3} weight="M">
          {selected} 급식
        </Text>
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
