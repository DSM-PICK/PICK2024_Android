import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Calendar, Text } from "@commonents";
import { queryKeys } from "@/constants";
import { Layout, Box, HiddenView } from "@layouts";
import { getToday } from "@/utils";
import { today } from "@/api";

const { year, month, date: _date } = getToday();

export const Teacher = () => {
  const [selected, setSelected] = useState(`${month}월 ${_date}일`);

  const {
    data: teacherData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKeys.teacher, selected],
    queryFn: today,
    select: (res) => {
      return res?.data?.sort((i: any, j: any) => i.floor - j.floor);
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
          <HiddenView data={isLoading}>
            <Text type={["body", 1]}>불러오는 중입니다.</Text>
          </HiddenView>
          <HiddenView data={isError}>
            <Text type={["body", 1]}>자습감독이 없습니다.</Text>
          </HiddenView>
          <View style={{ gap: 30 }}>
            {teacherData?.map(
              (item: any) =>
                item !== "" && (
                  <View
                    key={item.floor}
                    style={{ flexDirection: "row", gap: 20 }}
                  >
                    <Text type={["label", 1]}>{item.floor}층</Text>
                    <Text type={["label", 1]}>{item.teacher_name} 선생님</Text>
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
