import { View, StyleSheet } from "react-native";
import { Apply, Schedule, Meals, My, Bell } from "@assets/icons";
import HomeButton from "@/components/home/HomeButton";
import Carousel from "@/components/common/Carousel";
import TimeTable from "@/components/home/TimeTable";
import Layout from "@/components/common/Layout";
import Notice from "@/components/home/Notice";
import Text from "@/components/common/Text";
import Meal from "@/components/home/Meal";
import Box from "@/components/common/Box";
import { useState } from "react";
import Button from "@/components/common/Button";

const headerIconSize = 16;
const buttonIconSize = { width: 30, height: 30 };

export const Home = ({ navigation }) => {
  const [pass, setPass] = useState(true);

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
            <HomeButton icon={<Schedule {...buttonIconSize} />} name="일정" />
            <HomeButton icon={<Apply {...buttonIconSize} />} name="신청" />
            <HomeButton icon={<Meals {...buttonIconSize} />} name="급식" />
            <HomeButton icon={<My {...buttonIconSize} />} name="My" />
          </View>
          <Box>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text type="caption" size={2} color={["neutral", 400]}>
                  육기준님의 외출 시간은
                </Text>
                <Text type="caption" size={1} color={["neutral", 50]}>
                  <Text
                    type="subTitle"
                    size={3}
                    weight="M"
                    color={["primary", 400]}
                  >
                    12 : 34 ~ 03 : 58
                  </Text>
                  입니다
                </Text>
              </View>
              <View style={{ width: "30%" }}>
                <Button
                  size="full"
                  fontType={["button", "ES"]}
                  onPress={() => navigation.navigate("외출증")}
                  color={["secondary", 500]}
                >
                  외출증 보기
                </Button>
              </View>
            </View>
          </Box>
        </View>
        <View style={{ height: pass ? "58%" : "63%" }}>
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
