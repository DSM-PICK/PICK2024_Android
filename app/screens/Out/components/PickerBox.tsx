import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  setVisible: () => void;
  time: string;
  placeholder: string;
  full?: boolean;
}

export default function PickerBox({
  setVisible,
  time,
  placeholder,
  full,
}: PropType) {
  return (
    <Box
      width={full ? "100%" : "43%"}
      color={["neutral", 900]}
      onPress={setVisible}
    >
      <Text type={["caption", 2]}>
        {!!time ? time.replace(":", " : ") : placeholder}
      </Text>
    </Box>
  );
}
