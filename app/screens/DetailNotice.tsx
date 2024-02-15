import Layout from "@/components/common/Layout";
import Text from "@/components/common/Text";
import { noticeData } from "@/tmpData";
import { getColors } from "@/utils/colors";
import { StyleSheet, View } from "react-native";

export const DetailNotice = ({ route }) => {
  const { id } = route.params;

  const data = noticeData[id];

  return (
    <Layout
      name={
        data.title.length > 11 ? data.title.slice(0, 11) + "..." : data.title
      }
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text type="subTitle" size={2} weight="M" color={["neutral", 50]}>
            {data.title}
          </Text>
          <Text type="caption" size={2} color={["neutral", 400]}>
            {data.date}
          </Text>
        </View>
        <View style={styles.lineElement} />
        <Text type="caption" size={1} color={["neutral", 50]}>
          {data.content}
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    gap: 15,
  },
  titleContainer: {
    gap: 5,
  },
  lineElement: {
    width: "150%",
    height: 5,
    backgroundColor: getColors(["neutral", 800]),
    marginLeft: -150,
  },
});