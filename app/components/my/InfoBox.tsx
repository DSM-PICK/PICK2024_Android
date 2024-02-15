import { View } from "react-native";
import Text from "../common/Text";

interface PropType {
  type: "name" | "birth" | "num" | "id";
  data: string;
}

const titleStyle = { type: "body", size: 2, color: ["neutral", 200] };
const dataStyle = { type: "body", size: 2, color: ["neutral", 50] };
const typeSet = {
  name: "이름",
  birth: "생년월일",
  num: "학번",
  id: "아이디",
};

export default function InfoBox({ type, data }: PropType) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text {...titleStyle}>{typeSet[type]}</Text>
      <Text {...dataStyle}>{data}</Text>
    </View>
  );
}
