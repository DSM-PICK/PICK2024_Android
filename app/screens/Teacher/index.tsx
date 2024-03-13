import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Layout, Box, HiddenView } from "@layouts";
import { Calendar, Text } from "@commonents";
import { queryKeys } from "@/constants";
import { getToday } from "@/utils";
import { today } from "@/api";

const { year, month, date: _date } = getToday();

export const Teacher = () => {
  const [date, setDate] = useState({ year, month, date: _date });

  const dateFn = ({ year, month, date }) => {
    setDate({ year, month, date });
  };

  const { data: teacherData, isError } = useQuery({
    queryKey: [queryKeys.teacher, date],
    queryFn: () => today(date),
    select: (res) => {
      return res?.data?.sort((i: any, j: any) => i.floor - j.floor);
    },
    placeholderData: (prev) => prev,
  });

  const selected = `${date.month}월 ${date.date}일 자습감독 선생님`;

  return (
    <Layout name="선생님 조회">
      <View style={styles.container}>
        <Calendar onSelect={dateFn} />
        <Text type={["subTitle", 3, "M"]}>{selected}</Text>
        <Box color={["primary", 1000]}>
          <HiddenView data={isError || teacherData?.length === 0}>
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
