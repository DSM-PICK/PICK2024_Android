import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "@commonents";

interface PropType {
  icon: React.ReactElement;
  name: string;
}

export default function HomeButton({ icon, name }: PropType) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconElement}
        onPress={() => navigation.navigate(name as never)}
        activeOpacity={0.6}
      >
        {icon}
      </TouchableOpacity>
      <Text type={["body", 3]}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: "center",
  },
  iconElement: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
});
