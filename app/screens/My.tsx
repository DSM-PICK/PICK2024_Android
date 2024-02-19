import { View, StyleSheet, Image } from "react-native";
import Layout from "@/components/common/Layout";
import InfoBox from "@/components/my/InfoBox";
import Text from "@/components/common/Text";
import { getColors } from "@/utils/colors";
import Box from "@/components/common/Box";
import { Photo } from "@/assets/icons";
import Modal from "@/components/common/Modal";
import { useState } from "react";

export const My = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout name="My">
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View>
            <Image source={{ uri: "empty" }} style={styles.imageElement} />
            {/* 이미지 URL 넣으면 됨 */}
            <Photo style={styles.photoElement} />
          </View>

          <Text type={["body", 2]} color={["neutral", 100]} onPress={() => {}}>
            변경하기
          </Text>
        </View>
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
          type={1}
          onAccept={() => {}}
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
  photoContainer: {
    alignItems: "center",
    gap: 10,
  },
  imageElement: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  photoElement: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  lineElement: {
    width: "200%",
    height: 5,
    backgroundColor: getColors(["neutral", 800]),
    marginLeft: -150,
  },
});
