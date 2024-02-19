import { StyleSheet, View } from "react-native";
import Text from "@/components/common/Text";
import Box from "@/components/common/Box";

interface PropType {
  time: string;
  menu: any[];
}

const timeSet = {
  breakFast: "조식",
  lunch: "중식",
  dinner: "석식",
};

export default function Menu({ time, menu }: PropType) {
  return (
    <Box color={["primary", 1000]}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text type={["subTitle", 2, "B"]} color={["primary", 200]}>
            {timeSet[time]}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          {menu.map((item, index) => (
            <Text key={index} type={["body", 1]}>
              {item}
            </Text>
          ))}
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
