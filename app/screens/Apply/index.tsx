import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { weekendMeal, weekendMealMy } from "@/api";
import MealButton from "./components/MealButton";
import ApplyBox from "./components/ApplyBox";
import { Modal, Text } from "@commonents";
import { queryKeys } from "@/constants";
import { Layout, Box } from "@layouts";
import { Move, Out } from "@/assets";
import { getToday } from "@/utils";

const { month } = getToday();

export const Apply = () => {
  const [visible, setVisible] = useState([false, ""]);
  const [meal, setMeal] = useState(undefined);
  const queryClient = useQueryClient();

  const { data: weekendMealData } = useQuery({
    queryKey: queryKeys.weekendMeal,
    queryFn: weekendMealMy,
    select: (res) => res?.data.status,
  });

  const { mutate: weekendMealMutate } = useMutation({
    mutationFn: (id: string) => weekendMeal(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.weekendMeal });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    setMeal(weekendMealData && weekendMealData);
  }, [weekendMealData]);

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
                <MealButton
                  setVisible={setVisible}
                  id="OK"
                  value={meal}
                  text=" 신청 "
                />
                <MealButton
                  setVisible={setVisible}
                  id="NO"
                  value={meal}
                  text="미신청"
                />
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
        visible={visible[0] as boolean}
        setVisible={(data) => setVisible([data, visible[1]])}
        type={0}
        onAccept={() => {
          weekendMealMutate(visible[1] as string);
        }}
      >
        <Text type={["subTitle", 3, "M"]} color={["neutral", 50]}>
          주말 급식을 {visible[1] === "OK" ? "신청" : "미신청"}하시겠습니까?
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
