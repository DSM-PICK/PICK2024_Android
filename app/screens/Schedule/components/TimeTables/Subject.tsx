import { View, StyleSheet, Image } from "react-native";
import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  index: number;
  name: string;
  duration: string;
  icon: string;
}

export default function Subject({ index, name, duration, icon }: PropType) {
  return (
    <Box>
      <View style={[styles.flexContainer, { gap: 20 }]}>
        <Text type={["subTitle", 3, "M"]} color={["primary", 100]}>
          {index}교시
        </Text>
        <Image source={{ uri: icon }} width={25} height={25} />
        <View style={{ gap: 2 }}>
          <Text type={["subTitle", 3, "M"]}>{name}</Text>
          <Text type={["caption", 2]} color={["neutral", 500]}>
            {duration}
          </Text>
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
