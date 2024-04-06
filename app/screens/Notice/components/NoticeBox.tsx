import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { New, NoticeIcon } from "@icons";
import { Text } from "@commonents";
import { getDiff } from "@/utils";
import { Box } from "@layouts";

interface PropType {
  title: string;
  date: string;
  id: string;
}

export default function NoticeBox({ title, date, id }: PropType) {
  const navigation = useNavigation();
  const path = ["상세공지", { id }] as never;
  const _date = getDiff(date);

  return (
    <Box rounded="none">
      <TouchableOpacity
        onPress={() => navigation.navigate(...path)}
        style={styles.container}
      >
        <NoticeIcon />
        <View style={{ gap: 5 }}>
          <View style={styles.titleContainer}>
            <Text type={["body", 2]}>
              {title.length > 21 ? title.slice(0, 21) + ".." : title}
            </Text>
            {_date === "오늘" && <New />}
          </View>
          <Text type={["body", 2]} color={["neutral", 200]}>
            {_date}
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
});
