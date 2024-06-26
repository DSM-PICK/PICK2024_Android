import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { queryKeys, path } from "@/constants";
import { removeToken, getColors, get } from "@/utils";
import { Text, Modal } from "@commonents";
import { InfoBox } from "./components";
import { Layout, Box } from "@layouts";

const dateType = ["년", "월", "일"];

export const My = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const { data: detailData } = useQuery({
    queryKey: queryKeys.detail,
    queryFn: () => get(`${path.user}/details`),
    select: (res) => {
      let { data } = res;
      data = { ...data, birth_day: data.birth_day.split("-") };
      return data;
    },
  });

  const handleLogout = async () => {
    await removeToken();
    navigation.reset({ routes: [{ name: "온보딩" as never }] });
  };

  return (
    <Layout name="My">
      <View style={styles.container}>
        <InfoBox type="name" data={detailData?.name} />
        <InfoBox
          type="birth"
          data={detailData?.birth_day
            ?.map((item: string, index: number) => item + dateType[index])
            .join(" ")}
        />
        <InfoBox
          type="num"
          data={`${detailData?.grade}학년 ${detailData?.class_num}반 ${detailData?.num}번`}
        />
        <InfoBox type="id" data={detailData?.account_id} />
        <View style={styles.lineElement} />
        <View style={styles.accountContainer}>
          <Text type={["subTitle", 3, "M"]}>계정 관리</Text>
          <Text type={["body", 3]} color={["neutral", 300]}>
            기기내 계정에서 로그아웃 할 수 있어요.
          </Text>
          <Box color={["primary", 1200]} onPress={() => setVisible(true)}>
            <Text type={["body", 3]}>로그아웃</Text>
          </Box>
        </View>
        <Modal
          visible={visible}
          setVisible={setVisible}
          type={2}
          onAccept={handleLogout}
        >
          <Text type={["subTitle", 3, "M"]} color={["neutral", 50]}>
            정말 로그아웃 하시겠습니까?
          </Text>
        </Modal>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountContainer: {
    alignSelf: "flex-start",
    gap: 10,
    width: "100%",
  },
  lineElement: {
    width: "200%",
    height: 5,
    backgroundColor: getColors(["neutral", 800]),
    marginLeft: -150,
  },
});
