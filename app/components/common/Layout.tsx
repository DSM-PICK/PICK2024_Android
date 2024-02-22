import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getColors } from "@/utils/colors";
import { StyleSheet, View } from "react-native";
import { Back } from "@/assets/icons";
import Text from "./Text";

interface PropTypes {
  children: React.ReactNode;
  name?: string;
  home?: boolean;
  isDone?: boolean;
  onDone?: () => void;
  noHorizontalPadding?: boolean;
}

const hitSlop = { top: 10, left: 10, right: 10, bottom: 10 };
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: !!home ? getColors(["primary", 1000]) : "white",
        paddingVertical: !!!name && 25,
      }}
    >
      {!!name && (
        <View style={styles.headerContainer}>
          <Back
            style={styles.backElement}
            onPress={() => navigation.goBack()}
            hitSlop={hitSlop}
          />
          <Text type={fontType}>{name}</Text>
          {!!onDone && (
            <View style={styles.doneElement}>
              <Text
                type={fontType}
                color={isDone ? ["neutral", 50] : ["neutral", 500]}
                onPress={isDone && onDone}
              >
                확인
              </Text>
            </View>
          )}
        </View>
      )}
      <View style={{ flex: 1, paddingHorizontal: !noHorizontalPadding && 25 }}>
        {children}
      </View>
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
