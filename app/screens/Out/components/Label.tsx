import { StyleSheet, View } from "react-native";
import { Text } from "@commonents";

interface PropType {
  title: string;
  children: React.ReactElement[] | React.ReactElement;
}

export default function Label({ title, children }: PropType) {
  return (
    <View style={styles.container}>
      <Text type={["body", 1]}>{title}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 6,
  },
  childrenContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
