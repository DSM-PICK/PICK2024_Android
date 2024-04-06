import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { queryKeys, path } from "@/constants";
import { NoticeBox } from "./components";
import { get, getColors } from "@/utils";
import { Layout } from "@layouts";

export const Notice = () => {
  const { data: noticeData } = useQuery({
    queryKey: queryKeys.notice,
    queryFn: () => get(`${path.notice}/simple`),
    select: (res) => res?.data,
  });

  return (
    <Layout name="공지사항">
      <View style={{ height: "95%" }}>
        <FlatList
          overScrollMode="never"
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          data={noticeData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <NoticeBox title={item.title} date={item.create_at} id={item.id} />
          )}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  separatorElement: {
    width: "100%",
    height: 0.5,
    backgroundColor: getColors(["primary", 900]),
  },
});
