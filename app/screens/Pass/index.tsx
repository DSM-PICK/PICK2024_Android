import Box from "@/components/layouts/Box";
import Layout from "@/components/layouts/Layout";
import Text from "@/components/common/Text";
import Label from "@/screens/Pass/components/Label";
import { Image, StyleSheet, View } from "react-native";

const types = {
  out: {
    name: "외출",
    color: ["tertiary", 500],
  },
  home: {
    name: "조기 귀가",
    color: ["primary", 500],
  },
};

export const Pass = ({ route }) => {
  const { type } = route.params;
  const user = "1311 육기준";

  return (
    <Layout name="외출증">
      <View style={{ gap: 20 }}>
        <View style={styles.titleContainer}>
          <Text type={["subTitle", 1, "M"]}>{user}</Text>
          <Text type={["subTitle", 1, "M"]} color={types[type].color}>
            {types[type].name}
          </Text>
        </View>
        <Box color={["primary", 1200]}>
          <Image style={styles.qrElement} source={require("@/assets/QR.png")} />
        </Box>
        <Label title="외출 시간">16:30 ~ 20:30</Label>
        <Label title="사유">집에 가고 싶어요</Label>
        <Label title="확인 교사">이기혁 선생님</Label>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qrElement: {
    width: "100%",
    borderRadius: 4,
  },
});
