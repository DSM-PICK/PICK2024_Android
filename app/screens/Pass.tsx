import Box from "@/components/common/Box";
import Layout from "@/components/common/Layout";
import Text from "@/components/common/Text";
import { Image, View } from "react-native";

export const Pass = () => {
  return (
    <Layout name="외출증">
      <View style={{ gap: 20 }}>
        <Box color={["primary", 1200]}>
          <Image
            style={{ width: "100%" }}
            source={require("@/assets/QR.png")}
          />
        </Box>
        <View style={{ gap: 10 }}>
          <Text type={["label", 1]}>외출 시간</Text>
          <Box color={["primary", 1200]}>
            <Text type={["subTitle", 3, "M"]} color={["neutral", 100]}>
              16:30 ~ 20:30
            </Text>
          </Box>
        </View>
        <View style={{ gap: 10 }}>
          <Text type={["label", 1]}>사유</Text>
          <Box color={["primary", 1200]}>
            <Text type={["subTitle", 3, "M"]} color={["neutral", 100]}>
              집에 가고 싶어요
            </Text>
          </Box>
        </View>
        <View style={{ gap: 10 }}>
          <Text type={["label", 1]}>확인 교사</Text>
          <Box color={["primary", 1200]}>
            <Text type={["subTitle", 3, "M"]} color={["neutral", 100]}>
              이기혁 선생님
            </Text>
          </Box>
        </View>
      </View>
    </Layout>
  );
};
