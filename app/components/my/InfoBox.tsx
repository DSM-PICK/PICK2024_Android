import { StyleSheet, View } from "react-native";
import Text from "../common/Text";

interface PropType {
  type: "name" | "birth" | "num" | "id";
  data: string;
}

const fontType = ["body", 2];

const typeSet = {
  name: "이름",
  birth: "생년월일",
  num: "학번",
  id: "아이디",
};

export default function InfoBox({ type, data }: PropType) {
  return (
    <View style={styles.container}>
      <Text type={fontType} color={["neutral", 200]}>
        {typeSet[type]}
      </Text>
      <Text type={fontType}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
