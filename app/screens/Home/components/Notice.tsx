import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import NoticeBox from "@/screens/Notice/components/NoticeBox";
import { getColors } from "@/utils";
import { Text } from "@commonents";
import { Box } from "@layouts";
import { queryKeys } from "@/constants";
import { notice } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function Notice() {
  const navigation = useNavigation();
  const nagivating = () => navigation.navigate("공지" as never);

  const { data: noticeData } = useQuery({
    queryKey: queryKeys.notice,
    queryFn: notice,
    select: (res) => {
      return res?.data;
    },
  });

  const Separator = () => <View style={styles.separatorElement} />;

  const Renderor = ({ item }) => (
    <NoticeBox title={item.title} date={item.create_at} id={item.id} />
  );

  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type={["label", 1]}>공지</Text>
          <Text
            type={["body", 2]}
            color={["neutral", 300]}
            onPress={nagivating}
          >
            더보기
          </Text>
        </View>
        <FlatList
          overScrollMode="never"
          data={noticeData}
          ItemSeparatorComponent={Separator}
          renderItem={Renderor}
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
