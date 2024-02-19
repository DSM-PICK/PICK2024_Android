import { View, StyleSheet } from "react-native";
import Text from "../common/Text";
import Box from "../common/Box";
import NoticeBox from "@/components/notice/NoticeBox";
import { FlatList } from "react-native-gesture-handler";
import { noticeData } from "@/tmpData";
import { getColors } from "@/utils/colors";
import { useNavigation } from "@react-navigation/native";

export default function Notice() {
  const navigation = useNavigation();

  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type={["label", 1]}>공지</Text>
          <Text
            type={["body", 2]}
            color={["neutral", 300]}
            onPress={() => navigation.navigate("공지" as never)}
          >
            더보기
          </Text>
        </View>
        <FlatList
          overScrollMode="never"
          data={noticeData}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          renderItem={({ item, index }) => (
            <NoticeBox title={item.title} date={item.date} index={index} />
          )}
        />
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingBottom: 30,
  },
  headerContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  separatorElement: {
    width: "100%",
    height: 0.5,
    backgroundColor: getColors(["primary", 900]),
  },
});
