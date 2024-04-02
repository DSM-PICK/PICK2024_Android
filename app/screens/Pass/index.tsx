import { Image, StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { Layout } from "@layouts";
import { Text } from "@commonents";
import { getOut, getReturn } from "@/api";
import { AxiosResponse } from "axios";
import { Label } from "./components";

const names = {
  out: "외출",
  home: "조기 귀가",
};

const placeholderData: AxiosResponse<any, any> = {
  headers: {},
  config: {},
  status: 200,
  statusText: "",
  data: {
    grade: 1,
    class_num: 1,
    num: 11,
    username: "박수현",
    start_time: "13:13:13",
    end_time: "13:13:13",
  },
};

export const Pass = ({ route }) => {
  const { type } = route.params;

  const { data } = useQuery({
    queryKey: queryKeys.apply,
    queryFn: type === "out" ? getOut : getReturn,
    select: (res) => res?.data,
    placeholderData,
  });

  const { grade, class_num, num, username, start_time, end_time } = data;

  const formDate = (time: string) => time.split(":").splice(0, 2).join(":");
  const user = `${grade}${class_num}${num} ${username}`;
  const time = end_time
    ? `${formDate(start_time)}~${formDate(end_time)}`
    : `${formDate(start_time)}`;

  return (
    <Layout name="외출증">
      <View
        style={{
          height: "90%",
          position: "absolute",
          alignSelf: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View style={styles.detailContainer}>
          <Text type={["heading", 6, "M"]}>{user}</Text>
          <View style={{ gap: 20 }}>
            <Label title={`${names[type]} 시간`}>{time}</Label>
            <Label title="사유">{data.reason}</Label>
            <Label title="확인 교사">{data.teacher_name + " 선생님"}</Label>
            <Image
              source={require("@/assets/Out.png")}
              style={{ width: "100%", height: 68 }}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    gap: 40,
    paddingVertical: 40,
  },
});
