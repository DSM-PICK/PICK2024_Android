import { View } from "react-native";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

interface PropType {
  name: string;
  place: string;
}

export default function Move({ name, place }: PropType) {
  return (
    <>
      <View>
        <Text type={["caption", 2]} color={["neutral", 400]}>
          {name}님은 현재
        </Text>
        <Text type={["caption", 1]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {place}
          </Text>
          에 있습니다
        </Text>
      </View>

      <View style={{ width: "25%" }}>
        <Button
          size="full"
          fontType={["button", "ES"]}
          onPress={() => {}}
          color={["secondary", 500]}
        >
          돌아가기
        </Button>
      </View>
    </>
  );
}
