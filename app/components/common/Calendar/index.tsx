import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { hitSlop } from "@/constants";
import { getToday } from "@/utils";
import { Text } from "@commonents";
import { Box } from "@layouts";
import { Arrow } from "@icons";
import Weeks from "./Weeks";

interface PropType {
  picks?: number[];
  onMove?: ({}: any) => void;
  onSelect?: ({}: any) => void;
}

const { year, month, date: _date } = getToday();

export default function Calendar({ picks, onMove, onSelect }: PropType) {
  const [date, setDate] = useState([year, month]);
  const [selected, setSelected] = useState(undefined);
  const [calYear, calMonth] = date;

  useEffect(() => {
    !!onMove && onMove({ year: calYear, month: calMonth });
  }, [date]); // move함수 사용할 떄 prop에 date 값이 수정 전으로 들어가서 임시로 이렇게 해 둠

  const handleMove = (to: boolean) => {
    if (to) {
      const isOver = calMonth + 1 > 12;
      setDate((prev) => (isOver ? [prev[0] + 1, 1] : [prev[0], prev[1] + 1]));
    } else {
      const isUnder = calMonth - 1 < 1;
      setDate((prev) => (isUnder ? [prev[0] - 1, 12] : [prev[0], prev[1] - 1]));
    }
  };

  return (
    <Box color={["primary", 1200]}>
      <View style={{ gap: 10 }}>
        <View style={styles.headerContainer}>
          <Arrow onPress={() => handleMove(false)} hitSlop={hitSlop} />
          <Text type={["subTitle", 3, "M"]}>
            {date[0]}년 {date[1].toString().padStart(2, "0")}월
          </Text>
          <Arrow
            onPress={() => handleMove(true)}
            style={{ transform: [{ rotate: "180deg" }] }}
            hitSlop={hitSlop}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Weeks
            date={date}
            picks={picks}
            onSelect={onSelect}
            selected={selected}
            setSelected={setSelected}
          />
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
