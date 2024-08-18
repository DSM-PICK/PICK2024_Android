import { StyleSheet, View } from "react-native";
import { Box, HiddenView } from "@layouts";
import { Text } from "@commonents";

interface PropType {
  menu: [string, { menu: string[]; cal: string }];
}

const timeSet = { breakfast: "조식", lunch: "중식", dinner: "석식" };

export default function MenuItem({ menu }: PropType) {
  let [time, _menu] = menu;
  _menu.menu = _menu.menu.filter((item: string) => item !== "");

  return (
    <Box color={["primary", 1000]}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text type={["subTitle", 2, "B"]} color={["primary", 200]}>
            {timeSet[time]}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <HiddenView data={_menu.menu.length !== 0}>
            {_menu.menu.map((item: string, index: number) => (
              <Text key={index} type={["body", 2]}>
                {item}
              </Text>
            ))}
          </HiddenView>
          <HiddenView data={_menu.menu.length === 0}>
            <Text type={["body", 1]}>급식이 없습니다</Text>
          </HiddenView>
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
    width: "50%",
  },
  menuContainer: {
    width: "50%",
    gap: 10,
  },
});
