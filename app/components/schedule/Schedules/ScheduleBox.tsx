import { StyleSheet, View } from "react-native";
import { getColors } from "@/utils/colors";
import { days } from "@/utils/getToday";
import Text from "../../common/Text";
import Box from "../../common/Box";

type ItemType = {
  date: number;
  content: string;
};

interface PropType {
  item: ItemType;
  date: number[];
}

export const ScheduleBox = ({ item, date }: PropType) => {
  const _date = new Date(`${date[0]}-${date[1]}-${item.date}`);

  return (
    <View style={{ width: "100%" }}>
      <Box color={["primary", 1200]}>
        <View style={styles.container}>
          <View style={styles.dateContainer}>
            <View style={styles.lineElement} />
            <Text type="subTitle" size={2} weight="M">
              {item.date}
            </Text>
            <Text type="body" size={3}>
              {days[_date.getDay()]}요일
            </Text>
          </View>
          <Text type="subTitle" size={2} weight="M">
            {item.content}
          </Text>
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: -6,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  lineElement: {
    width: 4,
    height: 50,
    borderRadius: 100,
    backgroundColor: getColors(["secondary", 500]),
  },
});