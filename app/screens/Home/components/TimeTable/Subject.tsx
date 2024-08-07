import { View, StyleSheet, Image } from "react-native";
import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  index: number;
  name: string;
  icon: string;
}

export default function Subject({ index, name, icon }: PropType) {
  return (
    <Box color={["neutral", 1000]}>
      <View style={[styles.flexContainer, { gap: 15 }]}>
        <Text type={["subTitle", 3, "B"]} color={["primary", 100]}>
          {index}
        </Text>
        <Image source={{ uri: icon }} width={24} height={24} />
        <View style={[styles.flexContainer, { gap: 5 }]}>
          <Text type={["subTitle", 4, "M"]}>{name}</Text>
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
