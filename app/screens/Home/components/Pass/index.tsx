import { StyleSheet, View } from "react-native";
import { Box } from "@/components/layouts";
import Move from "./Move";
import Home from "./Home";
import Out from "./Out";

interface PropType {
  visible: boolean;
  type: string;
  name: string;
  data: any;
}

const Types = {
  home: ({ username, end_time }) => Home({ name: username, data: end_time }),
  move: ({ username, classroom }) => Move({ name: username, data: classroom }),
  out: ({ username, end_time, start_time }) =>
    Out({ name: username, data: [start_time, end_time] }),
};

export default function Pass({ visible, type, data }: PropType) {
  let { username, end_time, start_time, classroom } = data;
  end_time = end_time?.split(":").splice(0, 2).join(":");
  start_time = start_time?.split(":").splice(0, 2).join(":");

  if (visible) {
    return (
      <Box>
        <View style={styles.container}>
          {Types[type]({ username, end_time, start_time, classroom })}
        </View>
      </Box>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
