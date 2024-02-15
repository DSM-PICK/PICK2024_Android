import { Modal as ModalView, StyleSheet, View } from "react-native";
import Button from "./Button";
import React from "react";
import Box from "./Box";

interface PropType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  type: number;
  children: React.ReactElement;
  onAccept: () => void;
}

const textSet = [
  { cancel: "취소", accept: "확인" },
  { cancel: "취소", accept: "신청" },
  { cancel: "아니요", accept: "예" },
  { cancel: undefined, accept: "확인" },
];

export default function Modal({
  visible,
  setVisible,
  type,
  children,
  onAccept,
}: PropType) {
  const { cancel, accept } = textSet[type + 1];
  return (
    <ModalView
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
      animationType="fade"
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <Box rounded="lg">
          <View style={styles.contentContainer}>
            <View style={styles.childrenContainer}>{children}</View>
            <View style={styles.buttonContainer}>
              {!!cancel && (
                <View style={styles.buttonElement}>
                  <Button
                    onPress={() => setVisible(false)}
                    size="full"
                    color={["neutral", 700]}
                    fontColor={["neutral", 300]}
                  >
                    {cancel}
                  </Button>
                </View>
              )}

              <View style={styles.buttonElement}>
                <Button onPress={onAccept} size="full" color={["primary", 600]}>
                  {accept}
                </Button>
              </View>
            </View>
          </View>
        </Box>
      </View>
    </ModalView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  contentContainer: {
    alignItems: "center",
    gap: 10,
  },
  childrenContainer: {
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonElement: {
    width: "48.5%",
  },
});
