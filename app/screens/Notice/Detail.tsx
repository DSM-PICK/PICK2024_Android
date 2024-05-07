import { useQuery } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { path, queryKeys } from "@/constants";
import { get, getColors } from "@/utils";
import { Text } from "@commonents";
import { Layout } from "@layouts";

export const DetailNotice = ({ route }) => {
  const { id } = route.params;

  const { data: detailData } = useQuery({
    queryKey: [queryKeys.notice, id],
    queryFn: () => get(`${path.notice}/${id}`),
    select: (res) => res?.data,
  });

  return (
    <Layout
      name={
        detailData?.title.length > 11
          ? detailData?.title.slice(0, 11) + ".."
          : detailData?.title
      }
    >
      <View style={styles.container}>
        <View style={{ gap: 5 }}>
          <Text type={["subTitle", 3, "M"]} color={["neutral", 50]}>
            {detailData?.title}
          </Text>
          <Text type={["caption", 2]} color={["neutral", 400]}>
            {detailData?.create_at}
          </Text>
        </View>
        <View style={styles.lineElement} />
        <Text type={["body", 2]} color={["neutral", 50]}>
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
