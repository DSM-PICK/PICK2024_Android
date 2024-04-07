import { StyleSheet, View } from "react-native";
import { Box, HiddenView } from "@layouts";
import { defaultData } from "@/constants";
import Move from "./Move";
import Home from "./Home";
import Out from "./Out";

interface PropType {
  type: string;
  data: any;
}

const Types = {
  EARLYRETURN: ({ username, start_time }) =>
    Home({ name: username, data: start_time }),
  CLASSROOM: ({ username, classroom }) =>
    Move({ name: username, data: classroom }),
  APPLICATION: ({ username, end_time, start_time }) =>
    Out({ name: username, data: [start_time, end_time] }),
};

export default function Pass({ type, data }: PropType) {
  let { username, end_time, start_time, classroom } = data || defaultData;

  return (
    <HiddenView data={!!data}>
      <Box>
        <View style={styles.container}>
          {Types[type || "CLASSROOM"]({
            username,
            end_time,
            start_time,
            classroom,
          })}
        </View>
      </Box>
    </HiddenView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
