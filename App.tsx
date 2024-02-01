import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./app/components/common/Text";
import Input from "./app/components/common/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Text type="heading" size={5}>
        Test
      </Text>
      <Input
        placeholder="text field"
        value=""
        onChange={({ text, name }) => {}}
        name="test"
        error={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
