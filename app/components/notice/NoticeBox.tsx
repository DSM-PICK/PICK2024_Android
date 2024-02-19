import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { New, NoticeIcon } from "@/assets/icons";
import { getDiff } from "@/utils/getDiff";
import Text from "../common/Text";
import Box from "../common/Box";

interface PropType {
  title: string;
  date: string;
  index: number;
}

export default function NoticeBox({ title, date, index }: PropType) {
  const navigation = useNavigation();
  const path = ["상세공지", { id: index }];

  return (
    <Box rounded="none">
      <TouchableOpacity
        onPress={() => navigation.navigate(...(path as never))}
        style={styles.container}
      >
        <NoticeIcon />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text type={["body", 2]}>{title}</Text>
            {!!!index && <New />}
          </View>
          <Text type={["body", 2]} color={["neutral", 200]}>
            {getDiff(date)}
          </Text>
        </View>
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignContent: "center",
    gap: 5,
  },
  textContainer: {
    gap: 5,
  },
});
