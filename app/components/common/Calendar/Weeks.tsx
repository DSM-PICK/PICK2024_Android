import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { getDates } from "@/utils/getDates";
import { getToday } from "@/utils/getToday";
import { getColors } from "@/utils/colors";
import Text from "../Text";

// 캘린더는 나중에 한번 싹 갈아엎어야 함
// 로직을 잘못 만들어서 수정하기 어렵게 꼬여버렸어

interface PropType {
  date: number[];
  picks: number[] | undefined;
  onPress: (({}) => void) | undefined;
  selected: number[] | undefined;
  setSelected: ([]) => void;
}

const { year, month, date: _date } = getToday();

export default function Weeks({
  date,
  picks,
  selected,
  setSelected,
  onPress,
}: PropType) {
  const { startDay, endDate } = getDates(date);
  const isTodate = date[0] === year && date[1] === month;
  const isSelected =
    selected && date[0] === selected[0] && date[1] === selected[1];
  const arr = new Array(startDay)
    .fill("")
    .concat(Array.from(new Array(endDate).keys()));
  let _weeks = [];
  let _days = [];

  const handlePress = (item: number) => {
    setSelected([date[0], date[1], item]);
    onPress({ year: date[0], month: date[1], date: item });
  };

  arr.map((item, index) => {
    _days.push(
      <TouchableWithoutFeedback
        key={index}
        style={[
          styles.dayContainer,
          isTodate && _date === item + 1 && styles.todayContainer,
          picks && picks.includes(item + 1) && styles.pickContainer,
          isSelected && item + 1 === selected[2] && styles.pickContainer,
        ]}
        onPress={() => {
          onPress && item !== "" && handlePress(item + 1);
        }}
      >
        <Text
          type="button"
          size="S"
          color={["neutral", isTodate && _date === item + 1 ? 1000 : 50]}
        >
          {item !== "" ? item + 1 : ""}
        </Text>
      </TouchableWithoutFeedback>
    );
    if (_days.length > 6 || index === arr.length - 1) {
      _weeks.push(
        <View key={index} style={styles.weekLineContainer}>
          {_days.map((i) => i)}
        </View>
      );
      _days = [];
    }
  });

  return (
    <View style={styles.weeksContainer}>{_weeks.map((item) => item)}</View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  weekLineContainer: {
    flexDirection: "row",
    gap: 2,
  },
  weeksContainer: {
    gap: 2,
  },
  pickContainer: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: getColors(["secondary", 400]),
  },
  todayContainer: {
    borderRadius: 100,
    backgroundColor: getColors(["primary", 500]),
  },
});
