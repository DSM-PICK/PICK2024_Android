import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Layout, Box, HiddenView } from "@layouts";
import { calcDate, get, getToday } from "@/utils";
import { path, queryKeys } from "@/constants";
import { Calendar, Text } from "@commonents";
import { TeacherItem } from "./components";

const { year, month, date: _date } = getToday();

export const Teacher = () => {
  const [date, setDate] = useState({ year, month, date: _date });

  const { data: teacherData, isError } = useQuery({
    queryKey: [queryKeys.teacher, date],
    queryFn: () => get(`${path.selfStudy}/today?date=${calcDate(date)}`),
    placeholderData: (prev) => prev,
    select: (res) => res?.data,
  });

  return (
    <Layout name="자습감독 조회">
      <View style={styles.container}>
        <Calendar
          onSelect={({ year, month, date }) => setDate({ year, month, date })}
        />
        <Text type={["subTitle", 3, "M"]}>
          {date.month}월 {date.date}일 자습감독 선생님
        </Text>
        <Box color={["primary", 1000]}>
          <HiddenView data={isError || teacherData?.length === 0}>
            <Text type={["body", 1]}>자습감독이 없습니다.</Text>
          </HiddenView>
          <View style={{ gap: 30 }}>
            {teacherData?.map((item: any, index: number) => (
              <TeacherItem item={item} key={index} />
            ))}
          </View>
        </Box>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: "6%",
    height: "100%",
    gap: 10,
  },
});
