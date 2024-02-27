import { View, StyleSheet, Image } from "react-native";
import Layout from "@/components/common/Layout";
import InfoBox from "@/components/my/InfoBox";
import Text from "@/components/common/Text";
import { getColors } from "@/utils/colors";
import Box from "@/components/common/Box";
import { Photo } from "@/assets/icons";
import Modal from "@/components/common/Modal";
import { useState } from "react";
import { removeToken } from "@/utils/token";

export const My = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const handleLogout = async () => {
    await removeToken();
    navigation.reset({ routes: [{ name: "온보딩" as never }] });
  };

  return (
    <Layout name="My">
      <View style={styles.container}>
        <InfoBox type="name" data="육기준" />
        <InfoBox type="birth" data="2007년 11월 27일" />
        <InfoBox type="num" data="1학년 3반 11번" />
        <InfoBox type="id" data="dragonis132" />
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
