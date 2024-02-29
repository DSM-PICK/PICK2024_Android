import { useQuery } from "@tanstack/react-query";
import { View, StyleSheet } from "react-native";
import { HomeButton, TimeTable, Notice, Meal, Pass } from "./components";
import { Apply, Schedule, Meals, My, Bell, Teacher } from "@icons";
import { hitSlop, queryKeys } from "@/constants";
import { Carousel, Layout } from "@layouts";
import { Text } from "@commonents";
import { simple } from "@/api";

const headerIconOptions = { hitSlop: hitSlop, width: 20 };
const buttonIconSize = { width: 30, height: 30 };

export const Home = ({ navigation }) => {
  const passData = false;

  const { data: simpleData } = useQuery({
    queryKey: queryKeys.simple,
    queryFn: simple,
    select: (res) => {
      const { class_num, grade, name, num } = res?.data;
      return `${grade}학년 ${class_num}반 ${num}번 ${name}`;
    },
  });

  const navigate = (to: string) => navigation.navigate(to);

  return (
    <Layout home noHorizontalPadding>
      <View style={{ gap: 20 }}>
        <View style={styles.topContainer}>
          <View style={styles.multiContainer}>
            <Text type={["heading", 6, "B"]} color={["primary", 300]}>
              PiCK
            </Text>
            <View style={styles.headerIconContainer}>
              <My {...headerIconOptions} onPress={() => navigate("My")} />
              <Bell {...headerIconOptions} onPress={() => navigate("개발")} />
            </View>
          </View>
          <Text type={["subTitle", 2, "B"]}>{simpleData}</Text>
          <View style={styles.multiContainer}>
            <HomeButton icon={<Schedule {...buttonIconSize} />} name="일정" />
            <HomeButton icon={<Apply {...buttonIconSize} />} name="신청" />
            <HomeButton icon={<Meals {...buttonIconSize} />} name="급식" />
            <HomeButton
              icon={<Teacher {...buttonIconSize} />}
              name="선생님 조회"
            />
          </View>
          <Pass visible={passData} type="out" name="test" data="10:20" />
        </View>
        <View style={{ height: passData ? "58%" : "71%" }}>
          <Carousel height="100%">
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
