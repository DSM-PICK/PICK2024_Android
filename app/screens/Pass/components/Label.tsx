import { View } from "react-native";
import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  title: string;
  children: string;
}

export default function Label({ title, children }: PropType) {
  return (
    <View style={{ gap: 3 }}>
      <Text type={["label", 1]}>{title}</Text>
      <Box color={["primary", 1200]}>
        <Text type={["subTitle", 3, "M"]} color={["neutral", 100]}>
          {children}
        </Text>
      </Box>
    </View>
  );
}
