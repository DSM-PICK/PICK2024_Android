import { View } from "react-native";
import Text from "@/components/common/Text";

interface PropType {
  title: string;
  children: React.ReactElement;
}

export default function Label({ title, children }: PropType) {
  return (
    <View style={{ width: "100%", gap: 6 }}>
      <Text type={["body", 1]}>{title}</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
}
