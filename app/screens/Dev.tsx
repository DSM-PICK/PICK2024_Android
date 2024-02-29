import { Text, View } from "react-native";
import { Layout } from "@layouts";

export const Dev = () => {
  return (
    <Layout name="Dev">
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>개발중입니다</Text>
      </View>
    </Layout>
  );
};
