import { Image, StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { defaultData, path, queryKeys } from "@/constants";
import { Label } from "./components";
import { Text } from "@commonents";
import { Layout } from "@layouts";
import { get } from "@/utils";

const names = {
  out: "외출",
  home: "조기 귀가",
};

const placeholderData = {
  headers: {},
  config: {},
  status: 200,
  statusText: "",
  data: defaultData,
};

export const Pass = ({ route }) => {
  const { type } = route.params;

  const { data } = useQuery({
    queryKey: queryKeys.apply,
    queryFn: () => get(`${path[type === "out" ? "out" : "earlyReturn"]}/my`),
    select: (res) => res?.data,
    placeholderData,
  });

  const {
    grade,
    class_num,
    num,
    username,
    start_time,
    end_time,
    reason,
    teacher_name,
  } = data;

  return (
    <Layout name="외출증">
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <Text type={["heading", 6, "M"]}>
            {grade + class_num + num + username}
          </Text>
          <View style={{ gap: 20 }}>
            <Label title={`${names[type]} 시간`}>
              {end_time ? `${start_time}~${end_time}` : start_time}
            </Label>
            <Label title="사유">{reason}</Label>
            <Label title="확인 교사">{teacher_name + " 선생님"}</Label>
            <Image
              source={require("@/assets/Out.png")}
              style={styles.imageElement}
            />
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
  },
  detailContainer: {
    gap: 40,
    paddingVertical: 40,
  },
  imageElement: {
    width: "100%",
    height: 68,
  },
});
