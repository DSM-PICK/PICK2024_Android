import { View } from "react-native";
import Text from "../common/Text";
import Box from "../common/Box";

interface PropType {
  date: string;
  title: string;
  icon: React.ReactElement;
}

export default function ApplyBox({ date, title, icon }: PropType) {
  return (
    <Box color={["primary", 1200]}>
      <View style={{ gap: 5 }}>
        <Text type={["body", 3]} color={["neutral", 300]}>
          {date}
        </Text>
        <Text type={["subTitle", 3, "M"]} color={["neutral", 50]}>
          {title}
        </Text>
        <View style={{ alignSelf: "flex-end" }}>{icon}</View>
      </View>
    </Box>
  );
}
