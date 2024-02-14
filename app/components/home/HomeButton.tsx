import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import Text from "../common/Text";

interface PropType {
  icon: React.ReactElement;
  name: string;
  nav: any;
}

export default function HomeButton({ icon, name, nav }: PropType) {
  return (
    <View style={{ gap: 10, alignItems: "center" }}>
      <TouchableOpacity
        style={{ padding: 15, backgroundColor: "white", borderRadius: 20 }}
        onPress={() => nav.navigate(name)}
      >
        {icon}
      </TouchableOpacity>
      <Text type="body" size={3}>
        {name}
      </Text>
    </View>
  );
}
