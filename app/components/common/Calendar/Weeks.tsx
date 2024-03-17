import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { getColors, getDates, getToday, perfectSize } from "@/utils";
import { days } from "@/constants";
import { Text } from "@commonents";
interface PropType {
  date: number[];
  setSelected: ([]) => void;
  picks: number[] | undefined;
  selected: number[] | undefined;
  onSelect: (({}) => void) | undefined;
}

const { year, month, date: _date } = getToday();

export default function Weeks({
  date,
  setSelected,
  picks,
  selected,
  onSelect,
}: PropType) {
  const [calYear, calMonth] = date;
  const [selYear, selMonth, selDate] = selected || [0, 0, 0];

  const { startDay, endDate } = getDates(date); // 첫 날의 요일과 마지막 날의 날짜 가져오기
  const isToday = calYear === year && calMonth === month;
  const isSelected = selected && calYear === selYear && calMonth === selMonth;
  const arr = new Array(startDay) // 캘린더 날짜 배열 생성 (시작 요일 이전 날짜는 공백)
    .fill("")
    .concat(Array.from(new Array(endDate).keys()));
  let _weeks = [];
  let _days = [];

  const handleSelect = (_date: number, day: number) => {
    setSelected([calYear, calMonth, _date]);
    onSelect({ year: calYear, month: calMonth, date: _date, day: days[day] });
  };

  arr.map((item, index) => {
    _days.push(
      <TouchableWithoutFeedback
        key={index}
        style={[
          styles.dayContainer,
          picks?.includes(item + 1) && styles.pickContainer,
          isToday && _date === item + 1 && styles.todayContainer,
          isSelected && item + 1 === selDate && styles.pickContainer,
        ]}
        onPress={() => {
          !!onSelect && item !== "" && handleSelect(item + 1, _days.length);
        }}
      >
        <Text
          type={["button", "S"]}
          color={
            isToday && _date === item + 1 ? ["neutral", 1000] : ["neutral", 50]
          }
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

  return <View style={{ gap: 2 }}>{_weeks.map((item) => item)}</View>;
}

const styles = StyleSheet.create({
  dayContainer: {
    width: perfectSize(40),
    height: perfectSize(40),
    justifyContent: "center",
    alignItems: "center",
  },
  weekLineContainer: {
    flexDirection: "row",
    gap: perfectSize(2),
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
