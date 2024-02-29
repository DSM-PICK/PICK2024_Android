import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import NoticeBox from "@/screens/Notice/components/NoticeBox";
import Layout from "@/components/layouts/Layout";
import { getColors } from "@/utils/colors";
import { noticeData } from "@/tmpData";

export const Notice = () => {
  return (
    <Layout name="공지사항">
      <View style={styles.container}>
        <FlatList
          overScrollMode="never"
          ItemSeparatorComponent={() => (
            <View style={styles.separatorElement} />
          )}
          data={noticeData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <NoticeBox title={item.title} date={item.date} index={index} />
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
