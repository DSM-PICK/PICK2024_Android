import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import Carousel from "@/components/common/Carousel";
import { moreTimeTableData } from "@/tmpData";
import { getToday } from "@/utils/getToday";
import Text from "../../common/Text";
import Subject from "./Subject";

const { month, date, day } = getToday();
const today = `${month}월 ${date}일 (${day})`;

export const TimeTables = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text type="subTitle" size={3} weight="M">
          {today}
        </Text>
      </View>

      <Carousel height="100%">
        {moreTimeTableData.map((item, index) => {
          return (
            <FlatList
              initialNumToRender={1}
              key={index}
              style={styles.listContainer}
              data={item}
              keyExtractor={(item) => item.index.toString()}
              renderItem={({ item }) => (
                <Subject
                  index={item.index}
                  name={item.name}
                  duration={item.duration}
                  icon={item.icon}
                />
              )}
            />
          );
        })}
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
  listContainer: {
    height: "100%",
  },
  dateContainer: {
    paddingHorizontal: 25,
  },
});
