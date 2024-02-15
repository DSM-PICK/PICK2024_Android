import { View, StyleSheet } from "react-native";
import Text from "../../common/Text";
import { getToday } from "@/utils/getToday";
import Box from "../../common/Box";
import Menu from "./Menu";
import { mealData } from "@/tmpData";
import { FlatList } from "react-native-gesture-handler";

export default function Meal() {
  return (
    <Box height="100%">
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text type="label" size={1} color={["neutral", 50]}>
            급식
          </Text>
          <Text type="body" size={2} color={["neutral", 300]}>
            {getToday()}
          </Text>
        </View>
        <View>
          <FlatList
            overScrollMode="never"
            contentContainerStyle={{
              gap: 10,
            }}
            data={mealData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Menu time={item.time} menu={item.menu} />
            )}
          />
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingBottom: 30,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
