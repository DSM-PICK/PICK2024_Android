import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

interface PropType {
  name: string;
  date: string;
}

const path = ["외출증", { type: "out" }];

export default function Out({ name, date }: PropType) {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text type={["caption", 2]} color={["neutral", 400]}>
          {name}님의 외출 시간은
        </Text>
        <Text type={["caption", 1]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {date}
          </Text>
          입니다
        </Text>
      </View>

      <View style={{ width: "30%" }}>
        <Button
          size="full"
          fontType={["button", "ES"]}
          onPress={() => navigation.navigate(...(path as never))}
          color={["secondary", 500]}
        >
          외출증 보기
        </Button>
      </View>
    </>
  );
}
