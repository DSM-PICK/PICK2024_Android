import { View, StyleSheet } from "react-native";
import Text from "@/components/common/Text";
import Box from "@/components/common/Box";

interface PropType {
  index: number;
  name: string;
  duration: any; // 여기 수정해야 함
  icon: React.ReactElement;
}

export default function Subject({ index, name, duration, icon }: PropType) {
  return (
    <Box color={["neutral", 1000]}>
      <View style={[styles.flexContainer, { gap: 20 }]}>
        <Text type="subTitle" size={3} weight="B" color={["primary", 100]}>
          {index}
        </Text>
        {icon}
        <View style={[styles.flexContainer, { gap: 5 }]}>
          <Text type="subTitle" size={4} weight="M">
            {name}
          </Text>
          <Text type="caption" size={3} color={["neutral", 500]}>
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
