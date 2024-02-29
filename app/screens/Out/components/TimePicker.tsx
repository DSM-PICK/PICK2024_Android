import { View } from "react-native";
import Modal from "../../../components/common/Modal";
import ScrollPicker from "../../../components/common/ScrollPicker";
import Text from "../../../components/common/Text";
import { useState } from "react";

interface PropType {
  visible: boolean;
  setVisible: (visible: any) => void;
  onDone: (time: any, type: string) => void;
  type: string;
}

export default function TimePicker({
  visible,
  setVisible,
  onDone,
  type,
}: PropType) {
  const [time, setTime] = useState({ hour: 0, minute: 0 });

  const handleScroll = (item: number, id: string) => {
    setTime({ ...time, [id]: item.toString().padStart(2, "0") });
  };

  return (
    <Modal
      type={0}
      visible={visible}
      onAccept={() => onDone(time, type)}
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
          items={Array.from(new Array(24).keys())}
          interval={40}
          onScroll={handleScroll}
          id="hour"
        />
        <Text type={["heading", 5]}>:</Text>
        <ScrollPicker
          items={Array.from(new Array(59).keys()).map((i) => i + 1)}
          interval={40}
          onScroll={handleScroll}
          id="minute"
        />
      </View>
    </Modal>
  );
}
