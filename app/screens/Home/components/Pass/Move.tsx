import { useMutation, useQueryClient } from "@tanstack/react-query";
import { View } from "react-native";
import { path, queryKeys } from "@/constants";
import { Button, Text } from "@commonents";
import { deleet } from "@/utils";

interface PropType {
  locate: string;
  data: [string, string];
}

export default function Move({ locate, data }: PropType) {
  const queryClient = useQueryClient();

  const { mutate: returnFn } = useMutation({
    mutationFn: () => deleet(`${path.classRoom}/return`),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.anyApply }),
  });

  return (
    <>
      <View>
        <Text type={["caption", 2]} color={["neutral", 400]}>
          <Text type={["caption", 2]} color={["primary", 400]}>
            {data[0]}교시 ~ {data[1]}교시
          </Text>{" "}
          동안
        </Text>
        <Text type={["caption", 1]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {locate}
          </Text>
          에 있습니다.
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
