import { StyleSheet, View } from "react-native";
import { useState } from "react";
import ApplyBox from "@/components/apply/ApplyBox";
import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import Move from "@/assets/applicons/move.svg";
import Modal from "@/components/common/Modal";
import Out from "@/assets/applicons/out.svg";
import Text from "@/components/common/Text";
import { getToday } from "@/utils/getToday";
import Box from "@/components/common/Box";

const { month } = getToday();
const buttonOptions = {
  size: "auto",
  fontType: ["button", "ES"],
  fontColor: ["neutral", 50],
  color: ["neutral", 1000],
};

export const Apply = () => {
  const [visible, setVisible] = useState(false);
  const [meal, setMeal] = useState(undefined);

  return (
    <Layout name="신청">
      <View style={{ gap: 20 }}>
        <View style={styles.gapContainer}>
          <Text type={["subTitle", 3, "M"]}>주말 급식 신청</Text>
          <Text type={["body", 3]} color={["neutral", 300]}>
            신청 여부는 담임 선생님이 확인 후 영양사 선생님에게 전달돼요.
          </Text>
          <Box color={["primary", 1200]}>
            <View style={styles.endMealBoxContainer}>
              <Text type={["body", 2]}>{month}월 주말 급식 신청</Text>
              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => setVisible(true)}
                  {...(buttonOptions as any)}
                >
                  {" "}
                  신청{" "}
                </Button>
                <Button
                  onPress={() => setVisible(true)}
                  {...(buttonOptions as any)}
                >
                  미신청
                </Button>
              </View>
            </View>
          </Box>
        </View>
        <View style={styles.gapContainer}>
          <ApplyBox
            date="오늘"
            title="교실 이동"
            to="교실이동"
            icon={<Move />}
          />
          <ApplyBox date="오늘" title="외출" to="외출" icon={<Out />} />
          <ApplyBox
            date="오늘"
            title="조기 귀가"
            to="조기귀가"
            icon={<Out />}
          />
        </View>
      </View>

      <Modal
        visible={visible}
        setVisible={setVisible}
        type={0}
        onAccept={() => setMeal(visible[1])}
      >
        <Text type={["subTitle", 3, "M"]} color={["neutral", 50]}>
          주말 급식을 {meal === "미신청" || !!!meal ? "신청" : "미신청"}
          하시겠습니까?
        </Text>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  gapContainer: {
    gap: 10,
  },
  endMealBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    gap: 5,
    flexDirection: "row",
  },
});
