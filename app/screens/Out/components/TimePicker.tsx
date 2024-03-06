import { View } from "react-native";
import Modal from "../../../components/common/Modal";
import ScrollPicker from "../../../components/common/ScrollPicker";
import Text from "../../../components/common/Text";
import { useState } from "react";

interface PropType {
  visible: [boolean, string];
  setVisible: (visible: any) => void;
  onDone: (time: any, type: string) => void;
}

export default function TimePicker({ visible, setVisible, onDone }: PropType) {
  const [time, setTime] = useState({ hour: 0, minute: 0 });
  const { hour, minute } = time;

  const handleScroll = (item: number, id: string) => {
    setTime({ ...time, [id]: item.toString().padStart(2, "0") });
  };

  return (
    <Modal
      type={0}
      visible={visible[0]}
      onAccept={() => onDone(`${hour}:${minute}`, visible[1])}
      setVisible={(res) => setVisible([res, ""])}
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
          onScroll={handleScroll}
          id="hour"
        />
        <Text type={["heading", 5]}>:</Text>
        <ScrollPicker
          items={Array.from(new Array(59).keys()).map((i) => i + 1)}
          onScroll={handleScroll}
          id="minute"
        />
      </View>
    </Modal>
  );
}
