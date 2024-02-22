import { View } from "react-native";
import { useState } from "react";
import Layout from "@/components/common/Layout";
import Text from "@/components/common/Text";
import Box from "@/components/common/Box";
import TimePicker from "@/components/out/TimePicker";
import Label from "@/components/out/Label";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";

// 얘는 무조건 코드 리팩해야 함
// 진짜 안하면 나중에 손해봄
const types = {
  외출: {
    title: "외출",
    firstLabel: "외출",
    secondLabel: "외출",
  },
  조기귀가: {
    title: "조기 귀가",
    firstLabel: "귀가",
    secondLabel: "조기 귀가",
  },
};

export const Out = ({ route }) => {
  const { type: _type } = route.params;
  const { title, firstLabel, secondLabel } = types[_type];
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("start");
  const [out, setOut] = useState({
    start: undefined,
    end: undefined,
    reason: "",
  });
  const [sucVisible, setSucVisible] = useState(false);

  const handleDone = (item: any, type: string) => {
    setOut({ ...out, [type]: item });
  };

  const handleVisible = (type: string) => {
    setVisible(true);
    setType(type);
  };

  return (
    <Layout
      name={title + " 신청"}
      onDone={() => setSucVisible(true)}
      isDone={
        (title === "외출" ? out.start && out.end : out.start) &&
        out.reason !== ""
      }
    >
      <View style={{ gap: 40 }}>
        <Label title={`희망 ${firstLabel} 시간을 적어주세요`}>
          {title === "외출" ? (
            <>
              <Box
                width="43%"
                color={["neutral", 900]}
                onPress={() => handleVisible("start")}
              >
                <Text type={["caption", 2]}>
                  {!!out.start
                    ? Object.values(out.start).join(" : ")
                    : "출발 시간"}
                </Text>
              </Box>
              <Text type={["subTitle", 1, "M"]}>~</Text>
              <Box
                width="43%"
                color={["neutral", 900]}
                onPress={() => handleVisible("end")}
              >
                <Text type={["caption", 2]}>
                  {!!out.end ? Object.values(out.end).join(" : ") : "도착 시간"}
                </Text>
              </Box>
            </>
          ) : (
            <>
              <Box
                width="100%"
                color={["neutral", 900]}
                onPress={() => handleVisible("start")}
              >
                <Text type={["caption", 2]}>
                  {!!out.start
                    ? Object.values(out.start).join(" : ")
                    : "출발 시간"}
                </Text>
              </Box>
            </>
          )}
        </Label>
        <Label title={`${secondLabel} 사유를 적어주세요`}>
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
        visible={visible}
        setVisible={setVisible}
        onDone={handleDone}
        type={type}
      />
      <Modal
        visible={sucVisible}
        setVisible={setSucVisible}
        type={3}
        onAccept={() => {}}
      >
        <Text type={["subTitle", 3, "M"]}>{title} 신청이 완료 되었습니다</Text>
      </Modal>
    </Layout>
  );
};
