import { StyleSheet } from "react-native";
import { View } from "react-native";
import { useState } from "react";
import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { getEmpty } from "@/utils/getEmpty";

export const Login = () => {
  const [data, setData] = useState({
    accountID: "",
    password: "",
  });
  const [error, setError] = useState({
    accountID: false,
    password: false,
  });
  const disabled = getEmpty(data.accountID) || getEmpty(data.password);

  const handleChange = ({ text, name }) => {
    setData({ ...data, [name]: text });
  };

  return (
    <Layout>
      <View style={styles.inputContainer}>
        <Text type={["heading", 3]} color={["primary", 300]}>
          PiCK
        </Text>
        <Text type={["body", 2]} color={["neutral", 400]}>
          스퀘어 계정으로 로그인해주세요.
        </Text>
        <View style={styles.innerInputContainer}>
          <Input
            value={data.accountID}
            onChange={handleChange}
            name="accountID"
            placeholder="아이디"
            error={error.accountID}
          />
          <Text
            type={["caption", 2]}
            color={["error", 400]}
            hidden={!error.accountID}
          >
            아이디를 다시 확인해 주세요
          </Text>
        </View>

        <View style={styles.innerInputContainer}>
          <Input
            value={data.password}
            onChange={handleChange}
            name="password"
            placeholder="비밀번호"
            error={error.password}
            password
          />
          <Text
            type={["caption", 2]}
            color={["error", 400]}
            hidden={!error.password}
          >
            비밀번호를 다시 확인해 주세요
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          size="full"
          color={["primary", 400]}
          onPress={() => {}}
          disabled={disabled}
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
  innerInputContainer: {
    gap: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
