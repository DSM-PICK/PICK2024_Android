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
    <Box>
      <View style={[styles.flexContainer, styles.indexContainer]}>
        <Text type="subTitle" size={3} weight="B" color={["primary", 100]}>
          {index}교시
        </Text>
        {icon}
        <View style={styles.subjectContainer}>
          <Text type="subTitle" size={3} weight="M">
            {name}
          </Text>
          <Text type="caption" size={2} color={["neutral", 500]}>
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
  indexContainer: {
    gap: 20,
  },
  subjectContainer: {
    gap: 2,
  },
});