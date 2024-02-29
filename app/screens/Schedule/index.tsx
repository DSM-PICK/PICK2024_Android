import Layout from "@/components/layouts/Layout";
import { ToggleButton } from "@/components/common";
import Schedules from "@/screens/Schedule/components/Schedules";
import { TimeTables } from "@/screens/Schedule/components/TimeTables";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export const Schedule = () => {
  const [page, setPage] = useState("시간표");

  // 시간표 5개 출력되는거 월, 화, 수, 목, 금으로 해서 다섯개 고정으로 뜨게 하기
  return (
    <Layout name="일정" noHorizontalPadding>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          <ToggleButton
            items={["시간표", "학사일정"]}
            onPress={(item) => {
              setPage(item);
            }}
          />
        </View>
        {page === "시간표" ? <TimeTables /> : <Schedules />}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    height: "100%",
  },
});
