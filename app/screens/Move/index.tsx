import { useMutation } from "@tanstack/react-query";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { ClassButton, FloorButton } from "./components";
import { Modal, Text } from "@commonents";
import { floorData } from "./floorData";
import { useToast } from "@/utils";
import { Layout } from "@layouts";
import { moveClass } from "@/api";

const floors = Array.from(new Array(5).keys()).map((i) => i + 1);

export const Move = ({ navigation }) => {
  const toast = useToast();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({
    floor: 1,
    classroom_name: undefined,
  });

  const { classroom_name: className } = selected;

  const { mutate: moveMutate } = useMutation({
    mutationFn: () => moveClass(selected),
    onSuccess: () => {
      setVisible(true);
    },
    onError: () => toast.error("오류가 발생했습니다"),
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
    <Layout name="교실 이동" onDone={moveMutate} isDone={!!className}>
      <View style={{ gap: 10 }}>
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
      <Modal
        type={3}
        visible={visible}
        setVisible={setVisible}
        onAccept={() => {
          navigation.reset({ routes: [{ name: "홈" as never }] });
        }}
      >
        <Text type={["subTitle", 3, "M"]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {className || ""}
          </Text>{" "}
          이동 신청이 완료되었습니다
        </Text>
      </Modal>
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
