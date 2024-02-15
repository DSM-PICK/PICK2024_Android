import Box from "@/components/common/Box";
import Text from "@/components/common/Text";
import { View } from "react-native";

interface PropType {
  time: string;
  menu: any[]; // 여기 수정해야 함
}

const timeSet = {
  breakFast: "조식",
  lunch: "중식",
  dinner: "석식",
};

export default function Menu({ time, menu }: PropType) {
  return (
    <Box color={["primary", 1000]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Text type="subTitle" size={2} weight="B" color={["primary", 200]}>
            {timeSet[time]}
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            gap: 10,
          }}
        >
          {menu.map((item, index) => (
            <Text key={index} type="body" size={1} color={["neutral", 50]}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </Box>
  );
}
