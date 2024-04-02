import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";
import { useCallback } from "react";
import { HomeButton, TimeTable, Notice, Meal, Pass } from "./components";
import { Apply, Schedule, Meals, My, Teacher } from "@icons";
import { hitSlop, queryKeys } from "@/constants";
import { Carousel, Layout } from "@layouts";
import { checkApply, simple } from "@/api";
import { Text } from "@commonents";

const headerIconOptions = { hitSlop: hitSlop, width: 20 };
const buttonIconSize = { width: 30, height: 30 };
const texts = ["학년 ", "반 ", "번 ", ""];

export const Home = ({ navigation }) => {
  const queryClient = useQueryClient();

  useFocusEffect(
    useCallback(() => {
      queryClient.invalidateQueries({ queryKey: queryKeys.anyApply });
    }, [])
  );

  const { data: applyData } = useQuery({
    queryKey: queryKeys.anyApply,
    queryFn: checkApply,
    select: (res) => {
      return res?.data;
    },
  });

  const { data: simpleData } = useQuery({
    queryKey: queryKeys.simple,
    queryFn: simple,
    select: (res) => {
      const { class_num, grade, name, num } = res?.data;
      return [grade, class_num, num, name];
    },
  });

  const navigate = (to: string) => navigation.navigate(to);

  return (
    <Layout home noHorizontalPadding>
      <View style={{ gap: 20 }}>
        <View style={styles.topContainer}>
          <View style={styles.multiContainer}>
            <Image
              source={require("@/assets/Logo.png")}
              style={{ width: 60, height: 20 }}
            />
            <My {...headerIconOptions} onPress={() => navigate("My")} />
          </View>
          <Text type={["subTitle", 2, "B"]}>
            {simpleData?.map((item, index) => item + texts[index])}
          </Text>
          <View style={styles.multiContainer}>
            <HomeButton icon={<Schedule {...buttonIconSize} />} name="일정" />
            <HomeButton icon={<Apply {...buttonIconSize} />} name="신청" />
            <HomeButton icon={<Meals {...buttonIconSize} />} name="급식" />
            <HomeButton
              icon={<Teacher {...buttonIconSize} />}
              name="선생님 조회"
            />
          </View>
          {applyData && (
            <Pass
              visible={!!applyData}
              type={applyData.type}
              data={applyData && applyData}
            />
          )}
        </View>
        <View style={{ height: !!applyData ? "58%" : "71%" }}>
          <Carousel height="100%" first={1}>
            <TimeTable />
            <Meal />
            <Notice />
          </Carousel>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 25,
    gap: 20,
  },
  multiContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
