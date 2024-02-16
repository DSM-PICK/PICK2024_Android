import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { getToday } from "@/utils/getToday";
import { Arrow } from "@/assets/icons";
import Weeks from "./Weeks";
import Text from "../Text";
import Box from "../Box";

// 캘린더는 나중에 한번 싹 갈아엎어야 함
// 로직을 잘못 만들어서 수정하기 어렵게 꼬여버렸어

interface PropType {
  onPress?: ({}) => void;
  picks?: number[];
}

const { year, month } = getToday();
const hitSlop = { top: 10, left: 10, right: 10, bottom: 10 };

export default function Calendar({ onPress, picks }: PropType) {
  const [date, setDate] = useState([year, month]);
  const [selected, setSelected] = useState(undefined);

  const handleDate = (to: boolean) => {
    if (to) {
      const isOver = date[1] + 1 > 12;
      setDate(isOver ? [date[0] + 1, 1] : [date[0], date[1] + 1]);
    } else {
      const isUnder = date[1] - 1 < 1;
      setDate(isUnder ? [date[0] - 1, 12] : [date[0], date[1] - 1]);
    }
  };

  return (
    <Box color={["primary", 1200]}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Arrow onPress={() => handleDate(false)} hitSlop={hitSlop} />
          <Text type="subTitle" size={3} weight="M">
            {date[0]}년 {date[1].toString().padStart(2, "0")}월
          </Text>
          <Arrow
            onPress={() => handleDate(true)}
            style={styles.rotationContainer}
            hitSlop={hitSlop}
          />
        </View>
        <View style={styles.weeksContainer}>
          <Weeks
            date={date}
            picks={picks}
            onPress={onPress}
            selected={selected}
            setSelected={setSelected}
          />
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  rotationContainer: {
    transform: [{ rotate: "180deg" }],
  },
  weeksContainer: {
    alignItems: "center",
  },
});
