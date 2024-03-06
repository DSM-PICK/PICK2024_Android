import { View, StyleSheet, Image } from "react-native";
import { Layout, Carousel } from "@layouts";
import { Button, Text } from "@commonents";

const boards = [
  {
    text: "학교 생활을 한 곳에서, PiCK",
    imgSrc: require("@/assets/boards/b1.png"),
  },
  {
    text: "학교 생활을 한 곳에서, PiCK",
    imgSrc: require("@/assets/boards/b2.png"),
  },
  {
    text: "학교 생활을 한 곳에서, PiCK",
    imgSrc: require("@/assets/boards/b3.png"),
  },
];

export const Onboard = ({ navigation }) => {
  return (
    <Layout noHorizontalPadding>
      <View style={styles.inputContainer}>
        <View style={{ paddingHorizontal: 25 }}>
          <Image
            source={require("@/assets/Logo.png")}
            style={{ width: 150, height: 50 }}
          />
        </View>

        <Carousel height="auto">
          {boards.map((item, index) => {
            return (
              <View key={index} style={styles.carouselContainer}>
                <View style={styles.carouselTextContainer}>
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
    width: "100%",
  },
});
