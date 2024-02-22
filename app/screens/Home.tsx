import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { Apply, Schedule, Meals, My, Bell } from "@assets/icons";
import HomeButton from "@/components/home/HomeButton";
import Carousel from "@/components/common/Carousel";
import TimeTable from "@/components/home/TimeTable";
import Layout from "@/components/common/Layout";
import Notice from "@/components/home/Notice";
import Text from "@/components/common/Text";
import Meal from "@/components/home/Meal";
import Pass from "@/components/home/Pass";

const headerIconSize = 16;
const buttonIconSize = { width: 30, height: 30 };

export const Home = () => {
  const [pass, setPass] = useState(true);

  return (
    <Layout home noHorizontalPadding>
      <View style={{ gap: 20 }}>
        <View style={styles.topContainer}>
          <View style={styles.multiContainer}>
            <Text type={["heading", 6, "B"]} color={["primary", 300]}>
              PiCK
            </Text>
            <Bell width={headerIconSize} />
          </View>
          <Text type={["subTitle", 2, "B"]} color={["neutral", 50]}>
            1학년 3반 11번 육기준
          </Text>
          <View style={styles.multiContainer}>
            <HomeButton icon={<Schedule {...buttonIconSize} />} name="일정" />
            <HomeButton icon={<Apply {...buttonIconSize} />} name="신청" />
            <HomeButton icon={<Meals {...buttonIconSize} />} name="급식" />
            <HomeButton icon={<My {...buttonIconSize} />} name="My" />
          </View>
          <Pass visible={pass} type="out" name="test" data="10:20" />
        </View>
        <View style={{ height: pass ? "58%" : "71%" }}>
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
});
