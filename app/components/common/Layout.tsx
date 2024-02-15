import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getColors } from "@/utils/colors";
import { StyleSheet, View } from "react-native";
import { Back } from "@/assets/icons";
import Text from "./Text";

interface PropTypes {
  children: React.ReactNode;
  home?: boolean;
  name?: string;
  doneAction?: () => void;
  noHorizontalPadding?: boolean;
}

const hitSlop = { top: 10, left: 10, right: 10, bottom: 10 };

export default function Layout({
  children,
  home,
  name,
  doneAction,
  noHorizontalPadding,
}: PropTypes) {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: home ? getColors(["primary", 1000]) : "white",
        paddingVertical: !name && 25,
      }}
    >
      {name && (
        <View style={styles.headerContainer}>
          <Back
            style={styles.backElement}
            onPress={() => navigation.goBack()}
            hitSlop={hitSlop}
          />
          <Text type="subTitle" size={3} weight="M">
            {name}
          </Text>
          {doneAction && (
            <View style={styles.doneElement}>
              <Text type="subTitle" size={3} weight="M" onPress={() => {}}>
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
  container: {
    flex: 1,
  },
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
