import { View, StyleSheet } from "react-native";
import Text from "@/components/common/Text";
import Box from "@/components/layouts/Box";

interface PropType {
  index: number;
  name: string;
  duration: any; // 여기 수정해야 함
  icon: React.ReactElement;
}

export default function Subject({ index, name, duration, icon }: PropType) {
  return (
    <Box>
      <View style={[styles.flexContainer, { gap: 20 }]}>
        <Text type={["subTitle", 3, "M"]} color={["primary", 100]}>
          {index}교시
        </Text>
        {icon}
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
