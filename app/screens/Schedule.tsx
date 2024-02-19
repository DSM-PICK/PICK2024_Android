import Layout from "@/components/common/Layout";
import { ToggleButton } from "@/components/common/ToggleButton";
import Schedules from "@/components/schedule/Schedules";
import { TimeTables } from "@/components/schedule/TimeTables";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const Schedule = () => {
  const [page, setPage] = useState("시간표");

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
