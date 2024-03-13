import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import NoticeBox from "@/screens/Notice/components/NoticeBox";
import { getColors } from "@/utils";
import { Layout } from "@layouts";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { notice } from "@/api";

export const Notice = () => {
  const { data: noticeData } = useQuery({
    queryKey: queryKeys.notice,
    queryFn: notice,
    select: (res) => {
      return res?.data;
    },
  });

  return (
    <Layout name="공지사항">
      <View style={styles.container}>
        <FlatList
          overScrollMode="never"
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          data={noticeData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <NoticeBox title={item.title} date={item.create_at} id={item.id} />
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "95%",
  },
  separatorElement: {
    width: "100%",
    height: 0.5,
    backgroundColor: getColors(["primary", 900]),
  },
});
