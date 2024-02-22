import Layout from "@/components/common/Layout";
import { View } from "react-native";
import { floorData } from "@/tmpData";
import { useState } from "react";
import Button from "@/components/common/Button";
import { FlatList } from "react-native-gesture-handler";
import Modal from "@/components/common/Modal";
import Text from "@/components/common/Text";

const floors = Array.from(new Array(floorData.length).keys());
export const Move = () => {
  const [floor, setFloor] = useState(0);
  const [selected, setSelected] = useState(undefined);
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <Layout
      name="교실 이동"
      onDone={() => setVisible(true)}
      isDone={!!selected}
    >
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {floors.map((i) => (
            <Button
              key={i}
              size="auto"
              onPress={() => setFloor(i)}
              fontColor={i === floor ? ["neutral", 1100] : ["neutral", 50]}
              fontType={["body", 2]}
              color={i === floor ? ["primary", 500] : ["primary", 1200]}
            >
              {i + 1}층
            </Button>
          ))}
        </View>
        <View>
          <FlatList
            onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
            contentContainerStyle={{
              flexDirection: "row",
              gap: 15,
              flexWrap: "wrap",
            }}
            data={floorData[floor]}
            renderItem={({ item }) => (
              <Button
                size="custom"
                customSize={(width - 30) / 3}
                onPress={() => setSelected(item)}
                fontColor={
                  selected === item ? ["neutral", 1100] : ["neutral", 50]
                }
                fontType={["body", 2]}
                color={selected === item ? ["primary", 500] : ["primary", 1200]}
              >
                {item.name}
              </Button>
            )}
          />
        </View>
      </View>
      <Modal
        type={3}
        visible={visible}
        setVisible={setVisible}
        onAccept={() => {}}
      >
        <Text type={["subTitle", 3, "M"]}>
          <Text type={["subTitle", 3, "M"]} color={["primary", 400]}>
            {!!selected && selected.name}
          </Text>{" "}
          이동 신청이 완료되었습니다
        </Text>
      </Modal>
    </Layout>
  );
};
