import Box from "@/components/common/Box";
import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import Modal from "@/components/common/Modal";
import Text from "@/components/common/Text";
import { getToday } from "@/utils/getToday";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Move from "@/assets/applicons/move.svg";
import Out from "@/assets/applicons/out.svg";

const { month } = getToday();
const buttonOptions = {
  size: "medium",
  fontType: ["button", "ES"],
  fontColor: ["neutral", 50],
  color: ["neutral", 1000],
};

export const Apply = () => {
  const [visible, setVisible] = useState([false, false]);
  const [meal, setMeal] = useState(false);

  return (
    <Layout name="신청">
      <View style={styles.container}>
        <View style={styles.endMealContainer}>
          <Text type="subTitle" size={3} weight="M" color={["neutral", 50]}>
            주말 급식 신청
          </Text>
          <Text type="body" size={3} color={["neutral", 300]}>
            신청 여부는 담임 선생님이 확인 후 영양사 선생님에게 전달돼요.
          </Text>
          <Box color={["primary", 1200]}>
            <View style={styles.endMealBoxContainer}>
              <Text type="body" size={3} color={["neutral", 50]}>
                {month}월 주말 급식 신청
              </Text>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => setVisible([true, true])}
                  {...(buttonOptions as any)}
                >
                  신청
                </Button>
                <Button
                  onPress={() => setVisible([true, false])}
                  {...(buttonOptions as any)}
                >
                  미신청
                </Button>
              </View>
            </View>
          </Box>
        </View>
        <View style={{ gap: 10 }}>
          <Box color={["primary", 1200]}>
            <View style={{ gap: 5 }}>
              <Text type="body" size={3} color={["neutral", 300]}>
                오늘
              </Text>
              <Text type="subTitle" size={3} weight="M" color={["neutral", 50]}>
                교실 이동
              </Text>
              <Move style={{ alignSelf: "flex-end" }} />
            </View>
          </Box>
          <Box color={["primary", 1200]}>
            <View style={{ gap: 5 }}>
              <Text type="body" size={3} color={["neutral", 300]}>
                오늘
              </Text>
              <Text type="subTitle" size={3} weight="M" color={["neutral", 50]}>
                외출
              </Text>
              <Out style={{ alignSelf: "flex-end" }} />
            </View>
          </Box>
          <Box color={["primary", 1200]}>
            <View style={{ gap: 5 }}>
              <Text type="body" size={3} color={["neutral", 300]}>
                오늘
              </Text>
              <Text type="subTitle" size={3} weight="M" color={["neutral", 50]}>
                조기 귀가
              </Text>
              <Out style={{ alignSelf: "flex-end" }} />
            </View>
          </Box>
        </View>
      </View>

      <Modal
        visible={visible[0]}
        setVisible={(visible) => setVisible([visible, false])}
        type={0}
        onAccept={() => setMeal(visible[1])}
      >
        <Text type="subTitle" size={3} weight="M" color={["neutral", 50]}>
          주말 급식을 {visible[1] ? "신청" : "미신청"}하시겠습니까?
        </Text>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  endMealContainer: {
    gap: 10,
  },
  endMealBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "flex-end",
    gap: 10,
    flexDirection: "row",
  },
});
