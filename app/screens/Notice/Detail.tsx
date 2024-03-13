import { StyleSheet, View } from "react-native";
import { noticeData } from "@/tmpData";
import { getColors } from "@/utils";
import { Text } from "@commonents";
import { Layout } from "@layouts";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { detail } from "@/api";

export const DetailNotice = ({ route }) => {
  const { id } = route.params;

  const { data: detailData } = useQuery({
    queryKey: [queryKeys.notice, id],
    queryFn: () => detail(id),
    select: (res) => {
      console.log(res);
      return res?.data;
    },
  });

  return (
    <Layout
      name={
        detailData?.title.length > 11
          ? detailData?.title.slice(0, 11) + "..."
          : detailData?.title
      }
    >
      <View style={styles.container}>
        <View style={{ gap: 5 }}>
          <Text type={["subTitle", 2, "M"]} color={["neutral", 50]}>
            {detailData?.title}
          </Text>
          <Text type={["caption", 2]} color={["neutral", 400]}>
            {detailData?.create_at}
          </Text>
        </View>
        <View style={styles.lineElement} />
        <Text type={["caption", 2]} color={["neutral", 50]}>
          {detailData?.content}
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
  lineElement: {
    width: "200%",
    height: 5,
    backgroundColor: getColors(["neutral", 800]),
    marginLeft: -150,
  },
});
