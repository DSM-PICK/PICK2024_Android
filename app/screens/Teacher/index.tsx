import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Calendar, Text } from "@commonents";
import { queryKeys } from "@/constants";
import { Layout, Box } from "@layouts";
import { getToday } from "@/utils";
import { today } from "@/api";

const { year, month, date: _date } = getToday();

export const Teacher = () => {
  const [selected, setSelected] = useState(`${month}월 ${_date}일`);

  const { data: teacherData } = useQuery({
    queryKey: queryKeys.teacher,
    queryFn: today,
    select: (res) => {
      console.log(res.data);
      return ["", "김도경", "박현아", "조영준"];
    },
  });

  const dateFn = ({ month, date }) => {
    setSelected(`${month}월 ${date}일`);
  };

  return (
    <Layout name="선생님 조회">
      <View style={styles.container}>
        <Calendar onSelect={dateFn} />
        <Text type={["subTitle", 3, "M"]}>{selected} 자습감독 선생님</Text>
        <Box color={["primary", 1000]}>
          <View style={{ gap: 30 }}>
            {teacherData?.map(
              (item, index) =>
                item !== "" && (
                  <View key={index} style={{ flexDirection: "row", gap: 20 }}>
                    <Text type={["label", 1]}>{index + 1}층</Text>
                    <Text type={["label", 1]}>{item} 선생님</Text>
                  </View>
                )
            )}
          </View>
        </Box>
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
