import { useMutation, useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { useState } from "react";
import { Label, TimePicker, PickerBox } from "./components";
import { Text, Input, Modal } from "@commonents";
import { Layout, HiddenView } from "@layouts";
import { applyOut, applyReturn } from "@/api";
import { queryKeys } from "@/constants";
import { AxiosError } from "axios";
import { useToast } from "@/utils";

const types = {
  외출: {
    title: "외출",
    label: "외출",
  },
  조기귀가: {
    title: "조기 귀가",
    label: "귀가",
  },
};

export const Out = ({ navigation, route }) => {
  const queryClient = useQueryClient();
  const { type } = route.params;
  const [sucVisible, setSucVisible] = useState(false);
  const [out, setOut] = useState({
    start_time: undefined,
    end_time: undefined,
    reason: "",
  });
  const [pickVisible, setPickVisible] = useState<[boolean, string]>([
    false,
    "",
  ]);
  const { start_time: start, end_time: end } = out;
  const { title, label } = types[type];
  const toast = useToast();

  const isOut = (value: any[]) => (title === "외출" ? value[0] : value[1]);

  const { mutate: outMutate } = useMutation({
    mutationFn: () => {
      return isOut([applyOut(out), applyReturn(out)]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.anyApply });
      setSucVisible(true);
    },
    onError: (err: AxiosError) => {
      if (err.response?.status === 409) {
        toast.error("이미 신청되었습니다");
      } else {
        toast.error("오류가 발생했습니다.");
      }
    },
  });

  const handleChange = (item: any, type: string) => {
    setOut({ ...out, [type]: item });
  };

  return (
    <Layout
      name={title + " 신청"}
      onDone={outMutate}
      isDone={isOut([start && end, start]) && out.reason !== ""}
    >
      <View style={{ gap: 40 }}>
        <Label title={`희망 ${label} 시간을 적어주세요`}>
          <HiddenView data={title === "외출"}>
            <PickerBox
              setVisible={() => setPickVisible([true, "start_time"])}
              time={out.start_time}
              placeholder="출발 시간"
            />
            <Text type={["subTitle", 1, "M"]}>~</Text>
            <PickerBox
              setVisible={() => setPickVisible([true, "end_time"])}
              time={end}
              placeholder="도착 시간"
            />
          </HiddenView>
          <HiddenView data={title !== "외출"}>
            <PickerBox
              full
              setVisible={() => setPickVisible([true, "start_time"])}
              time={start}
              placeholder="출발 시간"
            />
          </HiddenView>
        </Label>
        <Label title={`${label} 사유를 적어주세요`}>
          <Input
            multiLine={4}
            onChange={({ text }) => {
              setOut({ ...out, reason: text });
            }}
            value={out.reason}
            placeholder="내용을 입력해주세요"
          />
        </Label>
      </View>
      <TimePicker
        visible={pickVisible}
        setVisible={setPickVisible}
        onDone={handleChange}
      />
      <Modal
        visible={sucVisible}
        setVisible={setSucVisible}
        type={3}
        onAccept={() => {
          navigation.reset({ routes: [{ name: "홈" as never }] });
        }}
      >
        <Text type={["subTitle", 3, "M"]}>{title} 신청이 완료 되었습니다</Text>
      </Modal>
    </Layout>
  );
};
