import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { HiddenView } from "@layouts";
import { hitSlop } from "@/constants";
import { getColors } from "@/utils";
import { Text } from "@commonents";
import { Back } from "@icons";

interface PropTypes {
  children: React.ReactNode;
  name?: string;
  home?: boolean;
  isDone?: boolean;
  onDone?: () => void;
  noHorizontalPadding?: boolean;
}

const fontType = ["subTitle", 3, "M"];

export default function Layout({
  children,
  home,
  name,
  isDone,
  onDone,
  noHorizontalPadding,
}: PropTypes) {
  const navigation = useNavigation();

  const styleInline = {
    container: {
      flex: 1,
      backgroundColor: !!home ? getColors(["primary", 1000]) : "white",
      paddingVertical: !!!name && 25,
    },
    childrenElement: {
      flex: 1,
      paddingHorizontal: !noHorizontalPadding && 25,
    },
  };

  return (
    <SafeAreaView style={styleInline.container}>
      <HiddenView data={name}>
        <View style={styles.headerContainer}>
          <Back
            style={styles.backElement}
            onPress={() => navigation.goBack()}
            hitSlop={hitSlop}
          />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backElement: {
    position: "absolute",
    left: 25,
  },
  doneElement: {
    position: "absolute",
    right: 25,
  },
});
