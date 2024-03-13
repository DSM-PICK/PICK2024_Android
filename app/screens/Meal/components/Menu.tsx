import { StyleSheet, View } from "react-native";
import { Text } from "@commonents";
import { Box } from "@layouts";

interface PropType {
  menu: any[];
}

const timeSet = { breakfast: "조식", lunch: "중식", dinner: "석식" };

export default function Menu({ menu }: PropType) {
  let [time, _menu] = menu;
  _menu = _menu.filter((item: string) => item !== "");

  return (
    <Box color={["primary", 1000]}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text type={["subTitle", 2, "B"]} color={["primary", 200]}>
            {timeSet[time]}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          {_menu.length !== 0 ? (
            _menu
              .filter((item: string) => item !== "")
              .map((item: string, index: number) => (
                <Text key={index} type={["body", 1]}>
                  {item}
                </Text>
              ))
          ) : (
            <Text type={["body", 1]}>급식이 없습니다</Text>
          )}
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "45%",
  },
  menuContainer: {
    width: "55%",
    gap: 10,
  },
});
