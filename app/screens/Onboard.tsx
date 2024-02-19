import { View, StyleSheet, Image } from "react-native";
import Carousel from "@/components/common/Carousel";
import Layout from "@/components/common/Layout";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";

const boards = [
  {
    text: "편리한 학교 생활을편리한 학교 생활을ㅍ편리한 학교 생활을",
    imgSrc: require("@assets/boards/b1.png"),
  },
  {
    text: "편리한 학교 생활을편리한 학교 생활을ㅍ편리한 학교 생활을",
    imgSrc: require("@assets/boards/b2.png"),
  },
  {
    text: "편리한 학교 생활을편리한 학교 생활을ㅍ편리한 학교 생활을",
    imgSrc: require("@assets/boards/b3.png"),
  },
];

export const Onboard = ({ navigation }) => {
  return (
    <Layout noHorizontalPadding>
      <View style={styles.inputContainer}>
        <View style={{ paddingHorizontal: 25 }}>
          <Text type={["heading", 3]} color={["primary", 300]}>
            PiCK
          </Text>
        </View>

        <Carousel height="auto">
          {boards.map((item, index) => {
            return (
              <View key={index} style={styles.carouselContainer}>
                <View style={styles.carouselContainer}>
                  <Text type={["body", 2]}>{item.text}</Text>
                </View>

                <Image source={item.imgSrc} />
              </View>
            );
          })}
        </Carousel>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          size="full"
          color={["primary", 400]}
          onPress={() => {
            navigation.navigate("로그인");
          }}
        >
          로그인
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 5,
    gap: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  carouselContainer: {
    padding: 10,
    alignItems: "center",
  },
  carouselTextContainer: {
    alignSelf: "flex-start",
    width: "70%",
  },
});
