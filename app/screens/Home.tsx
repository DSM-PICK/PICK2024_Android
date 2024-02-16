import { View, StyleSheet } from "react-native";
import { Apply, Schedule, Meals, My, Bell } from "@assets/icons";
import HomeButton from "@/components/home/HomeButton";
import Carousel from "@/components/common/Carousel";
import TimeTable from "@/components/home/TimeTable";
import Layout from "@/components/common/Layout";
import Notice from "@/components/home/Notice";
import Text from "@/components/common/Text";
import Meal from "@/components/home/Meal";

const headerIconSize = 16;
const buttonIconSize = { width: 30, height: 30 };

export const Home = ({ navigation }) => {
  return (
    <Layout home noHorizontalPadding>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.multiContainer}>
            <Text type="heading" size={6} weight="B" color={["primary", 300]}>
              PiCK
            </Text>
            <Bell width={headerIconSize} />
          </View>
          <Text type="subTitle" size={2} weight="B" color={["neutral", 50]}>
            1학년 3반 11번 육기준
          </Text>
          <View style={styles.multiContainer}>
            <HomeButton
              icon={<Schedule {...buttonIconSize} />}
              name="일정"
              nav={navigation}
            />
            <HomeButton
              icon={<Apply {...buttonIconSize} />}
              name="신청"
              nav={navigation}
            />
            <HomeButton
              icon={<Meals {...buttonIconSize} />}
              name="급식"
              nav={navigation}
            />
            <HomeButton
              icon={<My {...buttonIconSize} />}
              name="My"
              nav={navigation}
            />
          </View>
        </View>
        <Carousel height={500}>
          <TimeTable />
          <Meal />
          <Notice />
        </Carousel>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
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
