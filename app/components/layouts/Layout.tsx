import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import { getColors, perfectSize as p } from "@/utils";
import { PropType } from "LayoutType";
import { HiddenView } from "@layouts";
import { hitSlop } from "@/constants";
import { Text } from "@commonents";
import { Back } from "@icons";

const fontType = ["subTitle", 3, "M"];

export default function Layout({
  children,
  name,
  home,
  isDone,
  onDone,
  noHorizontalPadding,
}: PropType) {
  const navigation = useNavigation();

  const styleInline = {
    container: {
      flex: 1,
      backgroundColor: !!home ? getColors(["primary", 1000]) : "white",
      paddingVertical: !!!name && p(25),
    },
    childrenElement: {
      flex: 1,
      paddingHorizontal: !noHorizontalPadding && p(20),
    },
  };

  return (
    <SafeAreaView style={styleInline.container}>
      <TouchableWithoutFeedback
        style={{ width: "100%", height: "100%" }}
        onPress={Keyboard.dismiss}
      >
        <HiddenView data={name}>
          <View style={styles.headerContainer}>
            <Pressable
              style={styles.backElement}
              onPress={() => navigation.goBack()}
              hitSlop={hitSlop}
            >
              <Back />
            </Pressable>

            <Text type={fontType}>{name}</Text>
            <HiddenView data={onDone}>
              <View style={styles.doneElement}>
                <Text
                  type={fontType}
                  color={isDone ? ["neutral", 50] : ["neutral", 500]}
                  onPress={isDone && onDone}
                >
                  확인
                </Text>
              </View>
            </HiddenView>
          </View>
        </HiddenView>
        <View style={styleInline.childrenElement}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: p(25),
    paddingVertical: p(10),
    marginVertical: p(10),
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backElement: {
    position: "absolute",
    left: p(25),
  },
  doneElement: {
    position: "absolute",
    right: p(25),
  },
});
