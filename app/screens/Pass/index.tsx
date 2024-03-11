import { Image, StyleSheet, View } from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import Label from "@/screens/Pass/components/Label";
import { queryKeys } from "@/constants";
import { Layout, Box } from "@layouts";
import { Text } from "@commonents";

const types = {
  out: {
    name: "외출",
    color: ["primary", 500],
  },
  home: {
    name: "조기 귀가",
    color: ["tertiary", 500],
  },
};

export const Pass = ({ route }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(queryKeys.anyApply)[1];
  const { grade, class_num, num, username, start_time, end_time } = data;
  const { type } = route.params;

  const formDate = (time: string) => time.split(":").splice(0, 2).join(":");
  const user = `${grade}${class_num}${num} ${username}`;
  const time = end_time
    ? `${formDate(start_time)}~${formDate(end_time)}`
    : `${formDate(start_time)}`;

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
        <Label title="외출 시간">{time}</Label>
        <Label title="사유">{data.reason}</Label>
        <Label title="확인 교사">{data.teacher_name + " 선생님"}</Label>
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
