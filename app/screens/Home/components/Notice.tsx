import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { NoticeBox } from "@/screens/Notice/components";
import { path, queryKeys } from "@/constants";
import { getColors, get } from "@/utils";
import { Text } from "@commonents";
import { Box } from "@layouts";

export default function Notice() {
  const navigation = useNavigation();

  const { data: noticeData } = useQuery({
    queryKey: queryKeys.notice,
    queryFn: () => get(`${path.notice}/simple`),
    select: (res) => res?.data,
  });

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
          ListEmptyComponent={() => (
            <Text type={["body", 2]}>공지사항이 없습니다</Text>
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          renderItem={({ item }) => (
            <NoticeBox title={item.title} date={item.create_at} id={item.id} />
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
