import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Text from "./app/components/common/Text";

export default function App() {
  return (
    <View>
      <Text type="heading" size={1}>
        텍스트
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
