import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Box from "../../../../components/layouts/Box";
import Home from "./Home";
import Out from "./Out";
import Move from "./Move";

const Types = {
  home: ({ name, data }) => Home({ name: name, date: data }),
  out: ({ name, data }) => Out({ name: name, date: data }),
  move: ({ name, data }) => Move({ name: name, place: data }),
};

export default function Pass({ visible, type, name, data }) {
  const navigation = useNavigation();

  if (visible) {
    return (
      <Box>
        <View style={styles.container}>{Types[type]({ name, data })}</View>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
