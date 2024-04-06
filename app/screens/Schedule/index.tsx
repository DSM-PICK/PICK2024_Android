import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { TimeTables, Schedules } from "./components";
import { Layout, TernaryView } from "@layouts";
import { ToggleButton } from "@commonents";

export const Schedule = () => {
  const [page, setPage] = useState("시간표");

  return (
    <Layout name="일정" noHorizontalPadding>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          <ToggleButton items={["시간표", "학사일정"]} onPress={setPage} />
        </View>
        <TernaryView
          data={page === "시간표"}
          onTrue={<TimeTables />}
          onFalse={<Schedules />}
        />
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
