import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { getToday } from "@/utils/getToday";
import { Text } from "@commonents";
import { Box } from "@/components/layouts";
import { Arrow } from "@/assets/icons";
import { hitSlop } from "@/constants";
import Weeks from "./Weeks";

interface PropType {
  picks?: number[];
  onMove?: ({}) => void;
  onSelect?: ({}) => void;
}

const { year, month, date: _date } = getToday();

export default function Calendar({ picks, onMove, onSelect }: PropType) {
  const [date, setDate] = useState([year, month]);
  const [selected, setSelected] = useState(undefined);
  const [calYear, calMonth] = date;

  const handleMove = (to: boolean) => {
    if (to) {
      const isOver = calMonth + 1 > 12;
      setDate((prev) => (isOver ? [prev[0] + 1, 1] : [prev[0], prev[1] + 1]));
    } else {
      const isUnder = calMonth - 1 < 1;
      setDate((prev) => (isUnder ? [prev[0] - 1, 12] : [prev[0], prev[1] - 1]));
    }
    !!onMove && onMove({ year: calYear, month: calMonth });
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
