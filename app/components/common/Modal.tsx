import { Modal as ModalView, StyleSheet, View } from "react-native";
import { Box, HiddenView } from "@layouts";
import { perfectSize as p } from "@/utils";
import { Button } from "@commonents";
import { PropType } from "ModalType";

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
  onCancel,
  children,
  setVisible,
}: PropType) {
  const { cancel, accept } = textSet[type];

  const handleAccept = () => {
    setVisible(false);
    setTimeout(() => {
      onAccept();
    }, 200);
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
            <View style={{ paddingVertical: p(10) }}>{children}</View>
            <View style={styles.buttonContainer}>
              <HiddenView data={cancel}>
                <View style={styles.buttonElement}>
                  <Button
                    onPress={() => {
                      setVisible(false);
                      !!onCancel && onCancel();
                    }}
                    size="full"
                    color={["neutral", 700]}
                    fontColor={["neutral", 300]}
                  >
                    {cancel}
                  </Button>
                </View>
              </HiddenView>
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
    padding: p(20),
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  contentContainer: {
    alignItems: "center",
    gap: p(10),
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
