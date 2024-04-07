import { useMutation, useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { useState } from "react";
import { Label, TimePicker, PickerBox } from "./components";
import { Layout, TernaryView } from "@layouts";
import { Text, Input } from "@commonents";
import { post, useToast } from "@/utils";
import { queryKeys } from "@/constants";

export const Out = ({ navigation, route }) => {
  const queryClient = useQueryClient();
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
  const { type } = route.params;
  const toast = useToast();

  const isOut = (item1: any, item2: any) => (type === "외출" ? item1 : item2);

  const { mutate: outMutate } = useMutation({
    mutationFn: () => post(isOut("/application", "/early-return/create"), out),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.anyApply });
      await navigation.reset({ routes: [{ name: "홈" as never }] });
      toast.success(`${type} 신청이 완료되었습니다.`);
    },
    onError: ({ status }: any) =>
      toast.error(
        status === "409" ? "이미 신청되었습니다" : "오류가 발생했습니다"
      ),
  });

  const handleChange = (item: any, type: string) => {
    setOut({ ...out, [type]: item });
  };

  return (
    <Layout
      name={type + " 신청"}
      onDone={outMutate}
      isDone={isOut(start && end, start) && out.reason !== ""}
    >
      <View style={{ gap: 40 }}>
        <Label title={`희망하는 ${type} 시간을 적어주세요`}>
          <TernaryView
            data={type === "외출"}
            onTrue={
              <>
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
              </>
            }
            onFalse={
              <PickerBox
                full
                setVisible={() => setPickVisible([true, "start_time"])}
                time={start}
                placeholder="출발 시간"
              />
            }
          />
        </Label>
        <Label title={`${type} 사유를 적어주세요`}>
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
    </Layout>
  );
};
