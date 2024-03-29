import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  to: string;
  date: string;
  title: string;
  icon: React.ReactElement;
}

export default function ApplyBox({ date, title, icon, to }: PropType) {
  const navigation = useNavigation();
  const navigate = [to, { type: to }] as never;

  return (
    <Box
      color={["primary", 1200]}
      onPress={() => navigation.navigate(...navigate)}
    >
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
