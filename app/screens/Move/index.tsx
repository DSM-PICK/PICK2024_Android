import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { ClassButton, ClassPicker, FloorButton } from "./components";
import { floorData } from "./floorData";
import { post, useToast } from "@/utils";
import { Layout } from "@layouts";
import { path, queryKeys } from "@/constants";

const floors = Array.from(new Array(5).keys()).map((i) => i + 1);

export const Move = ({ navigation }) => {
  const toast = useToast();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({
    floor: 1,
    classroom_name: undefined,
  });
  const queryClient = useQueryClient();

  const { classroom_name: className } = selected;

  const { mutate: moveMutate } = useMutation({
    mutationFn: (item: any) => post(`${path.classRoom}/move`, item),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.anyApply });
      await navigation.reset({ routes: [{ name: "홈" as never }] });
      toast.success(`${className} 이동이 신청됬습니다`);
    },
    onError: ({ status }: any) =>
      toast.error(
        status === 409 ? "이미 신청되었습니다" : "오류가 발생했습니다"
      ),
  });

  const Renderor = ({ item }) => (
    <ClassButton
      width={width}
      selected={selected}
      setSelected={setSelected}
      item={item}
    />
  );

  return (
    <Layout
      name="교실 이동"
      onDone={() => setVisible(true)}
      isDone={!!className}
    >
      <View style={{ gap: 20 }}>
        <View style={styles.floorButtonContainer}>
          {floors.map((item) => (
            <FloorButton
              key={item}
              selected={selected}
              setSelected={setSelected}
              item={item}
            />
          ))}
        </View>
        <View>
          <FlatList
            onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
            contentContainerStyle={styles.classButtonContainer}
            columnWrapperStyle={styles.classButtonContainer}
            data={floorData[selected.floor - 1]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={Renderor}
            numColumns={3}
          />
        </View>
      </View>
      <ClassPicker
        visible={visible}
        setVisible={setVisible}
        onDone={(item: any) => moveMutate({ ...selected, ...item })}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  floorButtonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  classButtonContainer: {
    gap: 10,
  },
});
