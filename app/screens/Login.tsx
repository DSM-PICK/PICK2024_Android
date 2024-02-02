import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Layout from "@/components/common/Layout";
import Text from "@/components/common/Text";
import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export const Login = () => {
  const [data, setData] = useState({
    accountID: "",
    password: "",
  });

  const handleChange = ({ text, name }) => {
    setData({ ...data, [name]: text });
  };

  return (
    <Layout>
      <View style={styles.inputContainer}>
        <Text type="heading" size={3} color={["primary", 300]}>
          PiCK
        </Text>
        <Text type="body" size={2} color={["neutral", 400]}>
          스퀘어 계정으로 로그인해주세요.
        </Text>
        <Input
          value={data.accountID}
          onChange={handleChange}
          name="accountID"
          placeholder="아이디"
        />
        <Input
          value={data.accountID}
          onChange={handleChange}
          name="accountID"
          placeholder="아이디"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => {}} disabled>
          로그인
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 5,
    gap: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
