import { Modal as ModalView, StyleSheet, View } from "react-native";
import Button from "./Button";
import React from "react";
import Box from "./Box";

interface PropType {
  type: number;
  visible: boolean;
  onAccept: () => void;
  children: React.ReactElement;
  setVisible: (visible: any) => void;
}

const textSet = [
  { cancel: "취소", accept: "확인" },
  { cancel: "취소", accept: "신청" },
  { cancel: "아니요", accept: "예" },
  { cancel: undefined, accept: "확인" },
];

export default function Modal({
  type,
  visible,
  onAccept,
  children,
  setVisible,
}: PropType) {
  const { cancel, accept } = textSet[type];

  const handleAccept = () => {
    setVisible(false);
    onAccept();
  };

  return (
    <ModalView
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={() => {
        setVisible(false);
      }}
    >
      <View style={styles.container}>
        <Box rounded="lg">
          <View style={styles.contentContainer}>
            <View style={{ paddingVertical: 10 }}>{children}</View>
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

              <View
                style={[styles.buttonElement, !!!cancel && { width: "100%" }]}
              >
                <Button
                  onPress={handleAccept}
                  size="full"
                  color={["primary", 600]}
                >
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonElement: {
    width: "48.5%",
  },
});
