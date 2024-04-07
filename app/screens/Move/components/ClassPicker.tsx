import { View } from "react-native";
import { useState } from "react";
import { Modal, ScrollPicker, Text } from "@commonents";
import { useToast } from "@/utils";

interface PropType {
  visible: boolean;
  setVisible: (visible: any) => void;
  onDone: (time: any) => void;
}

export default function ClassPicker({ visible, setVisible, onDone }: PropType) {
  const [time, setTime] = useState({
    start_period: 1,
    end_period: 1,
  });
  const toast = useToast();

  const handleScroll = (item: string, id: string) => {
    setTime({ ...time, [id]: parseInt(item.replace("교시", "")) });
  };

  const handleAccept = () => {
    console.log(time.end_period - time.start_period);
    if (time.end_period - time.start_period < 0) {
      toast.error("올바른 교시를 선택해주세요");
    } else {
      onDone(time);
    }
  };

  return (
    <Modal
      type={0}
      visible={visible}
      onAccept={handleAccept}
      setVisible={setVisible}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
          width: "100%",
        }}
      >
        <ScrollPicker
          items={Array.from(new Array(10).keys()).map((i) => `${i + 1}교시`)}
          onScroll={handleScroll}
          id="start_period"
        />
        <Text type={["heading", 5]}>~</Text>
        <ScrollPicker
          items={Array.from(new Array(10).keys()).map((i) => `${i + 1}교시`)}
          onScroll={handleScroll}
          id="end_period"
        />
      </View>
    </Modal>
  );
}
