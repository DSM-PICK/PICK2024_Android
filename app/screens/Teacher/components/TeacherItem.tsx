import { StyleSheet, View } from "react-native";
import { HiddenView } from "@layouts";
import { Text } from "@commonents";

interface PropType {
  item: {
    floor: string;
    teacher_name: string;
  };
}

export const TeacherItem = ({ item }: PropType) => {
  return (
    <HiddenView data={item !== undefined}>
      <View key={item.floor} style={styles.container}>
        <Text type={["label", 1]}>{item.floor}층</Text>
        <Text type={["label", 1]}>{item.teacher_name} 선생님</Text>
      </View>
    </HiddenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
});
