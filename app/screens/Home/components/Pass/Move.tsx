import { useMutation, useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { Button, Text } from "@commonents";
import { queryKeys } from "@/constants";
import { returnClass } from "@/api";

interface PropType {
  name: string;
  data: string;
}

export default function Move({ name, data }: PropType) {
  const queryClient = useQueryClient();

  const { mutate: returnFn } = useMutation({
    mutationFn: returnClass,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.anyApply }),
  });

  return (
    <>
      <View>
        <Text type={["caption", 2]} color={["neutral", 400]}>
          {name}님은 현재
        </Text>
        <Text type={["caption", 1]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {data}
          </Text>
          에 있습니다
        </Text>
      </View>

      <View style={{ width: "25%" }}>
        <Button
          size="full"
          fontType={["button", "ES"]}
          onPress={() => returnFn()}
          color={["secondary", 500]}
        >
          돌아가기
        </Button>
      </View>
    </>
  );
}
